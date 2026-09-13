import { createModuleFederationConfig } from "@module-federation/vite"

export default createModuleFederationConfig({
    name: "host_app",
    remotes: {
        product_app: {
            name: "product_app",
            entry: "http://10.177.89.31:5001/mf-manifest.json",
        },
        cart_app: {
            name: "cart_app",
            entry: "http://10.177.89.31:5002/mf-manifest.json",
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
        axios: {
            singleton: true,
            requiredVersion: "^1.12.0",
        },
    }

})