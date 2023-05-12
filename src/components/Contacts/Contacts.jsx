import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Contacts.module.scss";
import { motion } from "framer-motion";
import { leftContact, footerContact } from "../../utils/data";
// import TypeWriterEffect from "react-typewriter-effect";
import { Typewriter } from "react-simple-typewriter";
const Contacts = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}>
        <div className={css.upperElements}>
          <motion.div
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}>
            <div className={css.topBlock}>
              <img src="/splash2.png" className={css.decor} />
              <h2 className="xPaddings flexStart primaryText">Contact Me</h2>
              <p className=" xPaddings secondaryText flexStart">
                {" "}
                You can contact me at the places mentioned below.
              </p>
            </div>
            <div className={`xPaddings  ${css.contactsBlock}`}>
              {footerContact.map((cont, i) => {
                return (
                  <motion.div
                    variants={fadeIn("left", "tween", (i + 1) * 0.5, 1)}
                    className={css.contactsItem}
                    key={i}>
                    <a href={cont.href} className={css.leftLink}>
                      <img
                        src={cont.src}
                        alt={cont.alt}
                        className={css.leftIcon}
                      />
                      <span className={css.description}>{cont.descr}</span>
                    </a>
                  </motion.div>
                );
              })}
              {leftContact.map((cont, i) => {
                return (
                  <motion.div
                    variants={fadeIn("right", "tween", (i + 1) * 0.5, 1)}
                    className={css.contactsItem}
                    key={i}>
                    <a href={cont.href} className={css.leftLink}>
                      <img
                        src={cont.src}
                        alt={cont.alt}
                        className={css.leftIcon}
                      />
                      <span className={css.description}>{cont.descr}</span>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.span
            className={` xPaddings  ${css.bottomBlock}`}
            variants={fadeIn("left", "tween", 0.4, 1)}>
            {/* <TypeWriterEffect
              textStyle={{
                fontFamily: "Eudoxus Sans",
                color: "$secondary",
                fontWeight: 600,
              }}
              startDelay={2500}
              cursorColor="inherit"
              text="I will try to get back to you as fast as I can."
              typeSpeed={100}
            />
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Eudoxus Sans",
                color: "$secondary",
                fontWeight: 600,
              }}
              startDelay={7500}
              cursorColor="inherit"
              text="Best Regards! Nataliia Boiko."
              typeSpeed={100}
            /> */}
            <span className={css.textStyle}>
              <Typewriter
                words={[" ", "I will try to get back to you as fast as I can."]}
                typeSpeed={100}
                delaySpeed={2500}
              />
            </span>
            <span className={css.textStyle}>
              <Typewriter
                words={[" ", "Best Regards! Nataliia Boiko."]}
                typeSpeed={100}
                delaySpeed={7500}
              />
            </span>
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
};

export default Contacts;
