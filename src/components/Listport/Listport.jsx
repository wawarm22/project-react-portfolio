import React, { useState } from "react";
import styles from "./Listport.module.css"; 
import IMAGES from "../../images/images";
import CER from "../../certificate/certificate";
import Tilt from "react-parallax-tilt";

function Listport() {
  
  const [visibleWindows, setVisibleWindows] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  
  const infoContent = [
    {
      topic: "เริ่มต้นสร้างและแสดงเนื้อหาของเว็บไซต์ด้วย HTML",
      images: [IMAGES.image1, IMAGES.image2, IMAGES.image3],
      content: [
        "พื้นฐานของเว็บ",
        "พื้นฐานของ HTML",
        "HTML Elements และ Attributes",
        "Block and Inline Elements",
        "Semantic Elements",
        "Table and Form",
      ],
      file: [CER.cer1], 
      link: "https://example.com/link1",
    },
    {
      topic: "ปรับแต่งและจัดวางสไตล์ของเว็บไซต์ด้วย CSS",
      images: [IMAGES.image4],
      content: [
        "พื้นฐาน CSS",
        "Common Properties",
        "Typography ศิลปะการใช้ตัวพิมพ์",
        "Flex and Grid",
        "Responsive Design",
      ],
      file: [CER.cer2],
      link: "https://example.com/link2",
    },
    {
      topic: "เพิ่มลูกเล่นให้กับเว็บไซต์ด้วย JavaScript",
      images: [IMAGES.image5],
      content: [
        "พื้นฐาน JavaScript",
        "Variables & Data Types",
        "Operators",
        "If/else If/else",
        "Function",
        "Loop (While/For)",
        "DOM Manipulation",
      ],
      file: [CER.cer3],
      link: "https://example.com/link3",
    },
    {
      topic: "เชื่อมต่อเว็บไซต์กับข้อมูลจากแหล่งอื่นๆ โดยใช้ API",
      images: [IMAGES.image6],
      content: [
        "Basic API",
        "HTML & CSS",
        "JavaScript",
        "Full Workshop and Conclusion",
      ],
      file: [CER.cer4],
      link: "https://example.com/link4",
    },
    {
      topic: "พัฒนาเว็บ React Portfolio ตั้งแต่เริ่มต้นจนขึ้น Deploy",
      images: [IMAGES.image7, IMAGES.image8, IMAGES.image9],
      content: [
        "Web Structure",
        "Create Component",
        "Responsive Design",
        "Upload to Github & Deploy",
      ],
      file: "path/to/file5.pdf",
      link: "https://github.com/wawarm22/project-react-portfolio.git",
    },
    {
      topic: "React ตั้งแต่พื้นฐาน จนสร้าง Chat Application ได้",
      images: [IMAGES.image10],
      content: [
        "Basic Javascript",
        "React Component",
        "States & Props",
        "React Routing",
        "Component Logic Reusing",
        "Workshop ลองทำ Chat application",
      ],
      file: [CER.cer5],
      link: "https://example.com/link6",
    },
  ];
  
  const toggleWindowVisibility = (index) => {
    const newVisibleWindows = [...visibleWindows];
    newVisibleWindows[index] = !newVisibleWindows[index];
    setVisibleWindows(newVisibleWindows);
  };

  return (
    <div className={styles.container}>
      {infoContent.map((info, index) => (
        <div key={index} className={styles.section}>
          <button
            className={styles.toggleButton}
            onClick={() => toggleWindowVisibility(index)}
          >
            {visibleWindows[index] ? `Hide` : `Show Project`}
          </button>
          {visibleWindows[index] && (
            <div className={styles.infoWindow}>
              <h2>{info.topic}</h2>
              <div className={styles.images}>
                {info.images.map((image, idx) => (
                  <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img
                      key={idx}
                      src={image}
                      alt={`${info.topic} Image ${idx + 1}`}
                      className={styles.image}
                    />
                  </Tilt>
                ))}
              </div>
              <ul>
                {info.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <a
                href={info.file}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.fileLink}
              >
                View File Certificate
              </a>
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Link Github
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Listport;
