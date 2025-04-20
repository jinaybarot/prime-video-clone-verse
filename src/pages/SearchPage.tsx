
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";
import Layout from "@/components/layout/Layout";
import MovieCard from "@/components/ui/MovieCard";
import { Input } from "@/components/ui/input";
import { searchContent } from "@/data/mockData";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [searchResults, setSearchResults] = useState(searchContent(searchTerm));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchTerm });
    setSearchResults(searchContent(searchTerm));
  };

  useEffect(() => {
    const query = searchParams.get("q") || "";
    setSearchTerm(query);
    setSearchResults(searchContent(query));
  }, [searchParams]);

  return (
    <Layout>
      <div className="container px-4 mx-auto py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">Search</h1>
        
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for movies, TV shows, and more..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-prime-light text-white placeholder:text-prime-muted border-prime-muted focus:border-prime-blue h-12 pl-12"
            />
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-prime-muted h-5 w-5" />
          </div>
        </form>
        
        <div className="mb-8">
          {searchTerm ? (
            <p className="text-prime-muted mb-4">
              {searchResults.length} results for "{searchTerm}"
            </p>
          ) : (
            <p className="text-prime-muted mb-4">
              Popular searches
            </p>
          )}
          
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {searchResults.map((item) => (
                <MovieCard key={item.id} movie={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl text-white mb-2">No results found</h3>
              <p className="text-prime-muted">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
