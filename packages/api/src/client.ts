import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL as any;

const axiosBase = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})



type options = {
    method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
    data: unknown,
    headers: Record<string, string>
}
export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}
export async function api<T>(path: string, options?: options): Promise<ApiResponse<T>> {

    let response = await axiosBase<ApiResponse<T>>({
        url: path,
        method: options?.method ?? "GET",
        data: options?.data,
        headers: options?.headers
    })

    return response.data;
}