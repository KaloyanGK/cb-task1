function rotateText(element) {
    const textElem = document.querySelector(".circle .text p");
  
    const degreesToRotate = 360 / Array.from(textElem.innerText).length;
    textElem.innerHTML = textElem.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * degreesToRotate
          }deg)">${char}</span>`
      )
      .join("");
  }