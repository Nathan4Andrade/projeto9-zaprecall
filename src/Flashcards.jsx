import Card from "./Card";
import cards from "./cards";

export default function Flashcards() {
    
  return (
    <div className="flashcards">
      {cards.map((card, index) => (
        <Card
          key={index}
          index={index}
          question={card.question}
          answer={card.answer}></Card>
      ))}
    </div>
  );
}
