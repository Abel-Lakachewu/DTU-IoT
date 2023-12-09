import React from "react";

import './css/style/style.css';
import { Grid} from 'semantic-ui-react'


const About = () => {
    return (
      <React.Fragment>
      <div className="ee container">
        <section id="ABOUT">
          <div class="about-1">
            <h1> ABOUT US </h1>
           
          </div>
          <div id="about-2">
            <div class="content-box-lg">
              <div class="containerrr">
                <div class="row">
                  <Grid columns="three" divided>
                    <Grid.Row>
                      <Grid.Column>
                        <div class="">
                          <div class="about-item text-center">
                          <i class="fa fa-history fa-2x" style={{marginLeft:'128px'}}></i>
                            <h3>History of the center</h3>
                            <hr />
                            <p>
                              {" "}
                              <br/>
                              Debre Tabor University IOT training center known as IOT lab is established in 2011 E.C. under Technology Faculty.{" "}
                            </p>
                          </div>
                        </div>
                      </Grid.Column>
                      <Grid.Column>
                        <div class="">
                          <div className="about-item text-center">
                            <i className="fa fa-bullseye fa-2x" style={{marginLeft:'128px'}}></i>
                            <h3>Mission</h3>
                            <hr />
                            <p>
                              {" "}
                              <br/>
                              To create innovative applications that are used in Smart City, Smart Health, Smart Manufacturing, Smart Agriculture, Smart Buildings.{" "}
                            </p>
                          </div>
                        </div>
                      </Grid.Column>
                      <Grid.Column>
                        <div class="">
                          <div class="about-item text-center">
                            <i class="fa fa-eye fa-2x" style={{marginLeft:'128px'}}></i>
                            <h3>Vission</h3>
                            <hr />
                            <p>
                              {" "}
                              <br/>
                              The vision of the center is to be one of the top 10 technology centers that work on the IOT at national level in 2025.{" "}
                            </p>
                          </div>
                        </div>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </React.Fragment>
    );
}

export default About;