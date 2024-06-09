import React from 'react'
import './assets/styles/contact.css'
import myPhoneNumber from './assets/images/mobile.png'
import myEmail from './assets/images/communication.png'
import myGitHub from './assets/images/github.png'
import myDiscord from './assets/images/discord.png'


function Contact(){
    return(
        <div className="contacts-container">
            <p style={{color:"#40916c",fontSize:"40px",fontWeight:"bold",textAlign:"center"}}>Contact Me</p>
            <p style={{color:"black",padding:"0 0 50px"}}>
                In the age of technology, contacting someone is not simply a message; it is intelligent, integrated, and safe. 
                Electronic communication makes us connected, making every contact look natural and active</p>
            <div className="contacts-list">

                <div className="contacts-option">
                    <div>
                        <img style={{width:"60px",height:"60px"}} src={myPhoneNumber} alt="PhoneNumber" />
                    </div>
                    <div>
                        <h4>Contact Number</h4>
                    </div>
                    <div>
                        <p>+63 09770311641</p>
                    </div>
                </div>

                <a href="/email" className="no-style-link">
                <div className="contacts-option">
                    <div>
                        <img style={{width:"60px",height:"60px"}} src={myEmail} alt="Email" />
                    </div>
                    <div>
                        <h4>Email Address</h4>
                    </div>
                    <div>
                        <p>sedillozandro720@gmail.com</p>
                    </div>
                </div>
                </a>

                <a href="https://github.com/ZSedillo" className="no-style-link">
                <div className="contacts-option">
                        <div>
                            <img style={{width:"60px",height:"60px"}} src={myGitHub} alt="GitHub" />
                        </div>
                        <div>
                            <h4>GitHub</h4>
                        </div>
                        <div>
                            <p>https://github.com/ZSedillo</p>
                        </div>
                </div>
                </a>
                <a href="https://discord.com/" className="no-style-link">
                <div className="contacts-option">
                    <div>
                        <img style={{width:"60px",height:"60px"}} src={myDiscord} alt="Discord" />
                    </div>
                    <div>
                        <h4>Discord</h4>
                    </div>
                    <div>
                        <p>@spag_1234</p>
                    </div>
                </div>
                </a>
            </div>
            
        </div>
    )
}

export default Contact