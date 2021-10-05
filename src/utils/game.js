import Swal from 'sweetalert2';

const MAXlEVELS = 7;

class game {
  constructor(
    btnRef,
    id1Ref,
    id2Ref,
    id3Ref,
    id4Ref,
    id5Ref,
    id6Ref,
    id7Ref,
    id8Ref,
    id9Ref
  ) {
    this.btnEmpezar = btnRef;

    this.startGame = this.startGame.bind(this);
    this.idsGame = [
      id1Ref.current,
      id2Ref.current,
      id3Ref.current,
      id4Ref.current,
      id5Ref.current,
      id6Ref.current,
      id7Ref.current,
      id8Ref.current,
      id9Ref.current,
    ];

    this.startGame();
    this.generetorPatrons();
    this.nextLevel();
  }

  startGame = (e) => {
    this.level = 1;
    // ref is used to access the elements
    this.btnEmpezar.current.classList.toggle('hide');
  };
  generetorPatrons = () => {
    this.sequence = new Array(MAXlEVELS)
      .fill(0)
      .map((item) => (Math.random() * 9) | 0);
  };
  nextLevel = () => {
    this.subLevel = 0;
    this.seePatrons();
    this.addClickEvent();
  };
  seePatrons = () => {
    for (let i = 0; i < this.level; i++) {
      let color = this.sequence[i];
      setTimeout(() => {
        this.seeColor(color);
      }, 1000 * i);
    }
  };
  seeColor = (id) => {
    this.idsGame[id].classList.add('illuminate');
    setTimeout(() => {
      this.notSeeColor(id);
    }, 350);
  };
  notSeeColor = (id) => {
    this.idsGame[id].classList.remove('illuminate');
  };
  seeColorPlayer = (id) => {
    this.idsGame[id].classList.add('illuminatePlayer');
    setTimeout(() => {
      this.notSeeColorPlayer(id);
    }, 300);
  };
  notSeeColorPlayer = (id) => {
    this.idsGame[id].classList.remove('illuminatePlayer');
  };

  addClickEvent = () => {
    for (const item of this.idsGame) {
      item.addEventListener('click', this.chooseColor);
    }
  };
  removeClickEvent = () => {
    for (const item of this.idsGame) {
      item.removeEventListener('click', this.chooseColor);
    }
  };
  victory = () => {
    Swal.fire({
      title: 'You won!',
      text: 'Congratulations, was it luck or will you be able to do it again?',
      icon: 'success',
      confirmButtonText: 'Back to play',
    });
    this.startGame();
  };
  lost = () => {
    this.startGame();
    this.removeClickEvent();
    Swal.fire({
      title: 'you lost!',
      text: 'Dont worry, you can continue playing',
      icon: 'error',
      confirmButtonText: 'Cool',
    });
  };
  chooseColor = (e) => {
    const idPlayer = parseInt(e.target.id);
    this.seeColorPlayer(idPlayer);
    if (idPlayer === this.sequence[this.subLevel]) {
      this.subLevel++;
      if (this.subLevel === this.level) {
        this.level++;
        this.removeClickEvent();
        if (this.level === MAXlEVELS + 1) {
          this.victory();
        } else {
          setTimeout(() => this.nextLevel(), 1200);
        }
      }
    } else {
      this.lost();
    }
  };
}

export default game;
