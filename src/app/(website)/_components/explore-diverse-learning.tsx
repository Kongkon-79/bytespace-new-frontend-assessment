import Image from "next/image";
import Link from "next/link";

const learningPaths = [
  {
    label: "Design",
    icon: "/images/projects/design.svg",
    href: "/courses?category=design",
  },
  {
    label: "Development",
    icon: "/images/projects/development.svg",
    href: "/courses?category=development",
  },
  {
    label: "IT & Software",
    icon: "/images/projects/it.svg",
    href: "/courses?category=it-software",
  },
  {
    label: "Business",
    icon: "/images/projects/business.svg",
    href: "/courses?category=business",
  },
  {
    label: "Marketing",
    icon: "/images/projects/marketing.svg",
    href: "/courses?category=marketing",
  },
  {
    label: "Photography",
    icon: "/images/projects/photography.svg",
    href: "/courses?category=photography",
  },
];

const ExploreDiverseLearning = () => {
  return (
    <section
      aria-labelledby="learning-paths-heading"
      className="bg-white px-5 sm:px-8 pb-20 md:pb-24 lg:pb-[120px]"
    >
      <div className="container">
        <header className="mx-auto max-w-[930px] text-center">
          <h2
            id="learning-paths-heading"
            className="text-balance text-2xl md:text-3xl lg:text-4xl leading-[120%] font-semibold tracking-[-0.025em] text-[#040819]"
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-3 lg:mt-4 max-w-[870px] text-sm md:text-base lg:text-[17px] font-normal leading-6 text-[#82868E]">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6 lg:gap-8">
          {learningPaths.map((path) => (
            <Link
              key={path.label}
              href={path.href}
              className="group flex min-h-[140px] flex-col items-center justify-center gap-3 rounded-[24px] border border-[#CED0D3] bg-white p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_12px_30px_rgba(18,32,74,0.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              <span className="flex size-[60px] items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={path.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="size-[36px]"
                />
              </span>
              <span className="text-sm md:text-base lg:text-lg xl:text-xl leading-[120%] font-medium text-[#242528] transition-colors group-hover:text-secondary">
                {path.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreDiverseLearning;
