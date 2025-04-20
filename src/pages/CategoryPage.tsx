
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import MovieCard from "@/components/ui/MovieCard";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/mockData";
import { ChevronLeft } from "lucide-react";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  
  // Get category content
  const categoryContent = category ? categories[category as keyof typeof categories] : [];
  
  // Get readable category name
  const getCategoryName = () => {
    switch (category) {
      case "action":
        return "Action & Adventure";
      case "comedy":
        return "Comedy";
      case "drama":
        return "Drama";
      case "documentary":
        return "Documentary";
      default:
        return category;
    }
  };

  return (
    <Layout>
      <div className="container px-4 mx-auto py-8">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mr-4"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold text-white">{getCategoryName()}</h1>
        </div>
        
        {categoryContent.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-8">
            {categoryContent.map((item) => (
              <MovieCard key={item.id} movie={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl text-white mb-2">No content found</h3>
            <p className="text-prime-muted mb-4">
              We couldn't find any content in this category.
            </p>
            <Button variant="prime" onClick={() => navigate("/")}>
              Go Home
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
