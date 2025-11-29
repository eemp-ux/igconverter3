import { LiquidProperties } from '../types';

export const liquidProperties: Record<string, LiquidProperties> = {
  N2: {
    boilingPoint: -195.8,
    liquidDensity: 808,
  },
  O2: {
    boilingPoint: -183.0,
    liquidDensity: 1141,
  },
  CO2: {
    boilingPoint: -78.5,
    liquidDensity: 1008,
    note: 'Industry reference at ~-10°C',
  },
  Ar: {
    boilingPoint: -185.8,
    liquidDensity: 1395,
  },
  H2: {
    boilingPoint: -252.9,
    liquidDensity: 70.8,
  },
  He: {
    boilingPoint: -268.9,
    liquidDensity: 125,
  },
  Xe: {
    boilingPoint: -108.1,
    liquidDensity: 2942,
  },
  Kr: {
    boilingPoint: -153.4,
    liquidDensity: 2413,
  },
};
