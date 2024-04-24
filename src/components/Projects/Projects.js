import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Tic from "../../Assets/Projects/Tic.PNG";
import port from "../../Assets/Projects/port.PNG";
import Sort from "../../Assets/Projects/Sort.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sort}
              isBlog={false}
              title="Sort Visualizer"
              description="In this project, I created a sorting visualization application using Angular that demonstrates the Bubble Sort, Insertion Sort, and Selection Sort algorithms. The application allows users to view how sorting works and visualize the sorting process step-by-step."
              ghLink="https://github.com/Dilshad45333/bubble-sort-visualizer"
              demoLink="https://rococo-brioche-b40e8e.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio"
              description="Developed a responsive and interactive portfolio using React.js to showcase my web development projects and technical skills. The site is designed to display my professional work and experiences, highlighting my proficiency in modern web technologies."
              ghLink="https://github.com/Dilshad45333/Portfolio"
              demoLink="https://dilshad45333-my-portfolio.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tic}
              isBlog={false}
              title="Tic Tac Toe"
              description="Developed an interactive tic-tac-toe game using React.js, demonstrating proficiency in using state management and rendering techniques to create a responsive user interface. This project showcases my ability to implement classic games with a modern web technology stack."
              ghLink="https://github.com/Dilshad45333/tic-tac-toe"
              demoLink="https://gorgeous-muffin-045656.netlify.app"              
            />
          </Col>

          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
