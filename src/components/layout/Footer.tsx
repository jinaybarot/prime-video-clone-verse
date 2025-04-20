
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-prime-dark pt-8 pb-12 border-t border-prime-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="mb-6">
            <img 
              src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png" 
              alt="Prime Video" 
              className="h-6"
            />
          </Link>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link to="/terms" className="text-sm text-prime-muted hover:text-white">
              Terms and Privacy Notice
            </Link>
            <Link to="/feedback" className="text-sm text-prime-muted hover:text-white">
              Send us feedback
            </Link>
            <Link to="/help" className="text-sm text-prime-muted hover:text-white">
              Help
            </Link>
            <Link to="/cookies" className="text-sm text-prime-muted hover:text-white">
              Cookies Notice
            </Link>
            <Link to="/interest" className="text-sm text-prime-muted hover:text-white">
              Interest-Based Ads
            </Link>
          </div>
          <p className="text-xs text-prime-muted text-center">
            © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
