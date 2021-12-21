import React, {Component} from 'react';
import "./Services.css";
import arrowPhoto from "./Service_img/arrow_right.svg"
import servicePhoto from "./Service_img/service_photo.svg"

const firstServiceDescription = [{name:"Web design", description:"Provide our customers with optimized user-friendly experience to increase the efficiency of digital products.", link:"#1!"},
                            {name:"Branding", description:"Understanding the business and their target customers, I’m the bridges to bring the brand closer to their clients.", link:"#2!"},
                            {name:"Photography", description:"While stock photography is a great option for sourcing high-quality photos, it’s important that you choose your photos thoughtfully.", link:"#3!"}]

const secondServiceDescription = [{name:"Mobile design", description:"Mobile application development is a highlight that businesses are interested in at the moment and in the future.", link:"#4!"},
                            {name:"3D Modeling", description:"Help you translate your existing design or concept into CAD or to work with you to develop the ideal design. 3D Models great for modern digital art", link:"#5!"},
                            {name:"Video creating", description:"Create high-impact social videos with our easy video maker. Use custom video templates to find the right story for your business.", link:"#6!"}]

class Services extends Component{
    render(){
        return(
            <section class="services">
                <div class="main_wrapper">
                    <div class="services_wrapper">
                        <h2 class="services_title">From beginning ideas to individual integrity, <br/> rich identity from the line <span class="highlite"> on the paper to <br/> final projects</span></h2>
                    
                        <div class="service_photo">
                            <img src={servicePhoto} alt="Disaster" class="service_pic"/>
                        </div>
                        
                        <div class="first_service">

                            {setServicesDescription(firstServiceDescription)}

                        </div>

                        <div class="second_service">

                            {setServicesDescription(secondServiceDescription)} 

                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

function setServicesDescription(items) {
    return(
        items.map((items) => 
        <div>
            <h2 class="web_design_header">{items.name}</h2>
            <h3 class="web_design_description">{items.description}</h3>
                <a href={items.link} class="service_link">
                    <div class="service_ref">
                    
                        <h3 class="web_design_ref">See Works</h3>
                        <img src={arrowPhoto} alt="Disaster" class="arrow_pic"/>

                    </div>
                </a> 
        </div>)
    );
}

export default Services;
