import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductGrid title="New Arrivals" />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;