import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dilshad Khan </span>
            from <span className="purple"> Indore,Madhya Pradesh, India.</span>
            <br />
            I have one year Experience in Angular.
            <br />
            I have completed B.Tech in Computer science and Information Technology at IPS Academy,Indore.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Newspaper
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dilshad</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
