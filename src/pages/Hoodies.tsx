
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/product/ProductDetail";
import { Toaster } from "sonner";

const Hoodies = () => {
  console.log("Hoodies page rendering");
  
  // Additional detailed images for the hoodie product
  const productImages = [
    "/lovable-uploads/665b7229-d38b-43c6-9d00-f447d0eb702f.png", // Main image
    "/lovable-uploads/2ac38054-c8a3-40dd-bcd6-b5519f88cedc.png", // Back view
    "/lovable-uploads/882be832-53ca-493f-9bc0-f34dd0c010ef.png", // Side view
    "/lovable-uploads/e20ddc7b-4112-44e4-b0d8-7453101c3c7a.png", // Detail view
  ];
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16">
        <ProductDetail
          name="RUBBER & GUM HOODIE"
          price={74.50}
          image={productImages[0]}
          productImages={productImages}
          colors={[
            { display: "Black", value: "black", image: productImages[0] },
            { display: "White", value: "white", image: "/lovable-uploads/e30f0056-fb38-4400-8cc1-ae4283df659b.png" },
          ]}
        />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Hoodies;
