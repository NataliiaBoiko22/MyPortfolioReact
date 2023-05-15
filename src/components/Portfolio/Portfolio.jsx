import React, { useState } from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { portfolioData } from "../../utils/portfolioData";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";

const Portfolio = () => {
  const [showDescriptionIndex, setShowDescriptionIndex] = useState(-1);

  const toggleDescription = (index) => {
    setShowDescriptionIndex(index === showDescriptionIndex ? -1 : index);
  };
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div variants={textVariant(0.4)}>
          <div>
            <span className="primaryText flexCenter">My Latest Works</span>
          </div>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          {portfolioData.map((exp, i) => {
            const isDescriptionVisible = i === showDescriptionIndex;
            return (
              <motion.div variants={fadeIn("up", "tween", 0.5, 0.6)} key={i}>
                <div className={css.card}>
                  <h2 className={css.titleBlock}>
                    <span className={css.titleProject}>{exp.name} </span>
                    <div className={css.linkBlock}>
                      <a
                        href={exp.code}
                        target="_blank"
                        rel="noopener"
                        className={css.link}>
                        <FaCode className={css.icon} />
                      </a>
                      <a
                        href={exp.demo}
                        target="_blank"
                        rel="noopener"
                        className={css.link}>
                        <FaExternalLinkAlt className={css.icon} />
                      </a>
                    </div>
                  </h2>
                  <div
                    className="image-with-description"
                    onMouseEnter={() => toggleDescription(i)}
                    onMouseLeave={() => toggleDescription(i)}>
                    <img
                      className={css.image}
                      src={exp.src}
                      alt={exp.alt}
                      width={100}
                      animate={
                        isDescriptionVisible ? { opacity: 0.3 } : { opacity: 1 }
                      }
                      transition={{ duration: 0.2 }}
                    />
                    {isDescriptionVisible && (
                      <motion.div
                        variants={fadeIn("up", "tween", 0.5, 0.6)}
                        className={css.description}
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        animate={{ opacity: 1, x: 50, y: 30 }}
                        transition={{ duration: 0.2, delay: 0.2 }}>
                        <p>{exp.description}</p>
                      </motion.div>
                    )}
                  </div>
                  <p className={`smallText ${css.techTools}`}>
                    <span className={css.brackets}>[</span>
                    {exp.tech}
                    <span className={css.brackets}>]</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
