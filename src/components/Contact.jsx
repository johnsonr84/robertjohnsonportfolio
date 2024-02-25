import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { socials } from "../constants";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";
import { rob2 } from "../assets/";

const Contact = ({ index, title, }) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ram24v8",
        "template_r2j1rud",
        {
          from_name: form.name,
          to_name: "Robert",
          from_email: form.email,
          to_email: "robertcjohnson1984@gmail.com",
          message: form.message,
        },
        "V-VLFnBCeqTEM9zRg"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`flex justify-center xl:mt-12 xl:flex-row flex-col gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex justify-end xl:flex-1 xl:h-auto md:h-[550px] max-w-[350px]"
      >
        <img
          src={rob2}
          alt="contact section image of Robert holding laptop"
          className="h-[auto] max-h-[650px] object-cover"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("top", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#454545] p-8 rounded-2xl max-w-[500px] lg:min-w-[500px] max-h-[650px]"
      >
        <p className={styles.sectionSubTextLight}>Get in touch!</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex mt-5 flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-light py-4 px-6 placeholder:text-tertiary text-primary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-light py-4 px-6 placeholder:text-tertiary text-primary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={3}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-white py-4 px-6 placeholder:text-tertiary text-primary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <div className="flex place-content-center">
            <button
              type="submit"
              className="bg-[#2975f0] py-3 px-8 rounded-xl outline-none w-1/2 text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex justify-items-center items-center xl:flex-1 xl:h-auto md:h-[550px] max-w-[200px]"
      >
        <div className="max-w-[200px]">
          {socials.map((social, index) => (
            <div
              onClick={() => window.open(social.social_link, "_blank")}
              className="cursor-pointer"
              key={social.name}
            >
              <BallCanvas icon={social.icon} index={index} className="max-w-[200px]"/>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
