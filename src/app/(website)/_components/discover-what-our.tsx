import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "/images/sarah.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "/images/james.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "/images/alex.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

type Testimonial = (typeof testimonials)[number];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <article className="flex flex-col rounded-[24px] bg-white p-6 shadow-[0_16px_45px_rgba(42,51,91,0.05)] ring-1 ring-white/70 transition-transform duration-300 hover:-translate-y-1 sm:p-7 lg:p-8">
      <Image
        src={testimonial.image}
        alt={`${testimonial.name}, ${testimonial.role}`}
        width={80}
        height={80}
        sizes="80px"
        className="size-20 rounded-full object-cover"
      />

      <div className="mt-4">
        <h3 className="text-lg md:text-xl font-semibold leading-[120%] text-black">
          {testimonial.name}
        </h3>
        <p className="text-base lg:text-lg leading-[160%] font-medium text-secondary">
          {testimonial.role}
        </p>
      </div>

      <blockquote className="mt-4 md:mt-5 lg:mg-6 text-sm md:text-base lg:text-lg leading-[160%] text-[#4F4F4F]">
        <p>&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>
    </article>
  );
};

const DiscoverWhatOur = () => {
  return (
    <section
      aria-labelledby="community-heading"
      className="relative isolate overflow-hidden bg-[#fbfcff] px-5 pt-10 md:pt-12 lg:pt-16 xl:pt-[74px] pb-8 md:pb-10 lg:pb-12 xl:pb-[57px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_68%_28%,rgba(212,251,32,0.56),transparent_38%),radial-gradient(circle_at_8%_100%,rgba(63,112,255,0.30),transparent_43%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-white/20"
      />

      <div className="container">
        <header className="grid items-start gap-8 md:grid-cols-[0.92fr_1.08fr] md:gap-16 lg:gap-24">
          <h2
            id="community-heading"
            className="max-w-[500px] text-balance text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[120%] tracking-[-0.035em] text-black"
          >
            Discover What Our Community Is Saying
          </h2>

          <p className="max-w-[600px] text-sm md:text-base lg:text-lg font-normal leading-[160%] text-[#4F4F4F] md:justify-self-end">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </header>

        <div className="grid items-start gap-6 sm:mt-16 md:grid-cols-2 mt-10 md:mg-12 lg:mt-[72px] lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverWhatOur;
