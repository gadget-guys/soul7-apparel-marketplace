import { useState } from "react";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold tracking-wider">
              SOUL 7 APPAREL
            </a>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
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

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slideDown">
            <a href="/shop-all" className="block py-2 text-gray-600 hover:text-gray-900">
              SHOP ALL
            </a>
            <a href="/categories" className="block py-2 text-gray-600 hover:text-gray-900">
              CATEGORIES
            </a>
            <a href="/shop" className="block py-2 text-gray-600 hover:text-gray-900">
              SHOP
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;