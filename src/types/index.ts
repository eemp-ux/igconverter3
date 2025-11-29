export type GasType = 'N2' | 'O2' | 'CO2' | 'Ar' | 'H2' | 'He' | 'Xe' | 'Kr';

export type UnitType = 
  | 'nm3' 
  | 'sm3_15' 
  | 'sm3_21' 
  | 'sm3_27' 
  | 'sm3_custom' 
  | 'kg' 
  | 'metric_ton'
  | 'liters_gas' 
  | 'liters_liquid';

export interface GasProperties {
  name: string;
  molecularWeight: number;
  gasDensity: number;
}

export interface LiquidProperties {
  boilingPoint: number;
  liquidDensity: number;
  note?: string;
}

export interface ConversionResult {
  nm3: number;
  sm3_15: number;
  sm3_21: number;
  sm3_27: number;
  sm3_custom: number;
  kg: number;
  metric_ton: number;
  liters_gas: number;
  liters_liquid: number;
}
