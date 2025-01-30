import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive offers, new arrivals, and
          insider content.
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;