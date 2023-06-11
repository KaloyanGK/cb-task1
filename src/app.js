/* FUNC NAVIGATION SLIDER 1 */

// const heroImages = ["../static/images/hero.png", "../static/images/hero2.jpg"];

// function navigateLeft() {
//   console.log("go left");
//   const currentPos = getCurrentPosition();

//   const newIndex = updateEllipses(-1, currentPos);
//   updateHero(newIndex);
// }

// function navigateRight() {
//   console.log("go right");
//   const currentPos = getCurrentPosition();

//   const newIndex = updateEllipses(1, currentPos);
//   updateHero(newIndex);
// }

// function getCurrentPosition() {
//   const children = Array.from(
//     document.querySelector(".ellipse-wrapper").children
//   );
//   console.log(children.findIndex((child, index) =>
//     child.classList.contains("active")))
//   return children.findIndex((child, index) =>
//     child.classList.contains("active")
//   );
// }

// function updateEllipses(offset, currentPosition) {
//   const ellipses = Array.from(
//     document.querySelector(".ellipse-wrapper").children
//   );
//   const newIndex = currentPosition + offset;
//   const newIndexIsValid = newIndex >= 0 && newIndex < ellipses.length;

//   if (!newIndexIsValid) {
//     return newIndex;
//   }

//   if (newIndex === 0) {
//     document.querySelector(".arrow-left").classList.remove("enabled");
//     document.querySelector(".arrow-right").classList.add("enabled");
//   } else if (newIndex === ellipses.length - 1) {
//     document.querySelector(".arrow-right").classList.remove("enabled");
//     document.querySelector(".arrow-left").classList.add("enabled");
//   }

//   ellipses[currentPosition].classList.remove("active");
//   ellipses[newIndex].classList.add("active");

//   return newIndex;
// }

// function updateHero(index) {
//   const targetElem = document.querySelector(".hero-image>img");

//   targetElem.src = heroImages[index];
// }


/* EZ SLIDER 2 */
const rightArrow = document.querySelector('.arrow-right');
const leftArrow = document.querySelector('.arrow-left');
const targetElem = document.querySelector(".hero-image>img");
const rightEllipse = document.querySelector('.ellipse1');
const leftEllipse = document.querySelector('.ellipse2');

rightArrow.addEventListener('click', function () {
  targetElem.src = "../static/images/hero2.jpg"
  rightArrow.classList.remove("enabled");
  leftArrow.classList.add("enabled");
  rightEllipse.classList.remove("active");
  leftEllipse.classList.add("active");
})

leftArrow.addEventListener('click', function () {
  targetElem.src = "../static/images/hero.png";
  leftArrow.classList.remove("enabled");
  rightArrow.classList.add("enabled");
  leftEllipse.classList.remove("active");
  rightEllipse.classList.add("active");
})




