import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';
import IMAGES from "../../images/images";
import { Link } from "react-router-dom";


function Portfolio() {
  return (
    <div id='portfolio' className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <Link to="/port">
                <img src={IMAGES.image3} alt="coding" />
              </Link>
            </Tilt>
            <p>เริ่มต้นสร้างและแสดงเนื้อหาของเว็บไซต์ด้วย HTML</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={IMAGES.image4} alt="coding" />
            </Tilt>
            <p>ปรับแต่งและจัดวางสไตล์ของเว็บไซต์ด้วย CSS</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={IMAGES.image5} alt="coding" />
            </Tilt>
            <p>เพิ่มลูกเล่นให้กับเว็บไซต์ด้วย JavaScript</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={IMAGES.image6} alt="coding" />
            </Tilt>
            <p>เชื่อมต่อเว็บไซต์กับข้อมูลจากแหล่งอื่นๆ โดยใช้ API</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={IMAGES.image7} alt="coding" />
            </Tilt>
            <p>พัฒนาเว็บ React Portfolio ตั้งแต่เริ่มต้นจนขึ้น Deploy</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={IMAGES.image10} alt="coding" />
            </Tilt>
            <p>React ตั้งแต่พื้นฐาน จนสร้าง Chat Application ได้</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
