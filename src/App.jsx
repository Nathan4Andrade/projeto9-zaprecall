//import { useState } from 'react'
import styled from "styled-components";
import cards from "./cards";
import { useState } from "react";

import Header from "./Header";
import Flashcards from "./Flashcards";
import Counter from "./Counter";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <SCPagesize>
      <Header />
      <Flashcards counter={counter} setCounter={setCounter} />
      <Counter counter={counter} />
    </SCPagesize>
  );
}

export default App;

const SCPagesize = styled.div`
  height: 100%;
  background: #fb6b6b;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
