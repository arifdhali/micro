 import {
  ArrowRight,
  ChevronRight,
  Star,
  StarHalf,
  ShoppingCart,
  Truck,
  Headset,
  BadgeCheck,
} from "lucide-react";
const HomePage = () => {
  return (
    <>
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="bg-cover bg-center w-full h-full opacity-60" data-alt="A hyper-realistic, dramatic product photograph of a futuristic VR headset floating in a dark, atmospheric void. The headset is sleek matte black with subtle glowing blue and green neon accents indicating its operational status. The lighting is low-key, with rim lighting emphasizing its engineered contours and premium build quality. The background is a deep, infinite charcoal grey, creating a sense of cutting-edge technology and high-end exclusivity typical of a tech noir aesthetic." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBs-1U7Ci5J-3Yi77yHSBXiSxTKsr40tXaHuOOMoDd0-zL7Ywz7jTcp8zc4aKH8MWLNQJZ0XavnoLflum6VY83POhp2BRg5uG5TgvajNijZ4IG3k5vx24-lX3UCgyC1E0-eAhFL5DT8qzJeScb6m8OYJE-y7ITibEzZGvu9oCl2okPfDBdAWIZvTebuV3cKx1QKLeFhjs9jm1p7vNAg_NhotJD57NKUS8VlzXMZwvqXtTSbkKU9HgWS')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center md:text-left flex flex-col md:flex-row items-center w-full">
          <div className="md:w-1/2 space-y-8">
            <div className="inline-block px-3 py-1 glass-panel rounded-full font-label-sm text-label-sm text-secondary-fixed border border-secondary-fixed/30 mb-4 animate-pulse">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
                New Arrival
              </span>
            </div>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface font-bold tracking-tighter">The Future,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Engineered.</span></h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">Experience the next generation of performance gadgets. Precision crafted for the ultimate digital immersion.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-inverse-primary text-on-primary-fixed px-8 py-4 rounded font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2">
                Shop New Arrivals
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative">
        <div className="ambient-glow top-0 right-0"></div>
        <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-12">Select Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

          <a className="group relative h-80 rounded overflow-hidden glass-panel flex items-end p-6 border border-white/5 hover:border-primary/50 transition-all duration-500" href="#">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <div className="bg-cover bg-center w-full h-full opacity-40 group-hover:opacity-60 transition-opacity" data-alt="Close-up macro photography of high-end wireless over-ear headphones. The earcups feature a brushed gunmetal finish with intricate micro-perforations. A faint blue LED ring glows around the exterior shell. The setting is dark and moody, with soft, directional light revealing the premium textures of the leather earpads and metal headband, embodying a sophisticated tech noir style."
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAI3OcNBo4q9Tu33mDfYyR0vw0qzFWIedkDajGnRrfFIZsNVBvSvqzBpWZOAxnkxZKIA4NY7v5sYYnsHkvLmhKKVNCdFd_Og0vvhKXuq6y-6128NGm80DeZmGDuVpYYpepzWESCMofSUjak2rP2494_oIhlVxs1a6ZesI0UaFf_1esIju4BGi6pl_eYaFdhhUP0CTeIm2loW0R1fUwIwrTAMkeJov6dqV5z-MopoYfE-d_RdEIkmXSt')",
                }}
              ></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <div className="relative z-20 w-full flex justify-between items-center">
              <h3 className="font-headline-md text-headline-md text-on-surface">Audio</h3>
              <ArrowRight className="size-4 text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </a>

          <a className="group relative h-80 rounded overflow-hidden glass-panel flex items-end p-6 border border-white/5 hover:border-primary/50 transition-all duration-500" href="#">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <div className="bg-cover bg-center w-full h-full opacity-40 group-hover:opacity-60 transition-opacity" data-alt="A dramatic shot of a sleek, high-performance laptop partially opened in a dark environment. The keyboard is backlit with a vibrant neon green underglow. The chassis is a monolithic slab of dark matte aluminum. The lighting highlights the razor-thin profile and the sharp, engineered edges of the device, creating a sense of raw computing power and modern minimalist design."
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBy26dHe1YeZT_PuOGJdii9qxu4H8zhQYi4lfn00558kqJpD7HSa7flQvbipCBZ9k5Q6lcXo0hWd8BbQ-b-ok5QR2hgpTmcX_k1kEeYldZNtloJTLvSeXcPeBP0NOth85FKLZCmIQfYfDBJdwAh32ZAo_ocwGsRn3a1hjzwjmNgFTlGmuhMCsmlmIOTsUcKYM8CCvd8DosjJQl1k0skn9lBXw467nbLv_pC29YYrgYj27-BzkT9cy9H')",
                }}
              ></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <div className="relative z-20 w-full flex justify-between items-center">
              <h3 className="font-headline-md text-headline-md text-on-surface">Computing</h3>
              <ArrowRight className="size-4 text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </a>

          <a className="group relative h-80 rounded overflow-hidden glass-panel flex items-end p-6 border border-white/5 hover:border-primary/50 transition-all duration-500" href="#">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <div className="bg-cover bg-center w-full h-full opacity-40 group-hover:opacity-60 transition-opacity" data-alt="A minimalist smart home hub device resting on a reflective black glass surface. The device is a dark, cylindrical monolith with a soft, pulsing ambient light ring at its base emitting a cool blue hue. The background is completely dark, drawing focus entirely to the illuminated device and its reflection, conveying a futuristic, integrated lifestyle."
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBN3I3gR6uIkrim2plhKlrIREUAPRatPrkF7c1L4Vjy4xQDiACzPoNLcIEwn47oWY7CcR6dUOf2smAEYuFx0-TAHEc6-ed9_qfwtirrAx1hf9j4ZMNggdqk3QLciUjPpdHnH0pK0SXKuLa5x5iRVyN4MusLH3rq2WdmNGHfkpwc_v_9dXXY87aqkN3GJXv5I9cRRIlFWWF7t1zwAIXAz5hmsednc89iKQ--vz9uvVSiTMYxmmJFGAnH')",
                }}
              ></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <div className="relative z-20 w-full flex justify-between items-center">
              <h3 className="font-headline-md text-headline-md text-on-surface">Smart Home</h3>
              <ArrowRight className="size-4 text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </a>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low border-y border-white/5 relative">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface">Trending Tech</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">High-performance gear curated for the vanguard.</p>
            </div>
            <a className="hidden md:flex font-label-sm text-label-sm text-primary hover:text-primary-container items-center gap-1 uppercase tracking-widest transition-colors" href="#">
              View All <ChevronRight className="size-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

            <div className="glass-panel rounded p-6 flex flex-col gap-6 neon-glow transition-all duration-300">
              <div className="aspect-square rounded overflow-hidden bg-background relative flex items-center justify-center">
                <div className="absolute top-2 left-2 px-2 py-1 bg-surface-container/80 backdrop-blur rounded font-label-sm text-[10px] text-primary border border-primary/20">Top Rated</div>
                <img className="w-4/5 h-4/5 object-contain" data-alt="Studio shot of the Nova-7 Wireless Headphones floating against a pure black background. The headphones are a mix of matte black plastic and dark chrome accents, with a subtle glowing indicator light on one earcup. Lighting is dramatic, with strong highlights emphasizing the product's premium build quality and futuristic tech noir aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVR27a0diIVHQeS5ro2suhYFgDPpwuQPdOjDschdV-taI__e7HixKvJwq4z4yFJ7mNEg22qU-1r8lYiDiWGMqH4_9NUXp5xuo69yx5I6HphvDtC6i3fS1J0us7F3pKsBhnX38Q4hCFqUtAK4i1KdLdDjEUuZk2G0W_-8HOk4QTDtwrCOPO-IEadpRGqRdPvdFH5f_-01kkie6lw7XGAQwfpNVsJSlk1SxtR-4TGaDlCAKdbd7-6iDl" />
              </div>
              <div className="flex-grow flex flex-col justify-between gap-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-lg font-semibold text-on-surface">Nova-7 Wireless</h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">$349</span>
                  </div>
                  <div className="flex items-center gap-1 text-secondary-fixed">
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <StarHalf className="size-4 fill-current" />
                    <span className="text-xs text-on-surface-variant ml-1">(128)</span>
                  </div>
                </div>
                <button className="w-full py-3 border border-white/20 text-on-surface hover:border-secondary hover:text-secondary hover:bg-secondary/10 rounded font-label-sm text-label-sm uppercase tracking-widest transition-all flex justify-center items-center gap-2">
                  Add to Cart <ShoppingCart className="size-4" />
                </button>
              </div>
            </div>

            <div className="glass-panel rounded p-6 flex flex-col gap-6 neon-glow transition-all duration-300">
              <div className="aspect-square rounded overflow-hidden bg-background relative flex items-center justify-center">
                <img className="w-4/5 h-4/5 object-contain" data-alt="Studio shot of the Ion-X Mechanical Keyboard viewed from a slight top-down angle on a dark surface. The keyboard features a low-profile, black aluminum chassis with per-key RGB backlighting set to a cohesive cool blue and green scheme. The keys appear sculpted and tactile. The overall mood is precise, engineered, and distinctly cyberpunk." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_h8xS0qdX3-uBfm_HHD3msK0hOKvExxl72wHIFeLTjgM7aY3irvEUojt4DiaB2h3Nqm_Lun0KsehyM925yAe3kws1WfXM-w1A_iHHdimBXz3ptCNfrXw7rlMijFs6q22qmasRnuqdiJFHaRRj983CsYWncmcB2_xovjE7arc36AE5-ZO3An08Q7maPVl3K0n-SheMF3nn1r02aE2AfLQqxWEtGTUTWiWbiEqdSYsLx9oueGFN3VzT" />
              </div>
              <div className="flex-grow flex flex-col justify-between gap-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-lg font-semibold text-on-surface">Ion-X Mechanical</h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">$199</span>
                  </div>
                  <div className="flex items-center gap-1 text-secondary-fixed">
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <StarHalf className="size-4 fill-current" />
                    <span className="text-xs text-on-surface-variant ml-1">(84)</span>
                  </div>
                </div>
                <button className="w-full py-3 border border-white/20 text-on-surface hover:border-secondary hover:text-secondary hover:bg-secondary/10 rounded font-label-sm text-label-sm uppercase tracking-widest transition-all flex justify-center items-center gap-2">
                  Add to Cart <ShoppingCart className="size-4" />
                </button>
              </div>
            </div>

            <div className="glass-panel rounded p-6 flex flex-col gap-6 neon-glow transition-all duration-300">
              <div className="aspect-square rounded overflow-hidden bg-background relative flex items-center justify-center">
                <img className="w-4/5 h-4/5 object-contain" data-alt="Studio shot of the Zenith Smart Hub. It is a striking, monolithic black tower design, reminiscent of high-end audio equipment or futuristic sci-fi props. A single, thin line of glowing white light bisects the front panel. It sits on a dark, subtly textured surface, conveying a sense of silent, powerful intelligence central to a smart home setup." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy7JS54T3-StnZyau2xsLl6bLxztHIiTJ4cMQ8anw5sjl5V0sCKkzGOkExmuJwdamgWTmjEhtBJlir1Oh5j9DWz8pRpjEUCK5Zvs2S0ZkSoc7fcIv2SE0EKwoCO_nDmFix-uoirr50nMi119qvv71IjpRVKKmTiE5wyhhb-WjF6m40X-6h4w1koPifLrLe8hAlFEVhudMSD_olQ_6UHKAYZeliCmf-0a4voO4R-gOqLB2TYzajeCfs" />
              </div>
              <div className="flex-grow flex flex-col justify-between gap-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-lg font-semibold text-on-surface">Zenith Smart Hub</h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">$289</span>
                  </div>
                  <div className="flex items-center gap-1 text-secondary-fixed">
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <StarHalf className="size-4 fill-current" />
                    <span className="text-xs text-on-surface-variant ml-1">(42)</span>
                  </div>
                </div>
                <button className="w-full py-3 border border-white/20 text-on-surface hover:border-secondary hover:text-secondary hover:bg-secondary/10 rounded font-label-sm text-label-sm uppercase tracking-widest transition-all flex justify-center items-center gap-2">
                  Add to Cart <ShoppingCart className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-16 h-16 rounded bg-surface-container flex items-center justify-center text-primary border border-white/5">
              <Truck className="size-8" />
            </div>
            <h4 className="font-headline-md text-lg text-on-surface">Next-Day Shipping</h4>
            <p className="font-body-md text-sm text-on-surface-variant">Priority logistics engineered to get your gear to you faster. Standard on all premium orders.</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-16 h-16 rounded bg-surface-container flex items-center justify-center text-secondary border border-white/5">
              <Headset className="size-8" />
            </div>
            <h4 className="font-headline-md text-lg text-on-surface">24/7 Tech Support</h4>
            <p className="font-body-md text-sm text-on-surface-variant">Uninterrupted access to our vanguard support specialists. We are online when you are.</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-16 h-16 rounded bg-surface-container flex items-center justify-center text-primary border border-white/5">
              <BadgeCheck className="size-8" />
            </div>
            <h4 className="font-headline-md text-lg text-on-surface">Exclusive Warranty</h4>
            <p className="font-body-md text-sm text-on-surface-variant">Comprehensive protection for your hardware investment. Built to last, guaranteed.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage