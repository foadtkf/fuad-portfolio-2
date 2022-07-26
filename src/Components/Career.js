import React from "react";
import { Fade } from "react-reveal";

const Career = () => {
  return (
    <div className="lg:ml-40 lg:mr-40 my-20">
      <div className="flex justify-between">
        <h1 class="text-4xl font-bold my-5">
          Currently Learning<span style={{ color: "blue" }}>+</span>
        </h1>
        <a href="https://drive.google.com/file/d/1-raiqJXOX1E4P4T4H0XYwjIIdb7VXrLL/view?usp=sharing">
          <button class="btn btn-ghost  hover:outline hover:outline-teal-300">
            Get CV
          </button>
        </a>
      </div>
      <Fade left cascade>
        <div className="flex justify-center">
          <div class="stats shadow block lg:flex">
            <div class="stat">
              <div class="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div class="stat-title"></div>
              <div class="stat-value">Redux</div>
              <div class="stat-desc">October - Present</div>
            </div>

            <div class="stat">
              <div class="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div class="stat-title"></div>
              <div class="stat-value">NextJS</div>
              <div class="stat-desc">August - Present</div>
            </div>

            <div class="stat">
              <div class="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div class="stat-title"></div>
              <div class="stat-value">React Spring</div>
              <div class="stat-desc">October - Present</div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Career;
