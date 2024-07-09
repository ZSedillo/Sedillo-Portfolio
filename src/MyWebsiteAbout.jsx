import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import './assets/styles/myWebsite.css';
import Cat from './assets/images/download-modified.png';

function MyWebsiteAbout() {
    useEffect(() => {
        var prevScrollpos = window.pageYOffset;

        const handleScroll = () => {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar-drop-animation").style.top = "0";
            } else {
                document.getElementById("navbar-drop-animation").style.top = "-100px";
            }
            prevScrollpos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className="MyWebHeader">
                <div id="navbar-drop-animation">
                    <div className="WebTable table-header">
                        <div className="WebTableRow">
                            <div className="WebTableCell">
                                <img className="WebImage" src={Cat} alt="cat picture" />
                            </div>
                            <div className="WebTableCell navbar-links">
                                <ul className="WebList">
                                    <li className="WebListItem">
                                        <Link className="a-MyWeb" to="#"><span className="current-page">About</span></Link>
                                    </li>
                                    <li className="WebListItem">
                                        <Link className="a-MyWeb" to="/MyWebsiteWork">Work</Link>
                                    </li>
                                    <li className="WebListItem">
                                        <Link className="a-MyWeb" to="/MyWebsiteNoteP">Notes</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-content">
                    <h1 className="MyWebH1">I'm Zandro.</h1>
                    <p style={{ color: "rgb(60, 195, 60)", fontWeight: 800 }}>a web designer.</p>
                </div>
            </header>

            <div className="main">
                <div className="about-me-container">
                    <div className="WebTable" cellSpacing="10">
                        <div className="WebTableRow">
                            <div className="WebTableCell">
                                <img className="WebImage" src={Cat} alt="cat picture" />
                            </div>
                        </div>
                        <div className="WebTableRow">
                            <div className="WebTableCell">
                                <h2 className="MyWebH2">Hi.</h2>
                            </div>
                        </div>
                        <div className="WebTableRow">
                            <div className="WebTableCell">
                                <p className="MyWebP">I'm a web designer/developer in WordPress. I have a passion for earning money through side-hustles in the near future</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-skills">
                    <div className="WebTable">
                        <div className="WebTableRow">
                            <div className="WebTableCell">
                                <h1 className="MyWebH1">What I can do</h1>
                            </div>
                        </div>
                        <div className="WebTableRow">
                            <div className="WebTableCell">
                                <img className="WebImage" src={Cat} alt="cat picture" />
                            </div>
                            <div className="WebTableCell">
                                <h2 className="MyWebH2">Design what you want</h2>
                                <p className="MyWebP">
                                    I can design whatever you need and I promise you will be impressed.
                                </p>
                            </div>
                        </div>
                    </div>

                    <br />
                    <br />

                    <div className="WebTable">
                        <div className="WebTableRow">
                            <div className="WebTableCell">
                                <h2 className="MyWebH2">Develop what you need</h2>
                            </div>
                        </div>
                        <div className="WebTableRow">
                            <div className="WebTableCell">
                                <p className="MyWebP">I am a developer who can create the best e-commerce websites in the market, and I promise you won't be disappointed.</p>
                            </div>
                            <div className="WebTableCell">
                                <img className="WebImage" src={Cat} alt="cat picture" />
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="MyWebHR" />

                <div className="about-me-contact">
                    <h1 className="MyWebH1">I can help.</h1>
                    <h3 className="MyWebH3">I'm currently available for freelance work</h3>
                    <p className="MyWebP">If you have any project that you want to accomplish, <br />then this is the right time to contact me.</p>
                    <div className="message-me">
                        <Link className="a-MyWeb" to="#">
                            <h3 className="message-me-content MyWebH3"> MESSAGE ME</h3>
                        </Link>
                    </div>
                </div>
            </div>

            <footer className="MyWebFooter">
                <div className="footer-content">
                    <ul className="WebList">
                        <li className="WebListItem">dribble</li>
                        <li className="WebListItem">twitter</li>
                        <li className="WebListItem">hire me</li>
                    </ul>
                </div>
                <div style={{ padding: "10px" }}>
                    <p style={{ fontSize: "10px" }}>© 2018 Zandro Sedillo. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

    export default MyWebsiteAbout;
