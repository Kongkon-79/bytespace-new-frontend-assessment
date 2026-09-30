"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, Clock3, MessageCircle, Star } from "lucide-react";
import courses from "@/app/_data/courses.json";
import type { Course } from "@/app/(website)/_components/course-card";

type AuthShowcaseProps = { title: string; description: string };

const displayCourses = [courses[1], courses[2]] as Course[];
const avatars = Array.from({ length: 7 }, (_, index) => `/images/hero/hero-avatar-${index + 1}.png`);

function MiniCourseCard({ course, className }: { course: Course; className: string }) {
  return (
    <article className={`absolute overflow-hidden rounded-2xl bg-white p-3 ${className}`}>
      <div className="relative h-[126px] overflow-hidden rounded-xl">
        <Image src={course.image} alt={course.imageAlt} fill sizes="265px" className="object-cover" />
        <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-1 text-[7px] text-slate-700">
          <span className="inline-flex items-center gap-0.5 rounded-full bg-white/85 px-1.5 py-1"><BarChart3 className="size-2" />{course.lessons} Lessons</span>
          <span className="inline-flex items-center gap-0.5 rounded-full bg-white/85 px-1.5 py-1"><Clock3 className="size-2" />{course.duration}</span>
          <span className="inline-flex items-center gap-0.5 rounded-full bg-white/85 px-1.5 py-1"><MessageCircle className="size-2" />{course.comments}</span>
        </div>
      </div>
      <div className="pt-3">
        <div className="flex items-center justify-between gap-2"><h3 className="truncate text-sm font-bold text-[#111322]">{course.title}</h3><span className="flex items-center text-xs text-slate-500">{course.rating}<Star className="ml-0.5 size-3 fill-primary text-primary" /></span></div>
        <p className="mt-1 text-[9px] text-slate-500">by <span className="text-secondary">{course.instructor}</span></p>
        <div className="mt-3 flex items-center justify-between"><span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-[8px] text-slate-600"><BarChart3 className="size-2.5" />{course.level}</span><div className="flex -space-x-2">{avatars.slice(0, 4).map((avatar) => <Image key={avatar} src={avatar} alt="" width={22} height={22} className="size-[22px] rounded-full border-2 border-white object-cover" />)}<span className="flex size-[22px] items-center justify-center rounded-full border-2 border-white bg-slate-950 text-[7px] font-bold text-white">{course.enrolledCount}</span></div></div>
        <p className="mt-3 text-base font-bold text-secondary">${course.price}<span className="ml-0.5 text-[8px] font-normal text-slate-500">/lifetime</span></p>
      </div>
    </article>
  );
}

export function AuthShowcase({ title, description }: AuthShowcaseProps) {
  return (
    <aside className="relative hidden min-h-[100dvh] overflow-hidden px-[88px] py-7 text-white lg:block xl:px-[clamp(5.5rem,8vw,8rem)]">
      <div className="relative z-10 w-[345px] xl:origin-top-left xl:scale-110 2xl:scale-[1.15]">
        <Link href="/" aria-label="Go to ByteSpace home" className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary">
          <Image src="/images/auth_logo.png" alt="ByteSpace" width={29} height={32} className="h-auto w-5" priority />
        </Link>
        <div className="mt-9 w-[330px]"><h2 className="text-base font-bold">{title}</h2><p className="mt-2 text-[13px] leading-5 text-white/90">{description}</p></div>
        <motion.div initial={false} animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute left-0 top-[192px] h-[400px] w-[345px]">
          <div className="absolute inset-0">
            <MiniCourseCard course={displayCourses[0]} className="left-0 top-16 z-10 w-[255px]" />
            <MiniCourseCard course={displayCourses[1]} className="left-20 top-0 z-20 w-[265px] shadow-[0_12px_28px_rgba(0,19,82,0.22)]" />
          </div>
          <motion.div animate={{ rotate: [0, 3, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[35px] top-[27px] z-30"><Image src="/images/auth_top_left_shape.png" alt="" width={148} height={147} className="w-[72px]" /></motion.div>
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-0 z-30"><Image src="/images/auth_bottom_left_shape.png" alt="" width={190} height={189} className="w-[91px]" /></motion.div>
          <motion.div animate={{ rotate: [0, 2, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[267px] top-[251px] z-30"><Image src="/images/auth_bottom_right_shape.png" alt="" width={177} height={176} className="w-[100px]" /></motion.div>
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-[161px] z-40 w-[184px] rounded-xl bg-primary p-3 text-slate-950"><p className="text-sm font-bold">Happy Students</p><p className="text-[9px]">4.5 (240+)</p><div className="mt-1.5 flex -space-x-2">{avatars.map((avatar) => <Image key={avatar} src={avatar} alt="" width={28} height={28} className="size-7 rounded-full border-2 border-primary object-cover" />)}<span className="flex size-7 items-center justify-center rounded-full border-2 border-primary bg-slate-950 text-[8px] font-bold text-white">2K+</span></div></motion.div>
        </motion.div>
      </div>
    </aside>
  );
}
