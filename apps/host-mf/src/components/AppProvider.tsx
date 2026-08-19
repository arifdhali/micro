import { type ReactNode } from 'react'
import { Provider } from "react-redux";
import { store } from "@micro-store/store";
import { AuthProvider } from '@/auth/AuthProvider';

const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </Provider>
    )
}

export default AppProvider