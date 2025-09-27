import React, { useEffect, useState } from 'react';
import { Star, Calendar, Trophy, ChevronLeft, ChevronRight, Award, Medal } from 'lucide-react';
import { achieversData } from '../data/achieversData';

const ShiningStars: React.FC = () => {
  const [currentSlide2024, setCurrentSlide2024] = useState(0);
  const [currentSlide2025, setCurrentSlide2025] = useState(0);

  // Use actual achievers data
  const results2024 = achieversData.map(achiever => ({
    id: achiever.id,
    image: achiever.image,
    name: achiever.name,
    marks: `${achiever.marks}%`,
    school: achiever.school,
    subjects: achiever.subjects
  }));

  // Create 2025 results (you can update this with actual 2025 data when available)
  const results2025 = achieversData.slice().reverse().map((achiever, index) => ({
    id: `2025-${achiever.id}`,
    image: achiever.image,
    name: `${achiever.name}`,
    marks: `${parseInt(achiever.marks) + Math.floor(Math.random() * 3)}%`, // Slight variation for demo
    school: achiever.school,
    subjects: achiever.subjects
  }));

  // Auto-scroll animations
  useEffect(() => {
    const interval2024 = setInterval(() => {
      setCurrentSlide2024((prev) => (prev + 1) % results2024.length);
    }, 3000);

    const interval2025 = setInterval(() => {
      setCurrentSlide2025((prev) => (prev - 1 + results2025.length) % results2025.length);
    }, 3500);

    return () => {
      clearInterval(interval2024);
      clearInterval(interval2025);
    };
  }, [results2024.length, results2025.length]);

  const ResultsCarousel = ({ 
    results, 
    currentSlide, 
    setCurrentSlide, 
    direction, 
    year 
  }: {
    results: any[];
    currentSlide: number;
    setCurrentSlide: (index: number) => void;
    direction: 'left' | 'right';
    year: string;
  }) => (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Calendar className="h-6 w-6 text-amber-500" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Class of {year} Results</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentSlide((currentSlide - 1 + results.length) % results.length)}
            className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={() => setCurrentSlide((currentSlide + 1) % results.length)}
            className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl">
        <div 
          className={`flex transition-transform duration-1000 ease-in-out ${
            direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
          }`}
          style={{
            transform: `translateX(-${currentSlide * (100 / 3)}%)`,
            width: `${(results.length * 100) / 3}%`
          }}
        >
          {results.map((result) => (
            <div
              key={result.id}
              className="flex-shrink-0 w-1/3 px-2"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-slate-700">
                <div className="relative">
                  <img
                    src={result.image}
                    alt={result.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                    {result.marks}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-bold text-lg">{result.name}</h4>
                    <p className="text-amber-300 text-sm">{result.school}</p>
                  </div>
                </div>
                
                {/* Card Footer */}
                <div className="p-4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {result.subjects?.map((subject: string) => (
                      <span
                        key={subject}
                        className="text-xs bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Medal className="h-4 w-4 text-amber-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="shining-stars" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Star className="h-12 w-12 text-amber-500 animate-pulse" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Our Shining <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">Stars</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Celebrating the outstanding achievements of our students across different years. 
            Each result tells a story of dedication, hard work, and excellence.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{results2024.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">2024 Achievers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{results2025.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">2025 Achievers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Results 2024 - Right to Left */}
        <div className="mb-16">
          <ResultsCarousel
            results={results2024}
            currentSlide={currentSlide2024}
            setCurrentSlide={setCurrentSlide2024}
            direction="right"
            year="2024"
          />
        </div>

        {/* Results 2025 - Left to Right */}
        <div className="mb-16">
          <ResultsCarousel
            results={results2025}
            currentSlide={currentSlide2025}
            setCurrentSlide={setCurrentSlide2025}
            direction="left"
            year="2025"
          />
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 p-8 lg:p-12 rounded-2xl text-white">
          <div className="text-center mb-8">
            <Trophy className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Consistent Excellence</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Year after year, our students continue to achieve remarkable results, 
              setting new benchmarks and inspiring future generations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Award className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-amber-400 mb-2">{results2024.length + results2025.length}+</div>
              <div className="text-gray-300">Total Toppers</div>
            </div>
            <div>
              <Star className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-emerald-400 mb-2">95%</div>
              <div className="text-gray-300">Average Success Rate</div>
            </div>
            <div>
              <Medal className="h-8 w-8 text-rose-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-rose-400 mb-2">15+</div>
              <div className="text-gray-300">District Toppers</div>
            </div>
            <div>
              <Trophy className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-gray-300">90+ Scorers</div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-8">
            <button
              onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20be%20your%20next%20shining%20star", "_blank")}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Be Our Next Shining Star
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShiningStars;