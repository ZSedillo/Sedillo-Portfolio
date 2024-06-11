import React from 'react'
import './assets/styles/skill.css'

function Skill(){
    return(
        <div className="skill-container">
            <p style={{color:"#d8f3dc",fontSize:"40px",fontWeight:"bold",padding:"20px 0 0 0",margin:"0"}}>Skill</p>
            <p style={{color:"#d8f3dc",fontSize:"30px",fontWeight:"bold"}}>Programming Languages</p>
            <div className="skill-list">
                <div className="expert-programming-language">
                <p style={{color:"#40916c",fontSize:"25px",fontWeight:"bold"}}>Expert</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>MySQL</li>
                        <li>Derby</li>
                    </ul>
                </div>
                <div className="proficient-programming-language">
                <p style={{color:"#40916c",fontSize:"25px",fontWeight:"bold"}}>Proficient</p>
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>C#</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className="novice-programming-language">
                <p style={{color:"#40916c",fontSize:"25px",fontWeight:"bold"}}>Novice</p>
                    <ul>
                        <li>ASM</li>
                        <li>SASS</li>
                        <li>JQuery</li>
                        <li>PHP</li>
                        <li>Lua</li>
                        <li>R</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skill