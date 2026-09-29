import Link from "next/link";

import coursesData from "@/app/_data/courses.json";
import CourseCard, { type Course } from "./course-card";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const courses = coursesData as Course[];

const DisCoverYourPassion = () => {
  return (
    <section aria-labelledby="discover-heading" className="bg-white px-5 pb-10 pt-14 sm:px-8 sm:pb-14 sm:pt-16 lg:pb-16 lg:pt-20">
      <div className="mx-auto max-w-[1200px]">
        <header className="mx-auto max-w-[900px] text-center">
          <h1 id="discover-heading" className="text-balance text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#101222] sm:text-4xl lg:text-[40px]">
            Discover Your Passion,
            <span className="block">Build Your Skills</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[820px] text-sm leading-6 text-[#8a8c95] sm:text-[15px]">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </header>

        <nav aria-label="Course categories" className="mx-auto mt-10 flex max-w-[1000px] flex-wrap items-center justify-center gap-2.5 sm:mt-12">
          {categories.map((category, index) => (
            <Link
              key={category}
              href={index === 0 ? "/courses" : `/courses?category=${encodeURIComponent(category.toLowerCase())}`}
              aria-current={index === 0 ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 sm:px-[18px] sm:text-[13px] ${
                index === 0
                  ? "bg-primary text-black hover:bg-primary-hover"
                  : "bg-[#f5f5f6] text-[#555861] hover:bg-[#e9e9ec] hover:text-[#151720]"
              }`}
            >
              {category}
            </Link>
          ))}
          <Link
            href="/courses/categories"
            className="rounded-full px-2 py-2 text-xs font-semibold text-[#0047ff] transition-colors hover:text-secondary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary sm:text-[13px]"
          >
            + More
          </Link>
        </nav>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[72px] lg:grid-cols-3 lg:gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisCoverYourPassion;
