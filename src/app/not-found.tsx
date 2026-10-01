import Link from "next/link";

const NotFound = () => {
  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#043ee3] px-4 py-8 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(89,143,255,0.32)_1px,transparent_1px),linear-gradient(to_bottom,rgba(89,143,255,0.32)_1px,transparent_1px)] [background-size:44px_44px] sm:[background-size:70px_70px] lg:[background-size:88px_88px]"
      />

      <section className="relative z-10 flex w-full flex-col items-center text-center">
        <div className="relative w-[min(94vw,700px)]">
          <p
            aria-hidden="true"
            className="font-poppins bg-gradient-to-b from-[#d8fb20] via-[#c9f321] to-[#8ca8a4] bg-clip-text text-[clamp(9rem,28vw,19rem)] font-bold leading-[0.84] tracking-[-0.075em] text-transparent"
          >
            404
          </p>
          <h1 className="-mt-5 px-1 text-[clamp(1.9rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.04em] text-white">
            <span className="block">The page you are looking</span>
            <span className="block">for doesn&apos;t exist</span>
          </h1>
        </div>

        <p className="mt-8 max-w-[90vw] text-xs leading-5 text-white/80">
          Try to use a correct url or go back to homepage to start again
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-[34px] items-center justify-center rounded-full bg-primary px-5 text-[10px] font-medium text-black transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#043ee3]"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
