import React from "react";
import parse from "html-react-parser";
import { IProfile, TProfile } from "types/common";
import { ABOUT_TEXT_1, ABOUT_TEXT_2, RESUME_TEXT_2 } from "constants/common";
import Profiles from "jsons/profiles.json";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50 pt-16 pb-0">
      {/* Title + Intro */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 animate-fade-in-up">
            Background
          </h2>
          <span
            aria-hidden
            className="mt-4 inline-block h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 animate-grow-in"
          />
          <p
            className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed animate-fade-in"
            style={{ animationDelay: "120ms" }}
          >
            {ABOUT_TEXT_1}
          </p>
          {/* ABOUT_TEXT_2 can include HTML; render safely via parser */}
          <div
            className="prose prose-gray mx-auto mt-6 max-w-3xl text-gray-600 animate-fade-in"
            style={{ animationDelay: "220ms" }}
          >
            {parse(ABOUT_TEXT_2)}
          </div>
        </header>

        {/* Experience & Education */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* Experience */}
          <article className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 transition-shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-slate-800">Experience</h3>
            <div className="mt-4 border-l-2 border-blue-200 pl-4">
              <h4 className="text-lg font-bold text-slate-900">
                DILG Bohol Web Developer Intern
              </h4>
              <p className="text-sm text-gray-500">January – April 2025</p>
              <p className="mt-3 text-gray-700 italic">{RESUME_TEXT_2}</p>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                {Profiles?.data_3?.map((item: string, idx: number) => (
                  <li key={idx}>{parse(item)}</li>
                ))}
              </ul>
            </div>
          </article>

          {/* Education */}
          <article className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 transition-shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-slate-800">Education</h3>
            <div className="mt-4 space-y-5">
              {Profiles?.data_4?.map(
                (
                  item: {
                    title: string;
                    year: string;
                    school: string;
                    address: string;
                  },
                  index: number
                ) => (
                  <div
                    key={index}
                    className="border-l-2 border-emerald-200 pl-4"
                  >
                    <h4 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">{item.year}</p>
                    <p className="text-gray-700">
                      <em>{item.school}</em>
                    </p>
                    <p className="text-gray-600">{item.address}</p>
                  </div>
                )
              )}
            </div>
          </article>
        </div>

        {/* Projects */}
        <section className="">
          <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">
            Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Project 1 */}
            <a
              href="https://leave-cto.dilgbohol.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 transition-all hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                DILG Bohol Leave CTO Management System
              </h3>
              <p className="mt-2 text-gray-600">
                A full‑stack system where employees can apply for leave or CTO
                and access a personal dashboard to track their requests,
                balances, and status.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 font-medium text-blue-600">
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>

            {/* Project 2 */}
            <a
              href="https://dilgbohol.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 transition-all hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                DILG Bohol Information System
              </h3>
              <p className="mt-2 text-gray-600">
                Enhanced and optimized an existing system by improving its
                design, updating functionalities, and streamlining overall
                performance.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 font-medium text-blue-600">
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </div>
        </section>
      </div>
      {/* Local CSS for small, unobtrusive animations */}
      <style>{`
        @keyframes fade-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes fade-in-up { from { opacity: 0; transform: translate3d(0, 8px, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) } }
        @keyframes grow-in { from { transform: scaleX(0); opacity: .5 } to { transform: scaleX(1); opacity: 1 } }
        .animate-fade-in { animation: fade-in .6s both; }
        .animate-fade-in-up { animation: fade-in-up .6s ease-out both; }
        .animate-grow-in { transform-origin: center; animation: grow-in .6s ease-out both; }
      `}</style>
    </section>
  );
};

export default About;
