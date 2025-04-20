
import React from "react";
import Layout from "@/components/layout/Layout";
import ContentRow from "@/components/ui/ContentRow";
import { movies, categories } from "@/data/mockData";

const MoviesPage = () => {
  return (
    <Layout>
      <div className="container px-4 mx-auto pt-8 pb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">Movies</h1>
        
        <div className="space-y-8">
          <ContentRow
            title="Popular on Prime Video"
            movies={movies}
          />
          
          <ContentRow
            title="Action & Adventure Movies"
            movies={categories.action.filter(item => item.type === "movie")}
          />
          
          <ContentRow
            title="Comedies"
            movies={categories.comedy.filter(item => item.type === "movie")}
          />
          
          <ContentRow
            title="Dramas"
            movies={categories.drama.filter(item => item.type === "movie")}
          />
          
          <ContentRow
            title="New to Rent or Buy"
            movies={movies.filter(m => !m.isPrime).concat(movies.filter(m => m.isPrime).slice(0, 2))}
          />
        </div>
      </div>
    </Layout>
  );
};

export default MoviesPage;
