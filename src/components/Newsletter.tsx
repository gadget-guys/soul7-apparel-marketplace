import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

interface NewsletterProps {
  title?: string;
  description?: string;
}

const Newsletter = ({
  title = "Stay Connected",
  description = "Subscribe to our newsletter for exclusive offers, new arrivals, and insider content."
}: NewsletterProps) => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  console.log("Newsletter rendering");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    
    toast({
      title: "Success",
      description: "Thank you for subscribing to our newsletter!",
    });
    
    setEmail("");
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/90] text-white"
            >
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;