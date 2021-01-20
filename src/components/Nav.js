import React from 'react';
import {NavLink, Link  } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <>
          <header>
                <div className="brand">
                    <p> <Link to="/">Osas</Link></p>
                </div>
              
                <div className="navigation">
                    <ul>
                        <li><NavLink activeClassName="active" to="/projects">Projects</NavLink></li>
                        <li><NavLink activeClassName="active" to="/contact">Contact Me</NavLink></li>
                    </ul>
                  
                </div> 
          </header>
            
        </>
    )
}

export default Nav
