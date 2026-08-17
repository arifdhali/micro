import { ShoppingCart, Store, User2 } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { APP_URL } from '@/router';
import { useAuth } from '@/auth/AuthProvider';


const Header = () => {
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated)
    return (
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                <div className="flex items-center gap-2">
                    <Store className="h-5 w-5" />

                    <span className="text-lg font-bold">
                        MicroStore
                    </span>
                </div>

                <nav className='flex items-center gap-5 text-sm'>
                    <Link to={APP_URL.home.url}>Home</Link>
                    <Link to={APP_URL.product.url}>Products</Link>
                </nav>
                <div className='flex items-center gap-4  text-sm'>

                    {
                        isAuthenticated ? (
                            <Link className='flex items-center gap-2 border border-border justify-center hover:bg-black/90 transition-all w-8 h-8 rounded-lg' to={APP_URL.account.url}><User2 size={16} /></Link>
                        ) : (
                            <Link className='flex items-center gap-2 ' to={APP_URL.auth.url + "/" + APP_URL.auth.login}><User2 size={16} /> Login</Link>
                        )

                    }

                    <Button
                        variant="outline"
                        size="icon"
                    >
                        <ShoppingCart />
                    </Button>


                </div>

            </div>
        </header >
    )
}

export default Header