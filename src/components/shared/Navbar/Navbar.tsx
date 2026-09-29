"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#003be2] bg-[linear-gradient(to_right,rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.13)_1px,transparent_1px)] [background-size:86px_86px] lg:[background-size:120px_120px]">
      <div className="container flex h-[72px] items-center justify-between md:h-[88px]">
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#063ee3]"
        >
          <Image
            src="/images/header_logo.png"
            alt="ByteSpace"
            width={171}
            height={37}
            priority
            className="h-auto w-[132px] sm:w-[145px] lg:w-[154px]"
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex lg:gap-10">
          {navigation.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-sm py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 mx-auto h-0.5 rounded-full bg-primary transition-all ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 md:flex lg:gap-6">
          <Link
            href="/login"
            className="rounded-sm py-2 text-sm font-medium text-white/85 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="rounded-sm py-2 text-sm font-medium text-white/85 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Join Us
          </Link>
          <Link
            href="/cart"
            aria-label="View shopping cart"
            className="flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ShoppingBag aria-hidden="true" size={19} strokeWidth={1.8} />
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex size-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
        >
          {isMenuOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={25} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full overflow-hidden border-t border-white/10 bg-[#003be2] shadow-xl transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen ? "max-h-[420px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="container flex flex-col py-4">
          {navigation.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-white/10 ${
                  isActive ? "bg-white/10 text-primary" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="my-3 h-px bg-white/15" />

          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/login"
              className="flex min-h-11 items-center justify-center rounded-lg border border-white/30 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="flex min-h-11 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Join Us
            </Link>
          </div>

          <Link
            href="/cart"
            className="mt-3 flex min-h-11 items-center justify-center gap-2 rounded-lg text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <ShoppingBag aria-hidden="true" size={18} />
            View cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
