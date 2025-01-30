import { useState } from "react";
import NavbarLeft from "./navbar/NavbarLeft";
import NavbarRight from "./navbar/NavbarRight";
import SearchOverlay from "./navbar/SearchOverlay";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center h-16 px-4">
            {/* Left section */}
            <div className="flex items-center space-x-8">
              <a href="/shop" className="text-sm font-medium uppercase">
                Shop All
              </a>
              <div className="flex items-center">
                <span className="text-sm font-medium uppercase">Categories</span>
                <span className="ml-1">+</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium uppercase">Drop</span>
                <span className="ml-1">+</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium uppercase">USD</span>
                <span className="ml-1">+</span>
              </div>
            </div>

            {/* Center logo with diagonal lines */}
            <div className="flex items-center">
              <div className="w-8 h-[1px] bg-black transform rotate-45 mr-4"></div>
              <a href="/" className="text-2xl font-righteous tracking-wider">
                <span className="mr-2">SOUL</span>
                <span>7</span>
              </a>
              <div className="w-8 h-[1px] bg-black transform -rotate-45 ml-4"></div>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => setSearchOpen(true)}
                className="flex items-center text-sm font-medium uppercase"
              >
                <span className="mr-1">⌕</span>
                Search
              </button>
              <a href="/vault" className="text-sm font-medium uppercase">
                Vault
              </a>
              <a href="/vip" className="text-sm font-medium uppercase">
                VIP
              </a>
              <div className="flex items-center">
                <span className="text-sm font-medium">-1</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;