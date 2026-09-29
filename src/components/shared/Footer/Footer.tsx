import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = [
  [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/categories" },
    { label: "Business", href: "/courses?category=business" },
    { label: "IT", href: "/courses?category=it" },
    { label: "Design", href: "/courses?category=design" },
  ],
  [
    { label: "Development", href: "/courses?category=development" },
    { label: "Marketing", href: "/courses?category=marketing" },
    { label: "Photography", href: "/courses?category=photography" },
    { label: "Finance", href: "/courses?category=finance" },
    { label: "Sport", href: "/courses?category=sport" },
  ],
  [
    { label: "Become a Creator", href: "/creators" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookies Settings", href: "/cookie-settings" },
];

const Footer = () => {
  return (
    <footer className="border-t border-black/5 bg-[#fdfdfd] text-[#292929]">
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-7 pt-12 sm:px-8 sm:pt-14 lg:px-5 lg:pb-10 lg:pt-[68px]">
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-[2.2fr_repeat(3,1fr)] lg:gap-x-16 lg:gap-y-0">
          <section aria-labelledby="newsletter-heading" className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="ByteSpace home"
              className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4"
            >
              <Image
                src="/images/footer_logo.png"
                alt="ByteSpace"
                width={171}
                height={37}
                className="h-auto w-[150px] sm:w-[171px]"
              />
            </Link>

            <h2 id="newsletter-heading" className="sr-only">
              Join the ByteSpace newsletter
            </h2>
            <p className="mt-5 max-w-[520px] text-sm leading-6 text-[#454545]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form className="mt-10 flex max-w-[505px] flex-col gap-3 xs:flex-row sm:flex-row" action="#" method="get">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <Input
                id="footer-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Enter your email"
                className="h-[52px] flex-1 rounded-full border-[#c8c8c8] bg-white px-6 text-sm text-[#292929] shadow-none placeholder:text-[#565656] focus-visible:border-secondary focus-visible:ring-secondary/20"
              />
              <Button
                type="submit"
                className="h-[52px] rounded-full bg-primary px-8 text-base font-medium text-black shadow-none hover:bg-primary-hover focus-visible:ring-secondary/30 sm:h-[48px] sm:self-center"
              >
                Search
              </Button>
            </form>

            <p className="mt-6 max-w-[475px] text-[11px] leading-[1.55] text-[#555555]">
              By subscribing, you agree to our{" "}
              <Link href="/privacy-policy" className="underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </section>

          {footerLinks.map((group, groupIndex) => (
            <nav
              key={groupIndex}
              aria-label={`Footer links group ${groupIndex + 1}`}
              className="flex flex-col items-start gap-5 lg:pt-[52px]"
            >
              {group.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-sm text-sm text-[#343434] transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className="mt-16 border-t border-[#d0d0d0] pt-6 lg:mt-[128px]">
          <div className="flex flex-col items-center justify-between gap-5 text-center text-[11px] text-[#444444] sm:flex-row sm:text-left">
            <p>© 2023 ByteSpace. All rights reserved.</p>

            <nav aria-label="Legal navigation" className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 sm:justify-end">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-sm transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
