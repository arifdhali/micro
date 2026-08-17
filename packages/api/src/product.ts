import { api } from "./client"

type Products = {
    id: number;
    title: string;
}

const message = "API response error!";

export const getProducts = async () => {
    let res = await api<Products[]>("/product");
    if (res.success) {
        return res.data;
    }
    throw new Error(message)
}
export const getProduct = async () => {
    return {
        title: "product 1"
    }
    let res = await api<Products>("/product");
    if (res.success) {
        return res.data;
    }
    throw new Error(message)
}

