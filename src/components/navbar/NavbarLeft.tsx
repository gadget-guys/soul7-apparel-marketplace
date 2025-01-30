import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const NavbarLeft = () => {
  console.log("NavbarLeft component rendered");
  const currencies = [
    "AED", "AUD", "CAD", "CHF", "CZK", "DKK", "EUR",
    "GBP", "HKD", "ILS", "JPY", "KRW", "MYR", "NZD",
    "PLN", "SEK", "SGD", "USD"
  ];

  return (
    <div className="flex-1 hidden md:flex items-center space-x-8">
      <a 
        href="/shop-all" 
        className="text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200 hover:bg-gray-100 px-3 py-2 rounded-md"
      >
        SHOP ALL
      </a>
      <DropdownMenu>
        <DropdownMenuTrigger className="group flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200 hover:bg-gray-100 px-3 py-2 rounded-md">
          <span>CATEGORIES</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black text-white min-w-[200px] border-none rounded-none animate-fadeIn z-50">
          <DropdownMenuItem className="hover:bg-white hover:text-black transition-colors duration-200 px-4 py-2 cursor-pointer">
            PANDORA'S BOX
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-white hover:text-black transition-colors duration-200 px-4 py-2 cursor-pointer">
            VAULT 007
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className="group flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200 hover:bg-gray-100 px-3 py-2 rounded-md">
          <span>SHOP</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black text-white min-w-[200px] border-none rounded-none animate-fadeIn z-50">
          <DropdownMenuItem className="hover:bg-white hover:text-black transition-colors duration-200 px-4 py-2 cursor-pointer">
            NEW ARRIVALS
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-white hover:text-black transition-colors duration-200 px-4 py-2 cursor-pointer">
            BEST SELLERS
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className="group flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200 hover:bg-gray-100 px-3 py-2 rounded-md">
          <span>USD</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black text-white min-w-[200px] border-none rounded-none animate-fadeIn z-50 grid grid-cols-3 gap-1 p-4">
          {currencies.map((currency) => (
            <DropdownMenuItem 
              key={currency}
              className="hover:bg-white hover:text-black transition-colors duration-200 justify-center cursor-pointer"
            >
              {currency}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavbarLeft;