import { useState, useEffect } from 'react';
import { Monitor, Smartphone } from 'lucide-react';

export function MobileBlockModal() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center animate-fade-in">
        {/* Icon */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full animate-pulse"></div>
          </div>
          <div className="relative flex items-center justify-center">
            <Monitor className="w-16 h-16 text-blue-600 z-10" />
            <div className="absolute -bottom-2 -right-2">
              <div className="relative">
                <Smartphone className="w-10 h-10 text-red-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-0.5 bg-red-500 transform rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Desktop Only Experience
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          <strong>Substrack</strong> is optimized for desktop use to provide the best experience for managing your subscriptions.
        </p>

        {/* Instructions Box */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3 text-left">
            <div className="flex-shrink-0 mt-1">
              <Monitor className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">
                Please switch to a desktop or laptop
              </h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Use a screen width of at least 768px</li>
                <li>• Access from a computer or tablet in landscape</li>
                <li>• Enjoy full dashboard functionality</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Note */}
        <div className="text-xs text-gray-500 mb-4">
          📊 Full analytics • 💳 Payment management • 📈 Advanced reporting
        </div>

        {/* Email Yourself Link */}
        <a
          href={`mailto:?subject=Check out Substrack&body=Visit Substrack on desktop: ${window.location.href}`}
          className="inline-flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email me this link
        </a>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            Mobile app coming soon! 📱
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}