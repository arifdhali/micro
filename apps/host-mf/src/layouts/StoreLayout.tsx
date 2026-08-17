import Header from "@/components/Header"
import { Outlet } from "react-router"
 
const StoreLayout = () => {
  return (
    <>
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <footer>
        footer
      </footer>
    </>
  )
}

export default StoreLayout