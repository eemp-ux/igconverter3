import { GasType, UnitType, ConversionResult } from '../types';
import { gasProperties } from '../data/gasProperties';
import { liquidProperties } from '../data/liquidProperties';

const R = 8.314; // J/(mol·K)
const P_ATM = 101325; // Pa
const MOLAR_VOLUME_STP = 22.414; // L/mol at 0°C, 1 atm

const celsiusToKelvin = (celsius: number): number => celsius + 273.15;

const findLiquidEquivalent = (gasType: GasType): string => {
  return gasType;
};

export const calculateGasConversion = (
  gasType: GasType,
  inputValue: number,
  inputUnit: UnitType,
  inputCustomTemp: number,
  resultCustomTemp: number
): ConversionResult => {
  const gas = gasProperties[gasType];
  const liquidType = findLiquidEquivalent(gasType);
  const liquid = liquidProperties[liquidType];

  let moles = 0;

  switch (inputUnit) {
    case 'nm3': {
      const volumeM3 = inputValue;
      const T = celsiusToKelvin(0);
      moles = (P_ATM * volumeM3) / (R * T);
      break;
    }
    case 'sm3_15': {
      const volumeM3 = inputValue;
      const T = celsiusToKelvin(15);
      moles = (P_ATM * volumeM3) / (R * T);
      break;
    }
    case 'sm3_21': {
      const volumeM3 = inputValue;
      const T = celsiusToKelvin(21);
      moles = (P_ATM * volumeM3) / (R * T);
      break;
    }
    case 'sm3_27': {
      const volumeM3 = inputValue;
      const T = celsiusToKelvin(27);
      moles = (P_ATM * volumeM3) / (R * T);
      break;
    }
    case 'sm3_custom': {
      const volumeM3 = inputValue;
      const T = celsiusToKelvin(inputCustomTemp);
      moles = (P_ATM * volumeM3) / (R * T);
      break;
    }
    case 'kg': {
      const massG = inputValue * 1000;
      moles = massG / gas.molecularWeight;
      break;
    }
    case 'metric_ton': {
      const massG = inputValue * 1000000; // 1 metric ton = 1000 kg = 1,000,000 g
      moles = massG / gas.molecularWeight;
      break;
    }
    case 'liters_gas': {
      moles = inputValue / MOLAR_VOLUME_STP;
      break;
    }
    case 'liters_liquid': {
      const volumeM3 = inputValue / 1000;
      const massKg = volumeM3 * liquid.liquidDensity;
      const massG = massKg * 1000;
      moles = massG / gas.molecularWeight;
      break;
    }
  }

  const nm3 = (moles * R * celsiusToKelvin(0)) / P_ATM;
  const sm3_15 = (moles * R * celsiusToKelvin(15)) / P_ATM;
  const sm3_21 = (moles * R * celsiusToKelvin(21)) / P_ATM;
  const sm3_27 = (moles * R * celsiusToKelvin(27)) / P_ATM;
  const sm3_custom = (moles * R * celsiusToKelvin(resultCustomTemp)) / P_ATM;
  const kg = (moles * gas.molecularWeight) / 1000;
  const metric_ton = kg / 1000; // Convert kg to metric tons
  const liters_gas = moles * MOLAR_VOLUME_STP;
  const massG = moles * gas.molecularWeight;
  const massKg = massG / 1000;
  const volumeM3 = massKg / liquid.liquidDensity;
  const liters_liquid = volumeM3 * 1000;

  return {
    nm3,
    sm3_15,
    sm3_21,
    sm3_27,
    sm3_custom,
    kg,
    metric_ton,
    liters_gas,
    liters_liquid,
  };
};
