
import { Search, ShoppingCart, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavbarRightProps {
  onSearchOpen: () => void;
}

const NavbarRight = ({ onSearchOpen }: NavbarRightProps) => {
  console.log("NavbarRight component rendered");
  const supabase = useSupabaseClient();
  const user = useUser();

  const handleSignIn = async () => {
    try {
      window.location.href = "/vip";
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleSignUp = async () => {
    try {
      window.location.href = "/signup";
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
          <Link to="/vip-access" className="text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200">
            VIP
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.user_metadata?.avatar_url} alt={user.email || ''} />
                  <AvatarFallback>{user.email?.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/settings" className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/vip-access" className="flex items-center">
                  <span>VIP Access</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSignOut}>
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
