import React from "react";
import { useEffect, useState } from "react";
import "./ScrollProgress.css";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress = (scrollTop / height) * 100;

      setProgress(progress);
    };

    window.addEventListener("scroll", updateProgress);

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
    ></div>
  );
};

export default ScrollProgress;
