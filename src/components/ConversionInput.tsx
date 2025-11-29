import React from 'react';
import { UnitType } from '../types';

interface ConversionInputProps {
  value: number;
  unit: UnitType;
  customTemp: number;
  onValueChange: (value: number) => void;
  onUnitChange: (unit: UnitType) => void;
  onCustomTempChange: (temp: number) => void;
}

export const ConversionInput: React.FC<ConversionInputProps> = ({
  value,
  unit,
  customTemp,
  onValueChange,
  onUnitChange,
  onCustomTempChange,
}) => {
  const units: { value: UnitType; label: string }[] = [
    { value: 'nm3', label: 'Nm³ (0°C, 1 atm)' },
    { value: 'sm3_15', label: 'Sm³ (15°C, 1 atm)' },
    { value: 'sm3_21', label: 'Sm³ (21°C, 1 atm)' },
    { value: 'sm3_27', label: 'Sm³ (27°C, 1 atm)' },
    { value: 'sm3_custom', label: 'Sm³ (Custom Temp)' },
    { value: 'kg', label: 'kg' },
    { value: 'metric_ton', label: 'Metric Ton (t)' },
    { value: 'liters_gas', label: 'Liters (Gas)' },
    { value: 'liters_liquid', label: 'Liters (Liquid)' },
  ];

  return (
    <div className="glass rounded-xl p-3">
      <h2 className="text-white font-semibold mb-2 text-sm">Input</h2>
      
      <div className="space-y-2">
        <div>
          <label className="text-white/80 text-xs mb-1 block">
            Value
          </label>
          <input
            type="number"
            value={value}
            onChange={(e) => onValueChange(parseFloat(e.target.value) || 0)}
            className="glass-input rounded-lg p-2 w-full text-white text-sm"
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className="text-white/80 text-xs mb-1 block">
            Unit
          </label>
          <select
            value={unit}
            onChange={(e) => onUnitChange(e.target.value as UnitType)}
            className="glass-input rounded-lg p-2 w-full text-white cursor-pointer text-sm"
          >
            {units.map((u) => (
              <option key={u.value} value={u.value} className="bg-purple-900">
                {u.label}
              </option>
            ))}
          </select>
        </div>

        {unit === 'sm3_custom' && (
          <div>
            <label className="text-white/80 text-xs mb-1 block">
              Custom Temperature (°C)
            </label>
            <input
              type="number"
              value={customTemp}
              onChange={(e) => onCustomTempChange(parseFloat(e.target.value) || 0)}
              className="glass-input rounded-lg p-2 w-full text-white text-sm"
              step="0.1"
            />
          </div>
        )}
      </div>
    </div>
  );
};
