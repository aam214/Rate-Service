const starsRating = document.querySelectorAll(".fa-star");
const emojisFace = document.querySelectorAll(".fa-regular");

const changeColors = ["red", "orange", "yellow", "lightseagreen", "green"];


//index is the star being clicked by the user
starsRating.forEach((starRating, index) => {
starRating.addEventListener("click", () => {
showResult(index);
  });
});


//idx is the star that was clicked previously
function showResult(index) {
  starsRating.forEach((starRating, idx)=> {
     //if your current star is less than the star now being clicked
    if (idx < index +1) {
    
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
