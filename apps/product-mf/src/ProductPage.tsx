import "./App.css";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  ChevronDown,
  Grid2X2,
  List,
  Star,
} from "lucide-react";
import Product3DViewer from "./components/Product3DViewer";

import { addToCart } from "@micro-store/store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const products = [
  {
    id: "1",
    name: "MacBook Pro 14",
    description: "Apple M4 Pro · 18GB RAM · 512GB SSD",
    price: 1999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    badge: "NEW",
  },
  {
    id: "2",
    name: "iPhone 16 Pro",
    description: "A18 Pro · 256GB · Titanium",
    price: 1199,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
  },
  {
    id: "3",
    name: "AirPods Pro",
    description: "Active Noise Cancellation",
    price: 249,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5",
  },
];

const categories = [
  "Audio",
  "Computing",
  "Smart Home",
];



export default function ProductPage() {
  const dispatch = useDispatch();

  const handleCart = (id: string) => {
    const item = products.find((item) => item.id == id);
    dispatch(addToCart(item))
  }

  const [gridStyle, setGridStyle] = useState<"grid" | "list">('grid');


  return (
    <section className="py-24 max-w-container-max mx-auto   relative">


      <div className="flex flex-col gap-gutter md:flex-row">

        {/* ================= SIDEBAR ================= */}
        <aside className="w-60 shrink-0 space-y-8 ">

          {/* Categories */}
          <Card className="rounded-xl border-outline-variant/30 bg-surface-container-low p-6 shadow-none">
            <CardHeader className="p-0">
              <CardTitle className="mb-4 font-headline-md text-headline-md text-on-surface">
                Categories
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 p-0">
              {categories.map((category, index) => (
                <label
                  key={category}
                  className="group flex cursor-pointer items-center gap-3"
                >
                  <input
                    type="checkbox"
                    defaultChecked={index === 0}
                    className="h-4 w-4 rounded border-outline bg-transparent text-primary accent-primary focus:ring-primary focus:ring-offset-background"
                  />

                  <span className="font-body-md text-body-md text-on-surface-variant transition-colors group-hover:text-on-surface">
                    {category}
                  </span>
                </label>
              ))}
            </CardContent>
          </Card>

          {/* Price Range */}
          <Card className="rounded-xl border-outline-variant/30 bg-surface-container-low p-6 shadow-none">
            <CardHeader className="p-0">
              <CardTitle className="mb-4 font-headline-md text-headline-md text-on-surface">
                Price Range
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
              <input
                type="range"
                min="0"
                max="1000"
                defaultValue="1000"
                className="mb-4 h-1 w-full cursor-pointer appearance-none rounded-lg bg-surface-variant accent-primary"
              />

              <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                <span>$0</span>
                <span>$1000+</span>
              </div>
            </CardContent>
          </Card>

        </aside>

         <div className="min-w-0 grow">

           <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
            <DropdownMenu>
              <DropdownMenuTrigger className={'w-50 h-10 text-base cursor-pointer flex items-center justify-between'} render={<Button variant="outline" />}>
                Sort by: <ChevronDown size={12} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className={'p-0'}>
                <DropdownMenuGroup>
                  <DropdownMenuItem className="border-b border-white/5 cursor-pointer py-2 last:border-b-0 text-base">Newest</DropdownMenuItem>
                  <DropdownMenuItem className="border-b border-white/5 cursor-pointer py-2 last:border-b-0 text-base">Price: Low to High</DropdownMenuItem>
                  <DropdownMenuItem className="border-b border-white/5 cursor-pointer py-2 last:border-b-0 text-base">Price: High to Low</DropdownMenuItem>
                </DropdownMenuGroup>

              </DropdownMenuContent>
            </DropdownMenu>

             <div className="flex gap-2">

              <Button
                onClick={() => setGridStyle('grid')}
                variant="ghost"
                size="icon"
                className={`rounded ${gridStyle == 'grid' && 'bg-white/5'} cursor-pointer text-primary hover:bg-white/10 hover:text-primary`}
              >
                <Grid2X2 className="size-4" />
              </Button>

              <Button
                onClick={() => setGridStyle('list')}
                variant="ghost"
                size="icon"
                className={`rounded ${gridStyle == 'list' && 'bg-white/5'} cursor-pointer text-primary hover:bg-white/10 hover:text-primary`}
              >
                <List className="size-4" />
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className={`${gridStyle == 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "flex flex-col"} gap-6`}>

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                viewMode={gridStyle}
                handleCart={handleCart}
              />
            ))}
          </div>
        </div>
      </div>

      <Product3DViewer />

    </section>
  );
}

type ProductCardProps = {
  product: any;
  viewMode: "grid" | "list";
  handleCart: (id: string) => void;
};

export function ProductCard({ product, viewMode, handleCart, }: ProductCardProps) {
  const isList = viewMode === "list";
  console.log(viewMode)

  return (
    <Card
      key={product.id}
      className={`${isList && 'flex flex-row '} p-0!`}
    >
      <div
        className={`
          relative overflow-hidden   p-2 bg-gray-400 rounded-lg
          ${isList ? "h-[180px] w-[220px] shrink-0" : "h-[300px] w-full "}
        `}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute right-2 top-2 rounded bg-primary/20 px-2 py-1 font-label-sm text-label-sm text-primary backdrop-blur-md">
            {product.badge}
          </div>
        )}
      </div>

      {/* Product Content */}
      <div
        className={`
          flex flex-grow flex-col p-5
          ${isList ? "min-w-0" : ""}
        `}
      >
        {/* Name + Rating */}
        <div className="mb-2 flex items-start justify-between gap-3">
          <h4 className="font-body-lg text-body-lg text-on-surface">
            {product.name}
          </h4>

          <div className="flex flex-shrink-0 items-center text-secondary-fixed">
            <Star
              className="size-4 fill-current"
              strokeWidth={1.5}
            />

            <span className="ml-1 font-label-sm text-label-sm">
              {product.rating}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 line-clamp-2 font-body-md text-body-md text-on-surface-variant">
          {product.description}
        </p>

        {/* Price + Add */}
        <div className="mt-auto flex items-center justify-between gap-4">
          <span className="font-headline-md text-headline-md text-primary">
            ${product.price.toLocaleString()}
          </span>

          <Button
            onClick={() => handleCart(product.id)}
            className={`
              bg-primary
              px-4 py-2
              font-label-sm text-label-sm
              uppercase tracking-wider
              text-on-primary-fixed
              transition-all
              hover:bg-primary-fixed-dim
              
            `}
          >
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
}