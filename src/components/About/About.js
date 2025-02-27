import React from "react";
import about from "../../assets/About.png";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-in-out">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={about}
            alt="About eTechno Lab"
            className="rounded-lg shadow-md animate-fade-in"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-gray-800 animate-slide-in-right">
          <h2 className="text-2xl font-bold font-title text-black-700 mb-4">
            About eTechno Lab
          </h2>
          <p className="text-base font-body leading-relaxed">
            At eTechno Lab, we are committed to delivering cutting-edge IT
            solutions that drive innovation and efficiency. Founded in 2014 and
            headquartered in Pune, India, we operate as a subsidiary of SUNGM
            MaxMin Pvt Ltd, with a strong focus on collaborative spirit,
            integrity, and serenity .
          </p>
          <p className="mt-4 text-base font-body">
            Our expertise spans across web development, mobile applications,
            cloud computing, DevOps, and digital transformation , helping
            businesses scale and thrive in the digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
