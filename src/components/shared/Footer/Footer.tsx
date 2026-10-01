import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = [
  [
    { label: "Featured Courses", href: "#" },
    { label: "Featured Categories", href: "#" },
    { label: "Business", href: "#" },
    { label: "IT", href: "#" },
    { label: "Design", href: "#" },
  ],
  [
    { label: "Development", href: "#" },
    { label: "Marketing", href: "#" },
    { label: "Photography", href: "#" },
    { label: "Finance", href: "#" },
    { label: "Sport", href: "#" },
  ],
  [
    { label: "Become a Creator", href: "#" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ],
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];

const Footer = () => {
  return (
    <footer className="border-t border-[#CED0D3] bg-white text-[#292929]">
      <div className="container px-5 md:px-0 pb-10 md:pb-11 lg:pb-12 pt-10 md:pt-12 lg:pt-16 xl:pt-[71px]">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-10 md:gap-y-10 lg:grid-cols-[520px_repeat(3,minmax(0,1fr))] lg:gap-x-10 lg:gap-y-0">
          <section
            aria-labelledby="newsletter-heading"
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link
              href="#"
              aria-label="ByteSpace home"
              className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4"
            >
              <Image
                src="/images/footer_logo.png"
                alt="ByteSpace"
                width={171}
                height={37}
                className="h-auto w-[155px]"
              />
            </Link>

            <h2 id="newsletter-heading" className="sr-only">
              Join the ByteSpace newsletter
            </h2>
            <p className="mt-4 max-w-[520px] text-xs md:text-sm font-normal leading-[160%] text-[#242528]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form
              className="mt-10 flex max-w-[456px] flex-col gap-3 sm:flex-row sm:items-center sm:gap-[22px]"
              action="#"
              method="get"
            >
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
                className="!h-12 !min-h-12 !max-h-[52px] flex-1 rounded-full border-[#CED0D3] bg-white px-5 text-sm md:text-base font-medium leading-[160%] text-black shadow-none placeholder:text-[#242528] placeholder:font-normal focus-visible:border-secondary focus-visible:ring-secondary/20"
                style={{ height: 48, minHeight: 48, maxHeight: 52 }}
              />
              <Button
                type="submit"
                className="h-12 md:h-[52px] w-full rounded-full bg-primary px-4 text-base font-medium text-[#242528] leading-[120%] shadow-none hover:bg-primary-hover focus-visible:ring-secondary/30 sm:w-[104px]"
              >
                Search
              </Button>
            </form>

            <p className="mt-6 max-w-[475px] text-[11px] md:text-xs font-normal leading-[160%] text-[#242528]">
              By subscribing, you agree to our{" "}
              <Link
                href="#"
                className="underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </section>

          {footerLinks?.map((group, groupIndex) => (
            <nav
              key={groupIndex}
              aria-label={`Footer links group ${groupIndex + 1}`}
              className="flex flex-col items-start gap-3.5 sm:gap-5 lg:gap-[15px] lg:pt-[47px]"
            >
              {group.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13px] md:text-sm leading-[160%] font-normal text-[#242528] transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className="mt-10 border-t border-[#CED0D3] pt-[22px] sm:mt-16 lg:mt-[128px]">
          <div className="flex flex-col items-center justify-between gap-5 font-normal leading-[160%] text-center text-[11px] md:text-xs text-[#242528] sm:flex-row sm:text-left">
            <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>

            <nav
              aria-label="Legal navigation"
              className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 sm:justify-end"
            >
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
