import { Swiper, SwiperSlide } from "swiper/react";
import { SectionWrapper } from "../../hoc";
import { fullstackprojects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import { github } from "../../assets";
import { deployment } from "../../assets";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const ProjectCard = ({
  index,
  fullstackprojects,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployment_link,
}) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] xs:w-[300px] w-[280px] min-h-[500px]">
      <div className="relative h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(deployment_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={deployment}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
        <div className="absolute inset-0 flex justify-end me-3 mt-16 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-white text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Fullstack = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Fullstack</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[#545454] text-[17px] max-w-6xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to the deployed application and Github repository. It reflects
          my ability to solve complex problems, work with different
          technologies, and manage projects effectively.
        </motion.p>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mt-20 swiper_container"
      >
        <div className="mt-20 flex flex-wrap gap-7">
          {fullstackprojects.map(
            (fullstackproject, fullstackprojects, index) => (
              <SwiperSlide>
                <ProjectCard
                  key={`fullstackproject-${index}`}
                  index={index}
                  {...fullstackproject}
                />
              </SwiperSlide>
            )
          )}
        </div>

        <div className="slider-controler mt-10">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

      {/* <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, projects, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(Fullstack, "fullstackprojects");
