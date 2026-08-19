import { createModuleFederationConfig } from "@module-federation/vite"

export default createModuleFederationConfig({
    name: "host_app",
    remotes: {
        product_app: {
            name: "product_app",
            entry: "http://192.168.0.95:5001/mf-manifest.json",
        },
        cart_app: {
            name: "cart_app",
            entry: "http://localhost:5002/mf-manifest.json",
        }
    },
    dts: false,
    shared: {
        react: {
            singleton: true,
        },
        "react-dom": {
            singleton: true,
        },
        "react-redux": {
            singleton: true,
        },

        "@reduxjs/toolkit": {
            singleton: true,
        },
    }

})