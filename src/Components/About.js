import React from "react";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <div
      class="hero min-h-screen bg-fixed"
      style={{
        backgroundImage:
          "url(https://cdn.dribbble.com/users/236204/screenshots/4650277/media/475b932e6b5fc0145524c916a9e2297c.gif)",
      }}
    >
      <div class="hero-content grid grid-cols-1 lg:grid-cols-2">
        <Fade bottom cascade>
          <div>
            <h1 class="text-xl font-bold text-blue-900">About me</h1>
            <h1 class="text-3xl font-bold">
              Designing with passion for problem solving
              <span style={{ color: "blue" }}>.</span>
            </h1>
            <a href="https://www.instagram.com/daddytkff/">
              <button class="btn btn-ghost  hover:outline hover:outline-teal-300">
                Follow me on instagram
              </button>
            </a>
          </div>
        </Fade>
        <Fade top cascade>
          <div>
            <p>
              I’ve always been passionate about pixels and design projects and
              haven’t stopped working and learning about new technologies .
              Other than sitting in from of my display I enjoy myself in casual
              sports, such as bowling or playing football with friends.
              <br />
              <br />
              I'm grateful that my job allows me to work from anywhere. I’m
              active on Instagram where I share most of the and all info about
              my upcoming projects.
              <br />
              <br />I also like sharing my experiences on instagram
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
