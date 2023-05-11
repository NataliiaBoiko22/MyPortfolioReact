import { useEffect, useState } from "react";

export default function useOutsideAlerter({ menuRef, setMenuOpened }) {
  const viewport_width = document.documentElement.clientWidth;
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (viewport_width <= 640) {
          setMenuOpened(false);
        }
      }
    }

    function handleKeyDown(event) {
      if (event.keyCode === 27) {
        // Close the menu when pressing the Escape key
        setMenuOpened(false);
      }
    }

    // Bind the event listeners
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      // Unbind the event listeners on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuRef, setMenuOpened]);
}
