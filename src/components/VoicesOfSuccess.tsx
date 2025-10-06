import React, { useState } from 'react';
import { Play, Pause, Volume2, ExternalLink, Star, Trophy } from 'lucide-react';

const VoicesOfSuccess: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  // YouTube video IDs in reverse order (14 to 1)
  const youtubeVideos = [
    "fCtJZ4uOo7I",
    "t8IgVHs8hvg", 
    "rmAc-mwlBEU",
    "CwwXmRZoyd8",
    "37Ik0vUROkU",
    "kKSu_I69coA"
  ].reverse();

  const getYouTubeId = (urlOrId: string) => {
    try {
      if (/^[a-zA-Z0-9_-]{11}$/.test(urlOrId)) return urlOrId;
      const url = new URL(urlOrId);
      if (url.hostname.includes("youtu.be")) {
        return url.pathname.slice(1);
      }
      if (url.hostname.includes("youtube.com")) {
        if (url.pathname.startsWith("/shorts/")) {
          return url.pathname.split("/shorts/")[1];
        }
        return url.searchParams.get("v");
      }
      return urlOrId;
    } catch {
      return urlOrId;
    }
  };

  const handleVideoPlay = (videoId: string) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  return (
    <section id="voices-success" className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Animation */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <Volume2 className="h-12 w-12 text-purple-500 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Voices of <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">Success</span>
            </h2>
          </div>
          
          <div className="relative">
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4 animate-bounce">
              🎵 HIT, PLAY AND HEAR THEIR JOURNEY AT YKC 🎵
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Listen to the inspiring success stories directly from our students. 
              Their voices tell the real story of transformation and achievement.
            </p>
          </div>
        </div>

        {/* Video Grid with Enhanced Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {youtubeVideos.map((video, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border-2 border-transparent hover:border-purple-400"
            >
              {/* Video Container */}
              <div className="relative" style={{ paddingTop: "177.78%" /* 9:16 ratio */ }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
                  src={`https://www.youtube.com/embed/${getYouTubeId(video)}?rel=0&modestbranding=1`}
                  title={`Success Story ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                
                {/* Overlay with Play Button */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleVideoPlay(video)}
                    className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg"
                  >
                    {playingVideo === video ? (
                      <Pause className="h-8 w-8" />
                    ) : (
                      <Play className="h-8 w-8 ml-1" />
                    )}
                  </button>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-amber-400" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Success Story</span>
                  </div>
                  <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                    #{index + 1}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Student Success Journey
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Hear how YKC transformed their academic journey and helped them achieve their dreams.
                </p>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleVideoPlay(video)}
                    className="flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors duration-200"
                  >
                    <Volume2 className="h-4 w-4" />
                    <span className="text-sm font-medium">Listen Now</span>
                  </button>
                  
                  <a
                    href={`https://youtube.com/watch?v=${getYouTubeId(video)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm">YouTube</span>
                  </a>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 lg:p-12 rounded-2xl text-white text-center">
          <Trophy className="h-16 w-16 text-purple-200 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Your Success Story Awaits</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their lives at YKC. 
            Your inspiring journey could be the next success story we share!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20start%20my%20success%20journey%20at%20YKC", "_blank")}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 shadow-lg"
            >
              Start Your Journey
            </button>
            
            <button
              onClick={() => window.open("tel:+919213092876", "_self")}
              className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 transform hover:scale-105 shadow-lg"
            >
              Call Us Now
            </button>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-indigo-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-50"></div>
      </div>
    </section>
  );
};

export default VoicesOfSuccess;