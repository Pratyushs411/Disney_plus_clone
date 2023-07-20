let movies=[
    {
        name:"Loki",
        des:"After the events of Avengers:Endgame, an alternate version of Loki is brought to the mysterious Time Variance Authority (TVA).",
        image:"./images/slider 1.PNG"
    },
    {
        name:"The Falcon and the Winter Soldier",
        des:"Wilson teams up with Bucky Barnes to stop anti-patriots who believe the world was better during the Blip.",
        image:"./images/slider 2.PNG"
    },
    {
        name:"WandaVision",
        des:"3 weeks after the events of Avengers:Endgame,Wanda Maximoff and Vision are living an idyllic suburban life in the town of Westview, New Jersey, trying to conceal their true natures.",
        image:"./images/slider 3.PNG"
    },
    {
        name:"Raya and the Last Dragon",
        des:"warrior princess Raya seeks out the fabled last dragon, hoping to restore the dragon gem that would bring back her father.",
        image:"./images/slider 4.PNG"
    },
    {
        name:"Luca",
        des:"Luca Paguro a young sea monster boy with the ability to assume human form while on land,explores the town of Portorosso.",
        image:"./images/slider 5.PNG"
    },
];
  
const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide(sliders);
}, 3000);

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});
//card sliders
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});