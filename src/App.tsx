import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import Index from "./pages/Index";
import VIP from "./pages/VIP";
import NotFound from "./pages/NotFound";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function App() {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vip" element={<VIP />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </SessionContextProvider>
  );
}

export default App;