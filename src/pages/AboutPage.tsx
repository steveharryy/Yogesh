import React from 'react';
import { BookOpen, Users, Trophy, Target, Heart, Lightbulb, Award, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import banner from '../photos/banner.jpg';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Trophy,
      title: 'Result-Oriented Legacy',
      description: '20+ years, 6500+ students, 200+ toppers',
      color: 'from-amber-400 to-amber-600'
    },
    {
      icon: BookOpen,
      title: 'Multi-Subject Hub',
      description: 'One roof for all streams and subjects',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Users,
      title: 'Expert Faculty Squad',
      description: 'Specialized teachers for every subject',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: Lightbulb,
      title: 'Digital Study Material',
      description: 'Notes, quizzes, and comprehensive resources',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Interactive Learning',
      description: 'Doubt-clearing sessions and booster classes',
      color: 'from-rose-400 to-rose-600'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Consistent 90+ scores in board exams',
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  const milestones = [
    { year: '2005', event: 'YKC Founded', description: 'Started with English coaching for Classes IX-XII' },
    { year: '2006', event: 'First 100 Students', description: 'Reached our first major milestone' },
    { year: '2012', event: 'Multi-Subject Expansion', description: 'Added Mathematics, Science, and Social Science' },
    { year: '2015', event: '1000+ Alumni', description: 'Celebrated 1000 successful students' },
    { year: '2018', event: 'Commerce & Humanities', description: 'Expanded to cover all major streams' },
    { year: '2020', event: 'Digital Transformation', description: 'Launched online resources and hybrid learning' },
    { year: '2023', event: '6000+ Students', description: 'Reached 6000+ students milestone' },
    { year: '2025', event: '20 Years of Excellence', description: 'Celebrating two decades of educational excellence' }
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
      <section className="py-20 bg-gradient-to-br from-amber-50 to-rose-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">YKC</span>
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Welcome to Yogesh Kochar's Classes, where passion meets results. Our journey has always been about more than marks — it's about shaping confidence, building fundamentals, and creating achievers.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Our Inspiring Journey
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  Started in 2005, with a legacy of 20+ years in teaching, we've empowered over 6500 students and mentored more than 200 toppers and achievers across subjects. What began as a center of excellence for English coaching (Classes IX–XII, CBSE) has today grown into a multi-subject institute, offering English, Maths, Science, Social Science, Commerce, and Humanities under one roof.
                </p>
                <p>
                  At Yogesh Kochar's Classes, we don't just prepare students for exams — we prepare them for life. With expert mentors, modern teaching, and a student-first approach, we ensure that every learner leaves with knowledge, confidence, and a success story of their own.
                </p>
                <p>
                  Today, we proudly serve students across Classes IX-XII in CBSE curriculum, with specialized faculty for each subject and a track record that speaks for itself.
                </p>
              </div>

              {/* Legacy Stats */}
              <div className="bg-gradient-to-r from-slate-50 to-amber-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">20+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Years Legacy</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">6500+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Alumni</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-rose-600 dark:text-rose-400">200+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Toppers</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={banner}
                alt="YKC Institute"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Two decades of growth, innovation, and student success
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-amber-400"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full border-4 border-white dark:border-slate-800"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{milestone.event}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our unique approach combines traditional teaching excellence with modern educational methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-slate-700"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-rose-50 dark:from-slate-800 dark:to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 p-12 lg:p-16 rounded-2xl text-white">
              <Heart className="h-16 w-16 text-amber-400 mx-auto mb-8" />
              <h2 className="text-4xl font-bold mb-6">
                Our Philosophy
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                "We don't just teach subjects, we build futures. Every student is unique,
                and our personalized approach ensures that each one reaches their full potential.
                Success is not just about grades – it's about confidence, character, and capability."
              </p>
              <div className="text-xl font-medium text-amber-400">
                — The YKC Philosophy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Join Our Legacy?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Become part of the YKC family and write your own success story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20join%20YKC", "_blank")}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Join YKC Today
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
    </div>
  );
};

export default AboutPage;