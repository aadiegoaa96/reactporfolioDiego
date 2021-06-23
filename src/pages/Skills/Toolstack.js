import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiPostman,
  SiHeroku, 
  SiArduino, 
  SiWordpress,
  SiWindows,
  SiMathworks,
  SiShopify,
  SiRaspberrypi,
  SiAndroidstudio,
  SiUnity,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <p id="img-text" className="text-center">Windows
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p id="img-text" className="text-center">Linux
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMathworks /> <p id="img-text" className="text-center">Matlab
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <p id="img-text" className="text-center">Android Studio
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p id="img-text" className="text-center">Visual Studio Code
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
        <p id="img-text" className="text-center">Unity Game Engine
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <p id="img-text" className="text-center">Jupyter Notebook
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
        <p id="img-text" className="text-center">Arduino
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRaspberrypi />
        <p id="img-text" className="text-center">Raspberry Pi
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p id="img-text" className="text-center">Postman
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku /> 
        <p id="img-text" className="text-center">Heroku
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
        <p id="img-text" className="text-center">Wordpress
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiShopify />
        <p id="img-text" className="text-center">Shopify
        </p>
      </Col>
    </Row>
  );
}

export default Toolstack;
