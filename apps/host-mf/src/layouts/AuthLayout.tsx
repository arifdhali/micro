import { Outlet } from "react-router"


const AuthLayout = () => {
  return (
    <div
      className="bg-background text-on-background min-h-screen flex items-center justify-center relative overflow-hidden font-body-md"
    >
      <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />

      <div className="glow-effect" />
      <div
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        data-alt="A dark, abstract silhouette of high-end, futuristic tech hardware. The forms are geometric and minimalist, rendered in deep charcoal blacks with subtle edge lighting in cool electric blue. The mood is sophisticated, cinematic, and industrial, fitting a premium tech noir aesthetic. Shadows are deep and infinite."
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTg0vRGOQPPaaxwx42WhIhJFDR3gou8H2PQRaWPsDLbyPrhmJqtejmeQq9el14K3HLghuGIf0YlkcVVA_rcyIQNKyy-FQtTz2hNcA0VQscXDnngua9eo4Cp8qLdrY7jdFkYPjUFxj33X1EMxVu_BtKjZwv4pNgp0uGY4NZlbwoWA9dj7r1UFkxfQ8g41o3nImOI6TzQmXNWm1T5yqLwuuL_iB2uIJWo5dmmW3HxvEO3cli2SwVLwNW")',
        }}
      />

      <main className="w-full max-w-md px-margin-mobile md:px-0 relative z-10">
        <Outlet />
      </main>
    </div >
  )
}

export default AuthLayout