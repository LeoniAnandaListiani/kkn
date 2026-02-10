/* =========================
   START WEBSITE
========================= */
function start(){
    document.getElementById("opening").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("bgm").play();
}


/* =========================
   SLIDER FOTO
========================= */
let slides = document.querySelectorAll(".slide");
slides[0].classList.add("active"); // pastikan minimal 1 active


function showSlide(index){
    slides[current].classList.remove("active");
    current = index;
    slides[current].classList.add("active");
}

function nextSlide(){
    let next = (current + 1) % slides.length;
    showSlide(next);
}

function prevSlide(){
    let prev = (current - 1 + slides.length) % slides.length;
    showSlide(prev);
}

setInterval(nextSlide,4000);


/* =========================
   VIDEO POPUP
========================= */
function openVideo(src){
    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("popupVideo");
    video.src = src;
    popup.style.display = "flex";
}

function closeVideo(){
    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("popupVideo");
    video.pause();
    video.src = "";
    popup.style.display = "none";
}


/* =========================
   QUOTES AUTO ROTATE
========================= */
const quotes = [
"Kita datang sebagai mahasiswa, pulang sebagai keluarga.",
"Capeknya hilang, kenangannya tetap tinggal.",
"3 bulan yang penuh cerita dan tawa.",
"Bukan tempatnya yang spesial, tapi orang-orangnya.",
"Kita pernah sehebat ini bersama."
];

let q = 0;

function changeQuote(){
    document.getElementById("quoteText").innerText = quotes[q];
    q = (q + 1) % quotes.length;
}

setInterval(changeQuote,3000);
changeQuote();


/* =========================
   BACKGROUND BINTANG CINEMATIC
========================= */

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
let shootingStars = [];

/* BINTANG BIASA */
for(let i=0;i<300;i++){
    stars.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        radius: Math.random()*2,
        opacity: Math.random(),
        speed: Math.random()*0.2
    });
}

/* ANIMASI */
function animateStars(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    /* BINTANG */
    stars.forEach(star=>{
        ctx.beginPath();
        ctx.arc(star.x,star.y,star.radius,0,Math.PI*2);
        ctx.fillStyle="rgba(255,255,255,"+star.opacity+")";
        ctx.fill();

        /* twinkle */
        star.opacity += (Math.random()-0.5)*0.05;
        if(star.opacity < 0.1) star.opacity = 0.1;
        if(star.opacity > 1) star.opacity = 1;

        /* gerak pelan */
        star.y += star.speed;
        if(star.y > canvas.height){
            star.y = 0;
            star.x = Math.random()*canvas.width;
        }
    });

    /* SHOOTING STAR */
    shootingStars.forEach((s,index)=>{
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - 50, s.y + 50);
        ctx.strokeStyle="white";
        ctx.lineWidth=2;
        ctx.stroke();

        s.x += 10;
        s.y += 10;

        if(s.x > canvas.width || s.y > canvas.height){
            shootingStars.splice(index,1);
        }
    });

    requestAnimationFrame(animateStars);
}

animateStars();

/* BIKIN SHOOTING STAR SESekali */
setInterval(()=>{
    shootingStars.push({
        x: Math.random()*canvas.width,
        y: 0
    });
},5000);


/* RESPONSIVE */
window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


