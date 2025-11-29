import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';

interface GasVolume {
  name: string;
  symbol: string;
  volumeAt0C: number; // L/mol at 0°C, 1 atm
  volumeAt25C: number; // L/mol at 25°C, 1 atm
  color: string;
}

const gases: GasVolume[] = [
  { name: 'Nitrogen', symbol: 'N₂', volumeAt0C: 22.414, volumeAt25C: 24.465, color: 'bg-blue-500' },
  { name: 'Oxygen', symbol: 'O₂', volumeAt0C: 22.414, volumeAt25C: 24.465, color: 'bg-red-500' },
  { name: 'Argon', symbol: 'Ar', volumeAt0C: 22.414, volumeAt25C: 24.465, color: 'bg-purple-500' },
  { name: 'Carbon Dioxide', symbol: 'CO₂', volumeAt0C: 22.414, volumeAt25C: 24.465, color: 'bg-green-500' },
  { name: 'Helium', symbol: 'He', volumeAt0C: 22.414, volumeAt25C: 24.465, color: 'bg-yellow-500' },
  { name: 'Hydrogen', symbol: 'H₂', volumeAt0C: 22.414, volumeAt25C: 24.465, color: 'bg-pink-500' },
];

export const VolumeComparison: React.FC = () => {
  const [temperature, setTemperature] = useState<'0C' | '25C'>('0C');

  const getVolume = (gas: GasVolume) => {
    return temperature === '0C' ? gas.volumeAt0C : gas.volumeAt25C;
  };

  const maxVolume = Math.max(...gases.map(g => getVolume(g)));

  return (
    <div className="glass rounded-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Molar Volume Comparison</h2>
          <p className="text-white/70">
            Volume occupied by 1 mole of different gases at standard pressure (1 atm)
          </p>
        </div>
        <Maximize2 className="w-8 h-8 text-white/60" />
      </div>

      <div className="glass-card rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">Temperature Selection</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setTemperature('0C')}
              className={`px-4 py-2 rounded-lg transition-all ${
                temperature === '0C'
                  ? 'bg-white/30 text-white'
                  : 'glass text-white/70 hover:bg-white/10'
              }`}
            >
              0°C (273.15 K)
            </button>
            <button
              onClick={() => setTemperature('25C')}
              className={`px-4 py-2 rounded-lg transition-all ${
                temperature === '25C'
                  ? 'bg-white/30 text-white'
                  : 'glass text-white/70 hover:bg-white/10'
              }`}
            >
              25°C (298.15 K)
            </button>
          </div>
        </div>

        <div className="glass rounded-lg p-4 mb-4">
          <div className="text-white/60 text-sm mb-2">Key Insight</div>
          <p className="text-white">
            At the same temperature and pressure, <strong>one mole of any ideal gas occupies the same volume</strong>, 
            regardless of the gas type. This is Avogadro's Law in action!
          </p>
        </div>

        <div className="glass rounded-lg p-4">
          <div className="text-white/60 text-sm mb-2">Standard Molar Volume</div>
          <div className="text-3xl font-bold text-white">
            {temperature === '0C' ? '22.414' : '24.465'} L/mol
          </div>
          <div className="text-white/70 text-sm mt-1">
            at {temperature === '0C' ? '0°C (273.15 K)' : '25°C (298.15 K)'} and 1 atm
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {gases.map((gas) => {
          const volume = getVolume(gas);
          const percentage = (volume / maxVolume) * 100;

          return (
            <div key={gas.symbol} className="glass-card rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded ${gas.color}`} />
                  <div>
                    <div className="text-white font-semibold">{gas.name}</div>
                    <div className="text-white/60 text-sm">{gas.symbol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">
                    {volume.toFixed(3)} L
                  </div>
                  <div className="text-white/60 text-sm">per mole</div>
                </div>
              </div>
              <div className="glass rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full ${gas.color} transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="glass-card rounded-xl p-6 mt-6">
        <h3 className="text-xl font-semibold text-white mb-4">Why Are They All The Same?</h3>
        <div className="space-y-3 text-white/80">
          <p>
            <strong className="text-white">1. Ideal Gas Assumption:</strong> At standard conditions, most gases behave nearly ideally, 
            meaning molecular size and intermolecular forces are negligible.
          </p>
          <p>
            <strong className="text-white">2. Avogadro's Principle:</strong> Equal volumes of gases at the same temperature 
            and pressure contain equal numbers of molecules (6.022 × 10²³ molecules per mole).
          </p>
          <p>
            <strong className="text-white">3. Temperature Effect:</strong> Notice how volume increases from 22.414 L at 0°C 
            to 24.465 L at 25°C - this demonstrates Charles's Law (V ∝ T).
          </p>
          <p className="text-white/60 text-sm mt-4">
            <strong>Note:</strong> Real gases deviate slightly from ideal behavior, especially at high pressures 
            or low temperatures. The values shown are for ideal gas calculations.
          </p>
        </div>
      </div>
    </div>
  );
};
