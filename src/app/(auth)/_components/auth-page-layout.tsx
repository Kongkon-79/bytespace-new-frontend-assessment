import type { ReactNode } from "react";
import { AuthShowcase } from "./auth-showcase";

type AuthPageLayoutProps = {
  showcaseTitle: string;
  showcaseDescription: string;
  children: ReactNode;
};

export function AuthPageLayout({ showcaseTitle, showcaseDescription, children }: AuthPageLayoutProps) {
  return (
    <main className="min-h-[100dvh] bg-[#003be2] p-2 [background-image:linear-gradient(rgba(89,143,255,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(89,143,255,0.34)_1px,transparent_1px)] [background-size:85px_85px] sm:p-4 lg:p-0">
      <div className="mx-auto grid min-h-[calc(100dvh-1rem)] w-full max-w-[1600px] lg:min-h-[100dvh] lg:grid-cols-2">
        <AuthShowcase title={showcaseTitle} description={showcaseDescription} />
        <section className="flex min-h-[680px] items-center justify-center bg-white px-5 py-12 sm:px-10 lg:min-h-[100dvh] lg:justify-start lg:bg-transparent lg:px-[17px]">
          <div className="w-full max-w-[412px] rounded-[18px] bg-white px-7 py-10 sm:px-11 lg:min-h-[558px] lg:py-12 min-[1280px]:max-w-[500px] min-[1280px]:min-h-[680px] min-[1280px]:px-14 min-[1280px]:py-16">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
