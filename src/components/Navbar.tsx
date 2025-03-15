
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import SearchOverlay from "./navbar/SearchOverlay";
import NavbarRight from "./NavbarRight";

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

            {/* Center logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link to="/" className="flex items-center justify-center">
                <img
                  src="/lovable-uploads/eb91ef95-6b63-464d-bcef-a9b62198a243.png"
                  alt="SOUL SEVEN"
                  className="h-8"
                />
              </Link>
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
