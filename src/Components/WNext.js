import React from "react";
import { Fade } from "react-reveal";

const WNext = () => {
  return (
    <Fade bottom cascade>
      <div
        class="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1588053631229-d04fd47cf0ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)",
        }}
        className="lg:ml-20 lg:mr-20 bg-no-repeat"
      >
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="text-xl font-bold text-center text-blue-900">
              What's next
            </h1>
            <h1 class="mb-5 text-5xl font-bold text-center">
              Let's work together
            </h1>
            <p class="mb-5 text-center">
              If you'd like to talk about a project you want help with or need
              an advice about product design, just drop me a message at
              fakhrulif@gmail.com
              <br />
              I'm currently Available for any design systems projects, dashboard
              designs or landing pages gigs.
            </p>
            <a href="mailto: fakhrulif@gmail.com">
              <button class="btn btn-ghost  hover:outline hover:outline-teal-300">
                Write me an email
              </button>
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default WNext;
