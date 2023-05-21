import styled from "styled-components";
import seta_play from "./assets/seta_play.png";
import seta_virar from "./assets/seta_virar.png";
import { useState } from "react";

function playCard() {
  return false;
}
export default function Card(props) {
  const { index, question, answer } = props;
  const [flipped, setFlipped] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  const handleCardClick = () => {
    if (!flipped) {
      setShowQuestion(!showQuestion);
    } else {
      setFlipped(false);
    }
  };

  const handleContentClick = () => {
    setFlipped(true);
    setShowQuestion(!showQuestion);
  };

  const frontCardDiv = (
    <SCFront>
      <span>Pergunta {index + 1}</span>
      <img src={seta_play} alt="play" onClick={handleCardClick} />
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
        <Red onClick={handleCardClick}>Não lembrei</Red>
        <Yellow onClick={handleCardClick}>Quase não lembrei</Yellow>
        <Green onClick={handleCardClick}>Zap!</Green>
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
