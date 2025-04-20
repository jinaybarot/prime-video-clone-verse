
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="container px-4 mx-auto py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-prime-muted text-lg mb-8 text-center max-w-md">
          We couldn't find the page you were looking for. It might have been moved or doesn't exist.
        </p>
        <Button 
          variant="prime" 
          size="lg" 
          onClick={() => navigate("/")}
        >
          Go to Prime Video Home
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
