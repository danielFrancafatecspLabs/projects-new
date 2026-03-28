import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  src: string;
  title?: string;
  size?: "sm" | "md";
}

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) return "00:00";

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

export default function AudioPlayer({
  src,
  title,
  size = "md",
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const onLoadedMetadata = () => setDuration(audio.duration || 0);
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const handleSeek = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = value;
    setCurrentTime(value);
  };

  const compact = size === "sm";

  return (
    <div className="group w-full rounded-2xl border border-black/10 bg-white/80 p-3 shadow-[0_8px_24px_-18px_rgba(0,0,0,0.55)] backdrop-blur-md sm:p-4">
      <audio ref={audioRef} preload="metadata" src={src} />

      <div className="mb-3 flex items-center gap-3">
        <button
          type="button"
          aria-label={isPlaying ? "Pausar áudio" : "Tocar áudio"}
          onClick={toggle}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black text-white transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          {isPlaying ? (
            <Pause size={compact ? 16 : 18} />
          ) : (
            <Play size={compact ? 16 : 18} className="ml-0.5" />
          )}
        </button>

        <div className="min-w-0 flex-1">
          {title ? (
            <p className="truncate text-sm font-medium text-black/80">
              {title}
            </p>
          ) : null}
          <p className="text-xs tracking-wide text-black/45">
            toque para ouvir
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-10 text-[11px] text-black/45">
          {formatTime(currentTime)}
        </span>
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={Math.min(currentTime, duration || 0)}
          onChange={(event) => handleSeek(Number(event.target.value))}
          className="audio-range h-1.5 w-full cursor-pointer appearance-none rounded-full"
        />
        <span className="w-10 text-right text-[11px] text-black/45">
          {formatTime(duration)}
        </span>
      </div>
    </div>
  );
}
