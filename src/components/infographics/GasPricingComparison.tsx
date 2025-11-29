import React, { useState } from 'react';
import { DollarSign, ChevronDown, ChevronUp } from 'lucide-react';

export const GasPricingComparison: React.FC = () => {
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [isCalculationOpen, setIsCalculationOpen] = useState(false);

  return (
    <div className="glass rounded-2xl p-8">
      {/* Price Comparison */}
      <div className="glass-card rounded-xl mb-8 overflow-hidden">
        <button
          onClick={() => setIsComparisonOpen(!isComparisonOpen)}
          className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-all"
        >
          <div className="flex items-center gap-3">
            <DollarSign className="w-6 h-6 text-green-300" />
            <h3 className="text-xl font-semibold text-white">Price Comparison: Nm³ vs Sm³</h3>
          </div>
          {isComparisonOpen ? (
            <ChevronUp className="w-6 h-6 text-white/70" />
          ) : (
            <ChevronDown className="w-6 h-6 text-white/70" />
          )}
        </button>

        <div
          className={`transition-all duration-300 ease-in-out ${
            isComparisonOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-6 pb-6">
            <div className="space-y-6">
              {/* Key Concept */}
              <div className="glass rounded-lg p-6 border-l-4 border-yellow-400">
                <div className="text-yellow-300 font-semibold mb-3">⚠️ Important Concept:</div>
                <div className="text-white/90 space-y-2">
                  <p>
                    When comparing gas prices quoted in different reference conditions (Nm³ vs Sm³), 
                    you must convert to the same basis for accurate comparison.
                  </p>
                  <p className="text-white/70 text-sm mt-3">
                    The same physical amount of gas will have different volume measurements depending 
                    on the reference temperature used.
                  </p>
                </div>
              </div>

              {/* Side by Side Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Option A */}
                <div className="glass rounded-lg p-6 border-2 border-blue-400/50">
                  <div className="text-center mb-4">
                    <div className="text-blue-300 font-semibold text-lg mb-2">Option A</div>
                    <div className="text-4xl font-bold text-white mb-2">20 sen/Nm³</div>
                    <div className="text-white/60 text-sm">at 0°C, 1 atm</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 mt-4">
                    <div className="text-white/80 text-sm">
                      Price per normal cubic meter measured at standard reference conditions
                    </div>
                  </div>
                </div>

                {/* Option B */}
                <div className="glass rounded-lg p-6 border-2 border-purple-400/50">
                  <div className="text-center mb-4">
                    <div className="text-purple-300 font-semibold text-lg mb-2">Option B</div>
                    <div className="text-4xl font-bold text-white mb-2">20 sen/Sm³</div>
                    <div className="text-white/60 text-sm">at 15°C, 1 atm</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 mt-4">
                    <div className="text-white/80 text-sm">
                      Price per standard cubic meter measured at higher temperature
                    </div>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className="glass rounded-lg p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10">
                <div className="text-white font-semibold text-lg mb-2">❓ Which is cheaper?</div>
                <div className="text-white/80">
                  At first glance, both appear to cost 20 sen. However, they represent different 
                  physical amounts of gas due to the temperature difference.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculation Example */}
      <div className="glass-card rounded-xl overflow-hidden">
        <button
          onClick={() => setIsCalculationOpen(!isCalculationOpen)}
          className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-all"
        >
          <div className="flex items-center gap-3">
            <DollarSign className="w-6 h-6 text-green-300" />
            <h3 className="text-xl font-semibold text-white">
              Converting 20 sen/Sm³ to Nm³ Equivalent
            </h3>
          </div>
          {isCalculationOpen ? (
            <ChevronUp className="w-6 h-6 text-white/70" />
          ) : (
            <ChevronDown className="w-6 h-6 text-white/70" />
          )}
        </button>

        <div
          className={`transition-all duration-300 ease-in-out ${
            isCalculationOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-6 pb-6">
            <div className="space-y-6">
              {/* Given Information */}
              <div className="glass rounded-lg p-5">
                <div className="text-white font-semibold mb-3">Given:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/80">
                  <div>• Price: 20 sen/Sm³</div>
                  <div>• Need: Equivalent price in sen/Nm³</div>
                  <div>• T₁ (Nm³): 273.15 K (0°C)</div>
                  <div>• T₂ (Sm³): 288.15 K (15°C)</div>
                  <div>• Conversion factor: 1.0549</div>
                </div>
              </div>

              {/* Key Relationship */}
              <div className="glass rounded-lg p-5 border-l-4 border-blue-400">
                <div className="text-blue-300 font-semibold mb-3">🔑 Key Relationship:</div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">
                      1 Nm³ = 1.0549 Sm³
                    </div>
                    <div className="text-white/70 text-sm">
                      (Same amount of gas, different volume due to temperature)
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution Steps */}
              <div className="glass rounded-lg p-5">
                <div className="text-white font-semibold mb-4">Solution:</div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white/70 text-sm mb-2">Step 1: Understand the relationship</div>
                    <div className="text-white text-lg">
                      If 1 Sm³ costs 20 sen, then 1.0549 Sm³ costs more
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white/70 text-sm mb-2">Step 2: Calculate cost for 1 Nm³</div>
                    <div className="text-white text-lg font-mono mb-2">
                      Cost per Nm³ = 20 sen/Sm³ × 1.0549
                    </div>
                    <div className="text-white/60 text-sm">
                      (Since 1 Nm³ = 1.0549 Sm³, we need to pay for 1.0549 Sm³)
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white/70 text-sm mb-2">Step 3: Calculate</div>
                    <div className="text-white text-lg font-mono">
                      Cost per Nm³ = 20 × 1.0549 = 21.098 sen
                    </div>
                  </div>

                  <div className="bg-green-500/20 border-2 border-green-400/50 rounded-lg p-5">
                    <div className="text-white/70 text-sm mb-2">Final Answer:</div>
                    <div className="text-white text-2xl font-bold mb-3">
                      20 sen/Sm³ = 21.10 sen/Nm³
                    </div>
                    <div className="text-white/80 text-sm">
                      (Rounded to 2 decimal places)
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison Result */}
              <div className="glass rounded-lg p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10">
                <div className="text-white font-semibold text-lg mb-4">📊 Comparison Result:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-green-300 font-semibold mb-2">Option A</div>
                    <div className="text-3xl font-bold text-white">20.00 sen/Nm³</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-purple-300 font-semibold mb-2">Option B (converted)</div>
                    <div className="text-3xl font-bold text-white">21.10 sen/Nm³</div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-green-500/20 rounded-lg border border-green-400/30">
                  <div className="text-white font-semibold">
                    ✓ Option A (20 sen/Nm³) is cheaper by 1.10 sen per Nm³
                  </div>
                </div>
              </div>

              {/* Key Insight */}
              <div className="glass rounded-lg p-5 border-l-4 border-orange-400">
                <div className="text-orange-300 font-semibold mb-2">💡 Key Insight:</div>
                <div className="text-white/80 space-y-2">
                  <p>
                    When gas is priced per Sm³ (at higher temperature), you're paying for a larger 
                    volume that contains the same amount of gas molecules as a smaller Nm³ volume.
                  </p>
                  <p className="text-white/60 text-sm mt-3">
                    Always convert prices to the same reference condition before comparing. 
                    A lower price per Sm³ doesn't necessarily mean better value than a price per Nm³.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
