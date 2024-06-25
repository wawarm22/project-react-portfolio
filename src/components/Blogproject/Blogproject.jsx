import React from "react";
import { useParams } from "react-router-dom";
import style from "./Blogproject.module.css";
import imgProject from "../../img_project/imgProject";

const projectData = {
  project1: {
    title: "Project React Vite Framework",
    content_language: ["JavaScript XML", "CSS"],
    content_tool: ["library : React", "build tool: Vite"],
    content_cap: [],
    image: imgProject.image1,
    images: [
      imgProject.image3,
      imgProject.image4,
      imgProject.image5,
      imgProject.image6,
    ],
    link: ["https://github.com/wawarm22/project-react-portfolio.git"], 
  },
  project2: {
    title: "Project Python Django",
    content_language: ["Python", "Html", "JavaScript", "Css"],
    content_tool: ["Framwork : Django", "Database : Postgresql"],
    content_cap: [
      "ระบบ CRUD",
      "DashBoard",
      "ระบบสมัครสมาชิก",
      "การเชื่อม API",
      "การ Query ข้อมูล",
    ],
    image: imgProject.image2,
    images: [
      imgProject.image7,
      imgProject.image8,
      imgProject.image9,
      imgProject.image10,
      imgProject.image11,
      imgProject.image12,
      imgProject.image13,
      imgProject.image14,
    ],
    link: ["https://github.com/wawarm22/project-web-python_django"],
  },
};

const ListSection = ({ title, items }) => (
  <div className={style.list_section}>
    <h2>{title}</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

function Blogproject() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleSourceCodeClick = () => {
    if (project.link && project.link.length > 0) {
      const sourceCodeUrl = project.link[0];
      window.open(sourceCodeUrl, '_blank'); 
    }
  };

  return (
    <div className={style.project_container}>
      <div className={style.head_container}>
        <h1>{project.title}</h1>
        <img src={project.image} alt="Project main" />
      </div>
      <ListSection title="ภาษาโปรแกรมที่ใช้เขียน" items={project.content_language} />
      <ListSection title="เครื่องมือที่ใช้" items={project.content_tool} />
      {projectId !== "project1" && (
        <ListSection title="ความสามารถของโปรเจค" items={project.content_cap} />
      )}
      <h2>ภาพจากโปรเจค</h2>
      <div className={style.img_container}>
        {project.images.map((img, index) => (
          <img key={index} src={img} alt={`Project image ${index + 1}`} />
        ))}
      </div>
      <div className={style.button_container}>
        <button className={style.button_cer} onClick={handleSourceCodeClick}>
          view source code
        </button>        
      </div>
    </div>
  );
}

export default Blogproject;
