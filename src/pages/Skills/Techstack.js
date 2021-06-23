import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiSqllite,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDjango,
} from "react-icons/di";
import {SiKeras, SiLaravel, SiDotNet, SiSpring, SiMysql, SiPostgresql, SiWoocommerce, SiFlutter ,SiAngular, SiDart, SiPhp, SiCsharp, SiPytorch, SiTensorflow, SiFirebase} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "left", paddingBottom: "50px" }}> 
       <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p id="img-text" className="text-center">Java
        </p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiPhp/>
        <p id="img-text" className="text-center">Php
        </p>
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        </Col>
      <Col xs={4} md={2} className="tech-icons"> 
        <CgCPlusPlus />
        </Col>
      <Col xs={4} md={2} className="tech-icons"> 
        <SiDart />
        <p id="img-text" className="text-center">Dart
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p id="img-text" className="text-center">Javascript
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p id="img-text" className="text-center">Python
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p id="img-text" className="text-center">Node
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p id="img-text" className="text-center">React
        </p>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
        <p id="img-text" className="text-center">Angular
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
        <p id="img-text" className="text-center">Spring
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotNet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
        <p id="img-text" className="text-center">Laravel
        </p>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiWoocommerce />
        <p id="img-text" className="text-center">Woocommerce
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <p id="img-text" className="text-center">Flutter
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <p id="img-text" className="text-center">Pytorch
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <p id="img-text" className="text-center">Tensorflow
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
        <p id="img-text" className="text-center">Keras
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> 
        <p id="img-text" className="text-center">Git
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p id="img-text" className="text-center">Firebase
        </p>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiSqllite />
        <p id="img-text" className="text-center">SQL-Lite
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p id="img-text" className="text-center">Mongo
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p id="img-text" className="text-center">Postgre-SQL
        </p>
      </Col>
      </Row>
  );
}

export default Techstack;
