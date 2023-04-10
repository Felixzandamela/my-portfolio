import React from "react";
//import imgHeader from "./assets/header.jpg"
const Home = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src="../assets/header.jpg" className="image" alt="header"/>
      <div>
        <h3 className="heading">Hi, I'm Félix Zamdamela</h3>
        <p className="description"> Welcome to my portfolio, the place where a piece of me is reflected in every detail. I am inspired by you and
        everyone who is interested in what I do. </p>
        <a href="https://wa.me/message/7VVAOYC3TSBGB1" target="_blank">
          <button className="header-button">Contact-me</button>
        </a>
      </div>
      </div>
    </header>
  ) 
};




export default Home;