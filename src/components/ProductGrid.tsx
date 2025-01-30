import ProductCard from "./product/ProductCard";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

interface ProductGridProps {
  title: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Black Cherry Blossom Hoodie",
    price: "$89.99",
    image: "/lovable-uploads/665b7229-d38b-43c6-9d00-f447d0eb702f.png",
    category: "Hoodies"
  },
  {
    id: 2,
    name: "White Graphic T-Shirt",
    price: "$39.99",
    image: "/lovable-uploads/2764071e-43fc-4a6c-844a-a7510a8f0f4a.png",
    category: "T-shirts"
  },
  {
    id: 3,
    name: "Black Logo Cap",
    price: "$29.99",
    image: "/lovable-uploads/1f2bcc67-e233-45fb-98b2-0679ce7e8c0a.png",
    category: "Hats"
  },
  {
    id: 4,
    name: "Classic Black Hoodie",
    price: "$99.99",
    image: "/lovable-uploads/665b7229-d38b-43c6-9d00-f447d0eb702f.png",
    category: "Hoodies"
  },
];

const ProductGrid = ({ title }: ProductGridProps) => {
  console.log("ProductGrid rendering with title:", title);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;