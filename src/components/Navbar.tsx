import { useState } from "react";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "./ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: "Men", href: "/categories/men" },
    { name: "Women", href: "/categories/women" },
    { name: "Kids", href: "/categories/kids" },
    { name: "Accessories", href: "/categories/accessories" },
  ];

  const shopItems = [
    { name: "New Arrivals", href: "/shop/new-arrivals" },
    { name: "Best Sellers", href: "/shop/best-sellers" },
    { name: "Sale", href: "/shop/sale" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <a href="/shop-all" className="text-sm font-medium text-gray-700 hover:text-black">
                    SHOP ALL
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>CATEGORIES</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      {categories.map((category) => (
                        <li key={category.name}>
                          <a
                            href={category.href}
                            className="block p-2 hover:bg-gray-100 rounded"
                          >
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>SHOP</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      {shopItems.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="block p-2 hover:bg-gray-100 rounded"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>USD</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      <li>
                        <button className="block w-full p-2 text-left hover:bg-gray-100 rounded">
                          USD ($)
                        </button>
                      </li>
                      <li>
                        <button className="block w-full p-2 text-left hover:bg-gray-100 rounded">
                          EUR (€)
                        </button>
                      </li>
                      <li>
                        <button className="block w-full p-2 text-left hover:bg-gray-100 rounded">
                          GBP (£)
                        </button>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
            <a href="/shop-all" className="block py-2 text-gray-600 hover:text-gray-900">
              SHOP ALL
            </a>
            <div className="py-2">
              <button className="flex justify-between items-center w-full text-gray-600 hover:text-gray-900">
                CATEGORIES
              </button>
            </div>
            <div className="py-2">
              <button className="flex justify-between items-center w-full text-gray-600 hover:text-gray-900">
                SHOP
              </button>
            </div>
            <div className="py-2">
              <button className="flex justify-between items-center w-full text-gray-600 hover:text-gray-900">
                USD
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;