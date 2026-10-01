"use client";

import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import {
  BarChart3,
  CheckCircle2,
  Clock3,
  MessageCircle,
  Star,
} from "lucide-react";
import { useEffect, useRef } from "react";
import coursesData from "@/app/_data/courses.json";
import type { Course } from "./course-card";

const avatars = Array.from(
  { length: 7 },
  (_, i) => `/images/hero/hero-avatar-${i + 1}.png`,
);
const learnerAvatars = [
  "/images/projects/user1.png",
  "/images/projects/user2.png",
  "/images/projects/user3.png",
  "/images/projects/user4.png",
];
const featuredCourse = (coursesData as Course[])[0];
const reveal = { hidden: { opacity: 1, y: 28 }, visible: { opacity: 1, y: 0 } };

export default function ProfessionalGrowth() {
  const reduced = useReducedMotion();
  const progress = useMotionValue(reduced ? 55 : 0);
  const displayedProgress = useTransform(progress, (value) =>
    Math.round(value),
  );
  const progressCardRef = useRef<HTMLDivElement>(null);
  const progressCardInView = useInView(progressCardRef, { once: true });

  useEffect(() => {
    if (reduced || !progressCardInView) return;

    const controls = animate(progress, 55, {
      duration: 0.9,
      delay: 0.75,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [progress, progressCardInView, reduced]);

  const float = (y: number, duration: number, delay = 0) =>
    reduced
      ? {}
      : {
          y: [0, -y, 0],
          transition: {
            duration,
            delay,
            repeat: Infinity,
            repeatType: "mirror" as const,
            ease: [0.42, 0, 0.58, 1] as const,
          },
        };

  const happyStudents = (
    <motion.div
      initial={reduced ? false : { opacity: 1, y: 16 }}
      whileInView={{ opacity: 1, y: 0, ...float(5, 5, 1) }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.35 }}
      className="absolute bottom-2 right-0 z-30 w-[190px] rounded-xl bg-white p-3 shadow-[0_14px_26px_rgba(36,37,40,0.14)] sm:right-[2%] sm:w-[205px] lg:bottom-auto lg:left-[350px] lg:right-auto lg:top-[365px] lg:w-[238px]"
    >
      <h4 className="text-xs md:text-sm lg:text-base font-medium leading-[24px] text-[#242528]">Happy Students</h4>
      <p className="mt-0.5 flex items-center gap-1 font-normal text-[8px] md:text-[10px] text-[#82868E]">
        <strong className="text-[#242528]">4.5</strong> (240)
        <Star className="size-2.5 fill-primary text-primary" />
      </p>
      <div className="mt-2 flex items-center">
        {avatars.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={43}
            height={43}
            className={`size-7 lg:size-8 rounded-full border-2 border-white object-contain ${i ? "-ml-2" : ""}`}
          />
        ))}
        <span className="-ml-1.5 flex size-7 lg:size-8 items-center justify-center rounded-full border-2 border-white bg-primary text-[10px] md:text-xs leading-[150%] font-bold text-[#242528]">
          2K+
        </span>
      </div>
    </motion.div>
  );

  return (
    <section
      aria-labelledby="professional-growth-heading"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_55%_42%_at_32%_0%,rgba(228,255,123,.56),transparent_68%),radial-gradient(ellipse_42%_38%_at_0%_100%,rgba(222,255,77,.62),transparent_72%),radial-gradient(ellipse_46%_42%_at_100%_0%,rgba(220,228,255,.7),transparent_72%),radial-gradient(ellipse_56%_42%_at_72%_100%,rgba(202,215,255,.67),transparent_72%),linear-gradient(135deg,#fbfcf8_0%,#fff_48%,#f9faff_100%)] px-5 py-12 sm:px-8 sm:py-20 lg:py-[90px] "
    >
      <div className="container lg:px-0">
        <div className="grid items-center gap-10 md:gap-12 lg:flex lg:items-center lg:justify-between lg:gap-0">
          <motion.div
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            transition={{ duration: 0.65 }}
            className="max-w-[530px]"
          >
            <h2
              id="professional-growth-heading"
              className="text-balance text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[120%] tracking-[-.035em] text-[#242528]"
            >
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-5 md:mt-7 max-w-[492px] text-sm md:text-base lg:text-lg font-normal leading-[160%] text-[#4B4C53]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <dl className="mt-8 md:mt-10 flex max-w-[300px] justify-between gap-5 sm:max-w-none sm:justify-start sm:gap-14">
              {[
                ["12K", "Students"],
                ["70+", "Courses"],
                ["16", "Creators"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[44px] tracking-[-.04em] text-secondary font-poppins">
                    {value}
                  </dt>
                  <dd className="mt-1 text-sm md:text-base lg:text-lg text-[#4B4C53] font-normal leading-[160%]">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <div className="relative mx-auto h-[390px] w-full max-w-[570px] md:h-[500px] lg:mx-0 lg:h-[575px] lg:w-[612px] lg:max-w-none ">
            <motion.div
              initial={reduced ? false : { opacity: 1, scale: 0.94, y: 28 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.72 }}
              className="absolute right-[2%] top-0 z-10 w-full rounded-[24px] border border-[#CED0D3] bg-white p-3 md:p-4 shadow-[0_18px_30px_rgba(36,37,40,.12)] sm:right-[8%] sm:w-[290px] md:right-[34%] md:w-[62%] lg:left-[44px] lg:right-auto lg:top-[30px] lg:w-[342px]"
            >
              <div className="relative aspect-[1.75/1] overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={featuredCourse.image}
                  alt={featuredCourse.imageAlt}
                  fill
                  sizes="(max-width: 640px) 230px, 290px"
                  className="object-cover"
                />
                <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-1 text-[8px] text-[#44474d] sm:text-[9px]">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/85 px-2 py-1">
                    <BarChart3 className="size-2.5" />
                    {featuredCourse.lessons} Lessons
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/85 px-2 py-1">
                    <Clock3 className="size-2.5" />
                    {featuredCourse.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/85 px-2 py-1">
                    <MessageCircle className="size-2.5" />
                    {featuredCourse.comments}
                  </span>
                </div>
              </div>
              <div className="px-0.5 pb-1 pt-3 lg:px-2 lg:pt-5">
                <div className="flex items-start justify-between gap-2">
                  <p className="truncate text-sm font-bold text-[#242528] sm:text-base md:text-sm lg:text-[18px]">
                    {featuredCourse.title}
                  </p>
                  <span className="flex shrink-0 items-center gap-1 text-xs text-[#85878d] lg:text-[10px]">
                    {featuredCourse.rating}
                    <Star className="size-3 fill-[#d9dadd] text-[#d9dadd] lg:size-3" />
                  </span>
                </div>
                <p className="mt-1 text-[10px] text-[#777b85] md:text-[9px] lg:text-[10px]">
                  by{" "}
                  <span className="text-[#0047ff]">
                    {featuredCourse.instructor}
                  </span>
                </p>
                <div className="mt-2 flex items-center justify-between gap-2 lg:mt-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#f5f5f6] px-2.5 py-1 text-[9px] text-[#555860] md:px-2 md:py-1 md:text-[9px] lg:px-3 lg:py-1.5 lg:text-[10px]">
                    <BarChart3 className="size-3 lg:size-3" />
                    {featuredCourse.level}
                  </span>
                  <div
                    className="flex items-center"
                    aria-label={`${featuredCourse.enrolledCount} learners enrolled`}
                  >
                    {learnerAvatars.map((src, index) => (
                      <Image
                        key={src}
                        src={src}
                        alt=""
                        width={32}
                        height={32}
                        className={`size-5 rounded-full border-2 border-white object-cover lg:size-5 ${index ? "-ml-1.5" : ""}`}
                      />
                    ))}
                    <span className="-ml-1.5 flex size-5 items-center justify-center rounded-full border-2 border-white bg-primary text-[6px] font-bold text-black lg:size-5 lg:text-[6px]">
                      {featuredCourse.enrolledCount}
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-sm font-bold leading-none text-[#003be2] md:text-sm lg:mt-3 lg:text-[19px]">
                  ${featuredCourse.price}
                  <span className="ml-0.5 text-[9px] font-normal text-[#777b85] lg:text-[10px]">
                    /lifetime
                  </span>
                </p>
              </div>
            </motion.div>
            <motion.div
              ref={progressCardRef}
              initial={reduced ? false : { opacity: 1, x: 26 }}
              whileInView={{ opacity: 1, x: 0, ...float(7, 5.5, 0.7) }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="absolute right-28 top-[118px] z-30 w-[144px] rounded-xl bg-white p-3 shadow-[0_14px_26px_rgba(36,37,40,.14)] sm:top-[144px] sm:w-[174px] md:top-[14%] md:w-[42%] md:rounded-2xl md:p-3 lg:left-[358px] lg:right-auto lg:top-[224px] lg:w-[216px] lg:rounded-[18px] lg:p-4"
            >
              <p className="text-xs md:text-sm font-medium leading-[24px] text-[#242528] font-medium">
                Learning Progress
              </p>
              <p className="mt-1 md:mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold leading-[120%] font-poppins">
                <motion.span>{displayedProgress}</motion.span>%
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#eee] lg:mt-3 lg:h-2">
                <motion.div
                  initial={reduced ? false : { width: 0 }}
                  whileInView={{ width: "55%" }}
                  viewport={{ once: true }}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { duration: 0.9, delay: 0.75, ease: "easeOut" }
                  }
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </motion.div>
            <motion.div
              initial={reduced ? false : { opacity: 1, rotate: -12 }}
              whileInView={{ opacity: 1, rotate: 0, ...float(8, 6, 0.5) }}
              viewport={{ once: true }}
              className="absolute right-0 top-[42px] z-30 w-[72px] sm:right-[1%] sm:top-[50px] sm:w-[88px] md:right-0 md:top-[18%] md:w-[22%] lg:left-[458px] lg:right-auto lg:top-[115px] lg:w-[120px]"
            >
              <Image
                src="/images/professional_growth_right_shape.png"
                alt=""
                width={216}
                height={316}
                className="h-auto w-full"
              />
            </motion.div>
            <motion.div
              initial={reduced ? false : { opacity: 1, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="absolute bottom-[-8px] left-1/2 z-20 w-[82vw] max-w-[300px] -translate-x-1/2 sm:bottom-[-42px] sm:left-[21%] sm:w-[370px] sm:max-w-none sm:translate-x-0 md:bottom-[24%] md:left-[12%] md:w-[76%] lg:left-[18px] lg:top-[40px] lg:w-[620px]"
            >
              <Image
                src="/images/professional_growth_right.png"
                alt="Student learning with a laptop"
                width={703}
                height={788}
                className="h-auto w-full"
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-8 md:mt-0 grid items-center gap-10 sm:gap-14 lg:flex lg:items-center lg:justify-between lg:gap-0">
          <div className="relative order-2 mx-auto h-[385px] w-full max-w-[510px] sm:h-[405px] lg:order-1 lg:mx-0 lg:h-[575px] lg:w-[612px] lg:max-w-none">
            <motion.div
              initial={reduced ? false : { opacity: 1, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="absolute bottom-[-10px] left-1/2 z-20 h-auto w-[82vw] max-w-[300px] -translate-x-1/2 sm:bottom-[-18px] sm:left-[23%] sm:h-[460px] sm:w-[375px] sm:max-w-none sm:translate-x-0 lg:bottom-auto lg:left-[73px] lg:top-[20px] lg:h-auto lg:w-[470px]"
            >
              <Image
                src="/images/professional_growth_left.png"
                alt="Creator managing courses on a tablet"
                width={579}
                height={719}
                className="h-auto w-full"
              />
            </motion.div>
            <motion.div
              animate={float(8, 5.8, 0.6)}
              className="absolute left-[50%] top-[66px] z-20 w-[80px] sm:left-[56%] sm:top-[74px] sm:w-[102px] lg:left-[421px] lg:top-[129px] lg:w-[110px]"
            >
              <Image
                src="/images/professional_growth_left_shape.png"
                alt=""
                width={216}
                height={216}
                className="h-auto w-full"
              />
            </motion.div>
            <motion.div
              initial={reduced ? false : { opacity: 1, x: -20 }}
              whileInView={{ opacity: 1, x: 0, ...float(5, 5, 1) }}
              viewport={{ once: true }}
              className="absolute left-0 top-[35px] z-10 w-[126px] rounded-xl bg-[#003be2] p-3 text-white shadow-[0_14px_26px_rgba(0,59,226,.24)] sm:left-[2%] sm:top-[30px] sm:w-[150px] lg:left-[90px] lg:top-[34px] lg:w-[224px] lg:p-4"
            >
              <p className="text-xs md:text-sm lg:text-base text-[#F6F6F6] leading-[120%] font-medium">Total Revenue</p>
              <p className="text-[10px] md:text-xs text-[#F5F5F6] font-normal leading-[120%]">July 1-28</p>
              <p className="mt-1 text-lg md:text-xl lg:text-2xl text-[#F5F5F6] font-semibold leading-[32px] font-poppins">$120.29</p>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/25">
                <motion.div
                  initial={reduced ? false : { width: 0 }}
                  whileInView={{ width: "70%" }}
                  viewport={{ once: true }}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { duration: 0.9, delay: 0.75, ease: "easeOut" }
                  }
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </motion.div>
            <motion.div
              initial={reduced ? false : { opacity: 1, x: -20 }}
              whileInView={{ opacity: 1, x: 0, ...float(6, 5.4, 1.3) }}
              viewport={{ once: true }}
              className="absolute left-0 top-[149px] z-10 w-[115px] rounded-xl bg-[#003be2] p-3 text-white shadow-[0_14px_26px_rgba(0,59,226,.24)] sm:left-[2%] sm:top-[140px] md:w-[123px] lg:left-[90px] lg:top-[190px] lg:w-[135px]"
            >
              <p className="text-xs md:text-sm lg:text-base text-[#F5F5F6] leading-[120%] font-medium">Year To Date</p>
              <p className="text-[8px] md:text-[10px] text-[#F5F5F6] font-normal leading-[120%]">2023</p>
              <p className="mt-2 text-lg md:text-xl lg:text-2xl text-[#F5F5F6] font-semibold leading-[32px] font-poppins">$1,200.38</p>
              <span className="mt-2 inline-flex rounded-full bg-primary px-1.5 py-0.5 text-[8px] md:text-[10px] leading-[20px] font-medium text-[#242528]">
                +12%
              </span>
            </motion.div>
            {happyStudents}
          </div>
          <motion.div
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            transition={{ duration: 0.65 }}
            className="order-1 max-w-[510px] lg:order-2"
          >
            <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-semibold leading-[120%] tracking-[-.035em] text-[#242528]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-5 md:mt-7 text-sm md:text-base lg:text-lg leading-[28px] font-normal text-[#4B4C53]">
              <strong className="text-[#242528] font-bold">ByteSpace</strong> supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-[#30333a] sm:mt-8 sm:space-y-3 sm:text-base">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm md:text-base lg:text-lg leading-[120%] font-medium text-[#242528]">
                  <CheckCircle2 className="size-6 shrink-0 fill-secondary text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
