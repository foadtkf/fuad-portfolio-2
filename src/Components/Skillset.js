import React from "react";
import { Fade } from "react-reveal";

const Skillset = () => {
  return (
    <Fade bottom cascade>
      <div class="hero min-h-screen " id="skills">
        <div class="hero-content grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 class="text-xl font-bold text-blue-900">My skillset</h1>
            <h1 class="text-3xl font-bold">
              Interface Design & User Experience
              <span style={{ color: "blue" }}>.</span>
            </h1>
            <button class="btn btn-ghost  hover:outline hover:outline-teal-300">
              My Process
            </button>
          </div>
          <div>
            <p>
              I specialize in building complex web applications, leading
              front-end teams, digital product design and developing visual
              design systems. I enjoy creating effortless user experience and
              designing delightful digital products. The entire process of going
              from a concept to release and gathering user’s feedback on either
              client’s or my own products is what makes me wake up everyday! I
              worked with numerous clients from all around the world from early
              startups to well-established companies. I always seek new
              opportunities for cooperation on projects around interesting
              dashboards, design systems or landing pages. Let’s create
              something awesome together!
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Skillset;
