import React from 'react';
import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Trophy, Users, Calendar } from 'lucide-react';
import yogeshsir from '../photos/yogeshsir.jpg';

const Hero: React.FC = () => {

  const [isGlitching, setIsGlitching] = useState(true);

  useEffect(() => {
    // Stop glitch effect after 3 seconds
    const timer = setTimeout(() => {
      setIsGlitching(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.05%27%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%2730%27%20r%3D%271%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            {/* Stats Banner */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-amber-500/20 px-3 py-1 rounded-full">
                <Calendar className="h-4 w-4 text-amber-400" />
                <span className="text-amber-200">20+ Years</span>
              </div>
              <div className="flex items-center space-x-2 bg-emerald-500/20 px-3 py-1 rounded-full">
                <Users className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-200">6500+ Students</span>
              </div>
              <div className="flex items-center space-x-2 bg-rose-500/20 px-3 py-1 rounded-full">
                <Trophy className="h-4 w-4 text-rose-400" />
                <span className="text-rose-200">200+ Toppers</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <div className={`relative ${isGlitching ? 'animate-glitch' : ''}`}>
                  <span className={`
                    bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent
                    ${isGlitching ? 'animate-pulse' : ''}
                  `}>
                    Yogesh Kochar&apos;s
                  </span>
                  {isGlitching && (
                    <>
                      <span className="absolute top-0 left-0 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent opacity-70 animate-glitch-1">
                        Yogesh Kochar&apos;s
                      </span>
                      <span className="absolute top-0 left-0 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent opacity-70 animate-glitch-2">
                        Yogesh Kochar&apos;s
                      </span>
                    </>
                  )}
                </div>
                <br />
                <div className={`relative ${isGlitching ? 'animate-bounce-slow' : ''}`}>
                  <span className={`
                    text-white
                    ${isGlitching ? 'animate-pulse' : ''}
                  `}>
                    Classes
                  </span>
                  {isGlitching && (
                    <>
                      <span className="absolute top-0 left-0 text-cyan-400 opacity-60 animate-glitch-1">
                        Classes
                      </span>
                      <span className="absolute top-0 left-0 text-pink-400 opacity-60 animate-glitch-2">
                        Classes
                      </span>
                    </>
                  )}
                </div>
              </h1>

              <div className={`text-xl lg:text-2xl text-gray-300 font-medium ${isGlitching ? 'animate-fade-in-up' : ''}`}>
                One Institute. Every Subject. Guaranteed Results.
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              Delhi&apos;s most trusted institute for English, Mathematics, Science, Commerce & Humanities.
              Building confidence, ensuring success since 2005.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20book%20a%20demo", "_blank")}
                className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center justify-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </span>
              </button>

              <button
                onClick={() => window.open("tel:+919213092876", "_self")}
                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Us Now</span>
                </span>
              </button>

              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Get a Free Demo</span>
                </span>
              </button>
            </div>

            {/* Classes and Subjects Info */}
            <div className="grid md:grid-cols-2 gap-8 p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700">
              <div className="text-center">
                <h3 className="text-xl font-bold text-amber-400 mb-3">Classes IX-X</h3>
                <p className="text-gray-300 mb-3">(Foundation Years)</p>
                <div className="space-y-1 text-sm text-gray-400">
                  <div>• Mathematics</div>
                  <div>• Science</div>
                  <div>• English</div>
                  <div>• Social Science</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-amber-400 mb-3">Classes XI-XII</h3>
                <p className="text-gray-300 mb-3">(Commerce & Humanities)</p>
                <p className="text-sm text-gray-400 mb-2">Subjects That Define Your Career</p>
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
                  <div>
                    <div className="font-medium text-emerald-400 mb-1">Commerce</div>
                    <div>• Maths • Accounts</div>
                    <div>• Economics • English</div>
                    <div>• Business Studies</div>
                  </div>
                  <div>
                    <div className="font-medium text-rose-400 mb-1">Humanities</div>
                    <div>• Economics • English</div>
                    <div>• Psychology • Pol. Science</div>
                    <div>• History • Geography</div>
                    <div>• Sociology</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">100+</div>
                <div className="text-sm text-gray-400">Students scoring 90+</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">5★</div>
                <div className="text-sm text-gray-400">Google Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400">24/7</div>
                <div className="text-sm text-gray-400">Doubt Support</div>
              </div>
            </div>
          </div>

        </div>

        {/* Landscape Image Section */}
        <div className="mt-16">
          <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-200 dark:bg-slate-700 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg"
              alt="YKC Learning Environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Excellence in Education</h3>
              <p className="text-lg opacity-90">Where dreams meet reality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
