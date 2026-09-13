import { createBrowserRouter } from "react-router";
import StoreLayout from "@/layouts/StoreLayout";
import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import CartPage from "@/pages/CartPage";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/Login";
import NotFoundPage from "@/pages/NotFoundPage";
import RemoteBoundary from "@/RemoteBoundary/RemoteBoundary";
import RequiredAuth from "@/auth/RequiredAuth";
import Account from "@/pages/Account";
import Register from "./pages/Register";

export const APP_URL = {
    home: {
        url: "/"
    },
    product: {
        url: "/products",
    },
    cart: {
        url: "/cart"
    },
    category: {
        url: "/category"
    },
    auth: {
        url: "/auth",
        login: "login",
        register: "register"
    },
    account: {
        url: "/account"
    }
}

export const router = createBrowserRouter([

    {
        element: <StoreLayout />,
        children: [
            {
                path: APP_URL.home.url,
                element: <HomePage />
            },
            {
                path: APP_URL.product.url,
                element:
                    <RemoteBoundary name="Product MF">
                        <ProductPage />
                    </RemoteBoundary>
            },
            {
                path: APP_URL.cart.url,
                element:
                    <RemoteBoundary name="CART MF">
                        <CartPage />
                    </RemoteBoundary>
            },
            {
                element: <RequiredAuth />,
                children: [
                    {
                        path: APP_URL.account.url,
                        element: <Account />
                    }
                ]

            }
        ]
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: APP_URL.auth.url + "/" + APP_URL.auth.login,
                element: <Login />
            },
            {
                path: APP_URL.auth.url + "/" + APP_URL.auth.register,
                element: <Register />
            },
        ]

    },
    {
        path: "*",
        element: <NotFoundPage />
    }

])


