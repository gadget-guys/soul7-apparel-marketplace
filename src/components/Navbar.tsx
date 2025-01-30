import { useState } from "react";
import { ChevronDown, Search, ShoppingCart, User, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

const currencies = [
  "AED", "AUD", "CAD", "CHF", "CZK", "DKK", "EUR",
  "GBP", "HKD", "ILS", "JPY", "KRW", "MYR", "NZD",
  "PLN", "SEK", "SGD", "USD"
];

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black z-50 p-4">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <div className="text-white text-4xl font-bold">SEARCH</div>
            <div className="flex-1 mx-8">
              <input
                type="text"
                placeholder="SEARCH"
                className="w-full bg-transparent border-b border-white text-white text-xl focus:outline-none"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(false)}
              className="text-white"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left section */}
            <div className="flex-1 hidden md:flex items-center space-x-8">
              <a href="/shop-all" className="text-sm font-medium text-gray-700 hover:text-black">
                SHOP ALL
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-black">
                  <span>CATEGORIES</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black text-white min-w-[200px] border-none rounded-none">
                  <DropdownMenuItem className="hover:bg-white hover:text-black">
                    PANDORA'S BOX
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white hover:text-black">
                    VAULT 007
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-black">
                  <span>SHOP</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black text-white min-w-[200px] border-none rounded-none">
                  <DropdownMenuItem className="hover:bg-white hover:text-black">
                    NEW ARRIVALS
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white hover:text-black">
                    BEST SELLERS
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-black">
                  <span>USD</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black text-white min-w-[200px] border-none rounded-none grid grid-cols-3 gap-1 p-4">
                  {currencies.map((currency) => (
                    <DropdownMenuItem 
                      key={currency}
                      className="hover:bg-white hover:text-black justify-center"
                    >
                      {currency}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Center Logo */}
            <div className="flex-1 flex justify-center">
              <a href="/" className="text-xl font-bold tracking-wider">
                SOUL 7 APPAREL
              </a>
            </div>

            {/* Right section */}
            <div className="flex-1 flex justify-end items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <a href="/vip" className="text-sm font-medium text-gray-700 hover:text-black">
                VIP
              </a>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col h-full">
                    <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
                    <div className="flex-grow">
                      <p className="text-gray-500">Your cart is empty</p>
                    </div>
                    <Button className="w-full">Checkout</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;