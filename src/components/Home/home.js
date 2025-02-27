import React from "react";
import bg from "../../assets/hero.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChartSimple,
  faCloudArrowUp,
  faGlobe,
  faInfinity,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section class="h-screen flex items-center justify-around bg-gradient-to-r from-purple-500 to-pink-500  transition-all duration-700 ease-in-out backdrop-blur-lg">
        <div class="w-1/2 animate-fadeInLeft">
          <h1 class="text-5xl font-bold text-black-900 ">
            Revolutionizing Tech for Tomorrow
          </h1>
          <p class="text-sm text-white-800 mt-4">
            eTechnolab is a forward-thinking digital solutions provider that
            specializes in transforming business ideas into high-performance
            software products. The company offers a comprehensive range of IT
            services—from custom software and mobile app development to web
            applications and enterprise solutions. By leveraging agile
            methodologies and the latest technologies, eTechnolab helps
            businesses streamline operations, enhance customer experiences, and
            drive sustainable growth. Their client-centric approach and
            commitment to innovation have positioned them as a trusted partner
            for organizations looking to thrive in today’s competitive digital
            landscape.
          </p>
          <button
            class="mt-6 px-6 py-3 bg-white hover:bg-red-300 hover:text-white rounded-lg text-black text-lg shadow-md"
            onClick={() => {
              navigate("/contact");
            }}>
            Get Started
          </button>
        </div>
        <img src={bg} alt="Hero" class="w-1/4 rounded-lg animate-fadeInRight" />
      </section>
      <section>
        <div className="flex flex-wrap p-8 bg-gray-100">
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className=" bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 p-5 m-4 animate-fadeIn flex flex-col items-center">
              <FontAwesomeIcon
                icon={faGlobe}
                size="2xl"
                beatFade
                className="mb-4"
              />
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Web Development
              </h5>
              <p className="mb-3 text-gray-700 text-center dark:text-gray-400">
                We create responsive, user-friendly websites using modern
                technologies that engage users and drive business success.
              </p>
            </div>
          </div>

          {/* --------------------- */}

          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className=" bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 p-5 m-4 animate-fadeIn flex flex-col items-center">
              <FontAwesomeIcon
                icon={faMobile}
                size="2xl"
                beatFade
                className="mb-4"
              />
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                App Development
              </h5>
              <p className="mb-3 text-gray-700 text-center dark:text-gray-400">
                Our mobile app solutions deliver intuitive, high-performance
                experiences across multiple platforms, tailored to meet your
                business goals.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className=" bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 p-5 m-4 animate-fadeIn flex flex-col items-center">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="2xl"
                beatFade
                className="mb-4"
              />
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                E-commerce
              </h5>
              <p className="mb-3 text-gray-700 text-center dark:text-gray-400">
                We design secure and scalable e-commerce platforms that simplify
                online transactions, enhance customer experiences, and boost
                sales.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className=" bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 p-5 m-4 animate-fadeIn flex flex-col items-center">
              <FontAwesomeIcon
                icon={faAws}
                size="2xl"
                beatFade
                className="mb-4"
              />
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                AWS
              </h5>
              <p className="mb-3 text-gray-700 text-center dark:text-gray-400">
                Our AWS services optimize your cloud architecture for
                scalability and cost-efficiency while ensuring robust security
                and performance.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className=" bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 p-5 m-4 animate-fadeIn flex flex-col items-center">
              <FontAwesomeIcon
                icon={faChartSimple}
                size="2xl"
                beatFade
                className="mb-4"
              />
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Digital Marketing
              </h5>
              <p className="mb-3 text-gray-700 text-center dark:text-gray-400">
                We craft data-driven digital marketing strategies that elevate
                your online presence, engage your target audience, and drive
                measurable growth.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className=" bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 p-5 m-4 animate-fadeIn flex flex-col items-center">
              <FontAwesomeIcon
                icon={faCloudArrowUp}
                size="2xl"
                beatFade
                className="mb-4"
              />
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                IoT Development
              </h5>
              <p className="mb-3 text-gray-700 text-center dark:text-gray-400">
                Our IoT solutions connect devices and systems seamlessly,
                enabling real-time insights and smarter, more efficient
                operations.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className=" bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 p-5 m-4 animate-fadeIn flex flex-col items-center">
              <FontAwesomeIcon
                icon={faInfinity}
                size="2xl"
                beatFade
                className="mb-4"
              />
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                DevOps
              </h5>
              <p className="mb-3 text-gray-700 text-center dark:text-gray-400">
                Our DevOps solutions bridge the gap between development and
                operations by automating processes, enabling continuous
                integration and deployment, and fostering a culture of
                collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
