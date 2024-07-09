import React from 'react';
import './assets/styles/skill.css';
import checkMark from './assets/images/check.png';

function Skill(){
    return(
        <div className="skill-container">
            {/* <p style={{color:"#d8f3dc",fontSize:"40px",fontWeight:"bold",padding:"20px 0 0 0",margin:"0"}}>Skill</p> */}
            <p style={{color:"#d8f3dc",fontSize:"30px",fontWeight:"bold", paddingTop:"50px",textAlign:"center"}}>Technical Skills</p>
            <div className="skill-list">
                <div className="expert-programming-language">
                <p style={{color:"#40916c",fontSize:"25px",fontWeight:"bold",textAlign:"center"}}>Coding Languages</p>
                    <ul>
                        <li><span><img src={checkMark} alt="check-mark" className='checkMark'/></span>HTML</li>
                        <li><span><img src={checkMark} alt="check-mark" className='checkMark'/></span>CSS</li>
                        <li><span><img src={checkMark} alt="check-mark" className='checkMark'/></span>SASS</li>
                    </ul>
                </div>
                <div className="proficient-programming-language">
                <p style={{color:"#40916c",fontSize:"25px",fontWeight:"bold",textAlign:"center"}}>Programming Languages</p>
                    <ul>
                        <li><span><img src={checkMark} alt="check-mark" className='checkMark'/></span>Python</li>
                        <li><span><img src={checkMark} alt="check-mark" className='checkMark'/></span>JavaScript</li>
                        <li><span><img src={checkMark} alt="check-mark" className='checkMark'/></span>Java</li>
                        <li><span><img src={checkMark} alt="check-mark" className='checkMark'/></span>C#</li>
                        <li><span><img src={checkMark} alt="check-mark" className='checkMark'/></span>R</li>
                        <li><span><img src={checkMark} alt="check-mark" className='checkMark'/></span>PHP</li>
                        <li><span><img src={checkMark} alt="check-mark" className='checkMark'/></span>Lua</li>
                    </ul>
                </div>
                <div className="novice-programming-language">
                <p style={{color:"#40916c",fontSize:"25px",fontWeight:"bold",textAlign:"center"}}>Others</p>
                    <ul>
                        <li><span><img src={checkMark} alt="check-mark" className='checkMark'/></span>MySQL</li>
                        <li><span><img src={checkMark} alt="check-mark" className='checkMark'/></span>Derby</li>
                        <li><span><img src={checkMark} alt="check-mark" className='checkMark'/></span>React</li>
                        <li><span><img src={checkMark} alt="check-mark" className='checkMark'/></span>jQuery</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skill