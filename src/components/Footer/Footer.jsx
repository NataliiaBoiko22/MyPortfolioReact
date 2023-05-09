import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { GiEarthAmerica } from "react-icons/gi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { footerContact } from "../../utils/data";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings bg-secondary ${css.wrapper}`}>
      <motion.div
        variants={footerVariants}
        className={`innerWidth  flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="secondaryText">
            <GiEarthAmerica className={css.earth} />
            80-288 Gdansk, Poland
          </span>
        </div>
        <div className={css.center}>
          <span>
            Create with
            <BsFillSuitHeartFill fill="darkgreen" className={css.heart} />
            by me :)
          </span>
        </div>
        <div className={css.right}>
          <ul className={css.menu}>
            {footerContact.map((cont, i) => {
              return (
                <li key={i} style={{ background: cont.bg }}>
                  <a href={cont.href}>
                    <img src={cont.src} alt={cont.alt} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
