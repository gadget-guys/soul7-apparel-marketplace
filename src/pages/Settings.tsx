import { useUser } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import { Settings as SettingsIcon, Key, User, CreditCard } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Component imports
import ApiKeySection from "@/components/settings/ApiKeySection";
import ProfileSection from "@/components/settings/ProfileSection";
import VipSection from "@/components/settings/VipSection";

const Settings = () => {
  const user = useUser();
  const navigate = useNavigate();

  console.log("Settings page rendering for user:", user?.email);

  if (!user) {
    console.log("No user found, redirecting to home");
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="api-keys" className="flex items-center gap-2">
              <Key className="w-4 h-4" />
              API Keys
            </TabsTrigger>
            <TabsTrigger value="vip" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              VIP Status
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <ProfileSection />
          </TabsContent>

          <TabsContent value="api-keys">
            <ApiKeySection />
          </TabsContent>

          <TabsContent value="vip">
            <VipSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;