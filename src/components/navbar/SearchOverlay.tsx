import { X } from "lucide-react";
import { Button } from "../ui/button";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  if (!isOpen) return null;

  return (
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
          onClick={onClose}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default SearchOverlay;