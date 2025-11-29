import { GasProperties } from '../types';

export const gasProperties: Record<string, GasProperties> = {
  N2: {
    name: 'Nitrogen',
    molecularWeight: 28.014,
    gasDensity: 1.2506,
  },
  O2: {
    name: 'Oxygen',
    molecularWeight: 31.999,
    gasDensity: 1.429,
  },
  CO2: {
    name: 'Carbon Dioxide',
    molecularWeight: 44.01,
    gasDensity: 1.9768,
  },
  Ar: {
    name: 'Argon',
    molecularWeight: 39.948,
    gasDensity: 1.7837,
  },
  H2: {
    name: 'Hydrogen',
    molecularWeight: 2.016,
    gasDensity: 0.08988,
  },
  He: {
    name: 'Helium',
    molecularWeight: 4.0026,
    gasDensity: 0.1785,
  },
  Xe: {
    name: 'Xenon',
    molecularWeight: 131.29,
    gasDensity: 5.894,
  },
  Kr: {
    name: 'Krypton',
    molecularWeight: 83.798,
    gasDensity: 3.749,
  },
};
