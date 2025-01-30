import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Link } from "react-router-dom";

interface NavbarRightProps {
  onSearchOpen: () => void;
}

const NavbarRight = ({ onSearchOpen }: NavbarRightProps) => {
  return (
    <div className="flex-1 flex justify-end items-center space-x-4">
      <Button 
        variant="ghost" 
        size="icon"
        onClick={onSearchOpen}
        className="hover:bg-gray-100 transition-colors"
      >
        <Search className="h-5 w-5" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon"
        className="hover:bg-gray-100 transition-colors"
      >
        <User className="h-5 w-5" />
      </Button>
      <Link 
        to="/vip" 
        className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
      >
        VIP
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-gray-100 transition-colors"
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