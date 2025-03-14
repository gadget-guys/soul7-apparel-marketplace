
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const SignupSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-center bg-no-repeat bg-contain"
        style={{ 
          backgroundImage: "url('/lovable-uploads/2d03674c-b744-44ea-a96d-a849b34bf2de.png')", 
          backgroundPosition: "center right",
          backgroundSize: "contain" 
        }}
      ></div>
      
      <div className="w-full max-w-md bg-black/70 p-8 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl relative z-10 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        
        <h2 className="text-2xl font-bold text-white mb-2">Account Created Successfully</h2>
        
        <p className="text-gray-300 mb-6">
          We've sent a confirmation email to your inbox. Please verify your email to complete the registration process.
        </p>
        
        <Button 
          onClick={() => navigate("/vip")}
          className="bg-teal-600 hover:bg-teal-700 text-white w-full"
        >
          Go to Sign In
        </Button>
        
        <Button 
          variant="outline"
          onClick={() => navigate("/")}
          className="mt-4 border-white/20 text-white hover:bg-white hover:text-black w-full"
        >
          Return to Shop
        </Button>
      </div>
    </div>
  );
};

export default SignupSuccess;
