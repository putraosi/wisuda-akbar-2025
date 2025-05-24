import { useEffect, useRef, useState } from "react";

const MusicOnInteraction = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const tryPlay = () => {
      if (audioRef.current && !hasStarted) {
        audioRef.current
          .play()
          .then(() => {
            setHasStarted(true);
          })
          .catch((err) => {
            console.error("Autoplay failed:", err);
          });
      }
    };

    document.addEventListener("click", tryPlay);
    document.addEventListener("scroll", tryPlay);

    return () => {
      document.removeEventListener("click", tryPlay);
      document.removeEventListener("scroll", tryPlay);
    };
  }, [hasStarted]);

  return (
    <audio ref={audioRef} loop>
      <source src="/song.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default MusicOnInteraction;
