import React from "react";
import { useParams } from "react-router-dom";
import IMAGES from "../../images/images"; 
import style from "./Blogdetail.module.css";
import imgBlog from "../../img_blog/imgBlog"; 
import Certificate from "../../certificate/certificate";

const blogData = {
  cer1: {
    title: "เริ่มต้นสร้างและแสดงเนื้อหาของเว็บไซต์ด้วย HTML",
    content: [
      "พื้นฐานของเว็บ",
      "พื้นฐานของ HTML",
      "HTML Elements และ Attributes",
      "Block and Inline Elements",
      "Semantic Elements",
      "Table and Form",
    ],
    image: IMAGES.image1,
    image2: [imgBlog.image1, imgBlog.image2, imgBlog.image3],
    file: [Certificate.cer1],
  },
  cer2: {
    title: "ปรับแต่งและจัดวางสไตล์ของเว็บไซต์ด้วย CSS",
    content: [
      "พื้นฐาน CSS",
      "Common Properties",
      "Typography ศิลปะการใช้ตัวพิมพ์",
      "Flex and Grid",
      "Responsive Design",
    ],
    image: IMAGES.image2,
    image2: [imgBlog.image4],
    file: [Certificate.cer2],
  },
  cer3: {
    title: "ปรับแต่งและจัดวางสไตล์ของเว็บไซต์ด้วย CSS",
    content: [
      "พื้นฐาน JavaScript",
      "Variables & Data Types",
      "Operators",
      "If/else If/else",
      "Function",
      "Loop (While/For)",
      "DOM Manipulation",
    ],
    image: IMAGES.image2,
    image2: [imgBlog.image5],
    file: [Certificate.cer3],
  },
  cer4: {
    title: "เชื่อมต่อเว็บไซต์กับข้อมูลจากแหล่งอื่นๆ โดยใช้ API",
    content: [
      "Basic API",
      "HTML & CSS",
      "JavaScript",
      "Full Workshop and Conclusion",
    ],
    image: IMAGES.image2,
    image2: [imgBlog.image6],
    file: [Certificate.cer4],
  },
  cer5: {
    title: "React ตั้งแต่พื้นฐาน จนสร้าง Chat Application ได้",
    content: [
      "Basic Javascript",
      "React Component",
      "States & Props",
      "React Routing",
      "Component Logic Reusing",
      "Workshop ลองทำ Chat application",
    ],
    image: IMAGES.image2,
    image2: [imgBlog.image7, imgBlog.image8, imgBlog.image9],
    file: [Certificate.cer5],
  },
  cer6: {
    title: "พัฒนาเว็บ React Portfolio ตั้งแต่เริ่มต้นจนขึ้น Deploy",
    content: [
      "Web Structure",
      "Create Component",
      "Responsive Design",
      "Upload to Github & Deploy",
    ],
    image: IMAGES.image2,
    image2: [imgBlog.image10, imgBlog.image11, imgBlog.image12],
    file: [Certificate.cer6],
  },
};

function Blogdetail() {
  const { blogId } = useParams();
  const blog = blogData[blogId];

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const handleCertificateClick = () => {
    if (blog.file && blog.file.length > 0) {
      const certificateUrl = blog.file[0];
      window.open(certificateUrl, '_blank'); 
    }
  };

  return (
    <div className={style.blog_container}>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt="img from course in future skill" />
      <h2>บทเรียนในคอร์ส</h2>
      {Array.isArray(blog.content) ? (
        <ol>
          {blog.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      ) : (
        <p>{blog.content}</p>
      )}
      <h2>ภาพจากโปรเจคที่ทำในคอร์สเรียน</h2>
      <div className={style.img2_container}>
        {blog.image2.map((img, index) => (
          <img key={index} src={img} alt="img from project certificate" />
        ))}
      </div>
      <div className={style.button_container}>
        <button className={style.button_cer} onClick={handleCertificateClick}>view certificate</button>
        <button>view source code</button>
      </div>
    </div>
  );
}

export default Blogdetail;
