import { APP_URL } from "@/router";
import { Apple, Lock, LogIn, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (

    <div className="glass-panel rounded-xl p-8 md:p-12 shadow-2xl shadow-black/50">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter mb-2">
          KINETIC NOIR
        </h1>

        <p className="font-body-md text-body-md text-on-surface-variant">
          ENGINEERED FOR THE FUTURE
        </p>
      </div>

      {/* Form */}
      <form
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Email */}
        <div className="space-y-2">
          <label
            className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest block"
            htmlFor="email"
          >
            Email Address
          </label>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant" />
            <input
              className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-3 pl-12 pr-4 text-on-surface placeholder:text-outline-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300 font-body-md"
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label
              className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest block"
              htmlFor="password"
            >
              Password
            </label>

            <a
              className="font-label-sm text-label-sm text-primary hover:text-primary-fixed transition-colors"
              href="#"
            >
              Forgot?
            </a>
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant" />
            <input
              className="w-full bg-surface-container-low border border-outline-variant rounded-DEFAULT py-3 pl-12 pr-4 text-on-surface placeholder:text-outline-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300 font-body-md"
              id="password"
              name="password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          className="w-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest py-4 rounded-DEFAULT hover:bg-primary-fixed transition-all duration-300 shadow-[0_0_15px_rgba(173,198,255,0.3)] hover:shadow-[0_0_25px_rgba(173,198,255,0.5)] mt-4"
          type="submit"
        >
          Sign In
        </button>
      </form>

      {/* Social Login */}
      <div className="mt-8">
        <div className="relative flex items-center py-5">
          <div className="flex-grow border-t border-white/10" />

          <span className="flex-shrink-0 mx-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
            Or authenticate with
          </span>

          <div className="flex-grow border-t border-white/10" />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">

          {/* Google */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-3 bg-surface-container-low border border-white/10 rounded-DEFAULT hover:border-primary hover:bg-white/5 transition-all duration-300 group"
          >
            <LogIn className="text-on-surface group-hover:text-primary transition-colors" />
            <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">
              Google
            </span>
          </button>

          {/* Apple */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-3 bg-surface-container-low border border-white/10 rounded-DEFAULT hover:border-primary hover:bg-white/5 transition-all duration-300 group"
          >
            <Apple className="text-on-surface group-hover:text-primary transition-colors" />

            <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">
              Apple
            </span>
          </button>

        </div>
      </div>

      {/* Register */}
      <div className="mt-10 text-center">
        <p className="font-body-md text-body-md text-on-surface-variant">
          New to Kinetic Noir?

          <Link
            className="text-primary hover:text-primary-fixed transition-colors ml-1 border-b border-primary/30 hover:border-primary pb-0.5"
            to={APP_URL.auth.url + "/" + APP_URL.auth.register}
          >
            Initialize Account
          </Link>
        </p>
      </div>

    </div>

  );
}