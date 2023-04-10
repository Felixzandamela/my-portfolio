import React from "react";
import { Outlet, Link } from "react-router-dom";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    }
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
     <Header/>
    )
  }
} 


const Header = ()=>{
  return (
    <>
    <nav className="nav">
      <div className="logoCard">
        <img width="45px" className="logo" src="https://i.imgur.com/9sziRVt.png" alt="Logo"/>
        <div className="logo"></div>
      </div>
      
      <div onClick={this.toggleNav}   id="navmenu" className={this.state.isToggleOn ? "navmenu menuShow" : "navmenu menuHide"}> 
        <Link className="a" to="/"><div className="Link">Home</div></Link>
        <Link className="a" to="/blogs"><div className="Link">Blogs</div></Link>
        <Link className="a" to="/contact"><div className="Link LinkSpecialB">Contact me</div></Link>
      </div>
      
      <div id="btnNav" onClick={this.toggleNav} className={this.state.isToggleOn ? "btnNav btnActive " : "btnNav"}>
        <div id="btnLine1"></div>
        <div id="btnLine2"></div>
      </div>
    </nav>
    <Outlet />
    </>
  )
}


export default Layout;