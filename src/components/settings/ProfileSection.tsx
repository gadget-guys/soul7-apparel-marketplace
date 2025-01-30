import { useUser } from "@supabase/auth-helpers-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileSection = () => {
  const user = useUser();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src={user?.user_metadata?.avatar_url} />
          <AvatarFallback>
            {user?.email?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold">{user?.email}</h2>
          <p className="text-sm text-gray-500">Member since {new Date(user?.created_at || "").toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;