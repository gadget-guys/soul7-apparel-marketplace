import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const ApiKeySection = () => {
  const [keys, setKeys] = useState({
    openai: "",
    groq: "",
    google: "",
    meta: ""
  });
  const { toast } = useToast();

  const handleSaveKey = (provider: keyof typeof keys) => {
    if (!keys[provider]) {
      toast({
        title: "Error",
        description: "Please enter an API key",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Success",
      description: `${provider.toUpperCase()} API key saved successfully`
    });
  };

  const handleTestKey = async (provider: keyof typeof keys) => {
    if (!keys[provider]) {
      toast({
        title: "Error",
        description: "Please save an API key first",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Testing",
      description: `Testing ${provider.toUpperCase()} API key...`
    });
    // Here we would implement actual API testing logic
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        {Object.keys(keys).map((provider) => (
          <div key={provider} className="space-y-2">
            <label className="text-sm font-medium capitalize">
              {provider} API Key
            </label>
            <div className="flex gap-2">
              <Input
                type="password"
                value={keys[provider as keyof typeof keys]}
                onChange={(e) => setKeys(prev => ({
                  ...prev,
                  [provider]: e.target.value
                }))}
                placeholder={`Enter your ${provider} API key`}
              />
              <Button onClick={() => handleSaveKey(provider as keyof typeof keys)}>
                Save
              </Button>
              <Button 
                variant="outline"
                onClick={() => handleTestKey(provider as keyof typeof keys)}
              >
                Test
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiKeySection;