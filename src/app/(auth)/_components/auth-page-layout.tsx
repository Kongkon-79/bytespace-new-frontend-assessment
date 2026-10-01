import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AuthShowcase } from "./auth-showcase";

type AuthPageLayoutProps = {
  showcaseTitle: string;
  showcaseDescription: string;
  children: ReactNode;
};

export function AuthPageLayout({
  showcaseTitle,
  showcaseDescription,
  children,
}: AuthPageLayoutProps) {
  return (
    <main className="min-h-[100dvh] overflow-x-clip bg-[#043ee3] [background-image:linear-gradient(rgba(89,143,255,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(89,143,255,0.32)_1px,transparent_1px)] [background-size:72px_72px] sm:[background-size:87px_87px] lg:[background-size:87px_87px] xl:[background-size:100px_100px] 2xl:[background-size:120px_120px]">
      <div className="mx-auto grid min-h-[100dvh] w-full max-w-[1048px] lg:grid-cols-2 xl:max-w-[1200px] 2xl:max-w-[1320px]">
        <AuthShowcase title={showcaseTitle} description={showcaseDescription} />
        <section className="flex min-h-[100dvh] items-start justify-center px-4 py-6 sm:px-10 sm:py-12 md:px-16 lg:items-center lg:justify-start lg:px-[13px] xl:justify-center">
          <div className="w-full max-w-[460px] lg:max-w-[420px]">
            <div className="mb-6 text-white lg:hidden sm:mb-7">
              <div className="flex items-center justify-between gap-3">
                <Link
                  href="/"
                  aria-label="Go to ByteSpace home"
                  className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                >
                  <Image
                    src="/images/auth_logo.png"
                    alt="ByteSpace"
                    width={35}
                    height={32}
                    className="h-auto w-9 "
                    priority
                  />
                </Link>
                <Link
                  href="/"
                  className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-white/35 bg-white/10 px-3 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                >
                  <ArrowLeft className="size-3.5" />
                  Back to home
                </Link>
              </div>
              <div className="mt-5 max-w-[355px]">
                <p className="text-base font-bold tracking-[-0.02em]">
                  {showcaseTitle}
                </p>
                <p className="mt-1.5 text-xs leading-5 text-white/90 sm:text-[13px]">
                  {showcaseDescription}
                </p>
              </div>
            </div>
            <div className="w-full rounded-[24px] border border-white/70 bg-white px-6 py-8 shadow-[0_20px_45px_rgba(0,19,82,0.24)] sm:px-11 sm:py-12 lg:h-[645px] lg:rounded-[20px] lg:border-0 lg:px-11 lg:py-12 lg:shadow-none xl:scale-105 xl:transform-gpu 2xl:scale-[1.12]">
              {children}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
