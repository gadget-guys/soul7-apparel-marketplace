import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Hats = () => {
  console.log("Hats page rendering");
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Hats Collection</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="product-card">
              <img 
                src="/lovable-uploads/1f2bcc67-e233-45fb-98b2-0679ce7e8c0a.png" 
                alt="Black Logo Cap"
                className="w-full h-auto"
              />
              <h2 className="text-xl font-semibold mt-4">Black Logo Cap</h2>
              <p className="text-gray-600 mt-2">$29.99</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hats;