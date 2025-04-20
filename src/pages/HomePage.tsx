
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/ui/Hero";
import ContentRow from "@/components/ui/ContentRow";
import { heroItems, movies, tvShows, originals } from "@/data/mockData";

const HomePage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const currentHero = heroItems[currentHeroIndex];

  // Auto rotate hero banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroItems.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <Hero
        id={currentHero.id}
        title={currentHero.title}
        description={currentHero.description}
        type={currentHero.type}
        backdropPath={currentHero.backdropPath}
        logoPath={currentHero.logoPath}
        isPrime={currentHero.isPrime}
      />

      <div className="mt-4 space-y-8 pb-12">
        <ContentRow
          title="Prime Originals"
          movies={originals}
          seeAllLink="/originals"
        />
        
        <ContentRow
          title="Movies We Think You'll Like"
          movies={movies}
          seeAllLink="/movies"
        />
        
        <ContentRow
          title="Popular TV Shows"
          movies={tvShows}
          seeAllLink="/tv"
        />
        
        <ContentRow
          title="Top 10 in Your Country"
          movies={[...movies, ...tvShows].slice(0, 10)}
          cardSize="large"
        />
        
        <ContentRow
          title="Recently Added"
          movies={[...movies, ...tvShows].sort(() => Math.random() - 0.5).slice(0, 8)}
        />
      </div>
    </Layout>
  );
};

export default HomePage;
