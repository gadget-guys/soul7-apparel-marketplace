import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
            <div className="service-box">
              <div className="service">
                <h3 className="text-xl font-semibold mb-4">Custom Designs</h3>
                <p>Unique and exclusive apparel designs</p>
              </div>
              <div className="service">
                <h3 className="text-xl font-semibold mb-4">Limited Editions</h3>
                <p>Special collections for our VIP members</p>
              </div>
              <div className="service">
                <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
                <p>High-quality materials and craftsmanship</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;