import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { AuthContextType, User } from "./auth.types";
const AuthContext = createContext<AuthContextType | null>(null);


export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const payload: User = {
        id: 1,
        name: "test"
    }
    useEffect(() => {
        setUser(null);
    }, [])

    async function logout() {

    }
    return (
        <AuthContext value={{ user, isLoading: false, isAuthenticated: !!user, logout }}>
            {children}
        </AuthContext >
    )
}


export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider"
        );
    }

    return context;
}