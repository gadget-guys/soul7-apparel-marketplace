import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Hoodies = () => {
  console.log("Hoodies page rendering");
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Hoodies Collection</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="product-card">
              <img 
                src="/lovable-uploads/665b7229-d38b-43c6-9d00-f447d0eb702f.png" 
                alt="Black Cherry Blossom Hoodie"
                className="w-full h-auto"
              />
              <h2 className="text-xl font-semibold mt-4">Black Cherry Blossom Hoodie</h2>
              <p className="text-gray-600 mt-2">$89.99</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hoodies;