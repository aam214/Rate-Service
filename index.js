const starsRating = document.querySelectorAll(".fa-star");
const emojisFace = document.querySelectorAll(".fa-regular");
const changeColors = ["red", "orange", "yellow", "lightseagreen", "green"];

starsRating.forEach((starRating, index) => {
starRating.addEventListener("click", () => {
console.log("clicked", index);

showResult(index);
  });
});

function showResult(index) {
  starsRating.forEach((starRating, idx)=> {
    if (idx < index +1) {
      //console.log(idx);
      starRating.classList.add("active");
    }else{
      starRating.classList.remove("active");
    }
  });


emojisFace.forEach((emojiFace) => {
emojiFace.style.transform = 
`translateX(-${index * 72}px)`;

emojiFace.style.color = changeColors[index];
});
}
