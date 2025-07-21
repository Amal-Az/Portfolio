import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="mt-20 py-16 bg-[#0D0B3C]">
      <div className="max-w-5xl mx-auto">
        {/* Titre animé */}
        <div className="text-center mb-10 flex justify-center items-center gap-2 text-3xl font-bold">
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Contact
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-red-500"
          >
            Me
          </motion.span>
        </div>

        {/* Paragraphe */}
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
          I'm always open to discussing new opportunities, interesting projects
          about geomatics and technology.
        </p>

        {/* Form */}
        <form className="space-y-5">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 rounded-md text-black"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 rounded-md text-black"
            />
          </div>

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-3 rounded-md text-black"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-md text-black"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-md text-black"
          ></textarea>

          <button
            type="submit"
            className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
