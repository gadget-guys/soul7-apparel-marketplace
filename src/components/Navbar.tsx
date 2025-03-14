
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SearchOverlay from "./navbar/SearchOverlay";
import NavbarRight from "./navbar/NavbarRight";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center h-16 px-4">
            {/* Left section */}
            <div className="flex items-center space-x-6">
              {/* Shop by category dropdowns */}
              <DropdownMenu>
                <DropdownMenuTrigger className="group flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200">
                  <span>MEN</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-black min-w-[200px] border-none rounded-none">
                  <DropdownMenuItem className="hover:bg-black hover:text-white px-4 py-2">
                    <Link to="/t-shirts" className="w-full">T-Shirts</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-black hover:text-white px-4 py-2">
                    <Link to="/hoodies" className="w-full">Hoodies</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-black hover:text-white px-4 py-2">
                    <Link to="/hats" className="w-full">Hats</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="group flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200">
                  <span>WOMEN</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-black min-w-[200px] border-none rounded-none">
                  <DropdownMenuItem className="hover:bg-black hover:text-white px-4 py-2">
                    <Link to="/t-shirts" className="w-full">T-Shirts</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-black hover:text-white px-4 py-2">
                    <Link to="/hoodies" className="w-full">Hoodies</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-black hover:text-white px-4 py-2">
                    <Link to="/hats" className="w-full">Hats</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="group flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200">
                  <span>KIDS</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-black min-w-[200px] border-none rounded-none">
                  <DropdownMenuItem className="hover:bg-black hover:text-white px-4 py-2">
                    <Link to="/t-shirts" className="w-full">T-Shirts</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-black hover:text-white px-4 py-2">
                    <Link to="/hoodies" className="w-full">Hoodies</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-black hover:text-white px-4 py-2">
                    <Link to="/hats" className="w-full">Hats</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/drops" className="text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200">
                DROPS
              </Link>
            </div>

            {/* Center logo with diagonal lines */}
            <div className="flex items-center">
              <div className="w-8 h-[1px] bg-black transform rotate-45 mr-4"></div>
              <Link to="/" className="text-2xl font-righteous tracking-wider">
                <span className="mr-2">SOUL</span>
                <span>7</span>
              </Link>
              <div className="w-8 h-[1px] bg-black transform -rotate-45 ml-4"></div>
            </div>

            {/* Right section - Now using NavbarRight component */}
            <NavbarRight onSearchOpen={() => setSearchOpen(true)} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
