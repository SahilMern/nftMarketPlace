import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';
import { motion } from 'framer-motion';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [mobile, setMobile] = useState(false);
  const navVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 1,
      },
    },
  };
  return (
    <motion.nav
      className="navbar"
      variants={navVariants}
      initial="hidden"
      whileInView="show"
    >
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src="./triangle.png" />
        </div>
        {/* list  */}
        <div className="navbar-links_container">
          <ul>
            <li>Home</li>
            <li>Libary</li>
            <li>Service</li>
            <li>What Is GPT3?</li>
            <li> Case Studies</li>
          </ul>
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <ul>
                <li>Home</li>
                <li>Libary</li>
                <li>Service</li>
                <li>What Is GPT3?</li>
                <li> Case Studies</li>
              </ul>
            </div>
            <div className="navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
