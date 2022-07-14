import "./css/App.css"
import Board from "./components/Board.js"
import styled, { keyframes } from 'styled-components';
import { flipInY } from 'react-animations';

const bounceAnimation = keyframes`${flipInY}`;
 
const BouncyDiv = styled.div`
  animation: 1.5s ${bounceAnimation};
  animateIn: 'flipInY';
  animateOut: 'flipOutY';
`;

function App() {
  return (
    <div className="text">
      <header className="App-header">
        <div></div>
      </header>
      <BouncyDiv>
        <h2 className="header center text padding-bottom-15">
          Крестики-нолики
        </h2>
        </BouncyDiv>
      <div className="cross-div">
        <Board />
      </div>
    </div >
  );
}

export default App;
