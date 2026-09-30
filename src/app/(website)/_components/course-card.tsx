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
    <article className="group flex h-full flex-col rounded-[24px] border border-[#CED0D3] bg-white p-3 md:p-3.5 lg:p-4 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_14px_35px_rgba(18,32,74,0.10)] ">
      <Link
        href={`/courses/${course.id}`}
        aria-label={`View ${course.title} course`}
        className="relative block aspect-[1.75/1] overflow-hidden rounded-[12px] bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
      >
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-1 text-[8px] text-[#44474d] sm:text-[9px]">
          <span className="inline-flex min-w-0 items-center gap-1 rounded-full bg-[#F6F6F699] px-2 py-1 backdrop-blur-[8px]">
            <BarChart3 aria-hidden="true" className="size-2.5 shrink-0" />
            <span className="truncate text-[#4F4F4F]">{course.lessons} Lessons</span>
          </span>
          <span className="inline-flex min-w-0 items-center gap-1 rounded-full bg-[#F6F6F699] px-2 py-1 backdrop-blur-[8px]">
            <Clock3 aria-hidden="true" className="size-2.5 shrink-0" />
            <span className="truncate text-[#4F4F4F]">{course.duration}</span>
          </span>
          <span className="inline-flex min-w-0 items-center gap-1 rounded-full bg-[#F6F6F699] px-2 py-1 backdrop-blur-[8px]">
            <MessageCircle aria-hidden="true" className="size-2.5 shrink-0" />
            <span className="truncate text-[#4F4F4F]">{course.comments} Comments</span>
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-0.5 pb-1 pt-3">
        <div className="flex items-start justify-between gap-3">
          <Link
            href={`/courses/${course.id}`}
            className="min-w-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            <h3 className="truncate text-base md:text-lg xl:text-xl font-semibold leading-[120%] text-black transition-colors group-hover:text-secondary">
              {course.title}
            </h3>
          </Link>
          <span className="flex shrink-0 items-center gap-1 text-sm md:text-base font-normal leading-[160%] text-[#4F4F4F]">
            {course.rating}
            <Star aria-hidden="true" className="size-4 fill-[#CED0D3] text-[#CED0D3]" />
          </span>
        </div>

        <p className="mt-1 text-[10px] lg:text-xs font-normal leading-[160%] text-[#4F4F4F]">
          by{" "}
          <Link href="/creators" className="text-secondary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
            {course.instructor}
          </Link>
        </p>

        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F5F6] px-3 py-1.5 text-[10px] md:text-[11px] xl:text-xs font-normal leading-[120%] text-[#4B4C53]">
            <BarChart3 aria-hidden="true" className="size-3 text-[#4B4C53]" />
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
            <span className="-ml-2 flex size-7 items-center justify-center rounded-full border-2 border-white bg-primary text-[8px] md:text-[10px] leading-[20px] font-medium text-[#242528]">
              {course.enrolledCount}
            </span>
          </div>
        </div>

        <p className="mt-3 text-lg lg:text-xl font-semibold leading-[120%] font-poppins text-secondary">
          ${course.price}
          <span className="ml-0.5 font-satoshi text-[9px] md:text-[10px] lg:text-xs font-normal text-[#4F4F4F]">/lifetime</span>
        </p>
      </div>
    </article>
  );
};

export default CourseCard;
