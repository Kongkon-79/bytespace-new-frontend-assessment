"use client";

import { useState } from "react";
import { SearchX } from "lucide-react";

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
  "Business",
  "Development",
  "Finance",
  "IT & Software",
  "Career Development",
];

const courses = coursesData as Course[];

// The course data does not include category metadata yet, so map the existing
// demo courses to the categories they represent in the catalog.
const courseCategories: Record<number, string[]> = {
  1: ["ui/ux design", "design"],
  2: ["digital illustration", "creative marketing"],
  3: ["data science"],
  4: ["productivity"],
  5: ["finance"],
  6: ["marketing", "freelance & entrepreneurship"],
};

const DisCoverYourPassion = () => {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [showMore, setShowMore] = useState(false);
  const visibleCourses =
    activeCategory === "Featured"
      ? courses
      : courses.filter((course) =>
          courseCategories[course.id]?.includes(activeCategory.toLowerCase()),
        );

  return (
    <section aria-labelledby="discover-heading" className="bg-white px-5 pb-10  sm:px-8 py-14 md:py-16 lg:py-[72px]">
      <div className="container">
        <header className="mx-auto max-w-[900px] text-center">
          <h2 id="discover-heading" className="text-balance font-semibold tracking-[-0.03em] leading-[120%] text-black text-2xl sm:text-3xl md:text-4xl lg:text-[44px]">
            Discover Your Passion,
            <span className="block mt-1">Build Your Skills</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[820px] leading-[160%] font-normal text-[#82868E] text-sm md:text-base">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </header>

        <nav aria-label="Course categories" className="mx-auto mt-10 flex max-w-[1000px] flex-wrap items-center justify-center gap-2.5 sm:mt-12">
          {(showMore ? categories : categories.slice(0, 18)).map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2  font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 sm:px-[18px] text-xs md:text-sm lg:text-base ${
                  isActive
                    ? "bg-primary text-[#242528]"
                    : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#e9e9ec] hover:text-[#151720]"
                }`}
              >
                {category}
              </button>
            );
          })}
          <button
            type="button"
            aria-expanded={showMore}
            onClick={() => setShowMore((expanded) => !expanded)}
            className="rounded-full px-2 py-2 font-medium leading-[120%] text-secondary transition-colors hover:text-secondary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary text-sm md:text-base"
          >
            {showMore ? "− Less" : "+ More"}
          </button>
        </nav>

        {visibleCourses?.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:gap-9 xl:gap-10 sm:grid-cols-2 mt-14 md:mt-16 lg:mt-[77px] lg:grid-cols-3 ">
            {visibleCourses?.map((course) => (
              <CourseCard key={course?.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="mt-14 flex min-h-[294px] flex-col items-center justify-center rounded-[22px] border border-dashed border-[#dedfe2] bg-[#f6f6f6] px-6 text-center sm:mt-[72px]">
            <SearchX aria-hidden="true" className="size-7 text-[#25262a]" strokeWidth={2} />
            <h2 className="mt-4 text-xl font-bold text-[#202127]">No courses found</h2>
            <p className="mt-3 text-sm text-[#85878d]">Try a different search or clear your filters.</p>
            <button
              type="button"
              onClick={() => setActiveCategory("Featured")}
              className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DisCoverYourPassion;
