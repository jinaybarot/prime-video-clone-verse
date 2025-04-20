
import React from "react";
import Layout from "@/components/layout/Layout";
import ContentRow from "@/components/ui/ContentRow";
import { tvShows, categories } from "@/data/mockData";

const TVShowsPage = () => {
  return (
    <Layout>
      <div className="container px-4 mx-auto pt-8 pb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">TV Shows</h1>
        
        <div className="space-y-8">
          <ContentRow
            title="Popular on Prime Video"
            movies={tvShows}
          />
          
          <ContentRow
            title="Action & Adventure Shows"
            movies={categories.action.filter(item => item.type === "tv")}
          />
          
          <ContentRow
            title="Comedies"
            movies={categories.comedy.filter(item => item.type === "tv")}
          />
          
          <ContentRow
            title="Dramas"
            movies={categories.drama.filter(item => item.type === "tv")}
          />
          
          <ContentRow
            title="Recently Added"
            movies={tvShows.sort(() => Math.random() - 0.5).slice(0, 8)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default TVShowsPage;
