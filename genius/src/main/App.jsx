import './App.css';
import Game from '../components/game/Game';
import GameOver from '../components/gameOver/GameOver'
import Home from '../components/home/Home';

import { useState } from 'react'
import { ordem, playGame , gameOver} from './Jogo';

const screenStates = {
  Home: "Home",
  Game: "Game",
  GameOver: "GameOver",
};

function App() {
  const [arrayGame, setArrayGame] = useState(1);
  const [arrayGameShow, setArrayGameShow] = useState(ordem);
  const [screenState, setScreenState] = useState(screenStates.Home);

  function restartGame() {
    setScreenState(screenStates.Home);
    setArrayGame(1);
  }

  function changeScreen() {
    if (gameOver === true) {
      setScreenState(screenStates.GameOver);
    } else {
      setScreenState(screenStates.Game);
    }
  }

  return (
    <div className="App">
      <h1>Jogo da Memoria</h1>
      {screenState === screenStates.Home && (
        <Home
          screenState ={() => changeScreen()}
          playGame ={() => playGame()}
          setArrayGameShow ={() => setArrayGameShow(ordem)}
        />
      )}

      {screenState === screenStates.Game && (
        <Game
          arrayGameShow = {arrayGameShow}
          arrayGame = {arrayGame}
          setArrayGame = {() => setArrayGame(ordem.length)}
          screenState = {() => changeScreen()}
          setArrayGameShow = {() => setArrayGameShow(ordem)}
        />
      )}

      {screenState === screenStates.GameOver && (
        <GameOver arrayGame={arrayGame * 100} restartGame = {() => restartGame()} />
      )}
    </div>
  );
}

export default App;
