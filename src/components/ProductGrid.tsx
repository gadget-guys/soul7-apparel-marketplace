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
    <div className="py-16 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                <Button className="w-full mt-4">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;