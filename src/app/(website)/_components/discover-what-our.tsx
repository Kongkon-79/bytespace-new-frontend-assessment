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
    <article className="flex flex-col rounded-[24px] bg-white/95 p-6 shadow-[0_16px_45px_rgba(42,51,91,0.05)] ring-1 ring-white/70 transition-transform duration-300 hover:-translate-y-1 sm:p-7 lg:p-8">
      <Image
        src={testimonial.image}
        alt={`${testimonial.name}, ${testimonial.role}`}
        width={80}
        height={80}
        sizes="80px"
        className="size-20 rounded-full object-cover"
      />

      <div className="mt-6">
        <h3 className="text-xl font-bold leading-tight text-[#111217]">{testimonial.name}</h3>
        <p className="mt-1 text-base font-medium text-[#0047ff]">{testimonial.role}</p>
      </div>

      <blockquote className="mt-8 text-[15px] leading-[1.75] text-[#5d5f65]">
        <p>&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>
    </article>
  );
};

const DiscoverWhatOur = () => {
  return (
    <section
      aria-labelledby="community-heading"
      className="relative isolate overflow-hidden bg-[#fbfcff] px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_68%_28%,rgba(212,251,32,0.56),transparent_38%),radial-gradient(circle_at_8%_100%,rgba(63,112,255,0.30),transparent_43%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-white/20" />

      <div className="container">
        <header className="grid items-start gap-8 md:grid-cols-[0.92fr_1.08fr] md:gap-16 lg:gap-24">
          <h2
            id="community-heading"
            className="max-w-[500px] text-balance text-3xl font-bold leading-[1.18] tracking-[-0.035em] text-black sm:text-4xl lg:text-[44px]"
          >
            Discover What Our Community Is Saying
          </h2>

          <p className="max-w-[600px] text-base leading-[1.75] text-[#55585f] md:justify-self-end lg:text-[17px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </header>

        <div className="mt-14 grid items-start gap-6 sm:mt-16 md:grid-cols-2 lg:mt-[72px] lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverWhatOur;
