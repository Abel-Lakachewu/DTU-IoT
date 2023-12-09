import React from "react";
import { Link } from 'react-router-dom';

import { Grid } from 'semantic-ui-react';

import Slider from './Slider'

import AccordionExampleStandard from "./shared/components/Semantic/Accordion";
import Temprature from "./shared/Temprature/Temprature";

import './Home2.css' ;

const Home2= () => {

   


    return (
      <React.Fragment>
        <div className="home" style={{ marginTop: "-14px" }}>
          <div className="container">
            <div className="tt">
              <Temprature />
            </div>
            <div className="home-information">
              <h1 className="margin-bottom h">Debre Tabor University</h1>
              <h4 className="home-info">Center of Internet of Things</h4>
              <p className="home-desc" style={{color:"black"}}>
                The Internet of things is smart objects with sensors,
                processing ability and softwares that can exchange data with other devices over a communications networks.
              </p>
              <Link to="/auth">
                <button className="home-btn">Join us</button>
              </Link>
              <br/>
              <br/>
              <Link to="/intern">
                <button className="home-btn">Apply for Internship</button>
              </Link>
            </div>
          </div>
        </div>
<div class="container">
        <div className="work">
          <div className="container">
            <h2 className="work-title">
              <span>Sample</span> Projects
            </h2>
            <div className="part first">
              <h4 className="part-title">Baby incubator</h4>
              <img
                style={{ width: "100%" }}
                src={require("./assets/temp.jpg")}
                alt="nbv"
              />

              <p className="part-desc">
                Baby incubator is a project that used in hospital for the development of premature babies.
              </p>
            </div>

            <div className="part">
              <h4 className="part-title">Line follower robot</h4>
              <img
                style={{ width: "100%" }}
                src={require("./assets/line4.jpg")}
                alt="nbv"
              />

              <p className="part-desc">
              The line follower robot is a mobile machine that can detect and follow the line drawn on the floor. 
              </p>
            </div>

            <div className="part last">
              <h4 className="part-title">Soil moisture</h4>
              <img
                style={{ width: "100%" }}
                src={require("./assets/soil4.jpg")}
                alt="nbv"
              />

              <p className="part-desc">
              Soil moisture detector project is basically used to find the content of water present in the soil.
              </p>
            </div>
          </div>
        </div>

        

        <Grid divided='vertically'>
    <Grid.Row columns={2} style={{marginLeft:'10px'}}>
      <Grid.Column>
      <div className="profile" >

        <Slider />

              </div>
      </Grid.Column>
      <Grid.Column>
      <h2>Frequently asked questions</h2>
      <AccordionExampleStandard />
        
      </Grid.Column>
    </Grid.Row>

  </Grid>

        <div className="portfolio">
          <h2 className="portfolio-title">
            <span>basic</span> IOT <span>devices</span>
          </h2>
          {/* <ul className="portfolio-list">
                <li className="portfolio-item active">All</li>
                <li className="portfolio-item">HTML</li>
                <li className="portfolio-item">Photoshop</li>
                <li className="portfolio-item">Wordpress</li>
                <li className="portfolio-item">Mobile</li>
            </ul> */}

          <div className="box">
            <div>
              <img
                src={require("./assets/devices/arduino_11zon.jpg")}
                alt="nbv"
              />
              <p className="overlay">
                <span>
                  <h4 className="center">Arduino</h4>
                  <p className="center">
                    a microcontroller board, which is essentially an entire
                    computer on a chip.
                  </p>
                </span>
              </p>
            </div>

            <div>
              <img
                src={require("./assets/devices/Raspberyy_11zon.jpg")}
                alt="nbv"
              />

              <p className="overlay">
                <span>
                  <h4 className="center">Raspbery pi</h4>
                  <p className="center">
                    a low cost, credit-card sized computer that plugs into
                    digital machines.
                  </p>
                </span>
              </p>
            </div>

            <div>
              <img src={require("./assets/devices/gsm_11zon.jpg")} alt="nbv" />

              <p className="overlay">
                <span>
                  <h4 className="center">GSM module</h4>
                  <p>
                    a chip that will be used to establish communication to a
                    mobile devices..
                  </p>
                </span>
              </p>
            </div>

            <div>
              <img
                src={require("./assets/devices/bluetooth_11zon.jpg")}
                alt="nbv"
              />

              <p className="overlay">
                <span>
                  <h4 className="center">Bluetooth module</h4>
                  <p>
                    the basic circuit set of the chip with integrated Bluetooth
                    function.
                  </p>
                </span>
              </p>
            </div>

            <div>
              <img
                src={require("./assets/devices/ultra_11zon.jpg")}
                alt="nbv"
              />

              <p className="overlay">
                <span>
                  <h4 className="center">Ultrasonic sensor</h4>
                  <p>
                    a device that measures the distance of a target object by
                    emitting ultrasonic sound waves.
                  </p>
                </span>
              </p>
            </div>

            <div>
              <img src={require("./assets/devices/lcd_11zon.jpg")} alt="nbv" />
              <p className="overlay">
                <span>
                  <h4 className="center">LCD display</h4>
                  <p>
                    a type of flat panel display which uses liquid crystals in
                    its primary form of operation.
                  </p>
                </span>
              </p>
            </div>

            <div>
              <img src={require("./assets/devices/xbee_11zon.jpg")} alt="nbv" />

              <p className="overlay">
                <span>
                  <h4 className="center">Xbee module </h4>
                  <p>
                    {" "}
                    a module that mainly use as a radio communication
                    transceiver and receiver.
                  </p>
                </span>
              </p>
            </div>

            <div>
              <img src={require("./assets/devices/wifi_11zon.jpg")} alt="nbv" />

              <p className="overlay">
                <span>
                  <h4 className="center">Wifi module</h4>
                  <p>
                    {" "}
                    electronic components used in many products to achieve a
                    wireless connection to the internet.
                  </p>
                </span>
              </p>
            </div>
          </div>
        </div>


<div style={{marginTop:"40px"}}>
        <section class="section" id="frequently-question">
          <div class="container">

            <h1 style={{ textAlign: "center" }}>Trainings you find in our center</h1>

            <div class="row">
              <div class="left-text col-lg-6 col-md-6 col-sm-12">
                
                <div class="accordion-text" style={{paddingTop:'50px', fontSize:'16px'}}>
                <h3>
                Basic level of Training 
                </h3>
                  <p>
                  	The basic level of training involves the basic introduction of IoT components what their uses are and how to use them for a project.
                  </p>
                  <p>
                 We give this training in the summer for technology loving individuals that are carefully examined with interviews prepared. We have been doing this for the last two years.
                  </p>

                  <p>
                 
                  </p>
                  <p>
                    
                  </p>
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12">
                
              <img src={require("./assets/io1.jpg")} style={{width: '500px'}} alt="nbv" />
                
              </div>
            </div>


            <div class="row">
              <div class="left-text col-lg-6 col-md-6 col-sm-12">
               
              <img src={require("./assets/io3.png")} style={{width: '350px'}} alt="nbv" />

              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                
                <div class="accordion-text" style={{paddingTop:'50px', fontSize:'16px'}}>
                <h3>
            Advanced level of Training 
                </h3>
                  <p>
                  The advanced level of training is given for trainees that finished the basic level of training or trainees that pass the test given for joining the basic ones.

                  </p>
                  <p>
                  This training teaches the advanced concepts of IoT and how all these IoT concepts can be incorporated in different departments for different kinds of projects.
                  </p>

                  <p>
                   
                  </p>
                  <p>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
       

        <div className="creative">
          <div className="container">
            <div className="creative-info" style={{ itemsAlign: "center" }}>
              {/* <div style={{itemsAlign:'center'}}></div> */}
              <img
                className="info-title"
                style={{ width: "25%", marginTop: "-60px", marginLeft: "25%" }}
                src={require("./assets/dtu.png")}
                alt="nbv"
              />
              <h4 className="info-dir">
                Debre Tabor University Has a Historical Duty To Answer
                Tewoddrosses Quest For Knowledge.
              </h4>
            </div>
          </div>
        </div>
        </div>
      </React.Fragment>
    );
}

export default Home2;