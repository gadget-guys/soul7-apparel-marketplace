import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Minus, Plus, Bookmark } from 'lucide-react';

interface ProductDetailProps {
  name: string;
  price: number;
  image: string;
}

const ProductDetail = ({ name, price, image }: ProductDetailProps) => {
  const [size, setSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const monthlyPayment = (price / 4).toFixed(2);

  // Mock additional product images
  const productImages = [
    image,
    "/lovable-uploads/527f8500-523c-4731-b296-bd134b57f03d.png",
    "/lovable-uploads/527f8500-523c-4731-b296-bd134b57f03d.png",
  ];

  console.log(`Product Detail rendering for ${name} with size: ${size} and quantity: ${quantity}`);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img 
              src={productImages[activeImage]} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`aspect-square overflow-hidden border-2 ${
                  activeImage === index ? 'border-black' : 'border-transparent'
                }`}
              >
                <img 
                  src={img} 
                  alt={`${name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-righteous">{name}</h1>
            <Button variant="ghost" size="icon">
              <Bookmark className="h-6 w-6" />
            </Button>
          </div>
          
          <p className="text-2xl font-mono">${price.toFixed(2)}</p>
          
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
            <div className="flex justify-between items-center">
              <h2 className="text-xl">Select size</h2>
              <Button variant="link" className="font-mono uppercase">
                Size guide
              </Button>
            </div>
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
                    className="flex h-10 w-full cursor-pointer items-center justify-center rounded-none border border-input bg-background peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary font-mono"
                  >
                    {sizeOption}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-mono">Quantity:</h2>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className="rounded-none"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-mono">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(1)}
                className="rounded-none"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button className="w-full bg-black text-white hover:bg-black/90 rounded-none font-mono uppercase">
            Select size
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;