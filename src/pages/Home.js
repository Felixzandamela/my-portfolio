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
      <div className="prog-container">
        <div  style={{background: `conic-gradient(  ${skillColor} ${skillValue *     3.6}deg,  RGBA(60, 173, 241,0.20) ${skillValue  * 3.6}deg)` }}  className="cir-progress">
            <div className="v-container">{skillValue}%</div>
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
      <div className="flex-wrap-center">
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


const dataFeatues = [
 { featureTitle: 'Experienced and proficient',
    featureIcon: "bi bi-columns-gap",
    featureText:'I have been in the industry since my adulthood and have collaborated with a number of local and international agencies in the field.'
  },
  {
    featureTitle: 'Creative and innovative',
    featureIcon: 'bi bi-terminal-plus',
    featureText:'Quality and creative approach to each client is my lowest priority. I promise a responsive, interactive and unique website to all my clients.'
  }, 
  { featureTitle:'Reliable and responsible',
    featureIcon: 'bi bi-heart',
    featureText:'I guarantee that the money you paid will serve your purpose and the results will exceed your expectations. Your trust is the key to my work.'
  }
  ]
  
  // Features  tamplate
function FeatureCard({ featureTitle,featuresIcon, featureText
}){ 
  return (
    <div className="featuresCard">
      <div class="featuresIcon">
        <i class={featuresIcon}></i>
        </div>
        <div class="featuresBody">
        <h4>{featureTitle}</h4>
        <p>{featureText}</p>
      </div>
    </div>
  )
} 

 // Features  component
const Features = ()=>{
  return(
    <section className="sec sec-feactues">
      <div className="sec-container">
        <div className="sec-header">
          <h2 className="title">Why people <span> choose </span> me?</h2>
          <p className="featuresubheader">A few words about why they choose me and my services. Find out more by checking my customer reviews.</p>
        </div>
        <div className="flex-wrap-center">
        {dataFeatues.map(feature => (
          <FeatureCard 
            featuresIcon={feature.featureIcon}
            key={feature.featureTitle}
            featureTitle={feature.featureTitle}
            featureText={feature.featureText}
          />
         ))}
        </div>
      </div>
    </section>
  )
}


export default Home;