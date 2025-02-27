import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const [errors, setErrors] = useState({ email: "", contact: "" });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const validateContact = (contact) => {
    const contactRegex = /^\d{10}$/;
    return contactRegex.test(contact);
  };

  useEffect(() => {
    let newError = { email: "", contact: "" };
    if (email && !validateEmail(email)) {
      newError.email = "Invalid Email";
    }
    if (contact && !validateContact(contact)) {
      newError.contact = "Invalid Contact Number";
    }
    setErrors(newError);
  }, [email, contact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errors.email && !errors.contact) {
      console.log("You have entered the following details", {
        name,
        email,
        contact,
        message,
      });
      setSuccessMessage("Thank You for submiting your response!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }
    setName("");
    setEmail("");
    setContact("");
    setMessage("");
  };
  return (
    <section className="min-h-screen flex align-top bg-gray-100 px-6 py-12">
      <div className="max-w-6xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg  rounded-lg p-8 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-in-out text-white">
        {/* Left Side - Image */}
        <div className="flex flex-col md:w-1/2">
          <h1 className="font-title text-4xl tracking-wide py-8">Contact Us</h1>
          <p className="font-body">
            Feel free to drop us a line below! We would get in touch with you
            soon.
          </p>
          <p className="py-4">
            <FontAwesomeIcon
              icon={faPhone}
              size="lg"
              beatFade
              className="mx-2"
            />{" "}
            +91 909-651-9449
          </p>
          <p className="py-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              beatFade
              className="mx-2"
            />
            support@etechnolab.com
          </p>
          <p className="py-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              size="lg"
              beatFade
              className="mx-2"
            />
            Aanand Vihar No. 2, Plot No 77, Hingane (Khurd),Sinhgad Road,
            Pune,Maharashtra (India) Pin Code 411051
          </p>
        </div>
        {/* </div> */}
        {/* Right Side - Content */}
        <div className="w-full bg-white p-8 rounded-2xl md:w-1/2 text-gray-800 animate-slide-in-right">
          <form className="flex flex-col space-y-4">
            <div>
              <label className="text-sm">Your Name</label>
            </div>
            <div>
              <input
                type="text"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-1 outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="Your Name"
                name="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label className="text-sm">Your Contact No. </label>
            </div>
            <div>
              <input
                type="text"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-1 outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="Your Contact No."
                name="Contact"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                required
              />
              {errors.email && <p className="text-red-600">{errors.contact}</p>}
            </div>
            <div>
              <label className="text-sm">Your Email</label>
            </div>
            <div>
              <input
                type="text"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-1 outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="Your Email"
                name="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              {errors.email && <p className="text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm">Your Message</label>
            </div>
            <div>
              <input
                type="textarea"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-1 outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="Your Message"
                name="Name"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              />
            </div>
            <input
              type="submit"
              className={`mt-6 px-6 py-3 font-medium rounded-lg shadow-md transition-transform transform 
    ${
      errors.email || errors.contact
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-purple-700 hover:bg-purple-800 text-white hover:scale-105"
    }
  `}
              onClick={handleSubmit}
              disabled={!!errors.email || errors.contact}
            />

            {successMessage && (
              <span className="flex my-2 p-5 bg-purple-300 border-1 border-purple-600 rounded-xl text-black transition-opacity duration-500">
                {successMessage}
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
