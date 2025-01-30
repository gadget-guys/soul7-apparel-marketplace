import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/product/ProductDetail";

const Hats = () => {
  console.log("Hats page rendering");
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16">
        <ProductDetail
          name="BLACK LOGO CAP"
          price={29.99}
          image="/lovable-uploads/1f2bcc67-e233-45fb-98b2-0679ce7e8c0a.png"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Hats;