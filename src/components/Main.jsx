import React, { useRef } from 'react';
import '../styles/components/Main.css';
import '../styles/breakpoints/MainBreakpoints.css';
import Game from '../utils/game';
const Main = () => {
  const btnRef = useRef();
  const id1 = useRef();
  const id2 = useRef();
  const id3 = useRef();
  const id4 = useRef();
  const id5 = useRef();
  const id6 = useRef();
  const id7 = useRef();
  const id8 = useRef();
  const id9 = useRef();

  const handleStart = (e) => {
    console.log('iniciando...');
    let play = new Game(btnRef, id1, id2, id3, id4, id5, id6, id7, id8, id9);
    setTimeout(() => play, 1000);
  };
  return (
    <main className="container__main">
      <h1 className="main__title">Can you get it?</h1>
      <section className="main__game">
        <div className="game__block" id="0" ref={id1} />
        <div className="game__block" id="1" ref={id2} />
        <div className="game__block" id="2" ref={id3} />
        <div className="game__block" id="3" ref={id4} />
        <div className="game__block" id="4" ref={id5} />
        <div className="game__block" id="5" ref={id6} />
        <div className="game__block" id="6" ref={id7} />
        <div className="game__block" id="7" ref={id8} />
        <div className="game__block" id="8" ref={id9} />
      </section>
      <button
        ref={btnRef}
        id="btnEmpezar"
        onClick={handleStart}
        className="game__btn"
      >
        Let's play
      </button>
    </main>
  );
};

export default Main;
