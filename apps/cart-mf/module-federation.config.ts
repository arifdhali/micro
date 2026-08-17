import { createModuleFederationConfig } from "@module-federation/vite";
export default createModuleFederationConfig({
    name: "cart_app",
    manifest: true,
    exposes: {
        "./CartPage": "./src/CartPage.tsx"
    },
    dts: false,
    shared: {
        react: {
            singleton: true,
        },

        "react-dom": {
            singleton: true,
        },

        "react/": {
            singleton: true,
        },

        "react-dom/": {
            singleton: true,
        },
    },
})