import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/product/ProductDetail";

const Tshirts = () => {
  console.log("T-shirts page rendering");
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16">
        <ProductDetail
          name="WHITE GRAPHIC T-SHIRT"
          price={39.99}
          image="/lovable-uploads/e30f0056-fb38-4400-8cc1-ae4283df659b.png"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Tshirts;