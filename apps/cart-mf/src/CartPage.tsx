import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import axios from "axios";

const cartItems = [
  {
    id: "1",
    name: "MacBook Pro 14",
    price: 1999,
    quantity: 1,
  },
  {
    id: "2",
    name: "AirPods Pro",
    price: 249,
    quantity: 2,
  },
];

export default function CartPage() {

  useEffect(() => {
    document.title = "Cart MF";
  }, []);


  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=5")
      .then((res) => {
        console.log("CART MF AXIOS:", res.data);
      });
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Shopping Cart
        </h1>

        <p className="text-muted-foreground">
          Review your selected items.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            Cart Items ({cartItems.length})
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between"
            >
              <div>
                <p className="font-medium">
                  {item.name}
                </p>

                <p className="text-sm text-muted-foreground">
                  Qty: {item.quantity}
                </p>
              </div>

              <p className="font-medium">
                $
                {(
                  item.price * item.quantity
                ).toLocaleString()}
              </p>
            </div>
          ))}

          <Separator />

          <div className="flex items-center justify-between">
            <span className="font-medium">
              Subtotal
            </span>

            <span className="text-xl font-bold">
              ${subtotal.toLocaleString()}
            </span>
          </div>

          <Button className="w-full">
            Checkout
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}