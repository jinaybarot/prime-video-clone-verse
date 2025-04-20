
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { X, Pause, Play, Volume2, VolumeX, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getContentById } from "@/data/mockData";

const PlayerPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [progress, setProgress] = useState(0);
  
  const content = getContentById(id || "");
  
  if (!content) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Content not found</h2>
          <Button onClick={() => navigate("/")} variant="prime">
            Go Home
          </Button>
        </div>
      </div>
    );
  }

  // Auto-hide controls after 3 seconds
  useEffect(() => {
    if (showControls) {
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showControls]);
  
  // Simulate progress
  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 0.5;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [isPlaying]);

  return (
    <div 
      className="relative w-full h-screen bg-black overflow-hidden"
      onMouseMove={() => setShowControls(true)}
    >
      {/* Video Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${content.posterPath})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Controls Overlay - shown when showControls is true */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        {/* Top Controls */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-xl font-medium">{content.title}</div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate(-1)}
              className="text-white hover:bg-white/20"
            >
              <X />
            </Button>
          </div>
        </div>
        
        {/* Center Play/Pause Control */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsPlaying(!isPlaying)}
            className="h-16 w-16 rounded-full bg-black/30 text-white hover:bg-black/50"
          >
            {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
          </Button>
        </div>
        
        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="space-y-4">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-prime-blue rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:bg-white/20"
                >
                  {isPlaying ? <Pause /> : <Play />}
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white hover:bg-white/20"
                >
                  {isMuted ? <VolumeX /> : <Volume2 />}
                </Button>
                
                <div className="text-white text-sm">
                  {Math.floor(progress / 100 * 120)}:00 / 2:00:00
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/20"
              >
                <Settings />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
