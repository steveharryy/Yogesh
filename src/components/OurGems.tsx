import React from 'react';
import { Trophy, Star, Medal, ExternalLink, ArrowRight } from 'lucide-react';

const OurGems: React.FC = () => {
  const gems = [
    {
      id: 'aman-karn',
      name: 'Aman Kumar Karn',
      achievement: 'Delhi Topper - 97%',
      class: 'Class XII',
      year: '2024',
      subjects: ['Overall Excellence'],
      description: 'Achieved the highest marks in Delhi with consistent performance across all subjects. His dedication and strategic preparation made him a role model for future aspirants.',
      image: '/api/placeholder/300/400',
      mediaLinks: [
        { type: 'news', title: 'Times of India Coverage', url: '#' },
        { type: 'interview', title: 'Success Story Interview', url: '#' }
      ]
    },
    {
      id: 'shivam-goel',
      name: 'Shivam Kumar Goel',
      achievement: 'Commerce Stream Topper - 96.8%',
      class: 'Class XII',
      year: '2024',
      subjects: ['Commerce Stream'],
      description: 'Excelled in Commerce stream with outstanding performance in Business Studies, Economics, and Accountancy. His analytical approach and consistent practice led to exceptional results.',
      image: '/api/placeholder/300/400',
      mediaLinks: [
        { type: 'news', title: 'Education Times Feature', url: '#' },
        { type: 'interview', title: 'Topper Talk Session', url: '#' }
      ]
    }
  ];

  return (
    <section id="our-gems" className="py-20 bg-gradient-to-br from-amber-50 to-rose-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Trophy className="h-12 w-12 text-amber-500" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Our <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">Gems</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet our exceptional achievers who have set new benchmarks of excellence. 
            Their success stories inspire and motivate every student at YKC.
          </p>
        </div>

        {/* Gems Showcase */}
        <div className="space-y-16">
          {gems.map((gem, index) => (
            <div
              key={gem.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image Section */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl">
                  <img
                    src={gem.image}
                    alt={gem.name}
                    className="w-full h-96 object-cover rounded-xl"
                  />
                  
                  {/* Achievement Badge */}
                  <div className="absolute top-8 right-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                    {gem.achievement.split(' - ')[1]}
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute bottom-8 left-8 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {gem.year}
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
              </div>

              {/* Content Section */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Medal className="h-6 w-6 text-amber-500" />
                    <span className="text-amber-600 dark:text-amber-400 font-semibold">{gem.class}</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                    {gem.name}
                  </h3>
                  
                  <div className="text-xl font-semibold text-amber-600 dark:text-amber-400">
                    {gem.achievement}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {gem.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {gem.description}
                </p>

                {/* Media Coverage */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                    <Star className="h-5 w-5 text-amber-500" />
                    <span>Media Coverage</span>
                  </h4>
                  <div className="space-y-2">
                    {gem.mediaLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className="flex items-center space-x-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 group"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="group-hover:underline">{link.title}</span>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button
                    onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20know%20about%20your%20success%20strategies", "_blank")}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Learn Their Success Strategy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 p-8 lg:p-12 rounded-2xl text-white">
            <Trophy className="h-16 w-16 text-amber-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Be the Next Gem</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the legacy of excellence. With our proven methodology and dedicated mentorship, 
              you too can achieve extraordinary results.
            </p>
            <button
              onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20join%20YKC%20and%20become%20a%20topper", "_blank")}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Success Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGems;