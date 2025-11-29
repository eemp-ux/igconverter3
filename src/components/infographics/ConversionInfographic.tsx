import React, { useState } from 'react';
import { Calculator, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export const ConversionInfographic: React.FC = () => {
  const [isFormulasOpen, setIsFormulasOpen] = useState(false);
  const [isExampleOpen, setIsExampleOpen] = useState(false);

  return (
    <div className="glass rounded-xl p-4">
      {/* Conversion Formulas */}
      <div className="glass-card rounded-lg mb-4 overflow-hidden">
        <button
          onClick={() => setIsFormulasOpen(!isFormulasOpen)}
          className="w-full p-3 flex items-center justify-between hover:bg-white/5 transition-all"
        >
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-purple-300" />
            <h3 className="text-lg font-semibold text-white">Conversion Formulas</h3>
          </div>
          {isFormulasOpen ? (
            <ChevronUp className="w-5 h-5 text-white/70" />
          ) : (
            <ChevronDown className="w-5 h-5 text-white/70" />
          )}
        </button>

        <div
          className={`transition-all duration-300 ease-in-out ${
            isFormulasOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-3 pb-3">
            <div className="space-y-3">
              {/* Formula 1: Volume at different conditions */}
              <div className="glass rounded-lg p-3">
                <div className="text-white/80 text-xs mb-2">Converting volume between different temperature and pressure conditions:</div>
                <div className="bg-white/10 rounded-lg p-3 mb-2">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      V₂ = V₁ × (P₁/P₂) × (T₂/T₁)
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80 text-xs">
                  <div>
                    <div className="font-semibold mb-1">Where:</div>
                    <div className="space-y-0.5 ml-3">
                      <div>• V₁ = Initial volume</div>
                      <div>• V₂ = Final volume</div>
                      <div>• P₁ = Initial pressure</div>
                      <div>• P₂ = Final pressure</div>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">&nbsp;</div>
                    <div className="space-y-0.5 ml-3">
                      <div>• T₁ = Initial temperature (K)</div>
                      <div>• T₂ = Final temperature (K)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formula 2: Nm³ to Sm³ */}
              <div className="glass rounded-lg p-3">
                <div className="text-white/80 text-xs mb-2">Converting from Nm³ to Sm³:</div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      Sm³ = Nm³ × (T_Sm³/T_Nm³)
                    </div>
                    <div className="text-xl font-semibold text-white/90 mt-2">
                      Sm³ = Nm³ × (288.15/273.15)
                    </div>
                    <div className="text-lg font-semibold text-white/80 mt-2">
                      Sm³ = Nm³ × 1.0549
                    </div>
                  </div>
                </div>
              </div>

              {/* Formula 3: Volume to Mass */}
              <div className="glass rounded-lg p-3">
                <div className="text-white/80 text-xs mb-2">Converting volume to mass:</div>
                <div className="bg-white/10 rounded-lg p-3 mb-2">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      m = V × ρ
                    </div>
                  </div>
                </div>
                <div className="text-white/80 text-xs">
                  <div className="font-semibold mb-1">Where:</div>
                  <div className="space-y-0.5 ml-3">
                    <div>• m = mass (kg)</div>
                    <div>• V = volume (m³)</div>
                    <div>• ρ = density at reference conditions (kg/m³)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Worked Example */}
      <div className="glass-card rounded-lg overflow-hidden">
        <button
          onClick={() => setIsExampleOpen(!isExampleOpen)}
          className="w-full p-3 flex items-center justify-between hover:bg-white/5 transition-all"
        >
          <div className="flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-green-300" />
            <h3 className="text-lg font-semibold text-white">
              Worked Example: Converting 100 Nm³ of Nitrogen to Sm³
            </h3>
          </div>
          {isExampleOpen ? (
            <ChevronUp className="w-5 h-5 text-white/70" />
          ) : (
            <ChevronDown className="w-5 h-5 text-white/70" />
          )}
        </button>

        <div
          className={`transition-all duration-300 ease-in-out ${
            isExampleOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-3 pb-3">
            <div className="space-y-3">
              {/* Given Information */}
              <div className="glass rounded-lg p-3">
                <div className="text-white font-semibold mb-2 text-sm">Given:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80 text-xs">
                  <div>• Volume: 100 Nm³</div>
                  <div>• Gas: Nitrogen (N₂)</div>
                  <div>• T₁ (Nm³): 273.15 K (0°C)</div>
                  <div>• T₂ (Sm³): 288.15 K (15°C)</div>
                  <div>• P₁ = P₂: 1 atm</div>
                </div>
              </div>

              {/* Solution Steps */}
              <div className="glass rounded-lg p-3">
                <div className="text-white font-semibold mb-2 text-sm">Solution:</div>
                
                <div className="space-y-2">
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-white/70 text-xs mb-1">Step 1: Apply the conversion formula</div>
                    <div className="text-white text-base font-mono">
                      V₂ = V₁ × (P₁/P₂) × (T₂/T₁)
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-white/70 text-xs mb-1">Step 2: Since pressure is constant (P₁ = P₂ = 1 atm)</div>
                    <div className="text-white text-base font-mono">
                      V₂ = V₁ × (T₂/T₁)
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-white/70 text-xs mb-1">Step 3: Substitute values</div>
                    <div className="text-white text-base font-mono">
                      Sm³ = 100 × (288.15/273.15)
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-white/70 text-xs mb-1">Step 4: Calculate</div>
                    <div className="text-white text-base font-mono">
                      Sm³ = 100 × 1.0549
                    </div>
                  </div>

                  <div className="bg-green-500/20 border-2 border-green-400/50 rounded-lg p-3">
                    <div className="text-white/70 text-xs mb-1">Final Answer:</div>
                    <div className="text-white text-xl font-bold">
                      100 Nm³ = 105.49 Sm³
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Insight */}
              <div className="glass rounded-lg p-3 border-l-4 border-blue-400">
                <div className="text-blue-300 font-semibold mb-1 text-xs">💡 Key Insight:</div>
                <div className="text-white/80 text-xs">
                  When converting between Nm³ and Sm³ at the same pressure, the volume ratio equals the temperature ratio. 
                  Since Sm³ is measured at a higher temperature (15°C vs 0°C), the same amount of gas occupies more volume, 
                  resulting in a larger Sm³ value.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
