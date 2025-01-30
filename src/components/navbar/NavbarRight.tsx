import { Search, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Link } from "react-router-dom";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

interface NavbarRightProps {
  onSearchOpen: () => void;
}

const NavbarRight = ({ onSearchOpen }: NavbarRightProps) => {
  console.log("NavbarRight component rendered");
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
    <div className="flex-1 flex justify-end items-center space-x-4">
      <Button 
        variant="ghost" 
        size="icon"
        onClick={onSearchOpen}
        className="hover:bg-gray-100 transition-colors duration-200"
      >
        <Search className="h-5 w-5" />
      </Button>
      
      {user ? (
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost"
            onClick={handleSignOut}
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200"
          >
            Sign Out
          </Button>
          <Link 
            to="/vip" 
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200"
          >
            VIP
          </Link>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost"
            onClick={handleSignIn}
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200"
          >
            Sign In
          </Button>
          <Button 
            variant="outline"
            onClick={handleSignUp}
            className="text-sm font-medium bg-black text-white hover:bg-gray-800 transition-colors duration-200"
          >
            Sign Up
          </Button>
        </div>
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
  );
};

export default NavbarRight;