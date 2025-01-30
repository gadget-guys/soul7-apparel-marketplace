import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

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
    { label: "Shop Now", variant: "primary" },
    { label: "Vault Opening Soon", variant: "secondary" }
  ]
}: Partial<HeroProps>) => {
  const navigate = useNavigate();

  const handleVaultClick = () => {
    navigate('/vault');
  };

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
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fadeIn">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100"
            variant="default"
          >
            {buttons[0].label}
          </Button>
          <Button
            size="lg"
            className="font-righteous text-white border-white hover:bg-white/10"
            variant="outline"
            onClick={handleVaultClick}
          >
            {buttons[1].label}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;