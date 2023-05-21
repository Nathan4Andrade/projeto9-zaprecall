//import { useState } from 'react'
import styled from 'styled-components';

import logo from "./assets/logo.png"
import seta_play from "./assets/seta_play.png"
import seta_virar from "./assets/seta_virar.png"



function App() {
  const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]

  return (
    <SCPagesize>
      <SCHeader>
        <img src={logo} alt="logo" />
        <h1>ZapRecall</h1>
      </SCHeader>
      <div className="flashcards">
        <SCCard>
          <SCFront>
            <span>Pergunta 1</span>
            <img src={seta_play} alt="play" onClick={() => alert("play")} />
          </SCFront>
        </SCCard>
        <SCCard>
          <SCBack>
            <span>O que é JSX?</span>
            <img src={seta_virar} alt="virar" onClick={() => alert("virar")}/>
          </SCBack>
        </SCCard>
        <SCCard>
          <SCFront>
            <span>Pergunta 1</span>
            <img src={seta_play} alt="play" onClick={() => alert("play")} />
          </SCFront>
        </SCCard>
        <SCCard>
          <SCBack>
            <span>O que é JSX?</span>
            <img src={seta_virar} alt="virar" onClick={() => alert("virar")}/>
          </SCBack>
        </SCCard>
        <SCCard>
          <SCFront>
            <span>Pergunta 1</span>
            <img src={seta_play} alt="play" onClick={() => alert("play")} />
          </SCFront>
        </SCCard>
        <SCCard>
          <SCBack>
            <span>O que é JSX?</span>
            <img src={seta_virar} alt="virar" onClick={() => alert("virar")}/>
          </SCBack>
        </SCCard>
        <SCCard>
          <SCFront>
            <span>Pergunta 1</span>
            <img src={seta_play} alt="play" onClick={() => alert("play")} />
          </SCFront>
        </SCCard>
        <SCCard>
          <SCBack>
            <span>O que é JSX?</span>
            <img src={seta_virar} alt="virar" onClick={() => alert("virar")}/>
          </SCBack>
        </SCCard>
        <SCCard>
          <SCFront>
            <span>Pergunta 1</span>
            <img src={seta_play} alt="play" onClick={() => alert("play")} />
          </SCFront>
        </SCCard>
        <SCCard>
          <SCBack>
            <span>O que é JSX?</span>
            <img src={seta_virar} alt="virar" onClick={() => alert("virar")}/>
          </SCBack>
        </SCCard>
        <SCCard>
          <SCFront>
            <span>Pergunta 1</span>
            <img src={seta_play} alt="play" onClick={() => alert("play")} />
          </SCFront>
        </SCCard>
        <SCCard>
          <SCBack>
            <span>O que é JSX?</span>
            <img src={seta_virar} alt="virar" onClick={() => alert("virar")}/>
          </SCBack>
        </SCCard>
      </div>
      <SCFooter>
        <p>0/4 CONCLUÍDOS</p>
      </SCFooter>
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

const SCHeader = styled.div`
  width: 100%;
  height: 153px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 52px;
    height: 60px;
  }
  h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;

    margin-left: 10px;
  }
`
const SCFlashcards = styled.div`
  display: flex;
`
const SCCard = styled.div`
  width: 300px;

  background: #FFFFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  display: flex;
  justify-content: center;
  
`
const SCFront = styled(SCCard)`
  height: 65px;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px 0 15px;

  span {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
`

const SCBack = styled(SCCard)`
  height: 131px;
  background: #FFFFD5;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 18px 15px 6px 15px;
  span {
    font-family: 'Recursive';
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
`

const SCFooter = styled.div`
    position: fixed;
    left:0px;
    bottom: 0px;
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items:center;
    justify-content: center;
    p {
        justify-content: center;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        text-align: center;
    };
`