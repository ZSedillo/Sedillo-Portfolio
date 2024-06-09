import React from 'react'
import './assets/styles/about.css'
import myProfilePicture from './assets/images/profile-picture.jpg'

function About(){
    return(
        <div className="about-container">
            <div className="about-content-left">
                <img style={{width: 500, height: 600}} src={myProfilePicture} alt="myProfilePicture" />
            </div>
            <div className="about-content-right">
                <p style={{color:"#40916c",fontSize:"30px",fontWeight:"bold"}}>About Me</p>
                <p style={{color:"#000"}}>A pioneering design framework seamlessly integrates aesthetics and functionality, 
                transforming user experience on web pages</p>

                <div className="information-container">
                    <div className="tags">
                        <ul>
                            <li>Name: </li>
                            <li>Date of Birth: </li>
                            <li>Address: </li>
                            <li>Email: </li>
                            <li>Phone: </li>
                        </ul>
                    </div>
                    <div className="tags-info">
                        <ul>
                            <li>Zandro Miguel B. Sedillo</li>
                            <li>December 26, 2003</li>
                            <li>Cubao, Quezon City, Philippines</li>
                            <li>sedillozandro720@gmail.com</li>
                            <li>+63 09770311641</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About