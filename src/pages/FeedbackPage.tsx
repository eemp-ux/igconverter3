import React, { useState } from 'react';
import { MessageSquare, Mail, Lightbulb, Bug, Sparkles, Coffee, QrCode } from 'lucide-react';

export const FeedbackPage: React.FC = () => {
  const [showQR, setShowQR] = useState(false);

  const emailCategories = [
    {
      icon: MessageSquare,
      title: 'General Feedback',
      subject: 'IGC Feedback',
      description: 'Share your thoughts about the tool'
    },
    {
      icon: Lightbulb,
      title: 'Improvement Suggestion',
      subject: 'IGC Improvement Suggestion',
      description: 'Ideas to make the tool better'
    },
    {
      icon: Bug,
      title: 'Bug Report',
      subject: 'IGC Bug Report',
      description: 'Report issues or errors'
    },
    {
      icon: Sparkles,
      title: 'New Feature Request',
      subject: 'IGC Feature Request',
      description: 'Suggest new features or capabilities'
    }
  ];

  return (
    <div className="p-3 md:p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Mail className="w-8 h-8 text-white" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Contact & Feedback
            </h1>
          </div>
          <p className="text-white/80 text-base">
            Get in touch to share feedback or report issues
          </p>
        </header>

        <div className="glass rounded-xl p-6 mb-4">
          <div className="text-center mb-6">
            <h2 className="text-white font-semibold text-xl mb-2">
              Send me an email
            </h2>
            <a 
              href="mailto:mong_peng@outlook.com"
              className="text-blue-300 hover:text-blue-200 text-lg font-mono transition-colors"
            >
              mong_peng@outlook.com
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {emailCategories.map((category) => {
              const Icon = category.icon;
              return (
                <a
                  key={category.title}
                  href={`mailto:mong_peng@outlook.com?subject=${encodeURIComponent(category.subject)}`}
                  className="glass rounded-lg p-4 hover:bg-white/20 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="glass rounded-lg p-2 group-hover:bg-white/30 transition-all">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-sm mb-1">
                        {category.title}
                      </h3>
                      <p className="text-white/70 text-xs">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="glass rounded-xl p-6 mb-4">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Coffee className="w-6 h-6 text-amber-300" />
            <h3 className="text-white font-semibold text-lg">Support This Tool</h3>
          </div>
          <p className="text-white/80 text-sm text-center leading-relaxed mb-4">
            If you find this tool useful, you can buy me a coffee to support its development and maintenance.
          </p>
          <div className="text-center">
            <p className="text-white/70 text-xs mb-3">TNG eWallet</p>
            {!showQR ? (
              <button
                onClick={() => setShowQR(true)}
                className="glass rounded-lg px-6 py-3 hover:bg-white/20 transition-all group inline-flex items-center gap-2"
              >
                <QrCode className="w-5 h-5 text-amber-300 group-hover:text-amber-200 transition-colors" />
                <span className="text-white font-semibold group-hover:text-white/90 transition-colors">
                  Show QR Code
                </span>
              </button>
            ) : (
              <div className="inline-block">
                <div className="glass rounded-lg p-4 mb-3">
                  <img 
                    src="https://cdn.chatandbuild.com/users/69058807540a6cb4cfcdcacb/qr-code1-1764421346752-13795097-1764421346751-307301698.jpg"
                    alt="TNG QR Code"
                    className="w-48 h-48 mx-auto rounded-lg"
                  />
                </div>
                <button
                  onClick={() => setShowQR(false)}
                  className="text-white/60 hover:text-white/80 text-xs transition-colors"
                >
                  Hide QR Code
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="glass rounded-xl p-4">
          <h3 className="text-white font-semibold text-sm mb-2">About This Tool</h3>
          <p className="text-white/70 text-xs leading-relaxed">
            The Industrial Gas Converter was created to help sales engineers and technical professionals 
            quickly and accurately convert between different units and standard conditions. Built with 
            thermodynamically correct calculations using the ideal gas law, this tool ensures precision 
            for your industrial gas applications.
          </p>
        </div>
      </div>
    </div>
  );
};
