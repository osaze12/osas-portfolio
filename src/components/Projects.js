import React from 'react';
import './Projects.css';
import Bank from './source/Bank.png';
import PaperDesign from './source/paper-design.jpeg';
import StoreApp from './source/storeApp.png';
import Dashboard from './source/dashboard.png';

import Contact from './Contact';

function Projects
() {
    return (
        <>
        <div className="projects">
            <div className="projects_inner">
                   <div className="storeApp">
                       <h1>A Wine Store App</h1>
                       <div className="storeApp__inner">
                            <h3>Conception</h3>
                            <img  className="paperDesign" src={PaperDesign} alt="paper-concept"/>
                            <h3>Actualization</h3>
                            <img src={StoreApp} alt="storeApp"/>
                            <p>I built a Wine Store App that allows customers add items to cart,
                                 customers can then click on the cart icon to checkout and pay.<br/>
                                When that customer adds item to the cart, the item is saved to his/her computer memory using
                                the localstorage api, so that items are not lost when the customer refreshes
                                 the page or comes back later to the website.
                                 Here's the Link<a className="linkTo" target="_blank" href="https://osas-store.netlify.app/">-- GO TO SITE</a>
                            </p>
                        </div>
                   </div>
                   <div className="dashboard-page">
                        <h1>A DashBoard Page</h1>
                        <img src={Dashboard} ></img>
                        <p>A dashboard page that fetches data from https://randomuser.me/, it always 
                            return different users everytime,
                              Here's the Link <a className="linkTo" target="_blank" href="https://osas-dashboard.netlify.app/">-- GO TO SITE</a></p>
                    </div>

                    <div className="Bank">
                        <h1>A small bank App</h1>
                        <img src={Bank} ></img>
                        <p>I was inspired to build a small React Js bank app, that allows the user to credit,
                             withdraw and close an account,
                              I used Redux for communicating amount information in RealTime.
                              Here's the Link <a className="linkTo" target="_blank" href="https://osas-bank.netlify.app/">-- GO TO SITE</a></p>
                    </div>
            </div>
        </div>
        <Contact />
        </>
    )
}

export default Projects

