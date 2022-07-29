import React from "react";

const RecentProjects = () => {
  return (
    <div className="mt-20">
      {" "}
      <h1 class="text-5xl font-bold mb-5">
        Recent <br />
        Projects<span style={{ color: "blue" }}>+</span>
      </h1>
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item block  relative w-full">
          <div className="grid grid-cols-2 gap-2">
            <div
              class="hero"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/vqmHDbN/Screenshot-139.png)",
              }}
            >
              <div class="hero-overlay bg-opacity-5 hover:bg-opacity-75"></div>
              <div class="hero-content">
                <div class="">
                  <h1 class="mb-5 text-5xl font-bold">Daisy Computers</h1>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div
                class="hero"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/rdWkB3k/Screenshot-138.png)",
                }}
              >
                <div class="hero-overlay bg-opacity-5 hover:bg-opacity-75"></div>
                <div class="hero-content">
                  <div class="">
                    <h1 class="mb-5 text-5xl font-bold">Mr Photoman</h1>
                  </div>
                </div>
              </div>
              <div
                class="hero"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/QYmZ5k1/Screenshot-141.png)",
                }}
              >
                <div class="hero-overlay bg-opacity-5 hover:bg-opacity-75"></div>
                <div class="hero-content">
                  <div class="">
                    <h1 class="mb-5 text-5xl font-bold">LT House</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <div className="grid grid-cols-2 gap-2">
            <div
              class="hero"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/J7tgZpW/Screenshot-173.png)",
              }}
            >
              <div class="hero-overlay bg-opacity-5 hover:bg-opacity-75"></div>
              <div class="hero-content">
                <div class="">
                  <h1 class="mb-5 text-5xl font-bold">To-do list</h1>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div
                class="hero"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/t3wfpwc/Screenshot-174.png)",
                }}
              >
                <div class="hero-overlay bg-opacity-5 hover:bg-opacity-75"></div>
                <div class="hero-content">
                  <div class="">
                    <h1 class="mb-5 text-5xl font-bold">My Best Laptop</h1>
                  </div>
                </div>
              </div>
              <div
                class="hero"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/qyWX1jF/Screenshot-155.png)",
                }}
              >
                <div class="hero-overlay bg-opacity-5 hover:bg-opacity-75"></div>
                <div class="hero-content">
                  <div class="">
                    <h1 class="mb-5 text-5xl font-bold">Laptop Dokan</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
          </div>
        </div>
      </div>
      <button class="btn btn-ghost">My Dribble</button>
    </div>
  );
};

export default RecentProjects;
