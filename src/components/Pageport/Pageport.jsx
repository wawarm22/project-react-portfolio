import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Pageport.module.css';
import IMAGES from '../../images/images';
import imgProject from '../../img_project/imgProject';

function Pageport() {
  const [activeSection, setActiveSection] = useState('certificate');
  const navigate = useNavigate();

  const handleButtonClick = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? '' : section));
  };

  const handleBlogClick = (blogId) => {
    navigate(`/page_port/${blogId}`);
  };

  const handleProjectClick = (projectId) => {
    navigate(`/page_port/project/${projectId}`);
  };

  return (
    <div className={style.main_container}>
      <div className={style.topic_con}>
        <h1>Portfolio</h1>
        <p>นี่คือผลงานทั้งหมดที่เคยทำมามีทั้ง การเรียน โปรเจค และงานออกแบบ</p>
      </div>
      <div className={style.menu_con}>
        <button id={style.button_cer} onClick={() => handleButtonClick('certificate')}>Certificate</button>
        <button id={style.button_project} onClick={() => handleButtonClick('project')}>Project</button>
        <button id={style.button_design} onClick={() => handleButtonClick('design')}>Design</button>
      </div>
      {activeSection === 'certificate' && (
        <div className={style.blog_cer}>
          <div className={style.blog} onClick={() => handleBlogClick('cer1')}>
            <img src={IMAGES.image1} alt="" />
            <h3>เริ่มต้นสร้างและแสดงเนื้อหาของเว็บไซต์ด้วย HTML</h3>
            <p>HTML</p>
          </div>
          <div className={style.blog} onClick={() => handleBlogClick('cer2')}>
            <img src={IMAGES.image2} alt="" />
            <h3>ปรับแต่งและจัดวางสไตล์ของเว็บไซต์ด้วย CSS</h3>
            <p>CSS</p>
          </div>
          <div className={style.blog} onClick={() => handleBlogClick('cer3')}>
            <img src={IMAGES.image3} alt="" />
            <h3>เพิ่มลูกเล่นให้กับเว็บไซต์ด้วย JavaScript</h3>
            <p>JavaScript</p>
          </div>
          <div className={style.blog} onClick={() => handleBlogClick('cer4')}>
            <img src={IMAGES.image4} alt="" />
            <h3>เชื่อมต่อเว็บไซต์กับข้อมูลจากแหล่งอื่นๆ โดยใช้ API</h3>
            <p>HTML + CSS + JavaScript</p>
          </div>
          <div className={style.blog} onClick={() => handleBlogClick('cer5')}>
            <img src={IMAGES.image5} alt="" />
            <h3>React ตั้งแต่พื้นฐาน จนสร้าง Chat Application ได้</h3>
            <p>React</p>
          </div>
          <div className={style.blog} onClick={() => handleBlogClick('cer6')}>
            <img src={IMAGES.image6} alt="" />
            <h3>พัฒนาเว็บ React Portfolio ตั้งแต่เริ่มต้นจนขึ้น Deploy</h3>
            <p>React Vite Framwork</p>
          </div>
        </div>
      )}
      {activeSection === 'project' && (
        <div className={style.blog_project}>
          <div className={style.blog} onClick={() => handleProjectClick('project1')}>
            <img src={imgProject.image1} alt="project react" />
            <h3>Project React Vite Framework</h3>
            <p>โปรเจคที่ทำต่อยอดมาจากโปรเจคในคอร์ส react portfolio</p>
          </div>
          <div className={style.blog} onClick={() => handleProjectClick('project2')}>
            <img src={imgProject.image2} alt="project python" />
            <h3>Project Python Django</h3>
            <p>โปรเจคจบที่ทำตอนเรียนมหาวิทยาลัย</p>
          </div>                   
        </div>
      )}
      {activeSection === 'design' && (
        <div className={style.blog_design}>
          <div className={style.blog}>
            <a href="https://www.behance.net/gallery/170892121/App-Stay-Fit" target="_blank" rel="noopener noreferrer">
                <img src={IMAGES.image12} alt="" />
                <h3>ออกแบบ UI Mobile Appication</h3>
                <p>Figma + Canva</p>
            </a>
          </div>
          <div className={style.blog}>
            <a href="https://www.behance.net/gallery/172491025/re-design-mobile-app" target="_blank" rel="noopener noreferrer">
                <img src={IMAGES.image15} alt="" />
                <h3>Re-Design App Food Delivery</h3>
                <p>Figma</p>
            </a>            
          </div>
          <div className={style.blog}>
            <a href="https://www.behance.net/gallery/170891367/App-Food-Delivery" target="_blank" rel="noopener noreferrer">
                <img src={IMAGES.image19} alt="" />
                <h3>ออกแบบ UI App Food Delivery</h3>
                <p>Canva</p>
            </a>            
          </div>
          <div className={style.blog}>
            <a href="https://www.behance.net/gallery/170727963/MY-LOGO-DESIGN" target="_blank" rel="noopener noreferrer">
                <img src={IMAGES.image20} alt="" />
                <h3>ออกแบบ Logo ร้าน BaKery</h3>
                <p>Canva + Photoshop</p>
            </a>            
          </div>
          <div className={style.blog}>
            <a href="https://www.behance.net/gallery/170727963/MY-LOGO-DESIGN" target="_blank" rel="noopener noreferrer">
                <img src={IMAGES.image21} alt="" />
                <h3>ออกแบบ Logo Mobile App</h3>
                <p>Canva</p>
            </a>            
          </div>
          <div className={style.blog}>
            <a href="https://www.behance.net/gallery/170727963/MY-LOGO-DESIGN" target="_blank" rel="noopener noreferrer">
                <img src={IMAGES.image22} alt="" />
                <h3>ออกแบบ Logo เพจ Facebook</h3>
                <p>Canva + Photoshop</p>
            </a>            
          </div>
        </div>
      )}
    </div>
  );
}

export default Pageport;
