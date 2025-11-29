import React from 'react';
import { ConversionResult, UnitType } from '../types';

interface ConversionResultsProps {
  results: ConversionResult;
  selectedUnit: UnitType;
  customTemp: number;
  onUnitChange: (unit: UnitType) => void;
  onCustomTempChange: (temp: number) => void;
}

export const ConversionResults: React.FC<ConversionResultsProps> = ({
  results,
  selectedUnit,
  customTemp,
  onUnitChange,
  onCustomTempChange,
}) => {
  const units: { value: UnitType; label: string; getValue: () => number }[] = [
    { value: 'nm3', label: 'Nm³ (0°C)', getValue: () => results.nm3 },
    { value: 'sm3_15', label: 'Sm³ @ 15°C', getValue: () => results.sm3_15 },
    { value: 'sm3_21', label: 'Sm³ @ 21°C', getValue: () => results.sm3_21 },
    { value: 'sm3_27', label: 'Sm³ @ 27°C', getValue: () => results.sm3_27 },
    { value: 'sm3_custom', label: 'Sm³ @ Custom', getValue: () => results.sm3_custom },
    { value: 'kg', label: 'kg', getValue: () => results.kg },
    { value: 'metric_ton', label: 'Metric Ton (t)', getValue: () => results.metric_ton },
    { value: 'liters_gas', label: 'Liters (Gas)', getValue: () => results.liters_gas },
    { value: 'liters_liquid', label: 'Liters (Liquid)', getValue: () => results.liters_liquid },
  ];

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-white font-semibold mb-4">Results</h2>
      
      <div className="space-y-4">
        <div>
          <label className="text-white/80 text-sm mb-2 block">
            Display Unit
          </label>
          <select
            value={selectedUnit}
            onChange={(e) => onUnitChange(e.target.value as UnitType)}
            className="glass-input rounded-xl p-3 w-full text-white cursor-pointer"
          >
            {units.map((u) => (
              <option key={u.value} value={u.value} className="bg-purple-900">
                {u.label}
              </option>
            ))}
          </select>
        </div>

        {selectedUnit === 'sm3_custom' && (
          <div>
            <label className="text-white/80 text-sm mb-2 block">
              Custom Temperature (°C)
            </label>
            <input
              type="number"
              value={customTemp}
              onChange={(e) => onCustomTempChange(parseFloat(e.target.value) || 0)}
              className="glass-input rounded-xl p-3 w-full text-white"
              step="0.1"
            />
          </div>
        )}

        <div className="glass-card rounded-xl p-4">
          <div className="text-white/70 text-sm mb-1">
            {units.find(u => u.value === selectedUnit)?.label}
          </div>
          <div className="text-white text-3xl font-bold">
            {units.find(u => u.value === selectedUnit)?.getValue().toFixed(4)}
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-white/70 text-sm mb-2">All Conversions:</div>
          {units.map((u) => (
            <div key={u.value} className="glass-card rounded-lg p-3 flex justify-between items-center">
              <span className="text-white/80 text-sm">{u.label}</span>
              <span className="text-white font-medium">{u.getValue().toFixed(4)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
