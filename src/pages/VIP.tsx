import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const VIP = () => {
  console.log("VIP component mounted"); // Added for debugging
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4">
      {/* Back to Shop Button */}
      <button 
        onClick={() => navigate("/")}
        className="absolute top-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 hover:bg-gray-900 transition-colors"
      >
        BACK TO SHOP
      </button>

      <div className="w-full max-w-md space-y-8 relative">
        {/* Login/Signup Toggle */}
        <div className="text-center space-x-4 text-3xl font-mono mb-12">
          <span className="text-white">LOGIN</span>
          <span className="text-gray-500">//</span>
          <span className="text-gray-500">SIGNUP</span>
        </div>

        {/* Description */}
        <p className="text-white text-center mb-8">
          Elevate your experience with exclusive perks, early releases, and special rewards as part of our loyalty program.
        </p>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Button 
            variant="outline" 
            className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors"
            onClick={() => console.log("Google login")}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
            SIGN IN WITH GOOGLE
          </Button>
          <Button 
            variant="outline"
            className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors"
            onClick={() => console.log("Discord login")}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            SIGN IN WITH DISCORD
          </Button>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <Input
              type="email"
              placeholder="ENTER YOUR E-MAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-white text-white placeholder:text-gray-400"
            />
          </div>
          <div className="relative">
            <Input
              type="password"
              placeholder="ENTER YOUR PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-white text-white placeholder:text-gray-400"
            />
            <button 
              type="button"
              className="absolute right-0 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-white pr-3"
              onClick={() => console.log("Forgot password")}
            >
              FORGOT YOUR PASSWORD?
            </button>
          </div>
          <Button 
            type="submit"
            className="w-full bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors mt-8"
          >
            JOIN NOW
          </Button>
        </form>
      </div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 animate-pulse"></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 animate-pulse"></div>
      </div>
    </div>
  );
};

export default VIP;