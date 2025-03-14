
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@supabase/auth-helpers-react";
import { Button } from "@/components/ui/button";
import { Crown, ArrowLeft } from "lucide-react";

const VipAccess = () => {
  const navigate = useNavigate();
  const user = useUser();

  useEffect(() => {
    if (!user) {
      navigate("/vip");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <button 
        onClick={() => navigate("/")}
        className="fixed top-8 left-8 bg-transparent border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300 rounded-md flex items-center space-x-2"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Shop</span>
      </button>

      <div className="max-w-4xl mx-auto pt-12">
        <div className="flex items-center justify-center mb-12">
          <Crown className="text-yellow-400 h-8 w-8 mr-2" />
          <h1 className="text-3xl font-bold">VIP Access</h1>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">Welcome, {user.email}</h2>
          <p className="text-gray-300 mb-6">
            Thank you for being a valued VIP member of SOUL 7. Enjoy exclusive access to limited drops, early releases, and special events.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Upcoming Drops</h3>
              <p className="text-gray-400 mb-4">Get early access to our upcoming exclusive collections.</p>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">View Schedule</Button>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Special Discounts</h3>
              <p className="text-gray-400 mb-4">Enjoy member-only discounts on selected items.</p>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">Browse Offers</Button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-4">Need help with your VIP account?</p>
          <Button 
            variant="outline"
            onClick={() => navigate("/settings")}
            className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-black"
          >
            Account Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VipAccess;
