import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardMe from "./CardMe";
import breakPic from "../breakout.png";
import doodlePic from "../doodle.jpg";
import snakePic from "../snake.png";

const dataCard = [
  {
    img: breakPic,
    title: "BreakOut Game",
  },
  {
    img: doodlePic,
    title: "Doodle Jump Game",
  },
  {
    img: snakePic,
    title: "Snake Game",
    gitLink: "https://github.com/Saitama-sen/snake-game.git",
  },
];

export default function JavascriptMe() {
  const disabled = true;
  return (
    <Container className="jsMe">
      <Row>
        {dataCard.map((card, i) => {
          return (
            <Col>
              <CardMe
                img={card.img}
                title={card.title}
                gitLink={card.gitLink}
                disabled={
                  card.title === "Doodle Jump Game" ||
                  (card.img === breakPic && disabled)
                }
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
