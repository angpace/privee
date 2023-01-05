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
                         <p> "Privée is a platform designed to match clients to private chefs based on their events needs. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                         </p>
                    </div>
                    <div className="about-content" >
                         <EventHeader style={{float: 'center'}} >How to use Privée?</EventHeader>
                         <p> "Its as easy as creating an account and thats it. Post your event and well handle the food- so you can really enjoy. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Let us bring the restaurant to you."
                         </p>
                </div>
                </div>
                <br></br>
                <FounderCard EventHeader={EventHeader}/>
            </div>
    )
}


export default About;