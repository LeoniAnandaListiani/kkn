let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(){
slides.forEach(s => s.classList.remove("active"));

index++;
if(index > slides.length){
index = 1;
}

slides[index-1].classList.add("active");
}

setInterval(showSlide,3000);
