import React, {Component} from 'react';
import "./Header.css";
import logo from "./Header_img/logo.svg";

const headerItems = [{name: "Services", link: "/service"}, 
                    {name: "Works", link: "/works"}, 
                    {name: "Blog", link: "/blog"}]

class Header extends Component{
    render(){
        return(
            <header class="header">
                <div class="main_wrapper">
                    <div class="header_wrapper">

                        <div class="header_logo">
                            <a href="/" class="header-logo-link">
                                <img src={logo} alt="Disaster" class="header-logo-pic"/>
                            </a>
                        </div>

                        <nav class="header_nav">
                            <ul class="header_list">
    
                                {setLists()}

                                <li class="header_item_button">
                                    <form action="#4!">
                                        <button type="submit" class="header_hire_button">Hire me</button>
                                    </form>
                                </li>
                            </ul>
                        </nav>
                        
                    </div>
                </div>
            </header>
        );
    }
}

function setLists() {
    return(
        headerItems.map((headerItems) => 
        <li class="header_item">
            <a href={headerItems.link} class="header_link">{headerItems.name}</a>
        </li>)
    );
}

export default Header;
