import React, { useEffect, useRef } from 'react';
import { Phone, MessageCircle, Sparkles, BookOpen, Award } from 'lucide-react';
import Typed from 'typed.js';

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['Yogesh Kochar\'s Classes'],
        typeSpeed: 60,
        showCursor: false,
        startDelay: 200,
      });

      return () => {
        typed.destroy();
      };
    }
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
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white relative overflow-hidden py-20"
    >
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.05%27%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%2730%27%20r%3D%271%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">

          {/* Animated Heading */}
          <div className="pt-16 pb-4 animate-fade-in-slow">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span
                ref={typedRef}
                className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent inline-block"
              ></span>
            </h1>
          </div>

          {/* Main Tagline */}
          <div className="pb-8 animate-fade-in-slow" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
              <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                We Create Toppers!
              </span>
            </h2>
          </div>

          {/* Announcement Banner */}
          <div className="inline-block animate-flash-badge">
            <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 p-1.5 rounded-2xl shadow-2xl">
              <div className="bg-slate-900 px-8 py-5 rounded-xl">
                <div className="flex items-center justify-center flex-wrap gap-2">
                  <p className="text-base md:text-lg font-bold text-white text-center">
                    Exciting News! Yogesh Kochar's Classes is now opening at Prashant Vihar Admissions Open Soon — Stay Tuned!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Subjects Section */}
          <div className="pt-12">
            <h3 className="text-3xl md:text-4xl font-bold text-amber-400 mb-12 flex items-center justify-center space-x-3">
              <BookOpen className="h-8 w-8" />
              <span>Subjects We Offer</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Class IX-X */}
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border-2 border-blue-400/30 rounded-2xl p-8 hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Award className="h-8 w-8 text-blue-400" />
                  <h4 className="text-2xl md:text-3xl font-bold text-blue-400">Class IX - X</h4>
                </div>
                <p className="text-gray-300 mb-6 text-lg">(Foundation Years)</p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3 text-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-200">Mathematics</span>
                  </div>
                  <div className="flex items-center space-x-3 text-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-200">Science</span>
                  </div>
                  <div className="flex items-center space-x-3 text-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-200">English</span>
                  </div>
                  <div className="flex items-center space-x-3 text-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-200">Social Science</span>
                  </div>
                </div>
              </div>

              {/* Class XI-XII */}
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm border-2 border-amber-400/30 rounded-2xl p-8 hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Award className="h-8 w-8 text-amber-400" />
                  <h4 className="text-2xl md:text-3xl font-bold text-amber-400">Class XI - XII</h4>
                </div>
                <p className="text-gray-300 mb-6 text-lg">(Career Defining)</p>

                <div className="grid grid-cols-2 gap-6 text-left">
                  {/* Commerce */}
                  <div>
                    <p className="font-bold text-emerald-400 mb-3 text-lg">Commerce</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Mathematics</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Accounts</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Economics</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">English</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Business Studies</span>
                      </div>
                    </div>
                  </div>

                  {/* Humanities */}
                  <div>
                    <p className="font-bold text-rose-400 mb-3 text-lg">Humanities</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Economics</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">English</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Psychology</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Pol. Science</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">History</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Geography</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Sociology</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button
              onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20book%20a%20demo", "_blank")}
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-green-500/50 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-3">
                <MessageCircle className="h-6 w-6" />
                <span>Chat on WhatsApp</span>
              </span>
            </button>

            <button
              onClick={() => window.open("tel:+919213092876", "_self")}
              className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-amber-500/50 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6" />
                <span>Call Us Now</span>
              </span>
            </button>

            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-blue-500/50 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-3">
                <span>Get a Free Demo</span>
              </span>
            </button>
          </div>

          {/* Achievement Stats */}
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-400/30 rounded-xl p-6">
              <div className="text-4xl font-bold text-amber-400 mb-2">20+</div>
              <div className="text-gray-300">Years of Excellence</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-6">
              <div className="text-4xl font-bold text-emerald-400 mb-2">6500+</div>
              <div className="text-gray-300">Students Taught</div>
            </div>
            <div className="bg-gradient-to-br from-rose-500/20 to-rose-600/20 backdrop-blur-sm border border-rose-400/30 rounded-xl p-6">
              <div className="text-4xl font-bold text-rose-400 mb-2">200+</div>
              <div className="text-gray-300">Board Toppers</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
