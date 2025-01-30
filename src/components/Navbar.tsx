import { useState } from "react";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "SHOP ALL", href: "/shop-all" },
    { name: "CATEGORIES", href: "/categories", hasDropdown: true },
    { name: "SHOP", href: "/shop", hasDropdown: true },
    { name: "USD", href: "#", hasDropdown: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors flex items-center"
              >
                {item.name}
                {item.hasDropdown && (
                  <span className="ml-1 text-xs">▼</span>
                )}
              </a>
            ))}
          </div>

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
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div className="space-y-4 py-4">
                  <h2 className="text-lg font-semibold text-center">Sign In</h2>
                  <Button className="w-full">Sign in with Email</Button>
                  <Button variant="outline" className="w-full">
                    Create Account
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

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
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slideDown">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;