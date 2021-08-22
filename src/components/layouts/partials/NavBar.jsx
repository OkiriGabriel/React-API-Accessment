import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <>
             <header id="header" className="header header-sticky">
                <div className="">
                
                    <div className="navigation bg-white">
                        <div className="container-fluid">
                        <nav className="main-nav navbar navbar-right navbar-expand-md">
                        <Link to="/" className="navbar-brand logo" href="">
                          {/* <img src="images/assets/logo.svg" alt="logo" /> */}
                          <h1 className="mrgb0">LOGO</h1>
                        </Link>

                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-collapse">
                            <span className="menu_toggle">
                            <span className="hamburger">
                                <span />
                                <span />
                                <span />
                            </span>
                            <span className="hamburger-cross">
                                <span />
                                <span />
                            </span>
                            </span>
                        </button>
                        
                        <div id="navbar-collapse" className="navbar-collapse collapse">
                            <div className="orientation">
                                 {/* left */}
                                <ul className="nav navbar-nav pdl2">
                                    <li className="nav-item"><Link className="nav-link" to="">Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="">Contact</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="">FAQs</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="">Services</Link></li>

                                </ul>
                                {/* right */}
                                <ul className="nav navbar-nav ml-auto">
                                    <li className="nav-item"><Link to="/signin" className="nav-link">Business</Link></li>
                                    <li className="nav-item"><Link to="/signin" className="nav-link">Enterprise</Link></li>
                                    <li className="nav-item last"><Link to="/" className="btn-signup bg-mineshaft onmineshaft">Get Started</Link></li>
                                </ul>
                            </div>
                        </div>
                        </nav>
                    </div>
                    </div>
                
                </div>
            </header>
           
        </>
    )

}

export default NavBar;