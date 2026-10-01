"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, Star } from "lucide-react";
import courses from "@/app/_data/courses.json";
import type { Course } from "@/app/(website)/_components/course-card";

type AuthShowcaseProps = { title: string; description: string };

const displayCourses = [courses[1], courses[2]] as Course[];
const avatars = Array.from(
  { length: 7 },
  (_, index) => `/images/hero/hero-avatar-${index + 1}.png`,
);

function MiniCourseCard({
  course,
  className,
}: {
  course: Course;
  className: string;
}) {
  return (
    <article
      className={`absolute overflow-hidden rounded-2xl bg-white p-3 ${className}`}
    >
      <div className="relative h-[126px] overflow-hidden rounded-xl ">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          sizes="265px"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-x-2 bottom-2 flex items-center justify-start gap-3 text-[7px] text-slate-700">
          <span className="inline-flex items-center gap-0.5 rounded-full bg-[#F6F6F699] text-[#4F4F4F] text-[10px] leading-[20px] font-medium px-1.5 py-1">
            {course.lessons} Lessons
          </span>
          <span className="inline-flex items-center gap-0.5 rounded-full  bg-[#F6F6F699] text-[#4F4F4F] text-[10px] leading-[20px] font-medium px-1.5 py-1">
            {course.duration}
          </span>
          <span className="inline-flex items-center gap-0.5 rounded-full  bg-[#F6F6F699] text-[#4F4F4F] text-[10px] leading-[20px] font-medium px-1.5 py-1">
            {course.comments} Comments
          </span>
        </div>
      </div>
      <div className="pt-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-sm md:text-base lg:text-lg  leading-[28px] font-poppins font-semibold text-black">
            {course.title}
          </h3>
          <span className="flex items-center text-sm md:text-base text-[#4F4F4F] font-medium leading-[28px]">
            {course.rating}
            <Star className="ml-0.5 size-5 fill-primary text-primary" />
          </span>
        </div>
        <p className="mt-1 text-[10px] md:text-xs font-normal leading-[20px] text-[#4F4F4F]">
          by <span className="text-secondary">{course.instructor}</span>
        </p>
        <div className="mt-3 flex items-center justify-start gap-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#F5F5F6] px-2 py-1 text-[10px] md:text-xs leading-[20px] text-[#4B4C53]">
            <BarChart3 className="size-2.5" />
            {course.level}
          </span>
          <div className="flex -space-x-2">
            {avatars.slice(0, 4).map((avatar) => (
              <Image
                key={avatar}
                src={avatar}
                alt=""
                width={32}
                height={32}
                className="size-[30px] rounded-full border-2 border-white object-cover"
              />
            ))}
            <span className="flex size-[30px] items-center justify-center rounded-full border-2 border-white bg-slate-950 text-[10px] md:text-xs leading-[20px] font-medium text-white">
              {course.enrolledCount}
            </span>
          </div>
        </div>
        <p className="mt-3 text-base md:text-lg lg:text-xl font-semibold leading-[28px] text-secondary">
          ${course.price}
          <span className="ml-0.5 text-[10px] md:text-xs leading-[20px] font-normal text-[#4F4F4F]">
            /lifetime
          </span>
        </p>
      </div>
    </article>
  );
}

export function AuthShowcase({ title, description }: AuthShowcaseProps) {
  return (
    <aside className="relative hidden min-h-[100dvh] overflow-hidden px-[88px] py-7 text-white lg:block xl:px-[clamp(5.5rem,8vw,8rem)]">
      <div className="relative z-10 w-[345px] xl:origin-top-left xl:scale-110 2xl:scale-[1.15]">
        <Link
          href="/"
          aria-label="Go to ByteSpace home"
          className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary mt-1"
        >
          <Image
            src="/images/auth_logo.png"
            alt="ByteSpace"
            width={35}
            height={32}
            className="h-auto w-9"
            priority
          />
        </Link>
        <div className="mt-9 w-[430px]">
          <h2 className="text-base md:text-lg lg:text-xl leading-[120%] font-semibold text-[#F5F5F6]">
            {title}
          </h2>
          <p className="mt-2 md:mt-3 text-sm md:text-base lg:text-base font-normal leading-[160%] text-[#F5F5F6]">
            {description}
          </p>
        </div>
        <motion.div
          initial={false}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-[240px] h-[400px] w-[345px]"
        >
          <div className="absolute inset-0">
            <MiniCourseCard
              course={displayCourses[0]}
              className="left-0 top-[66px] z-10 h-auto w-[305px]"
            />
            <MiniCourseCard
              course={displayCourses[1]}
              className="left-20 top-0 z-20 h-auto w-[305px] shadow-[0_12px_28px_rgba(0,19,82,0.22)]"
            />
          </div>
          <motion.div
            animate={{ rotate: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[35px] top-[27px] z-30"
          >
            <Image
              src="/images/auth_top_left_shape.png"
              alt=""
              width={148}
              height={147}
              className="w-[72px]"
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 z-30"
          >
            <Image
              src="/images/auth_bottom_left_shape.png"
              alt=""
              width={190}
              height={189}
              className="w-[91px]"
            />
          </motion.div>
          <motion.div
            animate={{ rotate: [0, 2, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[267px] top-[251px] z-30"
          >
            <Image
              src="/images/auth_bottom_right_shape.png"
              alt=""
              width={177}
              height={176}
              className="w-[100px]"
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 left-[166px] z-40 w-[258px] rounded-xl bg-primary p-3 text-slate-950"
          >
            <p className="text-sm md:text-base font-poppins font-medium text-[#242528] leading-[24px]">
              Happy Students
            </p>
            <p className="text-[9px] md:text-[10px] font-normal leading-[150%]">
              {" "}
              <strong className="text-[#242528] font-bold">4.5</strong> (240+)
            </p>
            <div className="mt-1.5 flex -space-x-2">
              {avatars.map((avatar) => (
                <Image
                  key={avatar}
                  src={avatar}
                  alt=""
                  width={43}
                  height={43}
                  className="size-9 rounded-full border-2 border-primary object-cover"
                />
              ))}
              <span className="flex size-9 items-center justify-center rounded-full border-2 border-primary bg-slate-950 text-[10px] md:text-[12px] leading-[150%] font-bold text-[#F5F5F6]">
                2K+
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </aside>
  );
}
