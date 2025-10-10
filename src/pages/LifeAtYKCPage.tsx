import React, { useState } from 'react';
import { X, Camera, Heart, Sparkles, Users, ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import achovement from '../photos/achovement.jpg';
import clasromm from '../photos/clasromm.jpg';
import classroom from '../photos/classroom.jpg';
import community from '../photos/community.jpg';
import commutniy from '../photos/commutniy.jpg';
import mentor from '../photos/mentor.jpg';
import support from '../photos/support.jpg';
import assesment from '../photos/assesment.jpg';
import achiveeve from '../photos/achiveeve.jpg';

const LifeAtYKCPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: clasromm,
      caption: 'Power cuts don\'t stop us — flashlights on, learning on ✨',
      category: 'classroom',
      description: 'Even during power outages, our dedication to learning never wavers. Students and teachers come together with flashlights to ensure no lesson is missed.'
    },
    {
      src: achiveeve,
      caption: 'When hard work meets celebration 🎉',
      category: 'achievement',
      description: 'Celebrating our students\' outstanding board results. These moments of joy make all the hard work worthwhile.'
    },
    {
      src: community,
      caption: 'One family, infinite memories ❤',
      category: 'community',
      description: 'YKC is more than an institute - it\'s a family where lifelong bonds are formed and memories are created.'
    },
    {
      src: classroom,
      caption: 'Interactive learning sessions that make concepts stick 💡',
      category: 'classroom',
      description: 'Our interactive teaching methods ensure that every concept is understood and retained by students.'
    },
    {
      src: mentor,
      caption: 'Faculty mentoring sessions that build confidence 🌟',
      category: 'mentoring',
      description: 'One-on-one mentoring sessions where our faculty provides personalized guidance to help students excel.'
    },
    {
      src: achovement,
      caption: 'Board results day - pure joy and pride! 🏆',
      category: 'achievement',
      description: 'The moment of truth - when months of preparation culminate in outstanding board exam results.'
    },
    {
      src: support,
      caption: 'Doubt clearing sessions - no question left unanswered ❓',
      category: 'support',
      description: 'Our comprehensive doubt clearing sessions ensure that every student\'s query is addressed thoroughly.'
    },
    {
      src: commutniy,
      caption: 'Study groups that feel like family gatherings 👨‍👩‍👧‍👦',
      category: 'community',
      description: 'Collaborative learning in a warm, family-like environment where students support each other.'
    },
    {
      src: assesment,
      caption: 'Mock test sessions - practice makes perfect 📝',
      category: 'assessment',
      description: 'Regular mock tests and assessments help students prepare thoroughly for their board examinations.'
    }
  ];

  const dailySchedule = [
    { time: '10:00 AM - 12:00 PM', activity: 'Morning Classes (IX-X)', subjects: 'Math, Science, English' },
    { time: '12:00 PM - 1:00 PM', activity: 'Doubt Clearing Session', subjects: 'All Subjects' },
    { time: '1:00 PM - 2:00 PM', activity: 'Lunch Break', subjects: 'Community Time' },
    { time: '2:00 PM - 4:00 PM', activity: 'Afternoon Classes (XI-XII)', subjects: 'Commerce, Humanities' },
    { time: '4:00 PM - 5:00 PM', activity: 'Special Sessions', subjects: 'Revision, Tests' },
    { time: '5:00 PM - 7:00 PM', activity: 'Evening Classes', subjects: 'English, Social Science' },
    { time: '7:00 PM - 9:00 PM', activity: 'Study Hall & Mentoring', subjects: 'Individual Guidance' }
  ];

  const events = [
    {
      title: 'Annual Results Celebration',
      date: 'May 2024',
      description: 'Celebrating our toppers and achievers with families and faculty',
      image: achovement
    },
    {
      title: 'Interactive Learning Workshop',
      date: 'March 2024',
      description: 'Special workshop on innovative learning techniques',
      image: classroom
    },
    {
      title: 'Community Bonding Day',
      date: 'January 2024',
      description: 'A day dedicated to strengthening our YKC family bonds',
      image: community
    }
  ];

  return (
    <div className="pt-16">
      {/* Back Button */}
      <div className="bg-white dark:bg-slate-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Life @ <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">YKC</span>
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              More than just classes — it's an experience. Where learning meets memories, 
              and every moment becomes a stepping stone to success.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
              <Camera className="h-5 w-5" />
              <span>Click any image to view full size</span>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Life Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              A Day at YKC
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From morning classes to evening mentoring, every moment is designed for your success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Schedule */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Clock className="h-6 w-6 text-amber-500 mr-3" />
                Daily Schedule
              </h3>
              <div className="space-y-4">
                {dailySchedule.map((item, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">{item.activity}</div>
                        <div className="text-amber-600 dark:text-amber-400 font-medium">{item.time}</div>
                        <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">{item.subjects}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Sparkles className="h-6 w-6 text-amber-500 mr-3" />
                What Makes YKC Special
              </h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/30 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Family-Like Environment</h4>
                  <p className="text-gray-600 dark:text-gray-300">Every student is treated like family, creating a warm and supportive learning atmosphere.</p>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-950/30 dark:to-emerald-900/30 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Interactive Learning</h4>
                  <p className="text-gray-600 dark:text-gray-300">Engaging teaching methods that make learning fun and memorable for all students.</p>
                </div>
                
                <div className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-rose-950/30 dark:to-rose-900/30 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h4>
                  <p className="text-gray-600 dark:text-gray-300">Round-the-clock doubt clearing and mentoring support for continuous learning.</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Celebration Culture</h4>
                  <p className="text-gray-600 dark:text-gray-300">We celebrate every achievement, big or small, fostering a positive learning environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Moments That Matter
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Capturing the essence of life at YKC through memorable moments
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-slate-900">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium leading-relaxed mb-2">
                        {image.caption}
                      </p>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>

                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-rose-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-12">Life at YKC in Numbers</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-amber-100">Happy Moments</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-amber-100">Memories Captured</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-amber-100">Special Events</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-amber-100">Years of Memories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Be Part of Our Family?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the YKC family and create your own success story filled with memorable moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20visit%20YKC%20and%20experience%20life%20here", "_blank")}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Visit YKC Today
            </button>
            <Link
              to="/"
              className="bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Close image"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LifeAtYKCPage;