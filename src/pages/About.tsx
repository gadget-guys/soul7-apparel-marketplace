import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-gray-600 mb-8">
                Welcome to Soul 7 Apparel, where we provide top-quality apparel and exclusive designs for our clients.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to create unique, high-quality clothing that reflects your individual style and personality.
                We believe in sustainable fashion and ethical manufacturing practices.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;