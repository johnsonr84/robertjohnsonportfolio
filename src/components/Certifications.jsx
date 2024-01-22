import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { deployment } from "../assets";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({
  index,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-black p-2 sm:w-[360px] w-full rounded-[20px]'
      >
        <div className='relative w-full h-[auto]'>
          <img
            src={image}
            alt='project_image'
            className='w-auto h-full object-cover rounded-[10px]'
          />
        </div>

        {/* <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div> */}

        {/* <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div> */}
      </Tilt>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My achievments</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Certifications.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-[#545454] text-[17px] max-w-6xl leading-[30px]'
        >
          Throughout my coding journey, I have earned certifications, including one in Frontend Engineering and another in Fullstack Engineering.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {certifications.map((certification, certifications, index) => (
          <CertificationCard key={`certification-${index}`} index={index} {...certification} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");