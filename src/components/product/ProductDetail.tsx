import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Minus, Plus } from 'lucide-react';

interface ProductDetailProps {
  name: string;
  price: number;
  image: string;
}

const ProductDetail = ({ name, price, image }: ProductDetailProps) => {
  const [size, setSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const monthlyPayment = (price / 4).toFixed(2);

  console.log(`Product Detail rendering for ${name} with size: ${size} and quantity: ${quantity}`);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-3xl font-righteous">{name}</h1>
          <p className="text-2xl">${price.toFixed(2)}</p>
          
          <div className="flex items-center space-x-2">
            <p className="text-sm">or 4 interest-free payments of ${monthlyPayment} with</p>
            <img 
              src="/lovable-uploads/d29578b2-4c1f-41e9-a756-15635273b59a.png" 
              alt="Afterpay" 
              className="h-5"
            />
            <button className="text-sm underline">Learn More</button>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl">Select size</h2>
            <RadioGroup value={size} onValueChange={setSize} className="grid grid-cols-4 gap-4">
              {['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'].map((sizeOption) => (
                <div key={sizeOption} className="relative">
                  <RadioGroupItem
                    value={sizeOption}
                    id={sizeOption}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={sizeOption}
                    className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border border-input bg-background peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
                  >
                    {sizeOption}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <Button variant="outline" className="w-auto">
              SIZE GUIDE
            </Button>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl">Quantity:</h2>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button className="w-full bg-black text-white hover:bg-black/90">
            SELECT SIZE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;