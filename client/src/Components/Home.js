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
              <img src="https://www.washingtonian.com/wp-content/uploads/2021/04/171101_ilili_Menu-59.jpg" alt="straw"/>
              </div>
          <div >
          <img src="https://livunltd.com/wp-content/uploads/2022/05/resident.png" alt="straw"/>
              </div>
          <div >
                  <img src="https://hips.hearstapps.com/esquire/assets/17/20/1495206144-es-051917-is-noma-worth-it-a.jpg" alt="straw"/>
              </div>
          <div >
                  <img src="https://static.dezeen.com/uploads/2018/09/noma-big-architecture-interiors-restaurant-copenhagen-denmark_dezeen_sq.jpg" alt="straw"/>
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