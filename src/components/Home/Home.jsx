import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Home.module.scss";
import { motion } from "framer-motion";
import Cube from "./Cube/Cube";
import TypeWriterEffect from "react-typewriter-effect";
const Home = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}>
        <div className={css.upperElements}>
          <motion.span variants={fadeIn("right", "tween", 0.2, 1)}>
            <div className={css.containerN}>
              <div className={css.boxN}>
                <div className={css.helloN}>
                  <span className={css.blockColorH}></span>
                  <p className={`primarySmallText ${css.heyText}`}>
                    Hey There,
                    <br />
                  </p>
                </div>

                <div className={css.titleN}>
                  <span className={css.blockColorN}></span>
                  <p className={css.myName}>
                    I'm Nataliia Boiko<span></span>
                    <br />
                  </p>
                </div>

                <div className={css.roleN}>
                  <span className={css.blockColorR}></span>
                  <p className="secondaryText">FrontEnd developer</p>
                </div>
              </div>
            </div>
          </motion.span>

          <motion.span
            className={css.loveText}
            variants={fadeIn("left", "tween", 0.4, 1)}>
            <TypeWriterEffect
              startDelay={4500}
              cursorColor="inherit"
              text="I Love What I Do!"
              typeSpeed={100}
            />
          </motion.span>
        </div>
        <div className={css.lowerBlocks}>
          <motion.div
            className={css.lowerElements}
            variants={fadeIn("up", "tween", 0.4, 1)}>
            <span className={`secondaryText ${css.letsMake}`}>
              Let's make something <br />
              amazing together. Start by{" "}
              <a className={css.email} href="mailto:nata.boyko.kras@gmail.com">
                saying hi
              </a>
            </span>
            <Cube />
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={css.person}>
            <motion.img
              variants={slideIn("up", "tween", 0.5, 1.3)}
              src="./person2.png"
              alt=""
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
