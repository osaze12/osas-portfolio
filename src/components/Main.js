import React from 'react';
import '../components/Main.css';
import my_photo from '../components/source/mypics.png';
import {NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function Main() {
    return (
        <>
            <div className='co'>
                <div className="side">
                    <h1>I'm Agbi <span className="spanName">Osaze</span> </h1>
                    <p>I am a React-Js front-end Developer, from Nigeria. I'm always
                    looking for projects for which I can help find solutions.</p>
                    <button><NavLink activeClassName="active" to="/contact">Contact Me</NavLink></button>

                </div>
                <div className="imag">
                    <img src={my_photo}/>
                </div>
            </div>
            
        </>
    )
}

export default Main
