
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItemProps {
  to: string;
  label: string;
  active?: boolean;
}

const NavItem = ({ to, label, active }: NavItemProps) => (
  <Link
    to={to}
    className={cn(
      "text-prime-text transition-colors hover:text-white text-sm md:text-base relative py-2 px-3",
      active && "text-white font-medium after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-prime-blue"
    )}
  >
    {label}
  </Link>
);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("home");

  return (
    <nav className="sticky top-0 z-50 bg-prime-dark border-b border-prime-light">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto lg:px-6">
        <div className="flex items-center">
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          )}
          
          <Link to="/" className="flex items-center h-10">
            <img 
              src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png" 
              alt="Prime Video" 
              className="h-5 md:h-6"
            />
          </Link>
          
          {!isMobile && (
            <div className="hidden md:flex items-center ml-6 space-x-1">
              <NavItem to="/" label="Home" active={activeTab === "home"} />
              <NavItem to="/tv" label="TV Shows" active={activeTab === "tv"} />
              <NavItem to="/movies" label="Movies" active={activeTab === "movies"} />
              <NavItem to="/originals" label="Originals" active={activeTab === "originals"} />
              <div className="relative group">
                <button className="flex items-center text-prime-text hover:text-white text-sm md:text-base py-2 px-3">
                  Categories <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div className="absolute left-0 z-10 hidden w-48 p-2 bg-prime-light border border-prime-hover rounded shadow-lg group-hover:block">
                  <Link to="/category/action" className="block px-4 py-2 text-sm text-prime-text hover:bg-prime-hover hover:text-white">
                    Action & Adventure
                  </Link>
                  <Link to="/category/drama" className="block px-4 py-2 text-sm text-prime-text hover:bg-prime-hover hover:text-white">
                    Drama
                  </Link>
                  <Link to="/category/comedy" className="block px-4 py-2 text-sm text-prime-text hover:bg-prime-hover hover:text-white">
                    Comedy
                  </Link>
                  <Link to="/category/documentary" className="block px-4 py-2 text-sm text-prime-text hover:bg-prime-hover hover:text-white">
                    Documentary
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-3">
          <Link to="/search">
            <Button variant="ghost" size="icon" className="text-prime-text hover:text-white">
              <Search size={20} />
            </Button>
          </Link>
          <div className="relative group">
            <Button variant="ghost" className="flex items-center text-prime-text hover:text-white">
              <User size={20} className="mr-1" />
              <span className="hidden md:inline">Account</span>
              <ChevronDown className="ml-1 w-4 h-4" />
            </Button>
            <div className="absolute right-0 z-10 hidden w-48 p-2 mt-1 bg-prime-light border border-prime-hover rounded shadow-lg group-hover:block">
              <Link to="/profile" className="block px-4 py-2 text-sm text-prime-text hover:bg-prime-hover hover:text-white">
                Your Profile
              </Link>
              <Link to="/watchlist" className="block px-4 py-2 text-sm text-prime-text hover:bg-prime-hover hover:text-white">
                Watchlist
              </Link>
              <Link to="/settings" className="block px-4 py-2 text-sm text-prime-text hover:bg-prime-hover hover:text-white">
                Settings
              </Link>
              <div className="my-1 border-t border-prime-hover"></div>
              <Link to="/signin" className="block px-4 py-2 text-sm text-prime-text hover:bg-prime-hover hover:text-white">
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 z-40 flex bg-prime-dark">
          <div className="w-full max-w-sm p-4 bg-prime-dark border-r border-prime-light h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png" 
                  alt="Prime Video" 
                  className="h-5"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={22} />
              </Button>
            </div>
            <div className="space-y-1">
              <Link 
                to="/" 
                className="block px-4 py-3 text-white hover:bg-prime-hover rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/tv" 
                className="block px-4 py-3 text-white hover:bg-prime-hover rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                TV Shows
              </Link>
              <Link 
                to="/movies" 
                className="block px-4 py-3 text-white hover:bg-prime-hover rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Movies
              </Link>
              <Link 
                to="/originals" 
                className="block px-4 py-3 text-white hover:bg-prime-hover rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Originals
              </Link>
              <div className="px-4 py-3">
                <div className="mb-2 text-white font-medium">Categories</div>
                <div className="pl-2 space-y-1">
                  <Link 
                    to="/category/action" 
                    className="block px-4 py-2 text-sm text-prime-text hover:bg-prime-hover hover:text-white rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Action & Adventure
                  </Link>
                  <Link 
                    to="/category/drama" 
                    className="block px-4 py-2 text-sm text-prime-text hover:bg-prime-hover hover:text-white rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Drama
                  </Link>
                  <Link 
                    to="/category/comedy" 
                    className="block px-4 py-2 text-sm text-prime-text hover:bg-prime-hover hover:text-white rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Comedy
                  </Link>
                  <Link 
                    to="/category/documentary" 
                    className="block px-4 py-2 text-sm text-prime-text hover:bg-prime-hover hover:text-white rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Documentary
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
