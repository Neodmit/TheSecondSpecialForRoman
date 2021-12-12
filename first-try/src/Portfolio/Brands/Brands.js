import React from 'react';
import "./Brands.css";
import aplphabet from "./Brands_img/alphabet.svg";
import shopify from "./Brands_img/shopify.svg";
import amazon from "./Brands_img/amazon.svg";
import google from "./Brands_img/google.svg";
import netflix from "./Brands_img/netflix.svg";

export default function Header(){
    return(   
        <section class="brands">
            <div class="main_brands_wrapper">
                <div class="brands_wrapper">
                    <h3 class="trusted_by">Trusted by</h3>
                    <div class="brand_pics_wrapper">
                        <img src={aplphabet} alt="Disaster" class="aplphabet_pic"/>
                        <img src={shopify} alt="Disaster" class="shopify_pic"/>
                        <img src={amazon} alt="Disaster" class="amazon_pic"/>
                        <img src={google} alt="Disaster" class="google_pic"/>
                        <img src={netflix} alt="Disaster" class="netflix_pic"/>
                    </div>
                </div>
            </div>
        </section>

    )
}