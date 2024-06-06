import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';
import imgProfile from '../../img_profile/img_profile';
import { Link } from "react-router-dom";


function Portfolio() {
  return (
    <div id='portfolio' className={styles.port_con}>
      <h3 className={styles.port_title}>My Gallery</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>              
                <img src={imgProfile.image1} alt="myself" />              
            </Tilt>            
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={imgProfile.image2} alt="myself" />
            </Tilt>            
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={imgProfile.image3} alt="myself" />
            </Tilt>            
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={imgProfile.image4} alt="myself" />
            </Tilt>            
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={imgProfile.image5} alt="myself" />
            </Tilt>            
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={imgProfile.image6} alt="myself" />
            </Tilt>            
        </div>
      </div>
    </div>
  )
}

export default Portfolio
