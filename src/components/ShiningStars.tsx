import React, { useEffect, useState } from 'react';
import { Star, Calendar, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

const ShiningStars: React.FC = () => {
  const [currentSlide2024, setCurrentSlide2024] = useState(0);
  const [currentSlide2025, setCurrentSlide2025] = useState(0);

  // Sample data - replace with actual photos
  const results2024 = [
    { id: 1, image: '/api/placeholder/300/400', name: 'Student 1', marks: '95%' },
    { id: 2, image: '/api/placeholder/300/400', name: 'Student 2', marks: '93%' },
    { id: 3, image: '/api/placeholder/300/400', name: 'Student 3', marks: '91%' },
    { id: 4, image: '/api/placeholder/300/400', name: 'Student 4', marks: '89%' },
    { id: 5, image: '/api/placeholder/300/400', name: 'Student 5', marks: '87%' },
    { id: 6, image: '/api/placeholder/300/400', name: 'Student 6', marks: '85%' }
  ];

  const results2025 = [
    { id: 1, image: '/api/placeholder/300/400', name: 'Student A', marks: '97%' },
    { id: 2, image: '/api/placeholder/300/400', name: 'Student B', marks: '94%' },
    { id: 3, image: '/api/placeholder/300/400', name: 'Student C', marks: '92%' },
    { id: 4, image: '/api/placeholder/300/400', name: 'Student D', marks: '90%' },
    { id: 5, image: '/api/placeholder/300/400', name: 'Student E', marks: '88%' },
    { id: 6, image: '/api/placeholder/300/400', name: 'Student F', marks: '86%' }
  ];

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
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Results {year}</h3>
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
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
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
    <section id="shining-stars" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Star className="h-12 w-12 text-amber-500" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Our Shining <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">Stars</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Celebrating the outstanding achievements of our students across different years. 
            Each result tells a story of dedication, hard work, and excellence.
          </p>
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
              <div className="text-3xl font-bold text-amber-400 mb-2">200+</div>
              <div className="text-gray-300">Total Toppers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">95%</div>
              <div className="text-gray-300">Average Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-400 mb-2">15+</div>
              <div className="text-gray-300">District Toppers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-gray-300">90+ Scorers</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ShiningStars;