import React from "react";
import { useParams } from "react-router-dom";
import style from "./Blogproject.module.css"; 
import imgProject from "../../img_project/imgProject"; 

const projectData = {
  project1: {
    title: "Project React Vite Framework",
    content_language: [
      "JavaScript XML",
      "CSS",      
    ],
    content_tool: [
      "library : React",
      "build tool: Vite",      
    ],
    content_cap: [], // Empty content_cap array
    image: imgProject.image1,
    images: [imgProject.image3, imgProject.image4, imgProject.image5, imgProject.image6], 
  },
  project2: {
    title: "Project Python Django",
    content_language: [
      "Python",
      "Html",
      "JavaScript",
      "Css",      
    ],
    content_tool: [
      "Framwork : Django",
      "Database : Postgresql",      
    ],
    content_cap: [
      "ระบบ CRUD",
      "DashBoard",
      "ระบบสมัครสมาชิก",
      "การเชื่อม API",
      "การ Query ข้อมูล",      
    ],
    image: imgProject.image2,
    images: [imgProject.image7, imgProject.image8, imgProject.image9, imgProject.image10, imgProject.image11, imgProject.image12, imgProject.image13, imgProject.image14],
  },
};

function Blogproject() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={style.project_container}>
      <div className={style.head_container}>
        <h1>{project.title}</h1>
        <img src={project.image} alt="Project main" />
      </div>
      <div className={style.content_language}>
        <h2>ภาษาโปรแกรมที่ใช้เขียน</h2>
        <ul>
          {project.content_language.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={style.content_tool}>
        <h2>เครื่องมือที่ใช้</h2>
        <ul>
          {project.content_tool.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Conditionally render content_cap */}
      {projectId !== "project1" && (
        <div className={style.content_cap}>
          <h2>ความสามารถของโปรเจค</h2>
          <ul>
            {project.content_cap.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <h2>ภาพจากโปรเจค</h2>
      <div className={style.img_container}>
        {project.images.map((img, index) => (
          <img key={index} src={img} alt={`Project image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Blogproject;
