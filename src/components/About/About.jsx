import React from "react";
import css from "./About.module.scss";
import { leftContact, WhoIam } from "../../utils/data";
import { skillsData } from "../../utils/skillsData";
import { motion } from "framer-motion";
import {
  fadeIn,
  footerVariants,
  staggerContainer,
  textVariant,
} from "../../utils/motion.js";
import Courses from "../Courses/Courses";
import Marquee from "react-fast-marquee";
const About = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}>
        <div className={css.topSide}>
         <div className={css.leftSide}>
            {leftContact.map((cont, i) => {
              return (
                <motion.div
                  variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                  className={css.exp}
                  key={i}>
                  <div style={{ background: cont.bg }}>
                    <a href={cont.href} className={css.leftLink}>
                      <img
                        src={cont.src}
                        alt={cont.alt}
                        className={css.leftIcon}
                      />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div variants={textVariant(0.5)} className={css.rightSide}>
            <span className="primaryText flexCenter">
              Hi, I'm Nataliia Boiko
            </span>

            {WhoIam.map((paragraph, i) => (
              <span className="secondaryText" key={i}>
                {paragraph}
              </span>
            ))}
          </motion.div>
        </div>
        <motion.div variants={footerVariants} className={css.scroll}>
          <div className={`flexCenter ${css.stats}`}>
            <span className="primaryText">Tech stack </span>
          </div>

          <Marquee
            speed={60}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left">
            {skillsData.map((skill, id) => (
              <div className={css.box} key={id}>
                <img src={skill.src} alt={skill.alt} />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </Marquee>
          <Courses />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
