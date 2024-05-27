import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}></h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
            <p></p>
            {/* <img src="" alt="" /> */}
            <h4></h4>
            <p className={styles.bio}></p>
        </div>
        <div className={styles.testi_items}>
            <p></p>
            {/* <img src="" alt="" /> */}
            <h4></h4>
            <p className={styles.bio}></p>
        </div>
        <div className={styles.testi_items}>
            <p></p>
            {/* <img src="" alt="" /> */}
            <h4></h4>
            <p className={styles.bio}></p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
