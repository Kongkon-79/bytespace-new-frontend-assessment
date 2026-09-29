"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

const avatars = Array.from({ length: 7 }, (_, i) => `/images/hero/hero-avatar-${i + 1}.png`);
const reveal = { hidden: { opacity: 1, y: 28 }, visible: { opacity: 1, y: 0 } };

export default function ProfessionalGrowth() {
  const reduced = useReducedMotion();
  const float = (y: number, duration: number, delay = 0) =>
    reduced ? {} : { y: [0, -y, 0], transition: { duration, delay, repeat: Infinity, repeatType: "mirror" as const, ease: [0.42, 0, 0.58, 1] as const } };

  const happyStudents = (
    <motion.div initial={reduced ? false : { opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0, ...float(5, 5, 1) }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.35 }} className="absolute bottom-2 right-0 z-30 w-[190px] rounded-xl bg-white p-3 shadow-[0_14px_26px_rgba(36,37,40,0.14)] sm:right-[2%] sm:w-[205px]">
      <p className="text-[10px] font-medium text-[#242528]">Happy Students</p>
      <p className="mt-0.5 flex items-center gap-1 text-[8px] text-[#777b85]">4.5 (240)<Star className="size-2.5 fill-primary text-primary" /></p>
      <div className="mt-2 flex items-center">{avatars.map((src, i) => <Image key={src} src={src} alt="" width={43} height={43} className={`size-6 rounded-full border-2 border-white object-cover ${i ? "-ml-2" : ""}`} />)}<span className="-ml-1.5 flex size-7 items-center justify-center rounded-full border-2 border-white bg-primary text-[8px] font-bold text-[#242528]">2K+</span></div>
    </motion.div>
  );

  return (
    <section aria-labelledby="professional-growth-heading" className="overflow-hidden bg-[radial-gradient(circle_at_12%_4%,rgba(216,251,32,.48),transparent_25%),radial-gradient(circle_at_7%_96%,rgba(216,251,32,.55),transparent_22%),radial-gradient(circle_at_96%_88%,rgba(0,59,226,.18),transparent_25%),linear-gradient(135deg,#f8f9ff,#fff_48%,#f7f8fc)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-[92px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div initial={reduced ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: .3 }} variants={reveal} transition={{ duration: .65 }} className="max-w-[510px]">
            <h2 id="professional-growth-heading" className="text-balance text-[34px] font-bold leading-[1.08] tracking-[-.035em] text-[#242528] sm:text-[42px] lg:text-[48px]">Your Path to Professional Growth Starts Here!</h2>
            <p className="mt-7 max-w-[492px] text-[15px] leading-[1.7] text-[#5d616a] sm:text-base">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
            <dl className="mt-9 flex gap-9 sm:gap-14">{[["12K","Students"],["70+","Courses"],["16","Creators"]].map(([value,label]) => <div key={label}><dt className="text-[25px] font-semibold leading-none tracking-[-.04em] text-[#003be2]">{value}</dt><dd className="mt-2 text-xs text-[#60646d] sm:text-sm">{label}</dd></div>)}</dl>
          </motion.div>

          <div className="relative mx-auto h-[360px] w-full max-w-[570px] sm:h-[430px] lg:h-[408px]">
            <motion.div initial={reduced ? false : { opacity: 1, scale: .94, y: 28 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .72 }} className="absolute right-[2%] top-0 h-[250px] w-[230px] overflow-hidden rounded-2xl border border-[#dfe1e8] bg-white p-2 shadow-[0_18px_30px_rgba(36,37,40,.12)] sm:right-[8%] sm:h-[318px] sm:w-[290px] lg:right-[5%]">
              <div className="relative h-[112px] overflow-hidden rounded-xl sm:h-[145px]"><Image src="/images/professional_growth_right.png" alt="Course preview" fill className="object-cover object-[32%_15%]" /></div><p className="mt-3 truncate text-sm font-bold text-[#242528] sm:text-base">Learn Figma from Scratch</p><p className="mt-1 text-[10px] text-[#777b85]">by professional tutor</p><div className="mt-3 flex gap-2 text-[9px]"><span className="rounded bg-[#f1f2f4] px-2 py-1">All Beginner</span><span className="rounded bg-[#fff1f3] px-2 py-1 text-[#e75c70]">Popular</span></div><p className="mt-3 text-sm font-bold text-[#003be2]">$25<span className="ml-0.5 text-[10px] font-normal text-[#777b85]">/lifetime</span></p>
            </motion.div>
            <motion.div initial={reduced ? false : { opacity: 1, x: 26 }} whileInView={{ opacity: 1, x: 0, ...float(7, 5.5, .7) }} viewport={{ once: true }} transition={{ duration: .55, delay: .25 }} className="absolute right-0 top-[118px] z-20 w-[144px] rounded-xl bg-white p-3 shadow-[0_14px_26px_rgba(36,37,40,.14)] sm:top-[144px] sm:w-[174px]"><p className="text-[10px] font-medium sm:text-xs">Learning Progress</p><p className="mt-1 text-[32px] font-bold leading-none sm:text-[42px]">55%</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#eee]"><motion.div initial={reduced ? false : { width: 0 }} whileInView={{ width: "55%" }} viewport={{ once: true }} transition={{ duration: .9, delay: .75 }} className="h-full rounded-full bg-primary" /></div></motion.div>
            <motion.div initial={reduced ? false : { opacity: 1, rotate: -12 }} whileInView={{ opacity: 1, rotate: 0, ...float(8, 6, .5) }} viewport={{ once: true }} className="absolute right-0 top-[42px] z-30 w-[72px] sm:right-[1%] sm:top-[50px] sm:w-[88px]"><Image src="/images/professional_growth_right_shape.png" alt="" width={216} height={216} className="h-auto w-full" /></motion.div>
            <div className="absolute bottom-[-12px] left-[23%] z-10 h-[325px] w-[280px] sm:bottom-[-42px] sm:left-[21%] sm:h-[430px] sm:w-[370px] lg:left-[20%]"><motion.div initial={reduced ? false : { opacity: 1, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .75, delay: .15 }} className="relative size-full"><Image src="/images/professional_growth_right.png" alt="Student learning with a laptop" fill className="object-contain object-bottom" /></motion.div></div>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 mx-auto h-[405px] w-full max-w-[510px] lg:order-1 lg:h-[455px]">
            <motion.div initial={reduced ? false : { opacity: 1, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .7 }} className="absolute bottom-[-18px] left-[18%] h-[396px] w-[320px] sm:left-[23%] sm:h-[460px] sm:w-[375px] lg:left-[13%]"><Image src="/images/professional_growth_left.png" alt="Creator managing courses on a tablet" fill className="object-contain object-bottom" /></motion.div>
            <motion.div animate={float(8, 5.8, .6)} className="absolute left-[50%] top-[66px] z-20 w-[80px] sm:left-[56%] sm:top-[74px] sm:w-[102px]"><Image src="/images/professional_growth_left_shape.png" alt="" width={216} height={216} className="h-auto w-full" /></motion.div>
            <motion.div initial={reduced ? false : { opacity: 1, x: -20 }} whileInView={{ opacity: 1, x: 0, ...float(5, 5, 1) }} viewport={{ once: true }} className="absolute left-0 top-[35px] z-30 w-[126px] rounded-xl bg-[#003be2] p-3 text-white shadow-[0_14px_26px_rgba(0,59,226,.24)] sm:left-[2%] sm:top-[30px] sm:w-[150px]"><p className="text-[10px] font-medium">Total Revenue</p><p className="text-[8px] text-white/75">July 2023</p><p className="mt-2 text-lg font-bold leading-none">$120.29</p><div className="mt-2 h-1 overflow-hidden rounded-full bg-white/25"><div className="h-full w-[70%] rounded-full bg-primary" /></div></motion.div>
            <motion.div initial={reduced ? false : { opacity: 1, x: -20 }} whileInView={{ opacity: 1, x: 0, ...float(6, 5.4, 1.3) }} viewport={{ once: true }} className="absolute left-0 top-[139px] z-30 w-[105px] rounded-xl bg-[#003be2] p-3 text-white shadow-[0_14px_26px_rgba(0,59,226,.24)] sm:left-[2%] sm:top-[140px] sm:w-[123px]"><p className="text-[9px] font-medium">Year To Date</p><p className="text-[8px] text-white/75">2023</p><p className="mt-2 text-base font-bold leading-none">$1,200.38</p><span className="mt-2 inline-flex rounded-full bg-primary px-1.5 py-0.5 text-[8px] font-bold text-[#242528]">+12%</span></motion.div>
            {happyStudents}
          </div>
          <motion.div initial={reduced ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: .3 }} variants={reveal} transition={{ duration: .65 }} className="order-1 max-w-[510px] lg:order-2"><h2 className="text-balance text-[34px] font-bold leading-[1.08] tracking-[-.035em] text-[#242528] sm:text-[42px] lg:text-[48px]">Create &amp; Manage Courses Easily.</h2><p className="mt-7 text-[15px] leading-[1.7] text-[#5d616a] sm:text-base">ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.</p><ul className="mt-8 space-y-3 text-sm text-[#30333a] sm:text-base">{["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"].map(item => <li key={item} className="flex items-center gap-2.5"><CheckCircle2 className="size-4 shrink-0 fill-[#003be2] text-white" />{item}</li>)}</ul></motion.div>
        </div>
      </div>
    </section>
  );
}
