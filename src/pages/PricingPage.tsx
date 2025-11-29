import React, { useState, useEffect } from 'react';
import { DollarSign } from 'lucide-react';
import { GasType } from '../types';
import { gasProperties } from '../data/gasProperties';

type PricingUnit = 'MYR/Nm3' | 'MYR/Sm3' | 'MYR/kg';

export const PricingPage: React.FC = () => {
  const [gasType, setGasType] = useState<GasType>('N2');
  const [inputPrice, setInputPrice] = useState<number>(1);
  const [inputUnit, setInputUnit] = useState<PricingUnit>('MYR/Nm3');
  const [inputSm3Temperature, setInputSm3Temperature] = useState<number>(15);
  const [resultSm3Temperature, setResultSm3Temperature] = useState<number>(15);
  const [resultPrices, setResultPrices] = useState({
    'MYR/Nm3': 0,
    'MYR/Sm3': 0,
    'MYR/kg': 0,
  });

  useEffect(() => {
    if (inputPrice > 0) {
      calculatePricing();
    }
  }, [gasType, inputPrice, inputUnit, inputSm3Temperature, resultSm3Temperature]);

  const calculatePricing = () => {
    const gas = gasProperties[gasType];
    const R = 8.314;
    const P_ATM = 101325;
    const T_Nm3 = 273.15;
    const T_Input_Sm3 = inputSm3Temperature + 273.15;
    const T_Result_Sm3 = resultSm3Temperature + 273.15;

    let pricePerNm3 = 0;
    let pricePerSm3 = 0;
    let pricePerKg = 0;

    if (inputUnit === 'MYR/Nm3') {
      pricePerNm3 = inputPrice;
      pricePerSm3 = inputPrice * (T_Nm3 / T_Result_Sm3);
      
      const molesPerNm3 = (P_ATM * 1) / (R * T_Nm3);
      const kgPerNm3 = (molesPerNm3 * gas.molecularWeight) / 1000;
      pricePerKg = inputPrice / kgPerNm3;
    } else if (inputUnit === 'MYR/Sm3') {
      pricePerSm3 = inputPrice * (T_Input_Sm3 / T_Result_Sm3);
      pricePerNm3 = inputPrice * (T_Input_Sm3 / T_Nm3);
      
      const molesPerInputSm3 = (P_ATM * 1) / (R * T_Input_Sm3);
      const kgPerInputSm3 = (molesPerInputSm3 * gas.molecularWeight) / 1000;
      pricePerKg = inputPrice / kgPerInputSm3;
    } else if (inputUnit === 'MYR/kg') {
      pricePerKg = inputPrice;
      
      const molesPerKg = (1000) / gas.molecularWeight;
      const nm3PerKg = (molesPerKg * R * T_Nm3) / P_ATM;
      pricePerNm3 = inputPrice / nm3PerKg;
      
      const resultSm3PerKg = (molesPerKg * R * T_Result_Sm3) / P_ATM;
      pricePerSm3 = inputPrice / resultSm3PerKg;
    }

    setResultPrices({
      'MYR/Nm3': pricePerNm3,
      'MYR/Sm3': pricePerSm3,
      'MYR/kg': pricePerKg,
    });
  };

  return (
    <div className="p-3 md:p-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <DollarSign className="w-8 h-8 text-white" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Gas Pricing Converter
            </h1>
          </div>
          <p className="text-white/80 text-base">
            Convert unit prices between different gas measurement standards
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Input Section */}
          <div className="space-y-3">
            <div className="glass rounded-xl p-3">
              <h2 className="text-white font-semibold mb-2 text-sm">Gas Selection</h2>
              
              <div>
                <label className="text-white/80 text-xs mb-1 block">
                  Gas Type
                </label>
                <select
                  value={gasType}
                  onChange={(e) => setGasType(e.target.value as GasType)}
                  className="glass-input rounded-lg p-2 w-full text-white cursor-pointer text-sm"
                >
                  {Object.entries(gasProperties).map(([key, gas]) => (
                    <option key={key} value={key} className="bg-purple-900">
                      {gas.name} ({key})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="glass rounded-xl p-3">
              <h2 className="text-white font-semibold mb-2 text-sm">Input Price</h2>
              
              <div className="space-y-2">
                <div>
                  <label className="text-white/80 text-xs mb-1 block">
                    Pricing Unit
                  </label>
                  <select
                    value={inputUnit}
                    onChange={(e) => setInputUnit(e.target.value as PricingUnit)}
                    className="glass-input rounded-lg p-2 w-full text-white cursor-pointer text-sm"
                  >
                    <option value="MYR/Nm3" className="bg-purple-900">MYR/Nm³</option>
                    <option value="MYR/Sm3" className="bg-purple-900">MYR/Sm³</option>
                    <option value="MYR/kg" className="bg-purple-900">MYR/kg</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/80 text-xs mb-1 block">
                    Price (MYR)
                  </label>
                  <input
                    type="number"
                    value={inputPrice}
                    onChange={(e) => setInputPrice(parseFloat(e.target.value) || 0)}
                    className="glass-input rounded-lg p-2 w-full text-white text-sm"
                    placeholder="Enter price"
                    step="0.01"
                    min="0"
                  />
                </div>

                {inputUnit === 'MYR/Sm3' && (
                  <div>
                    <label className="text-white/80 text-xs mb-1 block">
                      Input Sm³ Temperature (°C)
                    </label>
                    <input
                      type="number"
                      value={inputSm3Temperature}
                      onChange={(e) => setInputSm3Temperature(parseFloat(e.target.value) || 15)}
                      className="glass-input rounded-lg p-2 w-full text-white text-sm"
                      placeholder="Enter temperature"
                      step="1"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-3">
            <div className="glass rounded-xl p-3">
              <h2 className="text-white font-semibold mb-2 text-sm">Converted Prices</h2>
              
              <div className="space-y-2">
                <div className="glass-card rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/70 text-xs">MYR/Nm³</span>
                    {inputUnit === 'MYR/Nm3' && (
                      <span className="text-xs text-green-400 font-semibold">INPUT</span>
                    )}
                  </div>
                  <div className="text-white text-2xl font-bold">
                    {resultPrices['MYR/Nm3'].toFixed(4)}
                  </div>
                  <div className="text-white/60 text-xs mt-0.5">
                    at 0°C, 1 atm
                  </div>
                </div>

                <div className="glass-card rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/70 text-xs">MYR/Sm³</span>
                    {inputUnit === 'MYR/Sm3' && (
                      <span className="text-xs text-green-400 font-semibold">INPUT</span>
                    )}
                  </div>
                  <div className="text-white text-2xl font-bold mb-2">
                    {resultPrices['MYR/Sm3'].toFixed(4)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/60 text-xs">at</span>
                    <input
                      type="number"
                      value={resultSm3Temperature}
                      onChange={(e) => setResultSm3Temperature(parseFloat(e.target.value) || 15)}
                      className="glass-input rounded px-2 py-0.5 w-16 text-white text-xs text-center"
                      step="1"
                    />
                    <span className="text-white/60 text-xs">°C, 1 atm</span>
                  </div>
                </div>

                <div className="glass-card rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/70 text-xs">MYR/kg</span>
                    {inputUnit === 'MYR/kg' && (
                      <span className="text-xs text-green-400 font-semibold">INPUT</span>
                    )}
                  </div>
                  <div className="text-white text-2xl font-bold">
                    {resultPrices['MYR/kg'].toFixed(4)}
                  </div>
                  <div className="text-white/60 text-xs mt-0.5">
                    mass-based pricing
                  </div>
                </div>
              </div>

              <div className="mt-3 glass-card rounded-lg p-3 border-l-4 border-blue-400">
                <div className="text-blue-300 font-semibold text-xs mb-1">💡 Note:</div>
                <div className="text-white/70 text-xs">
                  Prices are converted using ideal gas law and molecular weight. 
                  Both input and result Sm³ temperatures can be adjusted independently.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
