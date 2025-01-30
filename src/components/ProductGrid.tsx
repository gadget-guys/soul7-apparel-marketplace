import { Button } from "./ui/button";

const products = [
  {
    id: 1,
    name: "Classic Black Hoodie",
    price: "$89.99",
    image: "/placeholder.svg",
    category: "New Arrivals",
  },
  {
    id: 2,
    name: "Essential T-Shirt",
    price: "$39.99",
    image: "/placeholder.svg",
    category: "New Arrivals",
  },
  {
    id: 3,
    name: "Urban Cap",
    price: "$29.99",
    image: "/placeholder.svg",
    category: "New Arrivals",
  },
  {
    id: 4,
    name: "Streetwear Hoodie",
    price: "$99.99",
    image: "/placeholder.svg",
    category: "New Arrivals",
  },
];

const ProductGrid = ({ title }: { title: string }) => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-square bg-gray-100 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{product.price}</p>
              <Button variant="default" className="w-full bg-black hover:bg-gray-800">
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;