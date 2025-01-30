import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
            Welcome to Soul 7 Apparel, where we provide top-quality apparel and exclusive designs for our clients.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Custom Designs</h3>
              <p className="text-gray-600">Unique and exclusive apparel designs</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Limited Editions</h3>
              <p className="text-gray-600">Special collections for our VIP members</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">High-quality materials and craftsmanship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-600 italic mb-4">"Amazing designs and quality! Highly recommended."</p>
              <p className="font-semibold">- Sarah J.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-600 italic mb-4">"Top-notch quality and excellent customer support."</p>
              <p className="font-semibold">- Michael R.</p>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid title="New Arrivals" />
      <Newsletter />
      
      {/* Updated Footer with social links */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-gray-400">&copy; 2025 Soul 7 Apparel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;