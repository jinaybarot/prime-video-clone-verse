
import React from "react";
import Layout from "@/components/layout/Layout";
import ContentRow from "@/components/ui/ContentRow";
import Hero from "@/components/ui/Hero";
import { originals } from "@/data/mockData";

const OriginalsPage = () => {
  // Use the first original as hero
  const featuredOriginal = {
    id: originals[0].id,
    title: originals[0].title,
    description: "Experience our award-winning Amazon Originals. Exclusive movies and TV shows you can only watch on Prime Video.",
    type: originals[0].type,
    backdropPath: "https://images.unsplash.com/photo-1515061093106-e6790ab99756?w=1600&h=900&auto=format&fit=crop&q=80",
    isPrime: true
  };

  return (
    <Layout>
      <Hero
        id={featuredOriginal.id}
        title={featuredOriginal.title}
        description={featuredOriginal.description}
        type={featuredOriginal.type as "movie" | "tv"}
        backdropPath={featuredOriginal.backdropPath}
        isPrime={featuredOriginal.isPrime}
      />
      
      <div className="container px-4 mx-auto pt-8 pb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">Amazon Originals</h1>
        
        <div className="space-y-8">
          <ContentRow
            title="Amazon Original Series"
            movies={originals.filter(item => item.type === "tv")}
            cardSize="large"
          />
          
          <ContentRow
            title="Amazon Original Movies"
            movies={originals.filter(item => item.type === "movie").length > 0 ? 
              originals.filter(item => item.type === "movie") : 
              originals.slice(0, 4).map(item => ({...item, type: "movie"}))}
            cardSize="large"
          />
          
          <ContentRow
            title="Award Winners"
            movies={originals.sort(() => Math.random() - 0.5).slice(0, 6)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default OriginalsPage;
