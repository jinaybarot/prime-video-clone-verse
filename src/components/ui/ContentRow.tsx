
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MovieCard, { Movie } from "@/components/ui/MovieCard";
import { cn } from "@/lib/utils";

interface ContentRowProps {
  title: string;
  movies: Movie[];
  className?: string;
  cardSize?: "small" | "medium" | "large";
  seeAllLink?: string;
}

const ContentRow = ({ 
  title, 
  movies, 
  className, 
  cardSize = "medium",
  seeAllLink,
}: ContentRowProps) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  
  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8; // Scroll by 80% of the visible width
    
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={cn("py-4", className)}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg md:text-xl font-medium text-white">{title}</h2>
          {seeAllLink && (
            <a 
              href={seeAllLink} 
              className="text-prime-blue text-sm hover:underline"
            >
              See all
            </a>
          )}
        </div>
        
        <div className="relative group">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-3 py-2 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {movies.map((movie) => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                size={cardSize}
              />
            ))}
          </div>
          
          <Button
            onClick={() => scroll("left")}
            variant="secondary"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-prime-dark/80 border border-prime-muted/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            onClick={() => scroll("right")}
            variant="secondary"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-prime-dark/80 border border-prime-muted/20"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentRow;
