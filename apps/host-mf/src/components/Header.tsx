import { useMemo, useState } from 'react';
import { ShoppingCart, Store, Trash, User2 } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Link,  useNavigate } from 'react-router';
import { APP_URL } from '@/router';
import { useAuth } from '@/auth/AuthProvider';
import { useDispatch, useSelector } from "react-redux"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import type { CartItem } from "@micro-store/types";
import { removeFromCart, decreaseToCart, increaseToCart } from "@micro-store/store";

const Header = () => {
    const { isAuthenticated } = useAuth();

    const cartItems = useSelector(((state: any) => state.cart));
    const [open, setOpen] = useState(false);

    return (
        <>
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
                            onClick={() => setOpen(prev => !prev)}
                            variant="outline"
                            size="icon"
                            className={"relative"}
                        >
                            <div className="absolute bg-white text-black w-4 h-4 -inset-e-1 rounded-full flex items-center justify-center -top-2">{cartItems.items.length}</div>
                            <ShoppingCart />
                        </Button>


                    </div>

                </div>
            </header>
            <CartDrawer
                cartInfo={
                    {
                        open: open,
                        openFn: setOpen,
                        carts: cartItems.items

                    }
                }
            />
        </>
    )
}

export default Header

type cartType = {
    open: boolean;
    openFn: (value: boolean) => void;
    carts: CartItem[]
}


export function CartDrawer({ cartInfo }: { cartInfo: cartType }) {

    const navigate = useNavigate();
    const handleCheckout = () => {

        navigate("/checkeout", { replace: true, })
    }

    const dispatch = useDispatch();
    const totalAmount = useMemo(() => {
        return cartInfo.carts.reduce((prev, curr) => {
            return prev + (curr.quantity * curr.price);
        }, 0)
    }, [cartInfo])

    return (
        <Drawer
            swipeDirection='right'
            open={cartInfo.open}
            onOpenChange={cartInfo.openFn}
        >

            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Pick a delivery time</DrawerTitle>
                    <DrawerDescription>
                        We&apos;ll prepare your order as soon as possible.
                    </DrawerDescription>
                </DrawerHeader>
                <div className="flex-1 mt-8 flex flex-col scroll-fade overflow-y-auto p-4 gap-5">
                    {
                        cartInfo.carts.length > 0 ? (
                            cartInfo.carts.map((cart: CartItem, index) => (
                                <div className='gap-2 flex' key={index}>
                                    <img className='w-12 h-12 rounded-lg' src={cart.image} alt={cart.name} />
                                    <div className='text-white'>
                                        <h2 className='text-base font-medium'>{cart.name}</h2>
                                        <h2 className='text-base font-medium'>${cart.price}</h2>
                                        <div className="flex items-center gap-3">
                                            <div className='flex items-center gap-2'>
                                                <Button disabled={cart.quantity <= 1} onClick={() => dispatch(decreaseToCart(cart.id))} className={'cursor-pointer h-6 disabled:cursor-not-allowed'}>-</Button>
                                                <div className="px-2 py-1">{cart.quantity}</div>
                                                <Button onClick={() => dispatch(increaseToCart(cart.id))} className={'cursor-pointer h-6'}>+</Button>
                                            </div>
                                            <Button className={'cursor-pointer bg-transparent text-white rounded-lg'} onClick={() => dispatch(removeFromCart(cart.id))}><Trash size={12} /></Button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center flex items-center justify-center h-100">No cart items</div>
                        )
                    }
                </div>
                <DrawerFooter>
                    {
                        totalAmount >= 1 && (
                            <Button onClick={handleCheckout} className="h-[34px]">
                                ${totalAmount} Pay
                            </Button>
                        )
                    }
                    <DrawerClose render={<Button variant="outline">Cancel</Button>} />
                </DrawerFooter>
            </DrawerContent>
        </Drawer >
    )
}
