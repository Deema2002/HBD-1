// const card = document.querySelector(".outside");

// card.addEventListener("click", function (e) {
//   card.classList.toggle('is-flipped');
// });


const flipper = document.querySelector('.card');
flipper.addEventListener('click', function() {
  this.classList.toggle('flipped');
});