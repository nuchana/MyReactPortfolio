import React, { Component } from 'react';
import './portfolio.css';


class Portfolio extends Component {
    render() {
        return (
            <div>
                <div class="container">

                    <div class="content">

                        <div class="row">
                            <div class="col-lg-12 content text-center ">
                                <h1>Portfolio</h1>
                                <hr class="my-3"></hr>
                            </div>
                        </div>

                        <div class="row">
                                <div class="col-sm-2"> </div>
                                <figure class="col-md-4">
                                    <a href="https://nuchana.github.io/Awesome-weather-dashboard/"><img src="images/myapp.png"
                                        class="img-thumbnail" alt="Weather App" style= {{ width: "370px", height: "200px" }}></img></a>
                                        <figcaption class="figure-caption">Click image to Weather Forecast App.</figcaption>
                                </figure>

                                <figure class="col-md-4">
                                    <a href="https://github.com/nuchana/OOP-team-generator"><img src="images/NK-team-demo.png"
                                            class="img-thumbnail" alt="Team Generator App" style= {{ width: "370px", height: "200px" }}></img></a>
                                            <figcaption class="figure-caption">Click image to Team Generator App.</figcaption>

                                </figure>
                        </div>
                        <br></br>

                        <div class="row">
                                <div class="col-sm-2"></div>
                                <figure class="col-md-4">
                                        <a href=" https://superzap-burger.herokuapp.com/burgers"><img src="images/burgerapp.png" class="img-thumbnail"
                                        alt="Team Generator App" style= {{ width: "370px", height: "200px" }}></img></a>
                                        <figcaption class="figure-caption">Click image to Burger App.</figcaption>

                                </figure>

                        </div>


                    </div>
                </div>


            </div>
            

        )
    }
}

export default Portfolio