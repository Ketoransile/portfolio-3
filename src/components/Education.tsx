"use client";

import { FiAward, FiBookOpen, FiMapPin } from "react-icons/fi";

const education = {
  degree: "B.Eng. Software Engineering",
  school: "Adama Science and Technology University (ASTU)",
  year: "May 2022 - July 2026",
  location: "Adama, Ethiopia",
  cgpa: "3.89",
};

const courseCategories = [
  {
    category: "Software Engineering",
    courses: [
      "Requirements Engineering",
      "Software Architecture & Design",
      "Software Testing & Quality Assurance",
      "Project Management",
    ],
  },
  {
    category: "Computer Science",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Architecture",
      "Discrete Mathematics",
    ],
  },
  {
    category: "Systems & Data",
    courses: [
      "Database Systems",
      "Distributed Software Systems",
      "Data Communication & Networks",
      "Unix/Linux Programming",
    ],
  },
  {
    category: "AI & Product",
    courses: [
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
      "Web & Mobile App Development",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-20">
      <div className="w-full">
        <div className="mb-10 text-center sm:text-left">
          <div className="mb-4 flex items-center justify-center gap-3 sm:justify-start">
            <div className="h-px w-8 bg-accent" />
            <span className="font-mono text-sm font-medium uppercase tracking-wider text-accent">
              Education
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            My Software Engineering degree gives me a strong base in systems,
            programming, databases, AI, and building maintainable software.
          </p>
        </div>

        <article className="overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="border-b border-border bg-background p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                <FiBookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                {education.degree}
              </h3>
              <p className="mt-2 text-base font-semibold text-accent">
                {education.school}
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-xl border border-border bg-surface p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    CGPA
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <FiAward className="h-5 w-5 text-accent" />
                    <span className="font-display text-3xl font-bold text-foreground">
                      {education.cgpa}
                    </span>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-surface p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    University Period
                  </div>
                  <div className="mt-1 text-sm font-semibold text-foreground">
                    {education.year}
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-surface p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Location
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <FiMapPin className="h-4 w-4 text-accent" />
                    {education.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h4 className="mb-5 font-display text-xl font-bold text-foreground">
                Relevant Coursework
              </h4>
              <div className="grid gap-5 sm:grid-cols-2">
                {courseCategories.map((cat) => (
                  <div key={cat.category}>
                    <h5 className="mb-3 text-sm font-semibold text-accent">
                      {cat.category}
                    </h5>
                    <ul className="grid gap-2">
                      {cat.courses.map((course) => (
                        <li
                          key={course}
                          className="rounded-lg bg-background px-3 py-2 text-sm text-muted-foreground"
                        >
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
