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
    <nav class="nav">
      <div class="logoCard">
        <img width="45px" class="logo" src="https://i.imgur.com/9sziRVt.png" alt="Logo"/>
        <div class="logo"></div>
      </div>
      
      <div onClick={this.toggleNav}  id="navmenu" className={this.state.isToggleOn ? "navmenu menuShow" : "navmenu menuHide"}> 
        <Link className="Link" to="/">Home</Link>
        <Link className="Link" to="/blogs">Blogs</Link>
        <Link className="Link LinkSpecialB" to="/contact">Contact me</Link>
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