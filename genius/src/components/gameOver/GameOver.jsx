import './GameOver.css'

import React from 'react'


function GameOver(props) {
    return (
        <div className='gameOverShow'>
            <div className="gameOverTexto"> Perdeu ! </div>
            <div className="pontuacao"> Ponto: {props.arrayGame}</div>
            <button className="button" onClick={()=> {props.restartGame()}}> De Novo </button>
            <div className="subtexto"> Boa sorte na proxíma</div>
        </div>
    )
}

export default GameOver

