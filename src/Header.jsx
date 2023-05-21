import styled from "styled-components"
import logo from './assets/logo.png'

export default function Header(){
    return (
        <SCHeader>
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
        </SCHeader>
    )
}

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