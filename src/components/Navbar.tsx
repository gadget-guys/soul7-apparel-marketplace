
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SearchOverlay from "./navbar/SearchOverlay";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const supabase = useSupabaseClient();
  const user = useUser();

  const handleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/vip`
        }
      });
      if (error) throw error;
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleSignUp = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/vip`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
        }
      });
      if (error) throw error;
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

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

            {/* Right section */}
            <div className="flex items-center space-x-6">
              <Link to="/vip" className="text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200">
                VIP
              </Link>
              
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSearchOpen(true)}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <Search className="h-5 w-5" />
              </Button>
              
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white text-black min-w-[200px] border-none rounded-none">
                    <DropdownMenuItem className="hover:bg-black hover:text-white px-4 py-2">
                      <Link to="/settings" className="w-full">Account</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-black hover:text-white px-4 py-2">
                      <Link to="/vip" className="w-full">VIP Access</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="hover:bg-black hover:text-white px-4 py-2"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white text-black min-w-[200px] border-none rounded-none">
                    <DropdownMenuItem 
                      className="hover:bg-black hover:text-white px-4 py-2"
                      onClick={handleSignIn}
                    >
                      Sign In
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="hover:bg-black hover:text-white px-4 py-2"
                      onClick={handleSignUp}
                    >
                      Sign Up
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}

              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="hover:bg-gray-100 transition-colors duration-200"
                  >
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
