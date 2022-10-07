import React from "react";
import { Zoom } from "react-reveal";
import Fade from "react-reveal/Fade";
import fuadimg from "../assets/WhatsApp Image 2022-10-07 at 11.58.39 AM.jpeg";
const Hello = () => {
  return (
    <div>
      <div class="hero min-h-screen lg:block hidden lg:ml-20 lg:mr-20">
        <div class="hero-content grid grid-cols-2">
          <Fade bottom>
            <div>
              <h1 class="text-3xl font-bold">Hello, it's me</h1>
              <h1 class="text-7xl font-bold">
                Fuad <span style={{ color: "blue" }}>.</span>
              </h1>
              <p class="py-6">
                An enthusiastic product designer currently shaping the future of
                software development by designing smooth user-interfaces that
                promote user interaction with information and data. While
                pursuing Bachelors in CSE from Bangladesh Army University of
                Science & Technology, Saidpur.
              </p>
              <div className="">
                <button class="btn btn-ghost  hover:outline hover:outline-teal-300">
                  Scroll for more
                </button>
              </div>
            </div>
          </Fade>
          <Zoom top>
            <img
              src={fuadimg}
              class="shadow-2xl"
              style={{ width: "50%" }}
              alt=""
            />
          </Zoom>
        </div>
      </div>
      <div
        class="hero min-h-screen block lg:hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80)",
        }}
      >
        <div class="hero-content text-center text-black">
          <div style={{ marginTop: "61%" }}>
            <h1 class="text-3xl font-bold">Hello, it's me</h1>
            <h1 class="text-5xl font-bold">
              Ojieame <span style={{ color: "blue" }}>.</span>
            </h1>
            <p class="py-6">
              An enthusiastic product designer currently shaping the future of
              software development by designing smooth user-interfaces that
              promote user interaction with information and data. While
              traveling around the world.
            </p>
            <div className="">
              <a href="#skills">
                <button class="btn btn-ghost  hover:outline hover:outline-teal-300">
                  Scroll for more
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
