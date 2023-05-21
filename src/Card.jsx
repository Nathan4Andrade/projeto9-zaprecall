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
      setCounter(newCounter);
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

  const frontCardDiv = (
    <SCFront>
      <span style={{ color: colorFont, textDecorationLine: textDecoration }}>
        Pergunta {index + 1}
      </span>
      <img
        src={isAnswered ? result : seta_play}
        alt="play"
        onClick={handleCardClick}
      />
    </SCFront>
  );
  const questionDiv = (
    <SCQuestion>
      <span>{question}</span>
      <img src={seta_virar} alt="virar" onClick={handleContentClick} />
    </SCQuestion>
  );
  const answerDiv = (
    <SCAnswer>
      <span>{answer}</span>
      <Btns>
        <Red onClick={handleRed}>Não lembrei</Red>
        <Yellow onClick={handleYellow}>Quase não lembrei</Yellow>
        <Green onClick={handleGreen}>Zap!</Green>
      </Btns>
    </SCAnswer>
  );

  return (
    <SCCard>
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
