const apple = document.querySelector('img');
const scoreP = document.querySelector('p');

let counter = 1;
let score = 0;

apple.addEventListener('click', () => {
  let audio = new Audio('audio/chomp.mp3');
  audio.play();

  apple.src = `images/a${counter % 8}.png`;

  if (counter % 8 == 0) {
    score++;
    scoreP.innerHTML = `${score} 🍎`;
  }

  counter++;
});
