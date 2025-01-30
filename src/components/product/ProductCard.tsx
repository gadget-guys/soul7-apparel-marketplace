import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const navigate = useNavigate();
  
  const handleImageClick = () => {
    console.log(`Navigating to ${category.toLowerCase()}`);
    navigate(`/${category.toLowerCase()}`);
  };

  const handleAddToCart = () => {
    console.log(`Adding ${name} to cart`);
    // Here you would typically add the item to a cart state/context
    navigate(`/${category.toLowerCase()}`);
  };

  return (
    <div key={id} className="group">
      <div 
        className="aspect-square bg-gray-100 mb-4 overflow-hidden cursor-pointer"
        onClick={handleImageClick}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-sm font-medium text-gray-900 mb-1">
        {name}
      </h3>
      <p className="text-sm text-gray-500 mb-4">{price}</p>
      <Button 
        variant="default" 
        className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/90] text-white"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;