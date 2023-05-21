//import { useState } from 'react'
import styled from 'styled-components';
import cards from './cards'


import Header from './Header';
import Flashcards from './Flashcards';
import Counter from './Counter';


function App() {
  

  return (
    <SCPagesize>
      <Header />
      <Flashcards />
      <Counter />
    </SCPagesize>
  )
}

export default App

const SCPagesize = styled.div`
  height: 100%;
  background: #FB6B6B;
  border: 1px solid #DBDBDB;
  display:flex;
  flex-direction: column ;
  align-items: center;
`
