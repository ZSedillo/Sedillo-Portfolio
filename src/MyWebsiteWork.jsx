import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import './assets/styles/myWebsite.css';
import Cat from './assets/images/download-modified.png';

function MyWebsiteWork() {
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
                                        <Link className="a-MyWeb" to="/MyWebsite">About</Link>
                                    </li>
                                    <li className="WebListItem">
                                        <Link className="a-MyWeb" to="#"><span className="current-page">Work</span></Link>
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
                    <h1 className="MyWebH1">Work</h1>
                </div>
            </header>

            <main>
                <h2 className="MyWebH2">Projects</h2>
                <p className="MyWebP">While I currently have no professional work experience, I am eager and willing to start. I have been actively involved in several personal projects and freelance work. Here are a few highlights:</p>
                
                <div className="project">
                    <h3 className="MyWebH3" style={{margin:"25px 38%",width:"25%"}}>Project Name 1</h3>
                    <p className="MyWebP">Developed a dynamic portfolio website using HTML, CSS, and JavaScript. This project enhanced my skills in front-end development and responsive design.</p>
                </div>
                
                <div className="project">
                    <h3 className="MyWebH3" style={{margin:"25px 38%",width:"25%"}}>Project Name 2</h3>
                    <p className="MyWebP">Created an e-commerce platform with WordPress and WooCommerce. This project allowed me to gain experience in content management systems and online store functionalities.</p>
                </div>
                
                <div className="project">
                    <h3 className="MyWebH3" style={{margin:"25px 38%",width:"25%"}}>Freelance Project</h3>
                    <p className="MyWebP">Worked on a freelance project for a client, developing a custom web application with React and Node.js. The project involved user authentication, real-time data updates, and a RESTful API.</p>
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

export default MyWebsiteWork;
