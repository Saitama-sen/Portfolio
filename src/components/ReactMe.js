import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardMe from "./CardMe";
import hangpic from "../hangmanPic.jpg";
import budgetPic from "../budget.jpg";
import shoppingPic from "../shopPic.png";
import toLi from "../tolis.jpg";

const dataCard = [
  {
    img: hangpic,
    title: "Hangman",
    desc: "A simple Game with Words",
  },
  {
    img: budgetPic,
    title: "Budget",
    desc: "A simple Budget App",
    gitLink: "https://github.com/Saitama-sen/budget-app.git",
  },
  {
    img: shoppingPic,
    title: "Shopping List",
    desc: "A simple Shopping List App",
    gitLink: "https://github.com/Saitama-sen/shopping-list.git",
  },
    {
    img: toLi,
    title: "Shopping List",
    desc: "A simple Todo List App",
    gitLink: "https://github.com/Saitama-sen/todo-List.git",
  },
];

export default function ReactMe() {
  const disabled = true;

  return (
    <>
      <Container className="rMe">
        <Row>
          {dataCard.map((card, i) => {
            return (
              <Col key={i}>
                <CardMe
                  img={card.img}
                  title={card.title}
                  desc={card.desc}
                  gitLink={card.gitLink}
                  disabled={card.title === "Hangman" && disabled}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
