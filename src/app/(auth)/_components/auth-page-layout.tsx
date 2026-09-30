import type { ReactNode } from "react";
import { AuthShowcase } from "./auth-showcase";

type AuthPageLayoutProps = {
  showcaseTitle: string;
  showcaseDescription: string;
  children: ReactNode;
};

export function AuthPageLayout({ showcaseTitle, showcaseDescription, children }: AuthPageLayoutProps) {
  return (
    <main className="min-h-[100dvh] overflow-x-clip bg-[#043ee3] [background-image:linear-gradient(rgba(89,143,255,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(89,143,255,0.32)_1px,transparent_1px)] [background-size:72px_72px] sm:[background-size:87px_87px] lg:[background-size:87px_87px] xl:[background-size:100px_100px] 2xl:[background-size:120px_120px]">
      <div className="mx-auto grid min-h-[100dvh] w-full max-w-[1048px] lg:grid-cols-2 xl:max-w-[1200px] 2xl:max-w-[1320px]">
        <AuthShowcase title={showcaseTitle} description={showcaseDescription} />
        <section className="flex min-h-[100dvh] items-center justify-center bg-white px-5 py-10 sm:px-10 sm:py-14 md:px-16 lg:justify-start lg:bg-transparent lg:px-[13px] xl:justify-center">
          <div className="w-full max-w-[420px] rounded-[20px] bg-white px-7 py-10 sm:px-11 sm:py-12 md:max-w-[460px] lg:h-[568px] lg:max-w-[420px] lg:px-11 lg:py-12 xl:scale-105 xl:transform-gpu 2xl:scale-[1.12]">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
