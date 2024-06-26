import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {

  const [isToggled, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!isToggled)
  }

  return (
    <nav>
        <div className={styles.container}>
          <div className={styles.nav_con}>
            <div className={styles.logo}>
              <Link to="/">JD PORT</Link>                          
            </div>
            <ul>
              <li><Link to="/">Profile</Link></li>
              <li><Link to="/page_port">Portfolio</Link></li>
              <li><a href="#contact">Experience</a></li>
            </ul>
            <div className={styles.button}>
              <a href="#">Hire Me</a>
            </div>
          </div>

          {/* Mobile Menu */}
          <FaBars className={styles.bars} onClick={handleToggle} />
          {isToggled ? (
            <>
              <ul className={styles.mobile_menu}>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <div className={styles.mobile_button}>
                <a href="#">Hire Me</a>
              </div>
            </>
          ) : null}

        </div>
    </nav>
  )
}

export default Navbar
