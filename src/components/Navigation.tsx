import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calculator, BookOpen, DollarSign, MessageSquare } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-3 right-3 z-50 glass rounded-lg p-2 hover:bg-white/20 transition-all"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Menu className="w-5 h-5 text-white" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={toggleMenu}>
          <nav className="fixed top-0 right-0 h-full w-64 glass-card p-4 shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Developer Watermark */}
            <div className="mb-4 mt-12">
              <div className="glass rounded-lg px-3 py-1.5 text-center border border-white/20 inline-block">
                <span className="text-white/90 font-semibold text-xs tracking-wide">
                  IGC | by EMP
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 space-y-2">
              <Link
                to="/"
                onClick={toggleMenu}
                className={`flex items-center gap-2.5 p-3 rounded-lg transition-all ${
                  isActive('/') 
                    ? 'bg-white/30 text-white' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Calculator className="w-4 h-4" />
                <span className="font-medium text-sm">Converter</span>
              </Link>

              <Link
                to="/pricing"
                onClick={toggleMenu}
                className={`flex items-center gap-2.5 p-3 rounded-lg transition-all ${
                  isActive('/pricing') 
                    ? 'bg-white/30 text-white' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <DollarSign className="w-4 h-4" />
                <span className="font-medium text-sm">Pricing Converter</span>
              </Link>

              <Link
                to="/v1"
                onClick={toggleMenu}
                className={`flex items-center gap-2.5 p-3 rounded-lg transition-all ${
                  isActive('/v1') 
                    ? 'bg-white/30 text-white' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span className="font-medium text-sm">V1 - Infographics</span>
              </Link>

              <Link
                to="/feedback"
                onClick={toggleMenu}
                className={`flex items-center gap-2.5 p-3 rounded-lg transition-all ${
                  isActive('/feedback') 
                    ? 'bg-white/30 text-white' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span className="font-medium text-sm">Feedback & Support</span>
              </Link>
            </div>

            {/* App Info */}
            <div className="mt-auto">
              <div className="glass rounded-lg p-3">
                <p className="text-white/60 text-xs">
                  Industrial Gas Converter
                </p>
                <p className="text-white/40 text-[10px] mt-0.5">
                  Professional conversion tool
                </p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
