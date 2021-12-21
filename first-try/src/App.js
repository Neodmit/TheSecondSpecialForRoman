import React, {Component} from "react";
import {Route, Routes} from 'react-router-dom'
import Layout from "./hoc/Layout/Layout";
import Home from "./Portfolio/Home/Home";
import Service from "./Portfolio/Service/Service";
import Works from "./Portfolio/Works/Works";
import Blog from "./Portfolio/Blog/Blog";

class App extends Component {
  render(){
    return (
       <Layout>
         
         <Routes>
           <Route path ="/" element = {<Home/>}/>
           <Route path ="/service" element = {<Service/>}/>
           <Route path ="/works" element = {<Works/>}/>
           <Route path ="/blog" element = {<Blog/>}/>
         </Routes>
        </Layout>
    )
  }
}

export default App;
