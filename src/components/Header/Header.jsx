import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import resume from "/BoikoN.CV.0224.pdf";
const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  const handleBurgerClick = () => {
    return setMenuOpened((prevMenuOpened) => !prevMenuOpened);
  };
  useOutsideAlerter({
    menuRef,
    setMenuOpened: () => setMenuOpened(false),
  });
  const handleMenuLinkClick = () => {
    setMenuOpened(false);
  };
  const activeLink = ({ isActive }) =>
    isActive ? `${css.link} ${css.activeLink}` : css.link;
  return (
    <div
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
            Home
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
          <a
            href={resume}
            rel="opener noreferrer"
            target="_blank"
            className={css.resumeLink}
            onClick={handleMenuLinkClick}>
            Resume
          </a>
        </ul>
        <div className={css.menuIcon} onClick={handleBurgerClick}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Header;
