import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Pageport.module.css';
import IMAGES from '../../images/images';
import imgProject from '../../img_project/imgProject';

const Blog = ({ onClick, imgSrc, title, description }) => (
  <div className={style.blog} onClick={onClick}>
    <img src={imgSrc} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const CertificateSection = ({ handleBlogClick }) => (
  <div className={style.blog_cer}>
    {[
      { id: 'cer1', img: IMAGES.image1, title: 'เริ่มต้นสร้างและแสดงเนื้อหาของเว็บไซต์ด้วย HTML', description: 'HTML' },
      { id: 'cer2', img: IMAGES.image2, title: 'ปรับแต่งและจัดวางสไตล์ของเว็บไซต์ด้วย CSS', description: 'CSS' },
      { id: 'cer3', img: IMAGES.image3, title: 'เพิ่มลูกเล่นให้กับเว็บไซต์ด้วย JavaScript', description: 'JavaScript' },
      { id: 'cer4', img: IMAGES.image4, title: 'เชื่อมต่อเว็บไซต์กับข้อมูลจากแหล่งอื่นๆ โดยใช้ API', description: 'HTML + CSS + JavaScript' },
      { id: 'cer5', img: IMAGES.image5, title: 'React ตั้งแต่พื้นฐาน จนสร้าง Chat Application ได้', description: 'React' },
      { id: 'cer6', img: IMAGES.image6, title: 'พัฒนาเว็บ React Portfolio ตั้งแต่เริ่มต้นจนขึ้น Deploy', description: 'React Vite Framework' },
    ].map((cert) => (
      <Blog
        key={cert.id}
        onClick={() => handleBlogClick(cert.id)}
        imgSrc={cert.img}
        title={cert.title}
        description={cert.description}
      />
    ))}
  </div>
);

const ProjectSection = ({ handleProjectClick }) => (
  <div className={style.blog_project}>
    {[
      { id: 'project1', img: imgProject.image1, title: 'Project React Vite Framework', description: 'โปรเจคที่ทำต่อยอดมาจากโปรเจคในคอร์ส react portfolio' },
      { id: 'project2', img: imgProject.image2, title: 'Project Python Django', description: 'โปรเจคจบที่ทำตอนเรียนมหาวิทยาลัย' },
    ].map((project) => (
      <Blog
        key={project.id}
        onClick={() => handleProjectClick(project.id)}
        imgSrc={project.img}
        title={project.title}
        description={project.description}
      />
    ))}
  </div>
);

const DesignSection = () => (
  <div className={style.blog_design}>
    {[
      { href: 'https://www.behance.net/gallery/170892121/App-Stay-Fit', img: IMAGES.image12, title: 'ออกแบบ UI Mobile Application', description: 'Figma + Canva' },
      { href: 'https://www.behance.net/gallery/172491025/re-design-mobile-app', img: IMAGES.image15, title: 'Re-Design App Food Delivery', description: 'Figma' },
      { href: 'https://www.behance.net/gallery/170891367/App-Food-Delivery', img: IMAGES.image19, title: 'ออกแบบ UI App Food Delivery', description: 'Canva' },
      { href: 'https://www.behance.net/gallery/170727963/MY-LOGO-DESIGN', img: IMAGES.image20, title: 'ออกแบบ Logo ร้าน Bakery', description: 'Canva + Photoshop' },
      { href: 'https://www.behance.net/gallery/170727963/MY-LOGO-DESIGN', img: IMAGES.image21, title: 'ออกแบบ Logo Mobile App', description: 'Canva' },
      { href: 'https://www.behance.net/gallery/170727963/MY-LOGO-DESIGN', img: IMAGES.image22, title: 'ออกแบบ Logo เพจ Facebook', description: 'Canva + Photoshop' },
    ].map((design) => (
      <div key={design.title} className={style.blog}>
        <a href={design.href} target="_blank" rel="noopener noreferrer">
          <img src={design.img} alt={design.title} />
          <h3>{design.title}</h3>
          <p>{design.description}</p>
        </a>
      </div>
    ))}
  </div>
);

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

  const sections = {
    certificate: <CertificateSection handleBlogClick={handleBlogClick} />,
    project: <ProjectSection handleProjectClick={handleProjectClick} />,
    design: <DesignSection />,
  };

  return (
    <div className={style.main_container}>
      <div className={style.topic_con}>
        <h1>Portfolio</h1>
        <p>นี่คือผลงานทั้งหมดที่เคยทำมามีทั้ง การเรียน โปรเจค และงานออกแบบ</p>
      </div>
      <div className={style.menu_con}>
        <button
          id={style.button_cer}
          className={activeSection === 'certificate' ? style.active : ''}
          onClick={() => handleButtonClick('certificate')}
        >
          Certificate
        </button>
        <button
          id={style.button_project}
          className={activeSection === 'project' ? style.active : ''}
          onClick={() => handleButtonClick('project')}
        >
          Project
        </button>
        <button
          id={style.button_design}
          className={activeSection === 'design' ? style.active : ''}
          onClick={() => handleButtonClick('design')}
        >
          Design
        </button>
      </div>
      {sections[activeSection]}
    </div>
  );
}

export default Pageport;
