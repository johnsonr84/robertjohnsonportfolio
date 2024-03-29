import { motion } from "framer-motion";
// import { slideIn, fadeIn } from "../utils/motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { styles } from "../styles";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      'Hey! I am Rob, A Fullstack Developer. Welcome to my portfolio!',
      'I enjoy building software, user interfaces and web applications.',
    ],
    loop: true,
    typeSpeed: 50,
    delaySpeed: 1000,
    deleteSpeed: 50,
  })
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`hero-img absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#2975f0]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}

        <div className="text-center">
        <h1 className="text-3xl lg:text-3xl px-5 p-2 max-w-2lg text-center text-[#545454]">
          <span className="mr-3 text-[10px] md:text-xl base:text-2xl lg:text-3xl xl:text-3xl">{text}</span>
          <Cursor cursorColor="#2975f0" />
        </h1>
          {/* <h1 className={`${styles.heroHeadText} text-[#000]`}>
            Hi, I'm <span className='text-[#2975f0]'>Robert!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-1 text-[#858585]`}>
            A Fullstack Developer.
          </p>
          <p className={`${styles.heroSubText} mt-1 text-[#858585]`}>
            I develop software, user <br />
            interfaces and web applications.
          </p> */}
        </div>
      </div>

      {/* <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="h-[100-vh]"
      >
        <img
          src={rob}
          alt="hero section image of Robert standing at computer desk"
          className="  object-cover"
        />
      </motion.div> */}
      {/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;