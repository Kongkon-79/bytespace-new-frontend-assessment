"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Search, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const studentAvatars = Array.from(
  { length: 7 },
  (_, index) => `/images/hero/hero-avatar-${index + 1}.png`,
);

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const floatingAnimation = (
    distance: number,
    rotation: number,
    duration: number,
    delay = 0,
  ) =>
    shouldReduceMotion
      ? {}
      : {
          y: [0, -distance, 0],
          rotate: [-rotation, rotation, -rotation],
          transition: {
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[760px] overflow-hidden bg-[#0b40df] px-5 text-white sm:min-h-[720px] sm:px-8 lg:min-h-[646px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.13)_1px,transparent_1px)] [background-size:86px_86px]"
      />

      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute left-1/2 top-[425px] -z-10 size-[640px] -translate-x-1/2 rounded-full bg-[#c7ff00] sm:top-[390px] sm:size-[720px] lg:top-[333px] lg:size-[800px]"
      />

      <div className="relative z-30 mx-auto max-w-[1200px] pt-10 text-center sm:pt-11 lg:pt-10">
        <motion.h1
          id="hero-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[760px] text-balance text-[38px] font-bold leading-[1.12] tracking-[-0.035em] sm:text-5xl lg:text-[52px]"
        >
          Get Access to Hundreds
          <span className="block">Courses Available</span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-[700px] text-sm leading-6 text-white/80 sm:text-[15px]"
        >
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </motion.p>

        <motion.form
          action="/courses"
          method="get"
          role="search"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: "easeOut" }}
          className="mx-auto mt-10 flex max-w-[415px] flex-col gap-3 sm:max-w-[415px] sm:flex-row"
        >
          <div className="relative flex-1">
            <label htmlFor="hero-course-search" className="sr-only">
              Search courses, topics, or creators
            </label>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 z-10 size-[18px] -translate-y-1/2 text-[#757982]"
            />
            <Input
              id="hero-course-search"
              name="q"
              type="search"
              placeholder="Course, topic, creator"
              className="h-[50px] rounded-full border-0 bg-white pl-11 pr-5 text-sm text-[#22242a] shadow-[0_8px_30px_rgba(0,0,0,0.08)] placeholder:text-[#8a8d95] focus-visible:border-primary focus-visible:ring-primary/30"
            />
          </div>
          <Button
            type="submit"
            className="h-[50px] rounded-full bg-primary px-7 text-sm font-semibold text-black shadow-none hover:bg-primary-hover focus-visible:ring-white/60 sm:self-center"
          >
            Search
          </Button>
        </motion.form>
      </div>

      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0, ...floatingAnimation(12, 3, 6) }}
        className="absolute -left-7 top-[330px] z-10 w-[105px] sm:-left-5 sm:top-[210px] sm:w-[130px] lg:-left-1 lg:top-[116px] lg:w-[142px]"
      >
        <Image src="/images/hero/hero-shape-left-lime.png" alt="" width={267} height={387} className="h-auto w-full" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.65 }}
        animate={{ opacity: 1, scale: 1, ...floatingAnimation(9, 5, 5.5, 0.3) }}
        className="absolute left-[9%] top-[390px] z-10 hidden w-[82px] sm:block lg:left-[15%] lg:top-[276px] lg:w-[88px]"
      >
        <Image src="/images/hero/hero-shape-left-white.png" alt="" width={177} height={176} className="h-auto w-full" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0, x: 45 }}
        animate={{ opacity: 1, x: 0, ...floatingAnimation(13, 2.5, 6.5, 0.2) }}
        className="absolute -right-10 top-[330px] z-10 w-[105px] sm:-right-8 sm:top-[205px] sm:w-[120px] lg:-right-1 lg:top-[98px] lg:w-[118px]"
      >
        <Image src="/images/hero/hero-shape-right-lime.png" alt="" width={213} height={372} className="h-auto w-full" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0, rotate: -14, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1, ...floatingAnimation(10, 5, 5.8, 0.5) }}
        className="absolute right-[11%] top-[385px] z-10 hidden w-[82px] sm:block lg:right-[13%] lg:top-[261px] lg:w-[94px]"
      >
        <Image src="/images/hero/hero-shape-triangle.png" alt="" width={190} height={189} className="h-auto w-full" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={floatingAnimation(8, 4, 7, 0.4)}
        className="absolute -bottom-8 left-[2%] z-10 hidden w-[150px] sm:block lg:bottom-[45px] lg:left-[5%] lg:w-[171px]"
      >
        <Image src="/images/hero/hero-shape-bottom-left.png" alt="" width={344} height={343} className="h-auto w-full" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={floatingAnimation(12, 4, 6.2, 0.8)}
        className="absolute -bottom-10 right-[-3%] z-10 hidden w-[135px] sm:block lg:bottom-[43px] lg:right-[4%] lg:w-[147px]"
      >
        <Image src="/images/hero/hero-shape-bottom-right.png" alt="" width={317} height={332} className="h-auto w-full" />
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 65, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-1/2 z-20 w-[455px] -translate-x-1/2 sm:w-[520px] lg:w-[560px]"
      >
        <Image
          src="/images/hero/hero-student.png"
          alt="A smiling student learning online with headphones and a laptop"
          width={1444}
          height={1030}
          priority
          sizes="(max-width: 640px) 455px, (max-width: 1024px) 520px, 560px"
          className="h-auto w-full drop-shadow-[0_18px_30px_rgba(0,0,0,0.18)]"
        />
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, x: -25, y: 14 }}
        animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 0.72 },
          x: { duration: 0.5, delay: 0.72 },
          y: shouldReduceMotion
            ? { duration: 0 }
            : { duration: 4.5, delay: 1.2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-[230px] left-3 z-30 w-[138px] rounded-xl bg-white p-3 text-left text-[#27292f] shadow-[0_12px_30px_rgba(0,0,0,0.13)] sm:left-[calc(50%-250px)] sm:w-[150px] lg:bottom-[224px] lg:left-[calc(50%-226px)]"
      >
        <p className="text-xs font-medium sm:text-[13px]">UI/UX Design</p>
        <p className="mt-0.5 whitespace-nowrap text-[8px] text-[#8a8d94] sm:text-[9px]">200 Courses&nbsp; • &nbsp;1000+ Students</p>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, x: 25, y: 14 }}
        animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 0.82 },
          x: { duration: 0.5, delay: 0.82 },
          y: shouldReduceMotion
            ? { duration: 0 }
            : { duration: 5, delay: 1.4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-[162px] right-3 z-30 w-[145px] rounded-xl bg-white p-3 text-left text-[#2b2d31] shadow-[0_12px_30px_rgba(0,0,0,0.13)] sm:bottom-[190px] sm:right-[calc(50%-255px)] sm:w-[166px] lg:bottom-[172px] lg:right-[calc(50%-253px)]"
      >
        <p className="text-[10px] font-medium sm:text-[11px]">Learning Progress</p>
        <p className="mt-1 text-[32px] font-bold leading-none sm:text-[36px]">55%</p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#f1f1f1]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "55%" }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.9, ease: "easeOut" }}
            className="h-full rounded-full bg-primary"
          />
        </div>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, x: -28, y: 14 }}
        animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 0.92 },
          x: { duration: 0.5, delay: 0.92 },
          y: shouldReduceMotion
            ? { duration: 0 }
            : { duration: 5.2, delay: 1.6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-5 left-3 z-30 w-[190px] rounded-xl bg-white p-3 text-left text-[#282a30] shadow-[0_12px_30px_rgba(0,0,0,0.13)] sm:bottom-9 sm:left-[calc(50%-285px)] lg:bottom-[46px] lg:left-[calc(50%-280px)]"
      >
        <p className="text-xs font-medium sm:text-[13px]">Happy Students</p>
        <p className="mt-0.5 flex items-center gap-1 text-[9px] text-[#777a82]">
          4.5 (240)
          <Star aria-hidden="true" className="size-2.5 fill-primary text-primary" />
        </p>
        <div className="mt-2 flex items-center" aria-label="More than two thousand happy students">
          {studentAvatars.map((avatar, index) => (
            <Image
              key={avatar}
              src={avatar}
              alt=""
              width={43}
              height={43}
              className={`size-7 rounded-full border-2 border-white object-cover ${index === 0 ? "" : "-ml-2"}`}
            />
          ))}
          <span className="-ml-1.5 flex size-9 items-center justify-center rounded-full border-2 border-white bg-primary text-[9px] font-bold text-black">
            2K+
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
