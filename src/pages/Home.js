import React from "react";

const Home = () => {
  return (
    <div>
    <Header/>
    <Skills/>
    </div>
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


const  dataSkills= [
{ name:"Javascript", value:78,  color:"#f1dc4e" },
 { name:"Node Js", value:89, color:"#83cd29" },
 { name:"MongoDB", value:97, color:"#4faa41" },
 { name:"React Js", value:62, color:"#00d9ff" },
 { name:"Html", value:99, color:"#e34c26"},
 { name:"Css", value:88, color:"#264de4" },
 { name:"Sql", value:83, color:"#00758F"},
 { name:"Firebase", value:79, color:"#FFA611" }
 ]
 
 // Skills  tamplate
function SkillCard({ skillName, skillValue,  skillColor,
}){ 
  return (
    <div className="p-wrapper">
      <div class="prog-container">
        <div  style={{background: `conic-gradient(  ${skillColor} ${skillValue *  3.6}deg,  RGBA(60, 173, 241,0.20) ${skillValue  * 3.6}deg)` }}  class="cir-progress">
            <div class="v-container">{skillValue}%</div>
          </div>
        <h4>{skillName}</h4>
      </div>
    </div>
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