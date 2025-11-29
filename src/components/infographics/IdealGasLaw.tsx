import React, { useState } from 'react';
import { Thermometer, Gauge, Beaker, Scale, ChevronDown, ChevronUp } from 'lucide-react';

export const IdealGasLaw: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass rounded-xl p-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between mb-3 hover:bg-white/5 rounded-lg p-2 -m-2 transition-all"
      >
        <h3 className="text-white font-semibold text-base">Understanding the Ideal Gas Law</h3>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-white/70" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white/70" />
        )}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mb-4">
          <div className="glass-card rounded-lg p-4 mb-3">
            <div className="text-center">
              <p className="text-white/60 text-xs mb-1">The Fundamental Equation</p>
              <div className="text-4xl font-bold text-white mb-2">
                PV = nRT
              </div>
              <p className="text-white/80 text-sm">
                Relates pressure, volume, amount, and temperature of an ideal gas
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="glass-card rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 glass rounded-lg">
                  <Gauge className="w-5 h-5 text-blue-300" />
                </div>
                <div className="text-2xl font-bold text-white">P</div>
              </div>
              <h3 className="text-white font-semibold mb-1 text-sm">Pressure</h3>
              <p className="text-white/70 text-xs mb-1">
                Force per unit area exerted by gas molecules
              </p>
              <div className="text-white/50 text-xs">
                Units: Pa, atm, bar, psi
              </div>
            </div>

            <div className="glass-card rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 glass rounded-lg">
                  <Beaker className="w-5 h-5 text-green-300" />
                </div>
                <div className="text-2xl font-bold text-white">V</div>
              </div>
              <h3 className="text-white font-semibold mb-1 text-sm">Volume</h3>
              <p className="text-white/70 text-xs mb-1">
                Space occupied by the gas
              </p>
              <div className="text-white/50 text-xs">
                Units: m³, L, ft³
              </div>
            </div>

            <div className="glass-card rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 glass rounded-lg">
                  <Scale className="w-5 h-5 text-purple-300" />
                </div>
                <div className="text-2xl font-bold text-white">n</div>
              </div>
              <h3 className="text-white font-semibold mb-1 text-sm">Amount</h3>
              <p className="text-white/70 text-xs mb-1">
                Number of moles of gas
              </p>
              <div className="text-white/50 text-xs">
                Units: mol
              </div>
            </div>

            <div className="glass-card rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 glass rounded-lg">
                  <Thermometer className="w-5 h-5 text-red-300" />
                </div>
                <div className="text-2xl font-bold text-white">T</div>
              </div>
              <h3 className="text-white font-semibold mb-1 text-sm">Temperature</h3>
              <p className="text-white/70 text-xs mb-1">
                Average kinetic energy of molecules
              </p>
              <div className="text-white/50 text-xs">
                Units: K (Kelvin)
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-lg p-3 mb-3">
          <h3 className="text-base font-semibold text-white mb-2">Gas Constant (R)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="glass rounded-lg p-3">
              <div className="text-white/60 text-xs mb-1">Universal Gas Constant</div>
              <div className="text-xl font-bold text-white">8.314 J/(mol·K)</div>
            </div>
            <div className="glass rounded-lg p-3">
              <div className="text-white/60 text-xs mb-1">Alternative Value</div>
              <div className="text-xl font-bold text-white">0.08206 L·atm/(mol·K)</div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-lg p-3">
          <h3 className="text-base font-semibold text-white mb-2">Key Relationships</h3>
          <div className="space-y-2">
            <div className="glass rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-white font-medium text-sm">Boyle's Law</span>
                <span className="text-white/60 text-xs">(constant T, n)</span>
              </div>
              <div className="text-lg text-white">P₁V₁ = P₂V₂</div>
              <p className="text-white/70 text-xs mt-1">
                Pressure and volume are inversely proportional
              </p>
            </div>

            <div className="glass rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-white font-medium text-sm">Charles's Law</span>
                <span className="text-white/60 text-xs">(constant P, n)</span>
              </div>
              <div className="text-lg text-white">V₁/T₁ = V₂/T₂</div>
              <p className="text-white/70 text-xs mt-1">
                Volume and temperature are directly proportional
              </p>
            </div>

            <div className="glass rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-white font-medium text-sm">Avogadro's Law</span>
                <span className="text-white/60 text-xs">(constant P, T)</span>
              </div>
              <div className="text-lg text-white">V₁/n₁ = V₂/n₂</div>
              <p className="text-white/70 text-xs mt-1">
                Volume and amount are directly proportional
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
