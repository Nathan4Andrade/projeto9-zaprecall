/* eslint-disable react/prop-types */
import Card from "./Card";
import cards from "./cards";
import styled from "styled-components";

export default function Flashcards(props) {
  const { counter, setCounter } = props;

  return (
    <SCFlashcards>
      {cards.map((card, index) => (
        <Card
          key={index}
          index={index}
          question={card.question}
          answer={card.answer}
          counter={counter}
          setCounter={setCounter}></Card>
      ))}
    </SCFlashcards>
  );
}

const SCFlashcards = styled.div`
  margin-bottom: 70px;
`;
