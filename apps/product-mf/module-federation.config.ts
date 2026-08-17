import { createModuleFederationConfig } from "@module-federation/vite";
export default createModuleFederationConfig({
    name: "product_app",
    manifest: true,
    exposes: {
        "./ProductPage": "./src/ProductPage.tsx"
    },
    dts: false,
    shared: {
        react: {
            singleton: true,
        },

        "react-dom": {
            singleton: true,
        },
    },
})