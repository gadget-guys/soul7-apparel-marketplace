import ProductCard from "./product/ProductCard";

const products = [
  {
    id: 1,
    name: "Classic Black Hoodie",
    price: "$89.99",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Essential T-Shirt",
    price: "$39.99",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Urban Cap",
    price: "$29.99",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Streetwear Hoodie",
    price: "$99.99",
    image: "/placeholder.svg",
  },
];

const ProductGrid = ({ title }: { title: string }) => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;