import React from 'react'

function Home(props) {
    return (
        <button className='button' onClick={() => {
            props.playGame();
            props.setArrayGameShow();
            props.screenState();
          }}>
            Play
        </button>
    )
}

export default Home
