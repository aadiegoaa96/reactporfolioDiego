import "./Portfolio.css"

import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Skills/Particle";

import leaf from "../../assets/Projects/speechtotext.jpeg";
import emotion from "../../assets/Projects/articulo72.jpg";
import editor from "../../assets/Projects/bluetoothlowenergy.jpeg";
import chatify from "../../assets/Projects/bazardelibros.png";
import suicide from "../../assets/Projects/realtimemonitoring.jpg";

const Portfolio = (props) => {

  return (
    <Container fluid className="project-section">
          
        <p style={{ color: "white" }}>
        My recent works. Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bazar de libros mx"
              description="Ecommerce bookstore with paypal payments writen in PHP."
              link="https://bazardelibros.mx"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="REAL-TIME MONITORING FOR INDUSTRIAL VALVES"
              description="Data acquisition and filtering of SPI signal from a Rosemount temperature sensor and pressure transmitter with HART communication protocol."
              link="https://github.com/aadiegoaa96/C-SHARP-.NET"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="PYTHON BERT (Bidirectional Encoder Representations from Transformers)"
              description="This project seeks to create a deep learning model with fine tuning to create an artificial intelligence that can tell us if any situation is legal in the traffic law of the state of Veracruz in Mexico."
              link="https://github.com/aadiegoaa96/NLP-con-BERT"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Speech to text recognition"
              description="An application written in Dart to recognize speech in a text format automatically."
              link="https://github.com/aadiegoaa96/Traductor-voz-a-texto-Flutter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Bluetooth Low Energy Android"
              description="An Android application written in Java to send characters through the Serial port through buttons; making use of bluetooth 4.0 technology (LOW ENERGY). Includes example script to receive with Arduino board, compatible with the HM-10 module."
              link="https://github.com/aadiegoaa96/Send-Byte-To-Bluetooth-Low-Energy"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
        </Row>
    
    </Container>
  );
}

export default Portfolio; 