import React, {Component} from 'react';
import "./Intro.css";
import womanPhoto from "./Intro_img/woman_photo.svg"

const buttons = [{link: "#1!", className:"main_hire_button", text:"Hire me"}, 
                {link:"#2!",className:"main_readMore_button", text:"Read more"}]

class Intro extends Component{
    render(){
        return(
            <section class="intro">
            <div class="main_wrapper">
                <div class="intro_wrapper">
                    <div class="information">
                        <p class="intro_pretitle">Jessica Strosin</p>

                        <h1 class="intro_title">Creative thinker
                            Minimalism lover</h1>
                    
                        <p class="intro_text">Hi, I’m Jessica. I’m UI/UX Designer. If you are looking for Designer to build your brands and grow your business Let’s shake hands with me.</p>
                        
                        <div class="intro_button_wrapper">
                            {setButtons()}
                        </div>

                        <hr class="intro_comment_line"/>

                        <p class="intro_comment">I am currently open for part-time work.</p>
                    </div>

                    <div class="girl_photo">
                        <img src={womanPhoto} alt="Disaster" class="girl-pic"/>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

function setButtons(){
    return(
        buttons.map((buttons) => 
   
            <form action={buttons.link}>
                <button type="submit" class={buttons.className}>{buttons.text}</button>
            </form>
        )
    );
}

export default Intro;