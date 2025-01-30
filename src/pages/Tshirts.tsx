import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Tshirts = () => {
  console.log("T-shirts page rendering");
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">T-Shirts Collection</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="product-card">
              <img 
                src="/lovable-uploads/2764071e-43fc-4a6c-844a-a7510a8f0f4a.png" 
                alt="White Graphic T-Shirt"
                className="w-full h-auto"
              />
              <h2 className="text-xl font-semibold mt-4">White Graphic T-Shirt</h2>
              <p className="text-gray-600 mt-2">$39.99</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tshirts;