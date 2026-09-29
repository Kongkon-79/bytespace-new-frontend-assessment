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
          {(showMore ? categories : categories.slice(0, 18)).map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 sm:px-[18px] sm:text-[13px] ${
                  isActive
                    ? "bg-primary text-black"
                    : "bg-[#f5f5f6] text-[#555861] hover:bg-[#e9e9ec] hover:text-[#151720]"
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
            className="rounded-full px-2 py-2 text-xs font-semibold text-[#0047ff] transition-colors hover:text-secondary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary sm:text-[13px]"
          >
            {showMore ? "− Less" : "+ More"}
          </button>
        </nav>

        {visibleCourses.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[72px] lg:grid-cols-3 lg:gap-8">
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
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
