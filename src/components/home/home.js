import { NavLink } from "react-router-dom";
import "./home.css";
import sampleImage from "./images/Picture1.png"
import { useState } from "react";
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

const Home = () => {

    const [visible,setVisible] = useState(false);

    const handleVisibility = ()=>{
        
    }

    window.onload = () => {
        console.log(document.getElementById("clickable1").classList.contains("clickable"));
        document.getElementById("clickable1").addEventListener("click", () => {
            if (document.getElementById("clickable1").classList.contains("clickable")) {
                if (document.getElementById("frontend-boxes").classList.contains("not_visible")) {
                    document.getElementById("frontend-boxes").classList.remove("not_visible");
                    document.getElementById("backend-boxes").classList.add("not_visible");
                }

            }
            else {
                document.getElementById("clickable1").classList.add("clickable");
                document.getElementById("frontend-boxes").classList.remove("not_visible");

                document.getElementById("backend-boxes").classList.add("not_visible");
                document.getElementById("clickable2").classList.remove("clickable");
            }
        })
        document.getElementById("clickable2").addEventListener("click", () => {
            if (document.getElementById("clickable2").classList.contains("clickable")) {

            }
            else {
                document.getElementById("clickable1").classList.remove("clickable");
                document.getElementById("frontend-boxes").classList.add("not_visible");

                document.getElementById("backend-boxes").classList.remove("not_visible");
                document.getElementById("clickable2").classList.add("clickable");
            }
        })



    }


    return <div className="homePage">
        <nav className="homePageNavbar">
            <div className="left">
                <h1>WebDev</h1>
            </div>
            <div className="right">
                <NavLink to="/login"><button className="btn1">Login</button></NavLink>
                <NavLink to="/signin"><button className="btn1 btn2">Sign Up</button></NavLink>
            </div>
        </nav>
        <div className="homePageContent">
            <div className="left_section a1">
                <img src={sampleImage} />
            </div>
            <div className="right_section a1 homePageIntro-Text">
                <h2 style={{ color: "red" }}>
                    Skills used in this website
                </h2>

                <div className="skillBox">
                    <p className="skillTag clickable " id="clickable1">Frontend Skills</p>
                    <p className="skillTag " id="clickable2" >Backend Skills</p>
                </div>
                <hr className="textDivider"></hr>

                <div id="frontend-boxes"  >
                    <div className="html s-box">
                        <div className="s-box-inner">
                            <div className="s-box-front">
                                <HtmlIcon sx={{ color: "red", transform: "scale(2)", margin: "30px" }} />
                            </div>
                            <div className="s-box-back">
                                <p style={{ fontWeight: "bolder" }}>Click Me!!</p>
                            </div>
                        </div>
                    </div>
                    <div className="css s-box">
                        <div className="s-box-inner" >
                            <div className="s-box-front">
                                <CssIcon sx={{ color: "red", transform: "scale(2)", margin: "30px" }} />

                            </div>
                            <div className="s-box-back" style={{alignItems:"center"}}>
                                <p style={{ fontWeight: "bolder" }}>Click Me!!</p>


                            </div>
                        </div>
                    </div>
                    <div className="javascript s-box">
                        <div className="s-box-inner">
                            <div className="s-box-front">
                                <JavascriptIcon sx={{ color: "red", transform: "scale(2)", margin: "30px" }} />
                            </div>
                            <div className="s-box-back">
                                <p style={{ fontWeight: "bolder" }}>Click Me!!</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div id="backend-boxes" className="not_visible">
                    <div className="MongoDB s-box">
                        <div className="s-box-inner">
                            <div className="s-box-front">
                                {/* <HtmlIcon sx={{color:"red" , transform:"scale(4)" , margin:"30px"}}/> */}
                            </div>
                            <div className="s-box-back">
                                <p style={{ fontWeight: "bolder" }}>Click Me!!</p>
                            </div>
                        </div>
                    </div>
                    <div className="ExpressJS s-box">
                        <div className="s-box-inner">
                            <div className="s-box-front">
                                {/* <CssIcon  sx={{color:"red" , transform:"scale(4)" , margin:"30px"}}/> */}

                            </div>
                            <div className="s-box-back">
                                <p style={{ fontWeight: "bolder" }}>Click Me!!</p>


                            </div>
                        </div>
                    </div>
                    <div className="NodeJS s-box">
                        <div className="s-box-inner">
                            <div className="s-box-front">
                                {/* <JavascriptIcon sx={{color:"red" , transform:"scale(4)" , margin:"30px"}}/> */}
                            </div>
                            <div className="s-box-back">
                                <p style={{ fontWeight: "bolder" }}>Click Me!!</p>

                            </div>
                        </div>
                    </div>
                    <div className="NodeJS s-box">
                        <div className="s-box-inner">
                            <div className="s-box-front">
                                {/* <JavascriptIcon sx={{color:"red" , transform:"scale(4)" , margin:"30px"}}/> */}
                            </div>
                            <div className="s-box-back">
                                <p style={{ fontWeight: "bolder" }}>Click Me!!</p>

                            </div>
                        </div>
                    </div>
                </div>
                
                <button className="button a1" type="button">
                    <span className="button__text">PDFs</span>
                    <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                </button>
                


                {/* <p className="heading">
                    This is a sample website containing Ten pdfs and its objective is to let users download two pdfs for free and for downloading more they have to make payment first and then they can download all ten pdfs .
                </p> */}


            </div>
        </div>

    </div>;
}

export default Home;