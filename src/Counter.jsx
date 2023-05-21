/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function Counter(props) {
  const { counter } = props;
  return (
    <SCFooter>
      <p data-test="footer">{counter}/8 CONCLUÍDOS</p>
    </SCFooter>
  );
}

const SCFooter = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    justify-content: center;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    text-align: center;
  }
`;
