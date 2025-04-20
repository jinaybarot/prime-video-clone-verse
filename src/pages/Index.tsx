
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// This is just a redirect to home page
const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null;
};

export default Index;
