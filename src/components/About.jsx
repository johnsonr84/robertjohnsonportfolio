import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full rounded-[20px]'
      style={{
        borderRadius: "20px",
        border: "2px solid #cccccc"
      }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#fff] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-24 h-24 object-contain'
        />

        <h3 className='text-[#2975f0] text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#545454] text-[17px] max-w-6xl leading-[30px]'
      >
       I am a Fullstack Software Developer proficient in HTML, CSS, JavaScript, React, Angular, TypeScript, Node.js, Express.js, Python, and C#. With a strong command of database management, RESTful APIs, and Git, I specialize in delivering comprehensive end-to-end solutions. My commitment to crafting high-quality applications empowers me to tackle intricate challenges, ensuring project success. As a quick learner, I thrive on collaboration to create efficient, scalable, and user-friendly solutions. Let's transform your ideas into reality!"
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");