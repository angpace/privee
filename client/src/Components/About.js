import FounderCard from "./FounderCard";

function About () {

    return (
            <div style={{paddingTop: "40px"}} > 
               <div className="about-container">
                    <div className="about-content">
                         <h1>What is Privée?</h1>
                         <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                         </p>
                    </div>
                    <div className="about-content" >
                         <h1 style={{float: 'center'}} >How to use Privée?</h1>
                         <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                         </p>
                </div>
                </div>
                <br></br>
                <FounderCard/>
            </div>
    )
}


export default About;