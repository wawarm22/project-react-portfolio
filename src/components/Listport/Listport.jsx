import React, { useState } from "react";
import styles from "./Listport.module.css";
import IMAGES from "../../images/images";
import CER from "../../certificate/certificate";
import Tilt from "react-parallax-tilt";

const myDesignContent = [
  {
    topic: "ออกแบบ UI Mobile Appication",
    images: [IMAGES.image11,IMAGES.image12,IMAGES.image13],
    tools: ["Figma", "Canva"],
    link: "https://www.behance.net/gallery/170892121/App-Stay-Fit",
  },
  {
    topic: "Re-Design App Food Delivery",
    images: [IMAGES.image14,IMAGES.image15,IMAGES.image16],
    tools: ["Figma", "Canva"],
    link: "https://www.behance.net/gallery/172491025/re-design-mobile-app",
  },
  {
    topic: "ออกแบบ UI App Food Delivery",
    images: [IMAGES.image17,IMAGES.image18,IMAGES.image19],
    tools: ["Canva"],
    link: "https://www.behance.net/gallery/170891367/App-Food-Delivery",
  },
  {
    topic: "ออกแบบ Logo ร้าน BaKery",
    images: [IMAGES.image20],
    tools: ["Canva", "Photoshop"],
    link: "https://www.behance.net/gallery/170727963/MY-LOGO-DESIGN",
  },
  {
    topic: "ออกแบบ Logo Mobile App",
    images: [IMAGES.image21],
    tools: ["Canva"],
    link: "https://www.behance.net/gallery/170727963/MY-LOGO-DESIGN",
  },
  {
    topic: "ออกแบบ Logo เพจ Facebook",
    images: [IMAGES.image22],
    tools: ["Canva", "PhotpShop"],
    link: "https://www.behance.net/gallery/170727963/MY-LOGO-DESIGN",
  },
  {
    topic: "ออกแบบลายเสื้อผ้า",
    images: [IMAGES.image23],
    tools: ["Canva"],
    link: "https://www.behance.net/gallery/170727963/MY-LOGO-DESIGN",
  },
];

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
    link: "https://github.com/wawarm22/project-js-app-shopping",
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

function Listport() {
  const [visibleWindows, setVisibleWindows] = useState(
    Array(infoContent.length).fill(false)
  );
  const [showIndividualButtons, setShowIndividualButtons] = useState(false);
  const [showProjectDesign, setShowProjectDesign] = useState(false);
  const [showMyDesignInfo, setShowMyDesignInfo] = useState(
    Array(myDesignContent.length).fill(false)
  );

  const toggleWindowVisibility = (index) => {
    const newVisibleWindows = [...visibleWindows];
    newVisibleWindows[index] = !newVisibleWindows[index];
    setVisibleWindows(newVisibleWindows);
  };

  const handleShowAllProjects = () => {    
    setShowIndividualButtons(!showIndividualButtons);
    if (showProjectDesign) {
      setShowIndividualButtons(false);
      setVisibleWindows(Array(myDesignContent.length).fill(false));
    }
  };

  const handleProjectDesign = () => {
    setShowProjectDesign(!showProjectDesign);
    if (showIndividualButtons) {
      setShowProjectDesign(false);
      setShowMyDesignInfo(Array(infoContent.length).fill(false));
    }
  };

  const toggleMyDesignInfo = (index) => {
    const newShowMyDesignInfo = [...showMyDesignInfo];
    newShowMyDesignInfo[index] = !newShowMyDesignInfo[index];
    setShowMyDesignInfo(newShowMyDesignInfo);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.toggleAllButton}
        onClick={handleShowAllProjects}
      >
        {showIndividualButtons
          ? "Hide Project Certificate"
          : "Show Project Certificate"}
      </button>
      <button className={styles.toggleAllButton} onClick={handleProjectDesign}>
        {showProjectDesign ? "Hide Project Design" : "Show Project Design"}
      </button>
      {showProjectDesign && (
        <div>
          {myDesignContent.map((design, index) => (
            <div key={index} className={styles.section}>
              <button
                className={styles.innerButton}
                onClick={() => toggleMyDesignInfo(index)}
              >
                {showMyDesignInfo[index] ? "Hide My Design" : "Show My Design"}
              </button>
              {showMyDesignInfo[index] && (
                <div className={styles.infoWindow}>
                  <h2>{design.topic}</h2>
                  <div className={styles.images}>
                    {design.images.map((image, idx) => (
                      <Tilt
                        key={idx}
                        scale={1.1}
                        transitionSpeed={2500}
                        tiltReverse={true}
                      >                        
                        <img
                          src={image}
                          alt={`My Design Image ${idx + 1}`}
                          className={styles.image}
                        />
                      </Tilt>
                    ))}
                  </div>
                  <ul>
                    {design.tools.map((tool, idx) => (
                      <li key={idx}>{tool}</li>
                    ))}
                  </ul>
                  <a
                    href={design.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.fileLink}
                  >
                    View on My Gallery
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {infoContent.map((info, index) => (
        <div key={index} className={styles.section}>
          {showIndividualButtons && (
            <button
              className={styles.toggleButton}
              onClick={() => toggleWindowVisibility(index)}
            >
              {visibleWindows[index]
                ? `Hide My Certificate`
                : `Show My Certificate`}
            </button>
          )}
          {visibleWindows[index] && (
            <div className={styles.infoWindow}>
              <h2>{info.topic}</h2>
              <div className={styles.images}>
                {info.images.map((image, idx) => (
                  <Tilt
                    key={idx}
                    scale={1.1}
                    transitionSpeed={2500}
                    tiltReverse={true}
                  >
                    <img
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
