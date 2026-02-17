import { useState, useRef, useEffect } from 'react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const videos = [
    // Short-form videos (everything except long.mp4)
    {
      id: 1,
      category: 'short',
      title: 'C3H1 REV',
      videoId: 'dQw4w9WgXcQ',
    },
    {
      id: 2,
      category: 'short',
      title: 'Creates New Instagram Video',
      videoId: 'S64DLYg4k5Y',
    },
    {
      id: 3,
      category: 'short',
      title: 'Faceless Final',
      videoId: '7rjkEAZkm60',
    },
    {
      id: 4,
      category: 'short',
      title: 'Intake Breathing Final',
      videoId: 'JPXmeApUoW4',
    },
    {
      id: 5,
      category: 'short',
      title: 'Michael Jordan Faceless Rev',
      videoId: '-9rekxYjKH0',
    },
    {
      id: 6,
      category: 'short',
      title: 'Sean Revised',
      videoId: 'd0h79VhnnTE',
    },

    // Long-form video
    {
      id: 7,
      category: 'long',
      title: 'Long Edit',
      videoId: 'dAf23VMxc9o',
    },
  ];

  const filteredVideos = filter === 'all'
    ? videos
    : videos.filter(v => v.category === filter);

  function VideoCard({ video }) {
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
      const initPlayer = () => {
        playerRef.current = new window.YT.Player(`player-${video.id}`, {
          height: '100%',
          width: '100%',
          videoId: video.videoId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
            showinfo: 0,
            playsinline: 1,
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
      };

      const onPlayerReady = (event) => {
        // Player is ready
      };

      const onPlayerStateChange = (event) => {
        if (event.data === window.YT.PlayerState.PLAYING) {
          setIsPlaying(true);
        } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
          setIsPlaying(false);
        }
      };

      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(tag, firstScript);
        window.onYouTubeIframeAPIReady = initPlayer;
      } else {
        initPlayer();
      }

      return () => {
        if (playerRef.current) {
          playerRef.current.destroy();
        }
      };
    }, [video.videoId]);

    const togglePlay = () => {
      if (playerRef.current) {
        if (isPlaying) {
          playerRef.current.pauseVideo();
        } else {
          playerRef.current.playVideo();
        }
      }
    };

    return (
      <div
        className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-all duration-500 cursor-pointer shadow-2xl hover:shadow-red-900/30"
        onClick={togglePlay}
        data-aos="fade-up"
      >
        {/* Vertical Video Container */}
        <div className="relative w-full pt-[177.78%] bg-black overflow-hidden">
          <div
            id={`player-${video.id}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Play / Pause Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all duration-500 pointer-events-none">
            <div
              className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-600/90 flex items-center justify-center shadow-2xl transition-all duration-500
                ${isPlaying ? 'opacity-0 scale-75' : 'opacity-100 scale-100 group-hover:scale-110'}`}
            >
              <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-4xl text-white ml-1`} />
            </div>
          </div>
        </div>

        {/* Title & Category */}
        <div className="p-5 bg-gradient-to-t from-black to-transparent">
          <p className="text-xs uppercase tracking-widest text-red-500 mb-1">
            {video.category === 'short' ? 'SHORT-FORM' : 'LONG-FORM'}
          </p>
          <h3 className="font-semibold text-white line-clamp-2 group-hover:text-red-400 transition-colors">
            {video.title}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight" data-aos="fade-up">
            Our Latest Work
          </h2>

          <div className="flex gap-3" data-aos="fade-up">
            {['all', 'short', 'long'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-7 py-3 rounded-full font-medium transition-all ${
                  filter === cat
                    ? 'bg-red-600 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All' : cat === 'short' ? 'Short-Form' : 'Long-Form'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}