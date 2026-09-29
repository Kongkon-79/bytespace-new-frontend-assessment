import Link from "next/link";

const NotFound = () => {
  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#003be2] px-4 py-8 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.13)_1px,transparent_1px)] [background-size:clamp(44px,8.3vw,70px)_clamp(44px,8.3vw,70px)]"
      />

      <section className="relative z-10 flex w-full flex-col items-center text-center">
        <div className="relative w-[min(94vw,560px)]">
          <p
            aria-hidden="true"
            className="bg-gradient-to-b from-[#d8fb20] via-[#c9f321] to-[#8ca8a4] bg-clip-text text-[clamp(9rem,27vw,14rem)] font-bold leading-[0.84] tracking-[-0.075em] text-transparent"
          >
            404
          </p>
          <h1 className="-mt-1 px-1 text-[clamp(1.25rem,5.2vw,2.75rem)] font-bold leading-[1.02] tracking-[-0.035em] text-white">
            <span className="block">The page you are looking</span>
            <span className="block">for doesn&apos;t exist</span>
          </h1>
        </div>

        <p className="mt-6 max-w-[90vw] text-[10px] leading-5 text-white/75">
          Try to use a correct url or go back to homepage to start again
        </p>
        <Link
          href="/"
          className="mt-4 inline-flex min-h-7 items-center justify-center rounded-full bg-primary px-5 text-[10px] font-medium text-black transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#003be2]"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
