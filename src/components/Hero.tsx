import { Button } from "./ui/button";

interface HeroButton {
  label: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
}

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttons: HeroButton[];
}

const Hero = ({ 
  title = "SOUL 7 APPAREL",
  subtitle = "Elevate your style with our premium collection",
  backgroundImage = "/lovable-uploads/882be832-53ca-493f-9bc0-f34dd0c010ef.png",
  buttons = [
    { label: "Shop Now", variant: "primary" },
    { label: "View Collections", variant: "secondary" }
  ]
}: Partial<HeroProps>) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
        }}
      />

      <div className="relative z-10 text-center text-white space-y-6 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fadeIn">
          {title}
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fadeIn opacity-90">
          {subtitle}
        </p>
        <div className="flex justify-center gap-4 animate-fadeIn">
          {buttons.map((button, index) => (
            <Button
              key={index}
              size="lg"
              className={
                button.variant === "primary"
                  ? "bg-white text-black hover:bg-gray-100"
                  : "text-white border-white hover:bg-white/10"
              }
              variant={button.variant === "primary" ? "default" : "outline"}
              onClick={button.onClick}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;