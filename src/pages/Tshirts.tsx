import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Tshirts = () => {
  console.log("T-shirts page rendering");
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">T-Shirts Collection</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="product-card space-y-4">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/lovable-uploads/e30f0056-fb38-4400-8cc1-ae4283df659b.png" 
                  alt="White Graphic T-Shirt with Back Print"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">White Graphic T-Shirt</h2>
                <p className="text-gray-600">$39.99</p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                  >
                    Add to Cart
                  </Button>
                  <Button 
                    variant="default"
                    className="flex-1"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tshirts;