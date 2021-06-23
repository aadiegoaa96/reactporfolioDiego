import React from "react";
import "./Skills.css";
import { Container, Row, Col } from "react-bootstrap";

import Toolstack from "./Toolstack";
import Particle from "./Particle";
import Techstack from "./Techstack";

const Skills = (props) => {    

    return (
      <Container fluid className="tech-icons">
        
      <Container>
      <Row style={{ justifyContent: "center", padding: "5px" }}>
 
      <div className="skillsCard col-sm-4 card bg-light card-border mb-5" >
            <h4 className="card-header">TOOLS I USE</h4>
            
            
            <div className="row card-body">
              <h1 className="project-heading">
              <Toolstack />
              </h1>
            </div>
        </div>

 
        <div className="skillsCard col-sm-4 card bg-light card-border mb-5" >
            <h4 className="card-header">PROFESSIONAL SKILLSET</h4>
            
            
            <div className="row card-body">
              <h1 className="project-heading">
              <Techstack />
              </h1>
            </div>
        </div>
        
       

      </Row> 
 

       </Container>
     </Container>
    );
}

export default Skills; 