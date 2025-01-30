import { useState } from "react";
import NavbarLeft from "./navbar/NavbarLeft";
import NavbarRight from "./navbar/NavbarRight";
import SearchOverlay from "./navbar/SearchOverlay";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavbarLeft />
            <div className="flex-1 flex justify-center">
              <a href="/" className="text-xl font-bold tracking-wider hover:opacity-80 transition-opacity">
                SOUL 7 APPAREL
              </a>
            </div>
            <NavbarRight onSearchOpen={() => setSearchOpen(true)} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;