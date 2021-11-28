import React from 'react'
import { greenButton, redButton, yellowButton, blueButton } from '../../main/Jogo'
import './Game.css'


function Game(props) {

    
    return (
        <div>
            <div>{props.arrayGameShow}</div>

            <div className='grid'>

                <div className="verde"  onClick={() => {
                    greenButton();
                    props.setArrayGame();
                    props.screenState();
                    props.setArrayGameShow();
                }} ></div>

                <div className="vermelho" onClick={() => {
                    redButton();
                    props.setArrayGame();
                    props.screenState();
                    props.setArrayGameShow();
                }} ></div>

                <div className="amarelo"  onClick={() => {
                    yellowButton();
                    props.setArrayGame();
                    props.screenState();
                    props.setArrayGameShow();
                }}  ></div>

                <div className="azul"  onClick={() => {
                    blueButton();
                    props.setArrayGame();
                    props.screenState();
                    props.setArrayGameShow();
                }} ></div>
            </div>

        </div>
    )
}

export default Game
