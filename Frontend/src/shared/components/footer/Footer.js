import React from "react";
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
    return(
        <React.Fragment>
        <div className="f">
             <footer class="bg-dark text-center text-white mt-auto" style={{width:"100%", position:'absolute', left:0}}>
            
<div class="container">
 
  <section class="footer">
 
    <div class="row">

      <section class="col-lg-6 col-md-6 mb-4 mb-md-0">
        <h3 class="text-uppercase">Contact us</h3>

        
        <i class="fa-solid fa-envelope fa-1x"> &emsp; dtuiot@gmail.com</i> 
                  <br/>
    <br/>
    <i class="fa-solid fa-phone fa-1x"> &emsp; +251937428204</i> 

    <br/>
      </section>

      <section class="col-lg-6 col-md-6 mb-4 mb-md-0">
        
        <h3 class="text-uppercase">Follow us </h3>

        &emsp; &emsp;
  <Link to="https://www.facebook.com/hohite.aemiro/" class="btn btn-outline-light btn-floating m-1" role="button">
 <i class="fa-brands fa-facebook fa-3x"></i>  &emsp; &emsp;
                    </Link>
    

<Link to="https://www.youtube.com/@HohiteAemiro" class="btn btn-outline-light btn-floating m-1" role="button">
<i class="fa-brands fa-youtube fa-3x"></i> &emsp; &emsp;
                    </Link>


<Link to="https://t.me/hohiteaemiro" class="btn btn-outline-light btn-floating m-1" role="button">
  <i class="fa-brands fa-telegram fa-3x"></i>   &emsp; &emsp;
                    </Link>
    
      </section>
    </div>
 
  </section>

</div>
<br/>
<br/>
<p class="text-center" style={{backgroundClor: "gray", textAlign:"center"}}>
  © 2022 Copyright: DTU_IOT Team
</p>

</footer>
</div>
        </React.Fragment>
    );
}

export default Footer;