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
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}>
            <div className={css.containerN}>
              <div className={css.boxN}>
                <div className={css.helloN}>
                  <span className={css.blockN}></span>
                  <h2>
                    Hey There,
                    <br />
                  </h2>
                </div>

                <div className={css.titleN}>
                  <span className={css.blockN}></span>
                  <h1>
                    I'm Nataliia Boiko<span></span>
                    <br />
                  </h1>
                </div>

                <div className={css.roleN}>
                  <div className={css.blockN}></div>
                  <p>FrontEnd developer</p>
                </div>
              </div>
            </div>
          </motion.span>

          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}>
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Eudoxus Sans",
                color: "$secondary",
                fontSize: 32,
                fontWeight: 600,
              }}
              startDelay={4500}
              cursorColor="inherit"
              text="I Love What I Do!"
              typeSpeed={100}
            />
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}>
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person2.png"
            alt=""
          />
        </motion.div>

        <motion.div
          className={css.lowerElements}
          variants={fadeIn("up", "tween", 0.4, 1)}>
          <span className="secondaryText">
            Let's make something <br />
            amazing together. Start by{" "}
            <a className={css.email} href="mailto:nata.boyko.kras@gmail.com">
              saying hi
            </a>
          </span>
          <Cube />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
