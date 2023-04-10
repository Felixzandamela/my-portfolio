import React from "react";
import { Outlet, Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false;
    }
    this.toggleNav = this.handleClick.bind(this);
  }
  toggleNav(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  return (
    <>
    <nav class="nav">
      <div class="logoCard">
        <img width="45px" class="logo" src="https://i.imgur.com/9sziRVt.png" alt="Logo"/>
        <div class="logo"></div>
      </div>
      
      <div onClick={this.handleClick}  id="navmenu"
      className={this.state.isToggleOn ? "navmenu menuShow" : "navmenu menuHide"}> 
        <div class="Link"><Link to="/">Home</Link></div>
        <div class="Link"><Link to="/blogs">Blogs</Link></div>
        <div class="Link LinkSpacialB"><Link to="/contact">Contact me</Link></div>
      </div>
      
      <div id="btnNav" onClick={this.handleClick} className={this.state.isToggleOn ? "btnNav btnActive " : "btnNav"}>
        <div id="btnLine1"></div>
        <div id="btnLine2"></div>
      </div>
    </nav>
    <Outlet />
    </>
  )
};

export default Layout;