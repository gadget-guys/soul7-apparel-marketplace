import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: "url('/lovable-uploads/a43d9a7f-f784-4cbb-acb7-ef65ab2f009c.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white space-y-6 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fadeIn">
          SOUL 7 APPAREL
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fadeIn opacity-90">
          Elevate your style with our premium collection
        </p>
        <div className="flex justify-center gap-4 animate-fadeIn">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100"
          >
            Shop Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            View Collections
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;