
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

// Page imports
import Index from "./pages/Index";
import VIP from "./pages/VIP";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Hoodies from "./pages/Hoodies";
import Tshirts from "./pages/Tshirts";
import Hats from "./pages/Hats";
import Signup from "./pages/Signup";
import SignupSuccess from "./pages/SignupSuccess";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VipAccess from "./pages/VipAccess";

// Environment variable validation
if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  throw new Error("Missing Supabase environment variables");
}

// Supabase client initialization
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const App = () => {
  console.log("App rendering");
  
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vip" element={<VIP />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-success" element={<SignupSuccess />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/vip-access" element={<VipAccess />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/hoodies" element={<Hoodies />} />
          <Route path="/t-shirts" element={<Tshirts />} />
          <Route path="/hats" element={<Hats />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </SessionContextProvider>
  );
};

export default App;
