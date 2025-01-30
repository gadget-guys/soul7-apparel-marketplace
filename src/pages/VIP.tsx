import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

const VIP = () => {
  console.log("VIP component mounted");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const supabase = useSupabaseClient();
  const user = useUser();

  useEffect(() => {
    console.log("Current user:", user);
  }, [user]);

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/vip`
        }
      });
      if (error) throw error;
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleDiscordSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'discord'
      });
      if (error) throw error;
    } catch (error) {
      console.error('Error signing in with Discord:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4 relative">
      <button 
        onClick={() => navigate("/")}
        className="absolute top-8 left-8 bg-transparent border border-purple-500 text-purple-500 px-6 py-2 hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-md flex items-center space-x-2"
      >
        <span>←</span>
        <span>Back to Shop</span>
      </button>

      <div className="w-full max-w-md bg-black/50 p-8 rounded-lg shadow-xl backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-white text-center mb-8">VIP Login</h2>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-purple-500 text-white placeholder:text-gray-400 focus:border-purple-400"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-purple-500 text-white placeholder:text-gray-400 focus:border-purple-400"
              required
            />
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={handleGoogleSignIn}
              className="w-full bg-transparent border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Sign in with Google
            </Button>
            
            <Button 
              onClick={handleDiscordSignIn}
              className="w-full bg-transparent border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Sign in with Discord
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VIP;