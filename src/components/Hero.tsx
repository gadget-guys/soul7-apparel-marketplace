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
    { label: "Shop Now", variant: "primary" }
  ]
}: Partial<HeroProps>) => {
  const navigate = useNavigate();

  const handleVaultClick = () => {
    navigate('/vault');
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div
        className="absolute inset-0 bg-black/60"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "contrast(120%) brightness(80%)",
        }}
      />

      <div className="relative z-10 text-center text-white space-y-6 px-4">
        <div className="flex flex-col items-center justify-center gap-8 animate-fadeIn">
          <div className="animated-box">
            <img 
              src="/lovable-uploads/9bc4aab1-eb34-4267-9ed9-13412726ef6e.png" 
              alt="Soul 7 Apparel" 
              className="w-[150px] h-auto"
            />
          </div>
          <span 
            className="font-righteous text-white text-2xl cursor-pointer hover:text-gray-200"
            onClick={handleVaultClick}
          >
            Vault Opening Soon
          </span>
          <a href="/vip" className="vip-login-btn">
            VIP Access
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;