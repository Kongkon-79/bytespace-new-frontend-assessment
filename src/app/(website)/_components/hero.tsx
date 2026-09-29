"use client";

import Image from "next/image";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { Search, Star } from "lucide-react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const studentAvatars = Array.from(
  { length: 7 },
  (_, index) => `/images/hero/hero-avatar-${index + 1}.png`,
);

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const progress = useMotionValue(shouldReduceMotion ? 55 : 0);
  const displayedProgress = useTransform(progress, (value) => Math.round(value));

  useEffect(() => {
    if (shouldReduceMotion) return;

    const controls = animate(progress, 55, {
      duration: 0.9,
      delay: 1.25,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [progress, shouldReduceMotion]);

  const float = (distance: number, duration: number, delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          y: [0, -distance, 0],
          transition: { duration, delay, repeat: Infinity, repeatType: "mirror" as const, ease: [0.42, 0, 0.58, 1] as const },
        };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[760px] overflow-hidden bg-[#003be2] px-5 text-white sm:min-h-[820px] sm:px-8 lg:h-[885px] lg:min-h-[885px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.13)_1px,transparent_1px)] [background-size:86px_86px] lg:[background-size:120px_120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-[820px] -translate-x-1/2 sm:w-[980px] lg:w-[1149px]"
      >
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 1, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/hero/hero-students-group.png"
            alt=""
            width={1149}
            height={442}
            sizes="(max-width: 640px) 820px, (max-width: 1024px) 980px, 1149px"
            className="h-auto w-full"
          />
        </motion.div>
      </div>

      <div className="relative z-30 mx-auto max-w-[1200px] pt-10 text-center sm:pt-14 lg:pt-[60px]">
        <motion.h1
          id="hero-heading"
          initial={shouldReduceMotion ? false : { opacity: 1, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[935px] text-balance text-[38px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-5xl lg:text-[78px]"
        >
          Get Access to Hundreds Courses Available
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 1, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-[700px] text-sm leading-6 text-[#e5e6e8] sm:text-[15px] lg:mt-8 lg:max-w-none lg:text-[18px] lg:leading-[29px] 2xl:mt-[54px]"
        >
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </motion.p>

        <motion.form
          action="/courses"
          method="get"
          role="search"
          initial={shouldReduceMotion ? false : { opacity: 1, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: "easeOut" }}
          className="mx-auto mt-10 flex max-w-[415px] flex-col gap-3 sm:max-w-[415px] sm:flex-row lg:mt-10 lg:max-w-[582px] lg:gap-4 2xl:mt-[60px]"
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
              className="h-[50px] rounded-full border-0 bg-white pl-11 pr-5 text-sm text-[#22242a] shadow-none placeholder:text-[#8a8d95] focus-visible:border-primary focus-visible:ring-primary/30 lg:h-[52px] lg:text-[18px]"
            />
          </div>
          <Button
            type="submit"
            className="h-[50px] rounded-full bg-primary px-7 text-sm font-medium text-black shadow-none hover:bg-primary-hover focus-visible:ring-white/60 sm:self-center lg:h-[52px] lg:px-6 lg:text-[18px]"
          >
            Search
          </Button>
        </motion.form>
      </div>

      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 1, x: -28 }}
        animate={{ opacity: 1, x: 0, ...float(8, 6, 0.5) }}
        className="absolute -left-7 top-[330px] z-10 w-[105px] sm:-left-5 sm:top-[210px] sm:w-[130px] lg:-left-1 lg:top-[127px] lg:w-[180px]"
      >
        <Image src="/images/hero/hero-shape-left-lime.png" alt="" width={267} height={387} className="h-auto w-full" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 1, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, ...float(6, 5.5, 0.7) }}
        className="absolute left-[9%] top-[390px] z-10 hidden w-[104px] sm:block lg:left-[calc(15%-20px)] lg:top-[373px] lg:w-[132px]"
      >
        <Image src="/images/hero/hero-shape-left-white.png" alt="" width={177} height={176} className="h-auto w-full" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 1, x: 28 }}
        animate={{ opacity: 1, x: 0, ...float(10, 6.5, 0.4) }}
        className="absolute -right-10 top-[330px] z-10 w-[105px] sm:-right-8 sm:top-[205px] sm:w-[120px] lg:-right-1 lg:top-[109px] lg:w-[170px]"
      >
        <Image src="/images/hero/hero-shape-right-lime.png" alt="" width={213} height={372} className="h-auto w-full" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 1, rotate: -12, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1, ...float(7, 5.8, 0.8) }}
        className="absolute right-[11%] top-[385px] z-10 hidden w-[104px] sm:block lg:right-[calc(13%+18px)] lg:top-[356px] lg:w-[150px]"
      >
        <Image src="/images/hero/hero-shape-triangle.png" alt="" width={190} height={189} className="h-auto w-full" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={float(7, 7, 0.4)}
        className="absolute -bottom-8 left-[2%] z-10 hidden w-[150px] sm:block lg:bottom-[83px] lg:left-[calc(5%-38px)] lg:w-[238px]"
      >
        <Image src="/images/hero/hero-shape-bottom-left.png" alt="" width={344} height={343} className="h-auto w-full" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={float(9, 6.2, 0.9)}
        className="absolute -bottom-10 right-[-3%] z-10 hidden w-[135px] sm:block lg:bottom-[121px] lg:right-[4%] lg:w-[200px]"
      >
        <Image src="/images/hero/hero-shape-bottom-right.png" alt="" width={317} height={332} className="h-auto w-full" />
      </motion.div>

      <div className="absolute bottom-0 left-1/2 z-20 h-[375px] w-[455px] -translate-x-1/2 sm:h-[470px] sm:w-[520px] lg:bottom-auto lg:top-[392px] lg:h-[541px] lg:w-[578px]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 1, y: 42, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative size-full"
        >
          <Image
            src="/images/hero/hero-student.png"
            alt="A smiling student learning online with headphones and a laptop"
            fill
            priority
            sizes="(max-width: 640px) 455px, (max-width: 1024px) 520px, 578px"
            className="object-cover object-[25%_top] drop-shadow-[0_18px_30px_rgba(0,0,0,0.18)]"
          />
        </motion.div>
      </div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 1, x: -18 }}
        animate={{ opacity: 1, x: 0, ...float(5, 4.5, 1.1) }}
        transition={{
          opacity: { duration: 0.5, delay: 0.72 },
          x: { duration: 0.5, delay: 0.72 },
        }}
        className="absolute bottom-[230px] left-3 z-30 w-[138px] rounded-xl bg-white p-3 text-left text-[#27292f] shadow-[0_12px_30px_rgba(0,0,0,0.13)] sm:left-[calc(50%-250px)] sm:w-[150px] lg:bottom-auto lg:left-[calc(50%-315px)] lg:top-[522px] lg:w-[206px] lg:rounded-2xl lg:p-4"
      >
        <p className="text-xs font-medium sm:text-[13px] lg:text-sm">UI/UX Design</p>
        <p className="mt-0.5 whitespace-nowrap text-[8px] text-[#8a8d94] sm:text-[9px] lg:text-[10px]">
          200 Courses&nbsp; • &nbsp;1000+ Students
        </p>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 1, x: 18 }}
        animate={{ opacity: 1, x: 0, ...float(6, 5, 1.3) }}
        transition={{
          opacity: { duration: 0.5, delay: 0.82 },
          x: { duration: 0.5, delay: 0.82 },
        }}
        className="absolute bottom-[162px] right-3 z-30 w-[145px] rounded-xl bg-white p-3 text-left text-[#2b2d31] shadow-[0_12px_30px_rgba(0,0,0,0.13)] sm:bottom-[190px] sm:right-[calc(50%-255px)] sm:w-[166px] lg:bottom-auto lg:left-[calc(50%+122px)] lg:right-auto lg:top-[531px] lg:w-[232px] lg:rounded-2xl lg:p-4"
      >
        <p className="text-[10px] font-medium sm:text-[11px] lg:text-sm">Learning Progress</p>
        <p className="mt-1 text-[32px] font-bold leading-none sm:text-[36px] lg:text-[48px] lg:leading-[1.2]"><motion.span>{displayedProgress}</motion.span>%</p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#f1f1f1] lg:h-2 lg:w-[200px]">
          <motion.div
            initial={shouldReduceMotion ? false : { width: 0 }}
            animate={{ width: "55%" }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.9, delay: 1.25, ease: "easeOut" }}
            className="h-full rounded-full bg-primary"
          />
        </div>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 1, x: -18 }}
        animate={{ opacity: 1, x: 0, ...float(5, 5.2, 1.5) }}
        transition={{
          opacity: { duration: 0.5, delay: 0.92 },
          x: { duration: 0.5, delay: 0.92 },
        }}
        className="absolute bottom-5 left-3 z-30 w-[190px] rounded-xl bg-white p-3 text-left text-[#282a30] shadow-[0_12px_30px_rgba(0,0,0,0.13)] sm:bottom-9 sm:left-[calc(50%-285px)] lg:bottom-auto lg:left-[calc(50%-392px)] lg:top-[717px] lg:w-[258px] lg:rounded-2xl lg:p-4"
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
