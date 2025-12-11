import React from "react";
import { Link } from "react-router-dom";
import "../styles/Categories.css";
import constructionImg from "../assets/construction.jpg";
import agriculturalImg from "../assets/agriculture.jpg";
import industrialImg from "../assets/industry.jpg";
// import ProductDetails from "./ProductDetails";
import foodImg from "../assets/foodimg.jpg";

const Categories = () => {
  const data = [
    {
      title: "Food Machinery",
      img: foodImg,
      desc: "Advanced food machinery designed to streamline production",
    },
    {
      title: "Agricultural Machinery",
      img: agriculturalImg,
      desc: "Tractors, harvesters, ploughs and farming tools.",
    },
    {
      title: "Industrial Machinery",
      img: industrialImg,
      desc: "CNC machines, conveyor belts, manufacturing tools.",
    },
    {
      title: "Construction Machinery",
      img: constructionImg,
      desc: "Excavators, bulldozers, cranes and more.",
    },
  ];

  return (
    <div className="category-wrapper">
      {data.map((item, index) => (
        <div className="category-card" key={index}>
          <img src={item.img} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <Link
            to={`/products?category=${item.title}`}
            className="view-btn"
          >
            View Products
          </Link>


        </div>
      ))}
    </div>
  );
};

export default Categories;
