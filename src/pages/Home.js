import React, { Component } from 'react';
import './Home.css';


class Home extends Component {
    render() {
        return (
            <div>
                <div className="team-boxed">
                    <div className="container col-lg-12">
                        <div className="intro">
                            <h2 className="text-center">About me</h2>
                            <p className="text-center">Likable and dedicated global marketer turning to a profession web developer with over 7 years of experience in a fast-paced company.
                        Look for a career shift with eagerness to learn and offer superb analytical and computer skills to help your company grow its client base.</p>
                        </div>

                        <div className="row people">
                            <div className="col-md-6 col-lg-4 item"></div>

                            <div className="col-md-6 col-lg-4 item">
                                <div className="box">
                                    <div id="profile">
                                        <img className="rounded-circle" alt="headshot" src="./public/NK photo.png"></img>

                                    </div>
                                    <div id="text1">
                                        <h3 className="name">Nuchana Kittitrakul</h3>
                                        <p className="title">A full-stack developer</p>
                                        <p className="description">7-year background in global brand development and MBA degree is eager
                                        to make a career shift in digital and coding industry.
                                        Looking for challenging roles in web and mobile sectors to enhance my skills and
                                        provide my services to add value to the products of the organization. Highly motivated self
                                        learner with a passion for learning and keeping informed of the latest in technology </p>
                                        
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 item"></div>

                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
export default Home; 