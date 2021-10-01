import React from 'react';
import '../styles/components/Main.css';
import '../styles/breakpoints/MainBreakpoints.css';
const Main = () => {
  return (
    <main className="container__main">
      <h1 className="main__title">Can you get it?</h1>
      <section className="main__game">
        <div className="game__block" id="1" />
        <div className="game__block" id="2" />
        <div className="game__block" id="3" />
        <div className="game__block" id="4" />
        <div className="game__block" id="5" />
        <div className="game__block" id="6" />
        <div className="game__block" id="7" />
        <div className="game__block" id="8" />
        <div className="game__block" id="9" />
      </section>
      <button
        id="btnEmpezar"
        //   onclick={empezarJuego()}
        class="game__btn"
      >
        Let's play
      </button>
    </main>
  );
};

export default Main;
