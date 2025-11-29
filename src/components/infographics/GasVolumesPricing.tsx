import React, { useState } from 'react';
import { DollarSign, Package, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

export const GasVolumesPricing: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass rounded-2xl p-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between mb-6 hover:bg-white/5 rounded-lg p-2 -m-2 transition-all"
      >
        <h3 className="text-white font-semibold text-xl">Understanding Gas Volumes & Pricing</h3>
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-white/70" />
        ) : (
          <ChevronDown className="w-6 h-6 text-white/70" />
        )}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Volume Relationships */}
        <div className="glass-card rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-6 h-6 text-blue-300" />
            <h3 className="text-xl font-semibold text-white">Volume Relationships</h3>
          </div>

          <div className="space-y-6">
            {/* Gas vs Liquid Volume */}
            <div className="glass rounded-lg p-5">
              <h4 className="text-white font-semibold mb-4">Gas vs. Liquid Volume</h4>
              <div className="bg-white/10 rounded-lg p-5 mb-4">
                <div className="text-center">
                  <div className="text-white/70 text-sm mb-2">Expansion Ratio</div>
                  <div className="text-4xl font-bold text-white mb-3">
                    1 L liquid ≈ 700-850 L gas
                  </div>
                  <div className="text-white/80 text-sm">
                    (at standard conditions, varies by gas)
                  </div>
                </div>
              </div>
              <div className="text-white/70 text-sm space-y-2">
                <p>• Liquid gases are extremely dense compared to their gaseous state</p>
                <p>• This ratio varies depending on the specific gas properties</p>
                <p>• Critical for understanding storage and transportation efficiency</p>
              </div>
            </div>

            {/* Common Gas Expansion Ratios */}
            <div className="glass rounded-lg p-5">
              <h4 className="text-white font-semibold mb-4">Common Gas Expansion Ratios</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-white">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4">Gas</th>
                      <th className="text-left py-3 px-4">Liquid to Gas Ratio</th>
                      <th className="text-left py-3 px-4">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Nitrogen (N₂)</td>
                      <td className="py-3 px-4">1:694</td>
                      <td className="py-3 px-4 text-sm text-white/70">1 L liquid = 694 L gas</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Oxygen (O₂)</td>
                      <td className="py-3 px-4">1:860</td>
                      <td className="py-3 px-4 text-sm text-white/70">1 L liquid = 860 L gas</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Argon (Ar)</td>
                      <td className="py-3 px-4">1:847</td>
                      <td className="py-3 px-4 text-sm text-white/70">1 L liquid = 847 L gas</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Carbon Dioxide (CO₂)</td>
                      <td className="py-3 px-4">1:535</td>
                      <td className="py-3 px-4 text-sm text-white/70">1 L liquid = 535 L gas</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Hydrogen (H₂)</td>
                      <td className="py-3 px-4">1:848</td>
                      <td className="py-3 px-4 text-sm text-white/70">1 L liquid = 848 L gas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Fundamentals */}
        <div className="glass-card rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-6 h-6 text-green-300" />
            <h3 className="text-xl font-semibold text-white">Pricing Fundamentals</h3>
          </div>

          <div className="space-y-6">
            {/* Pricing Units */}
            <div className="glass rounded-lg p-5">
              <h4 className="text-white font-semibold mb-4">Common Pricing Units</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-white/70 text-sm mb-2">Bulk Gas (Cylinders)</div>
                  <div className="text-2xl font-bold text-white mb-2">$/m³ or $/ft³</div>
                  <div className="text-white/60 text-xs">Price per unit volume of gas</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-white/70 text-sm mb-2">Liquid Gas (Dewars/Tanks)</div>
                  <div className="text-2xl font-bold text-white mb-2">$/L or $/kg</div>
                  <div className="text-white/60 text-xs">Price per liquid volume or mass</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-white/70 text-sm mb-2">Cylinder Rental</div>
                  <div className="text-2xl font-bold text-white mb-2">$/day or $/month</div>
                  <div className="text-white/60 text-xs">Equipment rental fees</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-white/70 text-sm mb-2">Delivery Charges</div>
                  <div className="text-2xl font-bold text-white mb-2">$ per delivery</div>
                  <div className="text-white/60 text-xs">Transportation and handling</div>
                </div>
              </div>
            </div>

            {/* Price Comparison Example */}
            <div className="glass rounded-lg p-5">
              <h4 className="text-white font-semibold mb-4">Price Comparison: Bulk vs. Liquid</h4>
              <div className="bg-white/10 rounded-lg p-5 mb-4">
                <div className="text-white/70 text-sm mb-3">Example: Nitrogen Pricing</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Bulk Gas Cylinder (9 m³)</span>
                    <span className="text-white font-bold">$150</span>
                  </div>
                  <div className="flex justify-between items-center text-white/70">
                    <span>Cost per m³</span>
                    <span className="font-semibold">$16.67/m³</span>
                  </div>
                  <div className="border-t border-white/20 my-3"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Liquid Nitrogen (180 L dewar)</span>
                    <span className="text-white font-bold">$200</span>
                  </div>
                  <div className="flex justify-between items-center text-white/70">
                    <span>Equivalent gas volume</span>
                    <span className="font-semibold">~125 m³</span>
                  </div>
                  <div className="flex justify-between items-center text-white/70">
                    <span>Cost per m³ equivalent</span>
                    <span className="font-semibold">$1.60/m³</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-500/20 border-2 border-green-400/50 rounded-lg p-4">
                <div className="text-green-300 font-semibold mb-2">💡 Key Insight:</div>
                <div className="text-white/80 text-sm">
                  Liquid gas is typically 10x more cost-effective per m³ of gas equivalent for high-volume users, 
                  despite higher upfront equipment costs.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Factors */}
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-purple-300" />
            <h3 className="text-xl font-semibold text-white">Factors Affecting Gas Pricing</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass rounded-lg p-5">
              <h4 className="text-white font-semibold mb-3">Volume-Based Factors</h4>
              <div className="space-y-2 text-white/70 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-white/50">•</span>
                  <span>Higher volumes = lower per-unit costs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white/50">•</span>
                  <span>Bulk contracts offer significant discounts</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white/50">•</span>
                  <span>Minimum order quantities may apply</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white/50">•</span>
                  <span>Long-term agreements reduce costs</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-lg p-5">
              <h4 className="text-white font-semibold mb-3">Purity & Grade</h4>
              <div className="space-y-2 text-white/70 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-white/50">•</span>
                  <span>Industrial grade (99.5%) - lowest cost</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white/50">•</span>
                  <span>High purity (99.999%) - premium pricing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white/50">•</span>
                  <span>Ultra-high purity (99.9999%+) - highest cost</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white/50">•</span>
                  <span>Specialty mixtures command premium</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-lg p-5">
              <h4 className="text-white font-semibold mb-3">Delivery & Logistics</h4>
              <div className="space-y-2 text-white/70 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-white/50">•</span>
                  <span>Distance from production facility</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white/50">•</span>
                  <span>Frequency of deliveries</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white/50">•</span>
                  <span>Special handling requirements</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white/50">•</span>
                  <span>Emergency/rush delivery surcharges</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-lg p-5">
              <h4 className="text-white font-semibold mb-3">Market Conditions</h4>
              <div className="space-y-2 text-white/70 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-white/50">•</span>
                  <span>Energy costs (production intensive)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white/50">•</span>
                  <span>Supply and demand fluctuations</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white/50">•</span>
                  <span>Regional availability</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white/50">•</span>
                  <span>Seasonal demand variations</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-500/20 border-2 border-blue-400/50 rounded-lg p-5">
            <div className="text-blue-300 font-semibold mb-2">📊 Pro Tip:</div>
            <div className="text-white/80 text-sm">
              Always calculate total cost of ownership including cylinder rental, delivery fees, and handling costs. 
              For high-volume users (>1000 m³/month), liquid supply with on-site storage typically offers 40-60% cost savings 
              compared to cylinder gas, despite higher initial infrastructure investment.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
