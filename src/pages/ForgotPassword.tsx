
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const supabase = useSupabaseClient();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      if (error) throw error;
      setSuccess(true);
    } catch (error: any) {
      setError(error.message || "Error resetting password");
    } finally {
      setLoading(false);
    }
  };

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
      
      {/* Back button */}
      <button 
        onClick={() => navigate("/vip")}
        className="absolute top-8 left-8 bg-transparent border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300 rounded-md flex items-center space-x-2"
      >
        <span>←</span>
        <span>Back to Sign In</span>
      </button>

      <div className="w-full max-w-md bg-black/70 p-8 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl relative z-10">
        <div className="mb-6 text-center">
          <div className="flex justify-center mb-2">
            <img 
              src="/lovable-uploads/e4633585-3030-4cfb-b4ee-7080d7505ff2.png" 
              alt="SOUL 7" 
              className="h-12"
            />
          </div>
          <h2 className="text-2xl font-bold text-white">Forgot Password</h2>
          <p className="text-gray-400 text-sm mt-1">Enter your email to reset your password</p>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-900/30 border border-red-500/50 text-red-200 text-sm rounded">
            {error}
          </div>
        )}
        
        {success ? (
          <div className="text-center">
            <div className="mb-4 p-4 bg-green-900/30 border border-green-500/50 text-green-200 text-sm rounded">
              Check your email for a password reset link
            </div>
            
            <Button 
              onClick={() => navigate("/vip")}
              className="mt-4 bg-teal-600 hover:bg-teal-700 text-white w-full"
            >
              Return to Sign In
            </Button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleResetPassword}>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="bg-black/50 border-white/20 text-white placeholder:text-gray-500"
                required
              />
            </div>
            
            <Button 
              type="submit"
              disabled={loading}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2"
            >
              {loading ? "Sending..." : "Reset Password"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
