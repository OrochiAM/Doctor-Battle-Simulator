const apple = document.querySelector('img');
const scoreP = document.querySelector('p');

let counter = 1;
let score = 0;

apple.addEventListener('click', () => {
  apple.src = `images/a${counter % 8}.png`;

  if (counter % 8 == 0) {
    score++;
    scoreP.innerHTML = `${score} 🍎`;

    let gulp = new Audio('audio/gulp.mp3');
    gulp.play();
  }

  counter++;

  let chomp = new Audio('audio/chomp.mp3');
  chomp.play();
});
