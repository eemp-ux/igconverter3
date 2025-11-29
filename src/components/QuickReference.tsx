import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { gasProperties } from '../data/gasProperties';
import { liquidProperties } from '../data/liquidProperties';

export const QuickReference: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass rounded-2xl p-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between mb-6 hover:bg-white/5 rounded-lg p-2 -m-2 transition-all"
      >
        <h2 className="text-white font-semibold text-xl">Quick Reference</h2>
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-white/70" />
        ) : (
          <ChevronDown className="w-6 h-6 text-white/70" />
        )}
      </button>
      
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-white/90 font-medium mb-3">Gas Properties</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left text-white/70 pb-2 pr-4">Gas</th>
                    <th className="text-left text-white/70 pb-2 pr-4">Formula</th>
                    <th className="text-right text-white/70 pb-2 pr-4">MW (g/mol)</th>
                    <th className="text-right text-white/70 pb-2">Density (kg/Nm³)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(gasProperties).map(([key, gas]) => (
                    <tr key={key} className="border-b border-white/10">
                      <td className="text-white py-2 pr-4">{gas.name}</td>
                      <td className="text-white/80 py-2 pr-4">{key}</td>
                      <td className="text-white/80 py-2 pr-4 text-right">{gas.molecularWeight.toFixed(3)}</td>
                      <td className="text-white/80 py-2 text-right">{gas.gasDensity.toFixed(3)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-white/90 font-medium mb-3">Liquid Properties</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left text-white/70 pb-2 pr-4">Gas</th>
                    <th className="text-right text-white/70 pb-2 pr-4">Boiling Point (°C)</th>
                    <th className="text-right text-white/70 pb-2">Liquid Density (kg/m³)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(liquidProperties).map(([key, liquid]) => (
                    <tr key={key} className="border-b border-white/10">
                      <td className="text-white py-2 pr-4">{gasProperties[key as keyof typeof gasProperties]?.name || key}</td>
                      <td className="text-white/80 py-2 pr-4 text-right">{liquid.boilingPoint.toFixed(1)}</td>
                      <td className="text-white/80 py-2 text-right">
                        {liquid.liquidDensity.toFixed(0)}
                        {liquid.note && '*'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {Object.values(liquidProperties).some(l => l.note) && (
                <div className="mt-3 text-xs text-white/60">
                  {Object.entries(liquidProperties)
                    .filter(([_, liquid]) => liquid.note)
                    .map(([key, liquid]) => (
                      <div key={key}>
                        * {gasProperties[key as keyof typeof gasProperties]?.name}: {liquid.note}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-white/90 font-medium mb-3">Unit Definitions</h3>
            <div className="space-y-2 text-sm">
              <div className="glass-card rounded-lg p-3">
                <div className="text-white font-medium">Nm³ (Normal cubic meter)</div>
                <div className="text-white/70">Volume at 0°C (273.15 K) and 1 atm (101.325 kPa)</div>
              </div>
              <div className="glass-card rounded-lg p-3">
                <div className="text-white font-medium">Sm³ (Standard cubic meter)</div>
                <div className="text-white/70">Volume at specified temperature and 1 atm (101.325 kPa)</div>
              </div>
              <div className="glass-card rounded-lg p-3">
                <div className="text-white font-medium">kg (Kilogram)</div>
                <div className="text-white/70">Mass in kilograms</div>
              </div>
              <div className="glass-card rounded-lg p-3">
                <div className="text-white font-medium">Metric Ton (t)</div>
                <div className="text-white/70">Mass in metric tons (1 t = 1000 kg)</div>
              </div>
              <div className="glass-card rounded-lg p-3">
                <div className="text-white font-medium">Liters (Gas)</div>
                <div className="text-white/70">Gas volume calculated using molar volume (22.414 L/mol at STP)</div>
              </div>
              <div className="glass-card rounded-lg p-3">
                <div className="text-white font-medium">Liters (Liquid)</div>
                <div className="text-white/70">Actual liquid volume using liquid density at boiling point</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white/90 font-medium mb-3">Important Notes</h3>
            <div className="space-y-2 text-sm text-white/70">
              <div className="glass-card rounded-lg p-3">
                • All conversions use the ideal gas law (PV = nRT) for thermodynamic accuracy
              </div>
              <div className="glass-card rounded-lg p-3">
                • Gas density values are for reference only - not used in calculations
              </div>
              <div className="glass-card rounded-lg p-3">
                • Liquid densities are at boiling point unless otherwise noted
              </div>
              <div className="glass-card rounded-lg p-3">
                • Molar volume at STP (0°C, 1 atm) = 22.414 L/mol
              </div>
              <div className="glass-card rounded-lg p-3">
                • 1 Metric Ton (t) = 1000 kg
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
