import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
// import resume from "../../assets/CVNataliiaBoiko.pdf";
const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  const handleBurgerClick = () => {
    return setMenuOpened((prevMenuOpened) => !prevMenuOpened);
  };
  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened: () => setMenuOpened(false),
  });
  const handleMenuLinkClick = () => {
    // Close the menu when a link is clicked
    setMenuOpened(false);
  };
  const activeLink = ({ isActive }) =>
    isActive ? `${css.link} ${css.activeLink}` : css.link;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: true, amount: 0.25 }}
      className={`bg-secondary paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <a
          href="https://www.linkedin.com/in/nataliia-boiko-ab48a9242/"
          target="_blank"
          title="Nataliia Boiko Linkedin"
          className={css.name}>
          {" "}
          NB
        </a>

        <ul
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}>
          <NavLink className={activeLink} to="/" onClick={handleMenuLinkClick}>
            Hero
          </NavLink>
          <NavLink
            className={activeLink}
            to="/about"
            onClick={handleMenuLinkClick}>
            About
          </NavLink>
          <NavLink
            className={activeLink}
            to="/portfolio"
            onClick={handleMenuLinkClick}>
            Portfolio
          </NavLink>
          <NavLink
            className={activeLink}
            to="/contacts"
            onClick={handleMenuLinkClick}>
            Contacts
          </NavLink>
          {/* <a
            // href="https://drive.google.com/file/d/1tOa5pELmiVr2reIWZOWStVgPNE7o00-d/view?usp=sharing"
            href={resume}
            rel="opener noreferrer"
            target="_blank"
            className={css.resumeLink}
            onClick={handleMenuLinkClick}>
            Resume
          </a> */}
        </ul>
        {/*for medium and small screens */}
        <div className={css.menuIcon} onClick={handleBurgerClick}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
