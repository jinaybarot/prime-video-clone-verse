
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Play, Plus, ChevronLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ContentRow from "@/components/ui/ContentRow";
import { getDetailedContent, movies, tvShows } from "@/data/mockData";

const DetailPage = () => {
  const { id, type } = useParams<{ id: string; type: string }>();
  const navigate = useNavigate();
  
  // Get content details
  const content = getDetailedContent(id || "");
  
  if (!content) {
    return (
      <Layout>
        <div className="container px-4 mx-auto py-12 text-center">
          <h2 className="text-2xl text-white mb-4">Content not found</h2>
          <Button onClick={() => navigate("/")} variant="prime">
            Go Home
          </Button>
        </div>
      </Layout>
    );
  }

  // Similar content based on type
  const similarContent = (type === "movie" ? movies : tvShows)
    .filter(item => item.id !== id)
    .slice(0, 8);

  return (
    <Layout>
      <div className="relative">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 z-10 bg-prime-dark/50"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back
        </Button>

        {/* Hero Banner */}
        <div 
          className="relative h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${content.backdropPath})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-prime-dark via-prime-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-prime-dark via-transparent to-transparent"></div>
        </div>
        
        {/* Content Details */}
        <div className="container px-4 mx-auto relative -mt-32 z-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Poster */}
            <div className="w-32 md:w-48 flex-shrink-0 rounded overflow-hidden shadow-lg">
              <img 
                src={content.posterPath} 
                alt={content.title} 
                className="w-full h-auto"
              />
            </div>
            
            {/* Details */}
            <div className="flex-grow max-w-2xl">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{content.title}</h1>
              
              <div className="flex flex-wrap items-center gap-2 text-sm text-prime-muted mb-4">
                {content.year && <span>{content.year}</span>}
                {content.rating && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-prime-muted"></span>
                    <span>{content.rating}</span>
                  </>
                )}
                {content.duration && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-prime-muted"></span>
                    <span>{content.duration}</span>
                  </>
                )}
              </div>
              
              {content.isPrime && (
                <div className="flex items-center mb-4">
                  <div className="bg-prime-blue text-white text-xs font-bold px-2 py-0.5 rounded">
                    PRIME
                  </div>
                  <span className="text-white text-sm ml-2">Included with Prime</span>
                </div>
              )}
              
              <p className="text-white mb-6">{content.description}</p>
              
              <div className="flex gap-3 flex-wrap mb-6">
                <Button 
                  variant="prime" 
                  size="lg" 
                  className="font-medium"
                  asChild
                >
                  <Link to={`/${content.type}/${content.id}/play`}>
                    <Play className="mr-1" />
                    Play
                  </Link>
                </Button>
                
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="font-medium"
                >
                  <Plus className="mr-1" />
                  Add to Watchlist
                </Button>
              </div>
              
              {/* Additional Details */}
              <div className="space-y-2 mb-6">
                {content.director && (
                  <div className="flex">
                    <span className="text-prime-muted w-24">Director:</span>
                    <span className="text-white">{content.director}</span>
                  </div>
                )}
                
                {content.genres && content.genres.length > 0 && (
                  <div className="flex">
                    <span className="text-prime-muted w-24">Genres:</span>
                    <span className="text-white">{content.genres.join(", ")}</span>
                  </div>
                )}
                
                {content.cast && content.cast.length > 0 && (
                  <div className="flex">
                    <span className="text-prime-muted w-24">Cast:</span>
                    <span className="text-white">{content.cast.join(", ")}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Content */}
        <div className="mt-12">
          <ContentRow
            title={`More Like ${content.title}`}
            movies={similarContent}
          />
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;
