
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const supabase = useSupabaseClient();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      });
      
      if (error) throw error;
      setSuccess(true);
    } catch (error: any) {
      setError(error.message || "Error resetting password");
    } finally {
      setLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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

      <div className="w-full max-w-md bg-black/70 p-8 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl relative z-10">
        <div className="mb-6 text-center">
          <div className="flex justify-center mb-2">
            <img 
              src="/lovable-uploads/e4633585-3030-4cfb-b4ee-7080d7505ff2.png" 
              alt="SOUL 7" 
              className="h-12"
            />
          </div>
          <h2 className="text-2xl font-bold text-white">Reset Password</h2>
          <p className="text-gray-400 text-sm mt-1">Enter your new password</p>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-900/30 border border-red-500/50 text-red-200 text-sm rounded">
            {error}
          </div>
        )}
        
        {success ? (
          <div className="text-center">
            <div className="mb-4 p-4 bg-green-900/30 border border-green-500/50 text-green-200 text-sm rounded">
              Your password has been successfully reset
            </div>
            
            <Button 
              onClick={() => navigate("/vip")}
              className="mt-4 bg-teal-600 hover:bg-teal-700 text-white w-full"
            >
              Sign In with New Password
            </Button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleResetPassword}>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">New Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/50 border-white/20 text-white pr-10 placeholder:text-gray-500"
                  required
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-black/50 border-white/20 text-white placeholder:text-gray-500"
                required
              />
            </div>
            
            <Button 
              type="submit"
              disabled={loading}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
