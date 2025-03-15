
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/product/ProductDetail";
import { Toaster } from "sonner";

const Hats = () => {
  console.log("Hats page rendering");
  
  // Additional detailed images for the hat product
  const productImages = [
    "/lovable-uploads/1f2bcc67-e233-45fb-98b2-0679ce7e8c0a.png", // Main image
    "/lovable-uploads/9bc4aab1-eb34-4267-9ed9-13412726ef6e.png", // Additional view
    "/lovable-uploads/95345131-fa9a-4d77-a91c-b82ae0d294d8.png", // Another angle
    "/lovable-uploads/e4633585-3030-4cfb-b4ee-7080d7505ff2.png", // Detail view
  ];
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16">
        <ProductDetail
          name="BLACK LOGO CAP"
          price={29.99}
          image={productImages[0]}
          productImages={productImages}
          colors={[
            { display: "Black", value: "black", image: productImages[0] },
            { display: "Gray", value: "gray", image: "/lovable-uploads/a43d9a7f-f784-4cbb-acb7-ef65ab2f009c.png" },
          ]}
        />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Hats;
