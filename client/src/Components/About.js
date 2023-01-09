import FounderCard from "./FounderCard";
import styled from "styled-components";

const EventHeader = styled.h3`
padding-top: 30px;
padding-left: 30px;
padding-bottom: 30px;
position: relative;
float: center;
font-size:35px; text-transform:uppercase; color:#222; letter-spacing:1px;
font-family:"Playfair Display", serif; font-weight:400;
color: rgb(128, 106, 106);

`

function About () {

    return (
            <div style={{paddingTop: "40px"}} > 
             {/* <img src={logo} style={{height: "20%", width: "30%"}}></img> */}
               <div className="about-container">
                    <div className="about-content">
                         <EventHeader>What is Privée?</EventHeader>
                         <p> Privée is a platform designed to match clients to private chefs based on their events needs. Hosting events are hard enough without dealing with the menu- so leave it to us.  Let us bring the restaurant to you.
                         </p>
                    </div>
                    <div className="about-content" >
                         <EventHeader style={{float: 'center'}} >How to use Privée?</EventHeader>
                         <p> Its as easy as creating an account. Follow the prompts on our sign up page to choose your account type, fill out your details accordingly. Clients can post and send requests to Chefs based on their matches. As a Chef you can accept or request events based on your schedule. Now that's what we call a win-win. 
                    
                         </p>
                </div>
                </div>
                <br></br>
                <FounderCard EventHeader={EventHeader}/>
            </div>
    )
}


export default About;