import Image from "next/image";
import Link from "next/link";
import { BarChart3, Clock3, MessageCircle, Star } from "lucide-react";

export type Course = {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  instructor: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  price: number;
  enrolledCount: string;
};

const learnerAvatars = [
  "/images/projects/user1.png",
  "/images/projects/user2.png",
  "/images/projects/user3.png",
  "/images/projects/user4.png",
];

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[#d4d6dc] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_14px_35px_rgba(18,32,74,0.10)] sm:p-3.5">
      <Link
        href={`/courses/${course.id}`}
        aria-label={`View ${course.title} course`}
        className="relative block aspect-[1.75/1] overflow-hidden rounded-xl bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
      >
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-1 text-[8px] text-[#44474d] sm:text-[9px]">
          <span className="inline-flex min-w-0 items-center gap-1 rounded-full bg-white/80 px-2 py-1 backdrop-blur-md">
            <BarChart3 aria-hidden="true" className="size-2.5 shrink-0" />
            <span className="truncate">{course.lessons} Lessons</span>
          </span>
          <span className="inline-flex min-w-0 items-center gap-1 rounded-full bg-white/80 px-2 py-1 backdrop-blur-md">
            <Clock3 aria-hidden="true" className="size-2.5 shrink-0" />
            <span className="truncate">{course.duration}</span>
          </span>
          <span className="inline-flex min-w-0 items-center gap-1 rounded-full bg-white/80 px-2 py-1 backdrop-blur-md">
            <MessageCircle aria-hidden="true" className="size-2.5 shrink-0" />
            <span className="truncate">{course.comments} Comments</span>
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-0.5 pb-1 pt-4">
        <div className="flex items-start justify-between gap-3">
          <Link
            href={`/courses/${course.id}`}
            className="min-w-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            <h3 className="truncate text-base font-bold leading-tight text-[#111322] transition-colors group-hover:text-secondary">
              {course.title}
            </h3>
          </Link>
          <span className="flex shrink-0 items-center gap-1 text-sm text-[#85878d]">
            {course.rating}
            <Star aria-hidden="true" className="size-3.5 fill-[#d9dadd] text-[#d9dadd]" />
          </span>
        </div>

        <p className="mt-1.5 text-[10px] text-[#6b6f78]">
          by{" "}
          <Link href="/creators" className="text-secondary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
            {course.instructor}
          </Link>
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f5f6] px-3 py-1.5 text-[10px] text-[#555860]">
            <BarChart3 aria-hidden="true" className="size-3" />
            {course.level}
          </span>

          <div className="flex items-center" aria-label={`${course.enrolledCount} learners enrolled`}>
            {learnerAvatars.map((avatar, index) => (
              <Image
                key={avatar}
                src={avatar}
                alt=""
                width={28}
                height={28}
                className={`size-7 rounded-full border-2 border-white object-cover ${index === 0 ? "" : "-ml-2"}`}
              />
            ))}
            <span className="-ml-2 flex size-7 items-center justify-center rounded-full border-2 border-white bg-primary text-[8px] font-bold text-black">
              {course.enrolledCount}
            </span>
          </div>
        </div>

        <p className="mt-4 text-lg font-bold leading-none text-[#0047ff]">
          ${course.price}
          <span className="ml-0.5 text-[9px] font-normal text-[#777a82]">/lifetime</span>
        </p>
      </div>
    </article>
  );
};

export default CourseCard;
