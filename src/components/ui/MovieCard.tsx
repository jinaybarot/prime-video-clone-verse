
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface Movie {
  id: string;
  title: string;
  posterPath: string;
  type: "movie" | "tv";
  rating?: string;
  year?: string;
  isPrime?: boolean;
}

interface MovieCardProps {
  movie: Movie;
  className?: string;
  size?: "small" | "medium" | "large";
}

const MovieCard = ({ movie, className, size = "medium" }: MovieCardProps) => {
  const cardSizes = {
    small: "w-32 md:w-36",
    medium: "w-40 md:w-48",
    large: "w-48 md:w-56",
  };

  return (
    <Link
      to={`/${movie.type}/${movie.id}`}
      className={cn(
        "group block rounded overflow-hidden transition-transform duration-300 hover:scale-105",
        cardSizes[size],
        className
      )}
    >
      <div className="relative aspect-[2/3] bg-prime-light rounded overflow-hidden">
        <img
          src={movie.posterPath}
          alt={movie.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
          <h3 className="text-white font-medium text-sm line-clamp-2">{movie.title}</h3>
          
          <div className="flex items-center mt-1 space-x-2 text-xs text-prime-muted">
            {movie.year && <span>{movie.year}</span>}
            {movie.rating && (
              <>
                <span className="w-1 h-1 rounded-full bg-prime-muted"></span>
                <span>{movie.rating}</span>
              </>
            )}
          </div>
        </div>
        
        {movie.isPrime && (
          <div className="absolute top-2 left-2 bg-prime-blue/90 px-2 py-0.5 text-[10px] text-white font-medium rounded">
            PRIME
          </div>
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
