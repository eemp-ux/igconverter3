import React, { useState } from 'react';
import { Thermometer, Gauge, Maximize2 } from 'lucide-react';

interface GasState {
  temperature: number; // Celsius
  pressure: number; // atm
  volume: number; // relative units
}

export const GasBehaviorVisualization: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<'temp' | 'pressure' | 'both'>('temp');

  // Base state: 1 mole of gas at 0°C, 1 atm
  const baseState: GasState = {
    temperature: 0,
    pressure: 1,
    volume: 22.414, // L
  };

  // Calculate volume using ideal gas law: V = nRT/P
  const calculateVolume = (temp: number, pressure: number): number => {
    const R = 0.08206; // L·atm/(mol·K)
    const n = 1; // 1 mole
    const T = temp + 273.15; // Convert to Kelvin
    return (n * R * T) / pressure;
  };

  const scenarios = {
    temp: [
      { label: '0°C', temp: 0, pressure: 1, color: 'bg-blue-400' },
      { label: '25°C', temp: 25, pressure: 1, color: 'bg-yellow-400' },
      { label: '100°C', temp: 100, pressure: 1, color: 'bg-red-400' },
    ],
    pressure: [
      { label: '0.5 atm', temp: 25, pressure: 0.5, color: 'bg-green-300' },
      { label: '1 atm', temp: 25, pressure: 1, color: 'bg-green-500' },
      { label: '2 atm', temp: 25, pressure: 2, color: 'bg-green-700' },
    ],
    both: [
      { label: '0°C, 1 atm', temp: 0, pressure: 1, color: 'bg-blue-400' },
      { label: '25°C, 1 atm', temp: 25, pressure: 1, color: 'bg-purple-400' },
      { label: '25°C, 2 atm', temp: 25, pressure: 2, color: 'bg-purple-600' },
    ],
  };

  const currentScenarios = scenarios[selectedScenario];
  const maxVolume = Math.max(...currentScenarios.map(s => calculateVolume(s.temp, s.pressure)));

  return (
    <div className="glass rounded-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Gas Behavior Visualization</h2>
          <p className="text-white/70">
            How temperature and pressure affect gas volume (1 mole of ideal gas)
          </p>
        </div>
        <Maximize2 className="w-8 h-8 text-white/60" />
      </div>

      {/* Scenario Selection */}
      <div className="glass-card rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4">Select Scenario</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => setSelectedScenario('temp')}
            className={`p-4 rounded-lg transition-all ${
              selectedScenario === 'temp'
                ? 'bg-white/30 text-white'
                : 'glass text-white/70 hover:bg-white/10'
            }`}
          >
            <Thermometer className="w-6 h-6 mx-auto mb-2" />
            <div className="font-semibold">Temperature Effect</div>
            <div className="text-sm opacity-80">Constant Pressure</div>
          </button>
          <button
            onClick={() => setSelectedScenario('pressure')}
            className={`p-4 rounded-lg transition-all ${
              selectedScenario === 'pressure'
                ? 'bg-white/30 text-white'
                : 'glass text-white/70 hover:bg-white/10'
            }`}
          >
            <Gauge className="w-6 h-6 mx-auto mb-2" />
            <div className="font-semibold">Pressure Effect</div>
            <div className="text-sm opacity-80">Constant Temperature</div>
          </button>
          <button
            onClick={() => setSelectedScenario('both')}
            className={`p-4 rounded-lg transition-all ${
              selectedScenario === 'both'
                ? 'bg-white/30 text-white'
                : 'glass text-white/70 hover:bg-white/10'
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Thermometer className="w-5 h-5" />
              <Gauge className="w-5 h-5" />
            </div>
            <div className="font-semibold">Combined Effect</div>
            <div className="text-sm opacity-80">Both Variables</div>
          </button>
        </div>
      </div>

      {/* Visual Comparison */}
      <div className="glass-card rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-6">Volume Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentScenarios.map((scenario, index) => {
            const volume = calculateVolume(scenario.temp, scenario.pressure);
            const heightPercent = (volume / maxVolume) * 100;

            return (
              <div key={index} className="glass rounded-xl p-4">
                <div className="text-center mb-4">
                  <div className="text-white font-semibold text-lg mb-1">{scenario.label}</div>
                  <div className="text-white/60 text-sm">
                    {scenario.temp}°C ({(scenario.temp + 273.15).toFixed(0)} K), {scenario.pressure} atm
                  </div>
                </div>

                {/* Visual Container */}
                <div className="relative h-64 glass rounded-lg overflow-hidden mb-4">
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center p-4">
                    <div
                      className={`w-full ${scenario.color} rounded-t-lg transition-all duration-700 ease-out flex items-end justify-center pb-4`}
                      style={{ height: `${heightPercent}%` }}
                    >
                      <div className="text-white font-bold text-2xl drop-shadow-lg">
                        {volume.toFixed(2)} L
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-white/80">
                    <span>Temperature:</span>
                    <span className="font-semibold">{scenario.temp}°C</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Pressure:</span>
                    <span className="font-semibold">{scenario.pressure} atm</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Volume:</span>
                    <span className="font-bold">{volume.toFixed(2)} L</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Explanation */}
      <div className="glass-card rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Understanding the Relationships</h3>
        <div className="space-y-4">
          {selectedScenario === 'temp' && (
            <div className="glass rounded-lg p-4">
              <div className="text-white font-semibold mb-2">Charles's Law (V ∝ T)</div>
              <p className="text-white/80">
                At constant pressure, gas volume is directly proportional to absolute temperature. 
                When temperature increases, molecules move faster and occupy more space. 
                From 0°C to 100°C, volume increases by about {(((calculateVolume(100, 1) / calculateVolume(0, 1)) - 1) * 100).toFixed(1)}%.
              </p>
            </div>
          )}
          {selectedScenario === 'pressure' && (
            <div className="glass rounded-lg p-4">
              <div className="text-white font-semibold mb-2">Boyle's Law (V ∝ 1/P)</div>
              <p className="text-white/80">
                At constant temperature, gas volume is inversely proportional to pressure. 
                When pressure doubles, volume is cut in half. This is why compressed gas cylinders 
                can store large amounts of gas in small volumes.
              </p>
            </div>
          )}
          {selectedScenario === 'both' && (
            <div className="glass rounded-lg p-4">
              <div className="text-white font-semibold mb-2">Combined Gas Law (V ∝ T/P)</div>
              <p className="text-white/80">
                When both temperature and pressure change, volume depends on their combined effect. 
                Increasing temperature expands the gas, while increasing pressure compresses it. 
                The ideal gas law (PV = nRT) accounts for both factors simultaneously.
              </p>
            </div>
          )}
          
          <div className="glass rounded-lg p-4 bg-white/5">
            <div className="text-white font-semibold mb-2">💡 Practical Application</div>
            <p className="text-white/80 text-sm">
              These relationships are crucial for industrial gas handling. When filling cylinders, 
              temperature changes affect the final pressure. When transporting gases, ambient temperature 
              variations must be considered. Always account for both temperature and pressure when 
              calculating gas volumes in real-world applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
