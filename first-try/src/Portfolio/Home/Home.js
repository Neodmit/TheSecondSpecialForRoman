import React, {Component} from "react";
import Header from "./Header/Header";
import Intro from "./Intro/Intro"
import Services from "./Services/Services"
import Brands from "./Brands/Brands"

class Home extends Component{
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Intro/>
                <Services/>
                <Brands/> 
            </React.Fragment>
        )
    }
}

export default Home