import styled from "styled-components";
import seta_play from "./assets/seta_play.png"
import seta_virar from "./assets/seta_virar.png"

export default function Flashcards(){
    return(
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
    )
}


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