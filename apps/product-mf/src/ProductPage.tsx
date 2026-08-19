import "./App.css";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  Grid2X2,
  List,
  Star,
} from "lucide-react";
import Product3DViewer from "./components/Product3DViewer";

import { addToCart } from "@micro-store/store";
import { useDispatch } from "react-redux";

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

const brands = [
  "Apple",
  "Zenith",
  "Nova",
];

export default function ProductPage() {
  const dispatch = useDispatch();
  const handleCart = () => {

    dispatch(addToCart({ id: 1 }))

  }

  return (
    <section className="py-24 max-w-container-max mx-auto   relative">

      {/* Breadcrumb + Heading */}
      <div className="mb-12">

        <nav className="mb-4 flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
          <a
            href="/"
            className="transition-colors hover:text-primary"
          >
            Home
          </a>

          <span>/</span>

          <a
            href="/products"
            className="transition-colors hover:text-primary"
          >
            Shop
          </a>

          <span>/</span>

          <span className="text-on-surface">
            All Products
          </span>
        </nav>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:font-headline-lg md:text-headline-lg">
              Performance Hardware
            </h1>

            <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
              Browse our latest products.
            </p>
          </div>

          <span className="font-body-md text-body-md text-on-surface-variant">
            Showing {products.length} items
          </span>
        </div>
      </div>

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

          {/* Brand */}
          <Card className="rounded-xl border-outline-variant/30 bg-surface-container-low p-6 shadow-none">
            <CardHeader className="p-0">
              <CardTitle className="mb-4 font-headline-md text-headline-md text-on-surface">
                Brand
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 p-0">
              {brands.map((brand) => (
                <label
                  key={brand}
                  className="group flex cursor-pointer items-center gap-3"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-outline bg-transparent text-primary accent-primary focus:ring-primary focus:ring-offset-background"
                  />

                  <span className="font-body-md text-body-md text-on-surface-variant transition-colors group-hover:text-on-surface">
                    {brand}
                  </span>
                </label>
              ))}
            </CardContent>
          </Card>
        </aside>

        {/* ================= PRODUCT AREA ================= */}
        <div className="min-w-0 flex-grow">

          {/* Toolbar */}
          <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">

            <div className="flex items-center gap-2">
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                Sort by:
              </span>

              <select
                className="cursor-pointer border-none bg-transparent font-body-md text-body-md text-on-surface outline-none focus:ring-0"
                defaultValue="newest"
              >
                <option
                  className="bg-surface-container"
                  value="newest"
                >
                  Newest
                </option>

                <option
                  className="bg-surface-container"
                  value="price-asc"
                >
                  Price: Low to High
                </option>

                <option
                  className="bg-surface-container"
                  value="price-desc"
                >
                  Price: High to Low
                </option>
              </select>
            </div>

            {/* View buttons */}
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded bg-white/5 text-primary hover:bg-white/10 hover:text-primary"
              >
                <Grid2X2 className="size-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="rounded text-on-surface-variant hover:bg-white/5 hover:text-on-surface"
              >
                <List className="size-4" />
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (
              <Card
                key={product.id}
                className="group relative flex h-full overflow-hidden rounded-xl border-outline-variant/30 bg-surface-container-low p-0 shadow-none transition-transform duration-300 hover:-translate-y-1"
              >

                {/* Product Image */}
                <div className="relative h-[300px] w-full overflow-hidden bg-surface-container">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute right-2 top-2 rounded bg-primary/20 px-2 py-1 font-label-sm text-label-sm text-primary backdrop-blur-md">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Product Content */}
                <div className="flex flex-grow flex-col p-5">

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
                  <div className="mt-auto flex items-center justify-between">

                    <span className="font-headline-md text-headline-md text-primary">
                      ${product.price.toLocaleString()}
                    </span>

                    <Button
                      onClick={handleCart}
                      className="
                        bg-primary
                        px-4
                        py-2
                        font-label-sm
                        text-label-sm
                        uppercase
                        tracking-wider
                        text-on-primary-fixed
                        opacity-100
                        transition-all
                        hover:bg-primary-fixed-dim
                        sm:opacity-0
                        sm:group-hover:opacity-100
                      "
                    >
                      Add
                    </Button>

                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Product3DViewer />

    </section>
  );
}