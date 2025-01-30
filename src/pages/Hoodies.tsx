import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/product/ProductDetail";

const Hoodies = () => {
  console.log("Hoodies page rendering");
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16">
        <ProductDetail
          name="RUBBER & GUM HOODIE"
          price={74.50}
          image="/lovable-uploads/665b7229-d38b-43c6-9d00-f447d0eb702f.png"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Hoodies;