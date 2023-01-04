import Strawberry from "./Strawberry.jpeg"
import logo from './logo.png'

function Home (){


    return (
        <div className="CSSgal">
          <img alt="logo"src={logo} style={{height: "20%", width: "30%"}}></img>
        <s id="s1"></s> 
        <s id="s2"></s>
        <s id="s3"></s>
        <s id="s4"></s>
      
        <div className="slider">
          <div >
            <img src={Strawberry} alt="straw"/>
              </div>
          <div >
                  <img src={Strawberry} alt="straw"/>
              </div>
          <div >
                  <img src="https://images.getbento.com/accounts/827ee422cf171aa8c5ce37dfb41ba7cd/media/images/61406210726_EMP_Interiors_22121_1.jpg?w=1200&fit=crop&auto=compress,format&h=600" alt="straw"/>
              </div>
              <div >
                  <img src="https://images.getbento.com/accounts/827ee422cf171aa8c5ce37dfb41ba7cd/media/images/61406210726_EMP_Interiors_22121_1.jpg?w=1200&fit=crop&auto=compress,format&h=600" alt="straw"/>
              </div>
        </div>
        
        <div className="prevNext">
          <div><a href="#s4"> </a> <a href="#s2"> </a></div>
          <div><a href="#s1"> </a> <a href="#s3"> </a></div>
          <div><a href="#s2"> </a> <a href="#s4"> </a></div>
          <div><a href="#s3"> </a> <a href="#s1"> </a></div>
        </div>
      
        <div className="bullets">
          <a href="#s1">1</a>
          <a href="#s2">2</a>
          <a href="#s3">3</a>
          <a href="#s4">4</a>
        </div>
      
      </div>
    )
}

export default Home;