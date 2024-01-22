import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = ({index, title}) => {
  return (
    <div>
        <motion.div variants={fadeIn("down", "spring", index * 0.5, 0.75)}>
        <p className={`${styles.sectionSubText} text-center`}>
          Not all the tools, but the primary ones!
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Dev Toolbox.
        </h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} index={index}/>
        </div>
      ))}
    </div>
    </div>

  );
};

export default SectionWrapper(Tech, "tech");