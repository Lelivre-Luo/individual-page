"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"

// 1. 定义您的播放列表
const playlist = [
  {
    title: "Nuit Silencieuse",
    artist: "Days乐团",
    src: "/musics/Nuit-Silencieuse_H.mp3", // 对应 public/music/ 文件夹下的文件名
    cover: "/musics/covers/Nuit-Silencieuse_H.jpg", // 对应专辑封面
  },
  // ... 在这里添加更多歌曲
]

export function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const currentTrack = playlist[currentTrackIndex]

  // 监听音频播放进度
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return


    const updateProgress = () => {
        if (audio.duration) {
          setProgress((audio.currentTime / audio.duration) * 100)
        }
      }

    const handleTrackEnd = () => {
      handleNext()
    }

    audio.addEventListener("timeupdate", updateProgress)
    audio.addEventListener("ended", handleTrackEnd)

    return () => {
        if (audio) {
          audio.removeEventListener("timeupdate", updateProgress);
          audio.removeEventListener("ended", handleTrackEnd);
        }
      };
  }, [currentTrackIndex])

  // 控制播放和暂停
  useEffect(() => {
    if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.play().catch(error => console.error("Playback failed:", error));
        } else {
          audioRef.current.pause();
        }
      }
  }, [isPlaying, currentTrackIndex])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.length)
    setProgress(0)
    setIsPlaying(true)
  }

  const handlePrev = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length)
    setProgress(0)
    setIsPlaying(true)
  }
  
  // 隐藏播放器直到用户交互或特定条件
  // const [isVisible, setIsVisible] = useState(false);
  // useEffect(() => { /* logic to show player */ setIsVisible(true); }, []);
  // if (!isVisible) return null;


  return (
    // 定位在右下角，并应用玻璃拟态和悬浮效果
    <div className="fixed bottom-6 right-6 z-50 w-72 h-24 rounded-lg glass-card custom-scrollbar shadow-lg flex items-center p-3 space-x-3">
      {/* 隐形的 audio 元素 */}
      <audio ref={audioRef} src={currentTrack.src} preload="metadata" />

      {/* 专辑封面 */}
      <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
        <img src={currentTrack.cover} alt={currentTrack.title} className="w-full h-full object-cover" />
      </div>

      {/* 歌曲信息和控制 */}
      <div className="flex-1 flex flex-col justify-between h-full">
        {/* 歌曲名和歌手 */}
        <div>
          <p className="text-sm font-semibold text-card-foreground truncate">{currentTrack.title}</p>
          <p className="text-xs text-muted-foreground truncate">{currentTrack.artist}</p>
        </div>

        {/* 控制按钮 */}
        <div className="flex items-center justify-between">
          <button onClick={handlePrev} className="text-card-foreground hover:text-primary transition-colors">
            <SkipBack size={18} />
          </button>
          <button onClick={togglePlayPause} className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button onClick={handleNext} className="text-card-foreground hover:text-primary transition-colors">
            <SkipForward size={18} />
          </button>
        </div>
      </div>
      
      {/* 进度条 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div className="h-full bg-primary" style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}></div>
      </div>
    </div>
  )
}