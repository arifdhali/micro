import { lazy } from "react";

const ProductsMF = lazy(() => import("product_app/ProductPage"));
const ProductPage = () => {
  return <ProductsMF />;
}

export default ProductPage