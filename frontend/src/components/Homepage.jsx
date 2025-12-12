import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Homepage.css";
import constructionImg from "../assets/construction.jpg";
import agriculturalImg from "../assets/agriculture.jpg";
import industrialImg from "../assets/industry.jpg";
import foodImg from "../assets/food.jpg";
import textileImg from "../assets/textile.jpg";
import transportImg from "../assets/trasnsport.jpg";
import thermalImg from "../assets/thermal.jpg";
import ChooseUs from "./ChooseUs";
import Categories from "./Categories.jsx";
import bosch from "../assets/img/bosch.png";
import cat from "../assets/img/CAT.png";
import johndeere from "../assets/img/JohnDeere.jpg";
import kirloskar from "../assets/img/Kirloskar.png";
import mitsubishi from "../assets/img/Mitsubishi.png";
import ServiceSupport from "./ServiceSupport.jsx"
import packingImg from "../assets/packing.jpg";
// import ProductDetails from "./ProductDetails.jsx";

import banner1 from "../assets/banner2.png";
import banner2 from "../assets/banner1.png";
import banner3 from "../assets/banner3.png";

export default function Hero() {

     const images = [banner3,banner1, banner2];
  const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();
   window.scrollTo(0, 0);
  const data = [
    { title: "Food Machinery", img: foodImg },
    { title: "Construction Machinery", img: constructionImg },
    { title: "Agriculture Machinery", img: agriculturalImg },
    { title: "Industrial Machinery", img: industrialImg },
    { title: "Textile Machinery", img: textileImg },
    { title: "Transport Machinery", img: transportImg },
    { title: "Thermal Machinery", img: thermalImg },
    { title: "Packing Machinery", img: packingImg },
  ];
 
  return (
 <>   <section
      className="hero"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="hero-content fade-slide">
        <button className="shop-btn" onClick={() => navigate("/products")}>
          SHOP NOW ⮞
        </button>
      </div>
    </section>

     <div className="marquee">
  <div className="marquee-inner">
    <span>Engineering Excellence ✪ Precision Machinery ✪ Trusted by Industries Worldwide</span>
    <span>One of India's fastest-growing Agri machines & tools brands.</span>
   
    <span>Engineering Excellence ✪ Precision Machinery ✪ Trusted by Industries Worldwide</span>
    <span>One of India's fastest-growing Agri machines & tools brands.</span>
  </div>
</div>
      <div className="round-category-wrapper">
        {data.map((item, index) => (
          <div className="round-category" key={index}>
            <div className="round-img">
              <img src={item.img} alt={item.title} />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

 <div className="h3">
              <h3 className="category">Top Sellers</h3>
       <Categories />
      </div>
      <ChooseUs />
     
{/* Our Manufacturing  */}
       <div className="why-choose-us1">
         <h2 className="title1">Our Manufacturing Partners</h2>
   
         <div className="features1">
           <div className="feature1">
             <img src={bosch} alt="bosch" />
           </div>
           <div className="feature1">
              <img src={cat} alt="cat" />
           </div>
           <div className="feature1">
             <img src={johndeere} alt="johndeere" />
           </div>
           <div className="feature1">
             <img src={kirloskar} alt="kirloskari" />
           </div>
            <div className="feature1">
             <img src={mitsubishi} alt="mitsubishi" />
           </div>
         </div>
       </div>  

<div>
  <ServiceSupport />
</div>


    </>
  );
}
