
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Minus, Plus, Bookmark, ShoppingBag, ZoomIn, Expand } from 'lucide-react';
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface ProductColor {
  display: string;
  value: string;
  image: string;
}

interface ProductDetailProps {
  name: string;
  price: number;
  image: string;
  productImages?: string[];
  colors?: ProductColor[];
}

const ProductDetail = ({ 
  name, 
  price, 
  image, 
  productImages = [image], 
  colors = [
    { display: "White", value: "white", image: "/lovable-uploads/e30f0056-fb38-4400-8cc1-ae4283df659b.png" },
    { display: "Black", value: "black", image: "/lovable-uploads/527f8500-523c-4731-b296-bd134b57f03d.png" },
  ]
}: ProductDetailProps) => {
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>(colors[0].value);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }
    
    toast.success(`Added ${quantity} ${color} ${name} (${size}) to cart`);
    console.log(`Added to cart: ${quantity} ${color} ${name} in size ${size}`);
  };

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const monthlyPayment = (price / 4).toFixed(2);

  // Find the currently selected color's image
  const selectedColorImage = colors.find(c => c.value === color)?.image || image;
  
  // Generate product images based on selected color
  const currentProductImages = productImages.length > 1 
    ? productImages 
    : [selectedColorImage, selectedColorImage, selectedColorImage, selectedColorImage];

  // Define image sections for detailed view
  const imageSections = [
    // Upper section of the product
    { 
      id: 1, 
      name: "Upper detail", 
      image: currentProductImages[3] || currentProductImages[0], 
      cropStyle: { objectPosition: '50% 0%', objectFit: 'cover' as const } 
    },
    // Middle section with graphic
    { 
      id: 2, 
      name: "Graphic detail", 
      image: currentProductImages[3] || currentProductImages[0], 
      cropStyle: { objectPosition: '50% 50%', objectFit: 'cover' as const } 
    },
    // Lower section of the product
    { 
      id: 3, 
      name: "Lower detail", 
      image: currentProductImages[3] || currentProductImages[0], 
      cropStyle: { objectPosition: '50% 100%', objectFit: 'cover' as const } 
    },
  ];

  console.log(`Product Detail rendering for ${name} with size: ${size}, color: ${color} and quantity: ${quantity}`);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Dialog>
            <DialogTrigger asChild>
              <div 
                className="aspect-square overflow-hidden bg-gray-100 cursor-pointer transition-all hover:opacity-90"
              >
                <img 
                  src={currentProductImages[activeImage]} 
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <div className="aspect-square w-full">
                <img 
                  src={currentProductImages[activeImage]} 
                  alt={name}
                  className="w-full h-full object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
          
          <div className="grid grid-cols-4 gap-2">
            {currentProductImages.map((img, index) => (
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

          <div className="mt-8">
            <h3 className="font-bold mb-2">Detailed Views</h3>
            <div className="grid grid-cols-3 gap-2">
              {imageSections.map((section) => (
                <Sheet key={section.id}>
                  <SheetTrigger asChild>
                    <button className="aspect-square overflow-hidden border hover:border-black transition-all">
                      <img 
                        src={section.image} 
                        alt={section.name}
                        className="w-full h-full"
                        style={section.cropStyle}
                      />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="h-[80vh]">
                    <div className="h-full flex items-center justify-center">
                      <img 
                        src={section.image} 
                        alt={section.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold">{name}</h1>
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
              <h2 className="text-xl">Select color</h2>
            </div>
            <RadioGroup value={color} onValueChange={setColor} className="flex gap-3">
              {colors.map((colorOption) => (
                <div key={colorOption.value} className="relative">
                  <RadioGroupItem
                    value={colorOption.value}
                    id={`color-${colorOption.value}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`color-${colorOption.value}`}
                    className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 ${
                      color === colorOption.value ? 'border-black' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: colorOption.value }}
                  >
                    <span className="sr-only">{colorOption.display}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
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

          <Button 
            className="w-full bg-black text-white hover:bg-black/90 rounded-none font-mono uppercase flex gap-2 items-center"
            disabled={!size}
            onClick={handleAddToCart}
          >
            <ShoppingBag size={16} />
            {size ? "Add to Cart" : "Select size"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
