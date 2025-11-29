import React from 'react';
import { BookOpen } from 'lucide-react';
import { IdealGasLaw } from '../components/infographics/IdealGasLaw';
import { ConversionInfographic } from '../components/infographics/ConversionInfographic';
import { GasPricingComparison } from '../components/infographics/GasPricingComparison';

export const InfographicsPage: React.FC = () => {
  return (
    <div className="p-3 md:p-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <BookOpen className="w-6 h-6 text-white" />
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Gas Behavior Guide
            </h1>
          </div>
          <p className="text-white/80 text-sm">
            Understanding ideal gas law, volume conversions, and pricing
          </p>
        </header>

        <div className="space-y-6">
          <section>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-bold text-white/40">1</span>
              <h2 className="text-xl font-bold text-white">Ideal Gas Law</h2>
            </div>
            <IdealGasLaw />
          </section>

          <section>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-bold text-white/40">2</span>
              <h2 className="text-xl font-bold text-white">Gas Volume Conversion Guide</h2>
            </div>
            <ConversionInfographic />
          </section>

          <section>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-bold text-white/40">3</span>
              <h2 className="text-xl font-bold text-white">Understanding Gas Pricing</h2>
            </div>
            <GasPricingComparison />
          </section>
        </div>
      </div>
    </div>
  );
};
