const starsRating = document.querySelectorAll(".fa-star");


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
}

