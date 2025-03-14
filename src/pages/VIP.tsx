
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const VIP = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const supabase = useSupabaseClient();
  const user = useUser();

  useEffect(() => {
    if (user) {
      navigate("/vip-access");
    }
  }, [user, navigate]);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      navigate("/vip-access");
    } catch (error: any) {
      setError(error.message || "Error signing in");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/vip-access`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
        }
      });
      if (error) throw error;
    } catch (error: any) {
      setError(error.message || "Error signing in with Google");
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
      
      {/* Back to shop button */}
      <button 
        onClick={() => navigate("/")}
        className="absolute top-8 left-8 bg-transparent border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300 rounded-md flex items-center space-x-2"
      >
        <span>←</span>
        <span>Back to Shop</span>
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
          <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
          <p className="text-gray-400 text-sm mt-1">Sign in to access exclusive VIP content</p>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-900/30 border border-red-500/50 text-red-200 text-sm rounded">
            {error}
          </div>
        )}
        
        <form className="space-y-4" onSubmit={handleEmailSignIn}>
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
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-white">Password</Label>
              <button 
                type="button" 
                className="text-xs text-gray-400 hover:text-white"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot email or password?
              </button>
            </div>
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
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="remember" 
              checked={rememberDevice}
              onCheckedChange={(checked) => setRememberDevice(checked === true)}
              className="border-white/20 data-[state=checked]:bg-white data-[state=checked]:text-black"
            />
            <label 
              htmlFor="remember" 
              className="text-sm text-gray-300 cursor-pointer flex gap-2 items-center"
            >
              Remember this device
            </label>
          </div>
          
          <Button 
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-black text-gray-400">or sign in with</span>
            </div>
          </div>
          
          <Button 
            type="button"
            variant="outline"
            onClick={handleGoogleSignIn}
            className="w-full bg-transparent border border-white/20 text-white hover:bg-white hover:text-black flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
              </g>
            </svg>
            Google
          </Button>
          
          <div className="text-center mt-6">
            <span className="text-gray-400 text-sm">Don't have an account?</span>
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-sm text-white ml-2 hover:underline"
            >
              Sign up now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VIP;
