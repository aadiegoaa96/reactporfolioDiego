import React from "react";
import "./Home.css";
import { ImPointRight } from "react-icons/im";

const Home = (props) => {
    return (
        <main className="container-fluid justify-content-start d-block">
               <p style={{ textAlign: "justify" }}>
            <span className="purple">Hi Everyone, I am Diego Bermúdez from Veracruz, México. I am a Full Stack Developerand and I recently studied mechatronic engineering. Apart from coding, some other activities that I love to do!. Playing Games Writting Tech Blogs Travelling</span>
            <span className="purple"> </span>
            
          </p>


          <p style={{ marginBlockEnd: 0, color: "rgb(1000 1000 1000)" }}>
            "you don't have to get there first, you just have to know how to get there!"{" "}
          </p>
          <footer className="blockquote-footer">Diego</footer>
    
        </main >
    )
}

export default Home; 