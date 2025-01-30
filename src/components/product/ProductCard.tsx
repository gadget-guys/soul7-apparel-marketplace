import { Button } from "../ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
}

const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  return (
    <div key={id} className="group">
      <div className="aspect-square bg-gray-100 mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-sm font-medium text-gray-900 mb-1">
        {name}
      </h3>
      <p className="text-sm text-gray-500 mb-4">{price}</p>
      <Button variant="default" className="w-full bg-black hover:bg-gray-800">
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;