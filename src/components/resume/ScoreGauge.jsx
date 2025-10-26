"use client";

import { useEffect, useRef, useState } from "react";

const ScoreGauge = ({ score }) => {
  const canvasRef = useRef(null);
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    let animationFrameId;
    let currentScore = 0;
    const duration = 2000; // 2 seconds animation
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuad = 1 - Math.pow(1 - progress, 2);
      currentScore = Math.floor(score * easeOutQuad);

      setAnimatedScore(currentScore);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [score]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 80;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background arc (gray)
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI * 0.75, Math.PI * 2.25);
    ctx.strokeStyle = "#e5e7eb";
    ctx.lineWidth = 20;
    ctx.stroke();

    // Draw score arc (blue)
    const scorePercentage = animatedScore / 100;
    const endAngle = Math.PI * 0.75 + Math.PI * 1.5 * scorePercentage;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI * 0.75, endAngle);
    ctx.strokeStyle = "#1e40af";
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.stroke();
  }, [animatedScore]);
  return (
    <div className="flex flex-col items-center gap-4">
      <canvas ref={canvasRef} width={220} height={180} className="w-full" />
      <div className="text-center">
        <div className="text-5xl font-semibold text-[#123499] -mt-64">
          {animatedScore}/100
        </div>
      </div>
    </div>
  );
};

export default ScoreGauge;
