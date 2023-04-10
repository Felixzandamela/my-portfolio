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
    <>
    <nav className="nav">
      <div className="logoCard">
        <img width="45px" className="logo" src="https://i.imgur.com/9sziRVt.png" alt="Logo"/>
        <div className="logo"></div>
      </div>
      
      <div   id="navmenu" className={this.state.isToggleOn ? "navmenu menuShow" : "navmenu menuHide"}> 
        <div className="Link"><Link className="a" to="/">Home</Link></div>
        <div className="Link"><Link className="a" to="/blogs">Blogs</Link></div>
        <div className="Link LinkSpecialB"><Link className="a" to="/contact">Contact me</Link></div>
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
}

export default Layout;