import '../components/game/Game.css'
import './App.css'
export let ordem = [];
export let gameOver = false;

let index = 0
let start = true

const verde = document.querySelector('.verde')
const vermelho = document.querySelector('.vermelho')
const amarelo = document.querySelector('.amarelo')
const azul = document.querySelector('.azul')

//cria ordem aletoria de cores

function ordemAleatoria(max) {
  return Math.floor(Math.random() * Math.floor(max))

}
//acende a proxima cor

function proximoLevel() {
  ordem.push(ordemAleatoria(4));
  for (const i in ordem) {
    const corElemento = criaElementoCor(ordem[i]);
    acendeCor(corElemento, Number(i) + 1)
  }
  index = 0;
  start = true;

}
function acendeCor(elemento, numero) {
  numero = numero * 500;
  setTimeout(() => {
    elemento.classList.add('Anime')
  }, numero - 250);
  setTimeout(() => {
    elemento.classList.remove('Anime')
  })
}

function criaElementoCor(color) {
  if (color === 0) {
    return verde
  } else if (color === 1) {
    return vermelho
  } else if (color === 2) {
    return amarelo
  } else if (color === 3) {
    return azul
  }
}

//funcao de inicio do jogo
export function playGame() {
  gameOver = false
  ordem = []
  proximoLevel()

}

function sendButton(buttonPress) {
  if (start) {
    start = false;
  } else {
    index++;
  }
  validation(buttonPress);
}

function validation(buttonPress) {
  if (ordem[index] === buttonPress) {
    if (index + 1 === ordem.length) {
      proximoLevel();
    }
  } else {
    return gameOver = true;
  }
}

//eventos de clique para as cores
export function greenButton() {
  sendButton(0);
}
export function redButton() {
  sendButton(1);
}
export function yellowButton() {
  sendButton(2);
}
export function blueButton() {
  sendButton(3);
}