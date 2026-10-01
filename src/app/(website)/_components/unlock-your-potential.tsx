"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const assetPath = "/images/unlock_your_protential";

const UnlockYourPotential = () => {
  const shouldReduceMotion = useReducedMotion();
  const float = (distance: number, duration: number, delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          y: [0, -distance, 0],
          transition: {
            duration,
            delay,
            repeat: Infinity,
            repeatType: "mirror" as const,
            ease: [0.42, 0, 0.58, 1] as const,
          },
        };

  const decorations = [
    [
      "top-left-lime.png",
      "-left-7 -top-2 w-[122px] sm:-left-5 sm:w-[155px] lg:-left-1 lg:-top-1 lg:w-[215px]",
      8,
      6,
      0.2,
    ],
    [
      "top-left-white-scribble.png",
      "left-[13%] top-[66px] hidden w-[70px] sm:block lg:left-[15%] lg:top-[43px] lg:w-[98px]",
      7,
      5.5,
      0.6,
    ],
    [
      "top-right-triangle.png",
      "right-[13%] top-[27px] hidden w-[76px] sm:block lg:right-[14%] lg:top-[12px] lg:w-[106px]",
      9,
      5.8,
      0.4,
    ],
    [
      "right-white-blob.png",
      "-right-8 top-[18px] w-[100px] sm:-right-5 sm:w-[120px] lg:-right-1 lg:top-[26px] lg:w-[150px]",
      8,
      6.2,
      0.7,
    ],
    [
      "left-white-triangle.png",
      "-left-7 bottom-[46px] w-[73px] sm:-left-4 sm:w-[88px] lg:-left-1 lg:bottom-[66px] lg:w-[116px]",
      7,
      6,
      0.8,
    ],
    [
      "bottom-left-ring.png",
      "bottom-0 left-[3%] hidden w-[138px] sm:block lg:left-[5%] lg:w-[190px]",
      6,
      6.5,
      0.5,
    ],
    [
      "bottom-right-lime-scribble.png",
      "-bottom-1 right-[-9px] w-[145px] sm:right-[-4px] sm:w-[170px] lg:right-[3%] lg:w-[220px]",
      7,
      5.7,
      1,
    ],
  ] as const;

  return (
    <section
      aria-labelledby="unlock-heading"
      className="relative isolate min-h-[510px] overflow-hidden bg-[#003be2] px-5 py-16 text-white sm:min-h-[480px] sm:px-8 lg:min-h-[488px] lg:px-12 lg:py-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.13)_1px,transparent_1px)] [background-size:86px_86px] lg:[background-size:120px_120px]"
      />

      {decorations.map(([src, position, distance, duration, delay]) => (
        <motion.div
          key={src}
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 1, scale: 0.82 }}
          animate={{
            opacity: 1,
            scale: 1,
            ...float(distance, duration, delay),
          }}
          className={`pointer-events-none absolute z-10 ${position}`}
        >
          <Image
            src={`${assetPath}/${src}`}
            alt=""
            width={346}
            height={372}
            className="h-auto w-full"
          />
        </motion.div>
      ))}

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 1, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 mx-auto flex min-h-[382px] max-w-[1000px] flex-col items-center justify-center text-center lg:min-h-[488px]"
      >
        <h2
          id="unlock-heading"
          className="max-w-[780px] text-balance text-[#F5F5F6] text-3xl md:text-4xl lg:text-5xl font-semibold leading-[120%] tracking-[-.035em]"
        >
          Unlock Your Potential as a <br className="hidden md:block" /> Creator with ByteSpace
        </h2>
        <p className="mt-7 max-w-[900px] text-pretty font-normal text-sm md:text-base lg:text-lg leading-[160%] text-[#F5F5F6] lg:mt-8">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <motion.div
          whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
          className="mt-8 lg:mt-10"
        >
          <Link
            href="/sign-up"
            className="inline-flex h-[46px] items-center justify-center rounded-full bg-primary px-7 text-sm md:text-base lg:text-lg font-medium leading-[120%] text-[#242528] transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#003be2]"
          >
            Join as Creator
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UnlockYourPotential;
