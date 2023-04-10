import React from "react";

const Home = () => {
  return (
    <Header/>
  )
};


const Header = () =>{
  return (
    <header className="header">
      <div className="header-container">
        <img src="./header.jpg" className="image" alt="header"/>
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
}

 // get years function 
const activeYears = (date) => {
 let time = (new Date()).getTime() - date.getTime(); 
  let year = Math.floor(time / 1000/60/60/24/30/12); 
  return year; 
}

// Skills  component
const Skills = ()=>{
 let yearsOffWork = activeYears(new Date("Oct, 12 2020"));

  return(
    <section className="sec">
      <div className="sec-container">
      <div className="sec-header">
        <h3 className="title">My <span>experience</span> and knowledge</h3>
        <p className="featuresubheader">
         I'm a fullstack Web  applicatons developer based in Mozambique with over {yearsOffWork} years of experience in:
         </p>
      </div>
      <div class="flex-wrap-center">
       {dataSkills.map(skill => (
          <SkillCard
            skillName={skill.name}
            key={skill.name}
            skillValue={skill.value}
            skillColor={skill.color}
          />
       ))}
      </div>
      </div>
    </section>
  )
}


export default Home;