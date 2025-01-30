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
  backgroundImage = "/lovable-uploads/9bc4aab1-eb34-4267-9ed9-13412726ef6e.png",
  buttons = [
    { label: "Shop Now", variant: "primary" }
  ]
}: Partial<HeroProps>) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 text-center text-white space-y-6 px-4">
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