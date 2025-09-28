import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, Heart, Users, MessageCircle } from 'lucide-react';
import { reviewsData } from '../data/reviewsData';

const GoogleReviews: React.FC = () => {
  const [hoveredReview, setHoveredReview] = useState<string | null>(null);
  const [currentRow1, setCurrentRow1] = useState(0);
  const [currentRow2, setCurrentRow2] = useState(0);

  // Split reviews into two rows
  const row1Reviews = reviewsData.slice(0, Math.ceil(reviewsData.length / 2));
  const row2Reviews = reviewsData.slice(Math.ceil(reviewsData.length / 2));

  // Auto-scroll animations
  useEffect(() => {
    const interval1 = setInterval(() => {
      if (!hoveredReview) {
        setCurrentRow1((prev) => (prev + 1) % row1Reviews.length);
      }
    }, 4000);

    const interval2 = setInterval(() => {
      if (!hoveredReview) {
        setCurrentRow2((prev) => (prev - 1 + row2Reviews.length) % row2Reviews.length);
      }
    }, 4500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [hoveredReview, row1Reviews.length, row2Reviews.length]);

  const ReviewCard = ({ review, isHovered, onHover, onLeave }: any) => (
    <div
      className={`flex-shrink-0 w-80 mx-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
        isHovered ? 'scale-105 z-10' : 'hover:-translate-y-2'
      } border border-gray-200 dark:border-slate-700 cursor-pointer`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="p-6">
        {/* Google Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Google Review</span>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        {/* Review Content */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 italic text-sm">
          "{review.comment}"
        </p>

        {/* Author Info */}
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-gray-900 dark:text-white text-sm">{review.name}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">{review.class}</div>
          </div>
          {review.subject && (
            <div className="text-xs bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-full">
              {review.subject}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const AnimatedRow = ({ 
    reviews, 
    direction, 
    currentIndex 
  }: {
    reviews: any[];
    direction: 'left' | 'right';
    currentIndex: number;
  }) => (
    <div className="overflow-hidden">
      <div 
        className={`flex transition-transform duration-1000 ease-in-out ${
          hoveredReview ? 'animation-paused' : ''
        }`}
        style={{
          transform: `translateX(${direction === 'left' ? -currentIndex * 320 : currentIndex * 320}px)`,
          width: `${reviews.length * 320}px`
        }}
      >
        {reviews.concat(reviews).map((review, index) => (
          <ReviewCard
            key={`${review.id}-${index}`}
            review={review}
            isHovered={hoveredReview === `${review.id}-${index}`}
            onHover={() => setHoveredReview(`${review.id}-${index}`)}
            onLeave={() => setHoveredReview(null)}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="google-reviews" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Heart className="h-12 w-12 text-red-500" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Our Google <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Love</span> ❤️
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            <span className="font-bold text-2xl text-amber-600 dark:text-amber-400">100s of 5 Stars⭐ Love ❤ On Google</span>
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our Strengths, Our Students - Real reviews from real achievers
          </p>

          {/* Google Rating Display */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">5.0</span>
            <span className="text-gray-600 dark:text-gray-400 text-lg">on Google</span>
          </div>
        </div>

        {/* Animated Reviews - Row 1 (Left to Right) */}
        <div className="mb-8">
          <AnimatedRow
            reviews={row1Reviews}
            direction="left"
            currentIndex={currentRow1}
          />
        </div>

        {/* Animated Reviews - Row 2 (Right to Left) */}
        <div className="mb-16">
          <AnimatedRow
            reviews={row2Reviews}
            direction="right"
            currentIndex={currentRow2}
          />
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 p-8 lg:p-12 rounded-2xl text-white text-center mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Students</div>
            </div>
            <div>
              <Star className="h-12 w-12 mx-auto mb-4 text-yellow-200" />
              <div className="text-3xl font-bold mb-2">5.0★</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <MessageCircle className="h-12 w-12 mx-auto mb-4 text-green-200" />
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Google Reviews</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=yogesh+kochar+classes+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>See All Reviews on Google</span>
            <ExternalLink className="h-6 w-6" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .animation-paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default GoogleReviews;