import { lazy } from "react";

const CartsMF = lazy(() => import("cart_app/CartPage"));
const CartPage = () => {
  return <CartsMF />;
}

export default CartPage