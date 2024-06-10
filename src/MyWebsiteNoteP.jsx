import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import './assets/styles/myWebsite.css';
import Cat from './assets/images/download-modified.png';

function MyWebsiteNoteP() {
    useEffect(() => {
        let prevScrollpos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
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
                                        <Link className="a-MyWeb" to="/MyWebsite">About</Link>
                                    </li>
                                    <li className="WebListItem">
                                        <Link className="a-MyWeb" to="/MyWebsiteWork">Work</Link>
                                    </li>
                                    <li className="WebListItem">
                                        <Link className="a-MyWeb" to="#"><span className="current-page">Notes</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-content">
                    <h1 className="MyWebH1">Notes</h1>
                </div>
            </header>

            <main>
                <h1 className="MyWebH1" style={{ lineHeight: "400px" }}>There is nothing in this page yet!</h1>

                <hr className="MyWebHR" />
                <div className="about-me-contact">
                    <h1 className="MyWebH1">I can help.</h1>
                    <h3 className="MyWebH3">I'm currently available for freelance work</h3>
                    <p className="MyWebP">If you have any project that you want to accomplish in mind. <br />Then this is the right time to contact me</p>
                    <div className="message-me">
                        <Link className="a-MyWeb" to="#">
                            <h3 className="message-me-content MyWebH3"> MESSAGE ME</h3>
                        </Link>
                    </div>
                </div>
            </main>

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

export default MyWebsiteNoteP;
