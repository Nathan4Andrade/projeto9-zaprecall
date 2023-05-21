/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState } from "react";

import seta_play from "./assets/seta_play.png";
import seta_virar from "./assets/seta_virar.png";
import icone_certo from "./assets/icone_certo.png";
import icone_erro from "./assets/icone_erro.png";
import icone_quase from "./assets/icone_quase.png";

export default function Card(props) {
  const { index, question, answer, counter, setCounter } = props;
  const [flipped, setFlipped] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [result, setResult] = useState(icone_certo);
  const [colorFont, setColorFont] = useState("black");
  const [textDecoration, setTextDecoration] = useState("none");

  function handleCardClick() {
    if (!flipped && !isAnswered) {
      setShowQuestion(!showQuestion);
      setIsAnswered(!isAnswered);
    } else {
      setFlipped(false);
      let newCounter = counter + 1;

      newCounter <= 8 ? setCounter(newCounter) : setCounter(counter);
      setTextDecoration("line-through");
    }
  }

  function handleRed() {
    handleCardClick();
    setResult(icone_erro);
    setColorFont("#ff3030");
  }
  function handleGreen() {
    handleCardClick();
    setResult(icone_certo);
    setColorFont("#2fbe34");
  }
  function handleYellow() {
    handleCardClick();
    setResult(icone_quase);
    setColorFont("#ff922e");
  }

  const handleContentClick = () => {
    setFlipped(true);
    setShowQuestion(!showQuestion);
  };

  function icon() {
    if (!isAnswered) {
      return (
        <img
          src={seta_play}
          alt="play"
          onClick={handleCardClick}
          data-test="play-btn"
        />
      );
    }
    if (isAnswered) {
      if (result == icone_certo) {
        return (
          <img
            src={icone_certo}
            alt="play"
            onClick={handleCardClick}
            data-test="zap-icon"
          />
        );
      } else if (result == icone_quase) {
        return (
          <img
            src={icone_quase}
            alt="play"
            onClick={handleCardClick}
            data-test="partial-icon"
          />
        );
      } else if (result == icone_erro) {
        return (
          <img
            src={icone_erro}
            alt="play"
            onClick={handleCardClick}
            data-test="no-icon"
          />
        );
      }
    }
  }

  const frontCardDiv = (
    <SCFront>
      <span
        style={{ color: colorFont, textDecorationLine: textDecoration }}
        data-test="flashcard-text">
        Pergunta {index + 1}
      </span>
      {icon()}
    </SCFront>
  );
  const questionDiv = (
    <SCQuestion>
      <span data-test="flashcard-text">{question}</span>
      <img
        src={seta_virar}
        alt="virar"
        onClick={handleContentClick}
        data-test="turn-btn"
      />
    </SCQuestion>
  );
  const answerDiv = (
    <SCAnswer>
      <span data-test="flashcard-text">{answer}</span>
      <Btns>
        <Red onClick={handleRed} data-test="no-btn">
          Não lembrei
        </Red>
        <Yellow onClick={handleYellow} data-test="partial-btn">
          Quase não lembrei
        </Yellow>
        <Green onClick={handleGreen} data-test="zap-btn">
          Zap!
        </Green>
      </Btns>
    </SCAnswer>
  );

  return (
    <SCCard data-test="flashcard">
      {flipped ? answerDiv : showQuestion ? questionDiv : frontCardDiv}
    </SCCard>
  );
}
const Btns = styled.div`
  display: flex;
`;

const Response = styled.button`
  width: 85.17px;
  height: 37.17px;
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  border: none;
  margin: 0 4px;
`;

const Red = styled(Response)`
  background: #ff3030;
`;
const Yellow = styled(Response)`
  background: #ff922e;
`;
const Green = styled(Response)`
  background: #2fbe34;
`;
const SCCard = styled.div`
  width: 300px;

  border-radius: 5px;
  margin-bottom: 12.5px;

  display: flex;
  justify-content: center;
`;
const SCFront = styled(SCCard)`
  height: 65px;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  justify-content: space-between;
  padding: 0 22px 0 15px;

  span {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: black;
    text-decoration-line: none;
  }
`;

const SCBack = styled(SCCard)`
  background: #ffffd5;
  flex-direction: column;
  transition: transform 0.3s;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  padding: 18px 15px 6px 15px;
  span {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    color: #333333;
  }
  img {
    padding-left: 254px;
  }
`;

const SCQuestion = styled(SCBack)`
  height: 131px;
  justify-content: space-between;
  align-items: flex-start;
`;

const SCAnswer = styled(SCBack)`
  align-items: flex-start;
  div {
    padding-top: 22px;
  }
`;
