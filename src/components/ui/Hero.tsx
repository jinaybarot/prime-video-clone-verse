
import React from "react";
import { Link } from "react-router-dom";
import { Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  id: string;
  title: string;
  description: string;
  type: "movie" | "tv";
  backdropPath: string;
  logoPath?: string;
  isPrime?: boolean;
  className?: string;
}

const Hero = ({
  id,
  title,
  description,
  type,
  backdropPath,
  logoPath,
  isPrime = true,
  className,
}: HeroProps) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div 
        className="relative h-[60vh] min-h-[450px] md:h-[80vh] w-full bg-prime-dark bg-cover bg-center"
        style={{ backgroundImage: `url(${backdropPath})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-prime-dark via-prime-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-prime-dark via-transparent to-transparent"></div>
        
        <div className="container h-full px-4 mx-auto relative z-10">
          <div className="flex flex-col justify-end h-full pb-16 md:pb-24 max-w-lg">
            {logoPath ? (
              <img src={logoPath} alt={title} className="w-64 md:w-80 mb-6" />
            ) : (
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
            )}
            
            {isPrime && (
              <div className="flex items-center mb-4">
                <div className="bg-prime-blue text-white text-xs font-bold px-2 py-0.5 rounded">
                  PRIME
                </div>
                <span className="text-white text-sm ml-2">Included with Prime</span>
              </div>
            )}
            
            <p className="text-prime-muted mb-6 line-clamp-3">{description}</p>
            
            <div className="flex gap-3 flex-wrap">
              <Button 
                variant="prime" 
                size="lg" 
                className="font-medium"
                asChild
              >
                <Link to={`/${type}/${id}/play`}>
                  <Play className="mr-1" />
                  Play
                </Link>
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg" 
                className="font-medium"
                asChild
              >
                <Link to={`/${type}/${id}`}>
                  More Info
                </Link>
              </Button>
              
              <Button 
                variant="secondary" 
                size="icon" 
                className="font-medium"
              >
                <Plus />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
