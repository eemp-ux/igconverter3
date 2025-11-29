import React from 'react';
import { Thermometer, Gauge, Calculator } from 'lucide-react';

export const ReferenceConditions: React.FC = () => {
  return (
    <div className="glass rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-white mb-6">Reference Conditions & Conversion Formulas</h2>
      
      {/* Reference Conditions */}
      <div className="glass-card rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4">Standard Reference Conditions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 glass rounded-lg">
                <Thermometer className="w-6 h-6 text-blue-300" />
              </div>
              <div className="text-white font-semibold">Normal Conditions (Nm³)</div>
            </div>
            <div className="space-y-2 text-white/80">
              <div className="flex justify-between">
                <span>Temperature:</span>
                <span className="font-semibold">0°C (273.15 K)</span>
              </div>
              <div className="flex justify-between">
                <span>Pressure:</span>
                <span className="font-semibold">1 atm (101.325 kPa)</span>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 glass rounded-lg">
                <Gauge className="w-6 h-6 text-green-300" />
              </div>
              <div className="text-white font-semibold">Standard Conditions (Sm³)</div>
            </div>
            <div className="space-y-2 text-white/80">
              <div className="flex justify-between">
                <span>Temperature:</span>
                <span className="font-semibold">15°C (288.15 K)</span>
              </div>
              <div className="flex justify-between">
                <span>Pressure:</span>
                <span className="font-semibold">1 atm (101.325 kPa)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Formulas */}
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="w-6 h-6 text-purple-300" />
          <h3 className="text-xl font-semibold text-white">Conversion Formulas</h3>
        </div>

        <div className="space-y-6">
          {/* Volume to Mass */}
          <div className="glass rounded-lg p-5">
            <div className="text-white font-semibold mb-3 text-lg">Volume to Mass Conversion</div>
            <div className="bg-white/10 rounded-lg p-4 mb-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  m = V × ρ
                </div>
                <div className="text-white/70 text-sm">
                  Mass (kg) = Volume (m³) × Density (kg/m³)
                </div>
              </div>
            </div>
            <div className="text-white/80 text-sm">
              <div className="mb-2"><strong>Where:</strong></div>
              <div className="space-y-1 ml-4">
                <div>• m = mass in kilograms (kg)</div>
                <div>• V = volume in cubic meters (m³)</div>
                <div>• ρ = gas density at reference conditions (kg/m³)</div>
              </div>
            </div>
          </div>

          {/* Mass to Volume */}
          <div className="glass rounded-lg p-5">
            <div className="text-white font-semibold mb-3 text-lg">Mass to Volume Conversion</div>
            <div className="bg-white/10 rounded-lg p-4 mb-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  V = m / ρ
                </div>
                <div className="text-white/70 text-sm">
                  Volume (m³) = Mass (kg) / Density (kg/m³)
                </div>
              </div>
            </div>
            <div className="text-white/80 text-sm">
              <div className="mb-2"><strong>Where:</strong></div>
              <div className="space-y-1 ml-4">
                <div>• V = volume in cubic meters (m³)</div>
                <div>• m = mass in kilograms (kg)</div>
                <div>• ρ = gas density at reference conditions (kg/m³)</div>
              </div>
            </div>
          </div>

          {/* Temperature/Pressure Correction */}
          <div className="glass rounded-lg p-5">
            <div className="text-white font-semibold mb-3 text-lg">Temperature & Pressure Correction</div>
            <div className="bg-white/10 rounded-lg p-4 mb-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  V₂ = V₁ × (P₁/P₂) × (T₂/T₁)
                </div>
                <div className="text-white/70 text-sm">
                  Combined Gas Law
                </div>
              </div>
            </div>
            <div className="text-white/80 text-sm">
              <div className="mb-2"><strong>Where:</strong></div>
              <div className="space-y-1 ml-4">
                <div>• V₁ = initial volume (m³)</div>
                <div>• V₂ = final volume (m³)</div>
                <div>• P₁ = initial pressure (atm)</div>
                <div>• P₂ = final pressure (atm)</div>
                <div>• T₁ = initial temperature (K)</div>
                <div>• T₂ = final temperature (K)</div>
              </div>
              <div className="mt-3 p-3 bg-white/5 rounded-lg">
                <div className="text-yellow-300 font-semibold mb-1">⚠️ Important:</div>
                <div>Temperature must be in Kelvin (K = °C + 273.15)</div>
              </div>
            </div>
          </div>

          {/* Molar Volume */}
          <div className="glass rounded-lg p-5">
            <div className="text-white font-semibold mb-3 text-lg">Molar Volume (Ideal Gas)</div>
            <div className="bg-white/10 rounded-lg p-4 mb-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  V = n × 22.414
                </div>
                <div className="text-white/70 text-sm">
                  At 0°C and 1 atm (Normal Conditions)
                </div>
              </div>
            </div>
            <div className="text-white/80 text-sm">
              <div className="mb-2"><strong>Where:</strong></div>
              <div className="space-y-1 ml-4">
                <div>• V = volume in liters (L)</div>
                <div>• n = number of moles (mol)</div>
                <div>• 22.414 L/mol = molar volume at STP</div>
              </div>
              <div className="mt-3 p-3 bg-white/5 rounded-lg">
                <div className="text-blue-300 font-semibold mb-1">💡 Note:</div>
                <div>1 mole of any ideal gas occupies 22.414 L at 0°C and 1 atm</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="glass-card rounded-xl p-6 mt-6">
        <h3 className="text-xl font-semibold text-white mb-4">Common Conversions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass rounded-lg p-4">
            <div className="text-white/60 text-sm mb-2">Nm³ to Sm³</div>
            <div className="text-white font-mono">
              Sm³ = Nm³ × (273.15 / 288.15)
            </div>
          </div>
          <div className="glass rounded-lg p-4">
            <div className="text-white/60 text-sm mb-2">Sm³ to Nm³</div>
            <div className="text-white font-mono">
              Nm³ = Sm³ × (288.15 / 273.15)
            </div>
          </div>
          <div className="glass rounded-lg p-4">
            <div className="text-white/60 text-sm mb-2">m³ to Liters</div>
            <div className="text-white font-mono">
              L = m³ × 1000
            </div>
          </div>
          <div className="glass rounded-lg p-4">
            <div className="text-white/60 text-sm mb-2">Liters to m³</div>
            <div className="text-white font-mono">
              m³ = L / 1000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
