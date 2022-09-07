"use strict";

const projDesc = document.getElementById("proj-desc");
const paraId = document.getElementById("port-p");
const projectDate = document.getElementById("p-date");
const projectCategory = document.getElementById("p-category");
const projBtn = document.getElementById("proj-btn");
const projImg = document.getElementById("proj-img");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

// let id = window.location.href.slice(-1);

let projId = localStorage.getItem("projectId");
let id = projId;
console.log(id);
console.log("local storage", localStorage);

const back = document.querySelector(".back-btn");

back.addEventListener("click", () => {
  localStorage.clear();
});

const pageArr = [
  {
    projectId: "1",
    projImg: "/src/images/orange.png",
    projectDesc: `Galaxy Box`,
    pg: `Lorem ipsum dolor sit aet, consectetur adipiscing elit.
    Suspendisse varius enim in eros elementum tristique. Duis cursus.`,
    category: "Shopify",
    link: "https://lucid-engelbart-2746eb.netlify.app/",
    gitLink: "#",
  },

  {
    projectId: "2",
    projImg: "/src/images/magenta.png",
    projectDesc: `Two Clothes`,
    pg: `mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
    libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum`,
    category: "Shopify",
    link: "https://kodama-ramen.netlify.app",
    gitLink: "#",
  },

  {
    projectId: "3",
    projImg: "/src/images/kodama-screen.png",
    projectDesc: `Kodama Ramen`,
    pg: `Restaurant site featuring database connected online reservation booking, menu, and landing page`,
    category: "Custom",
    link: "https://kodama-ramen.netlify.app",
    gitLink: "https://github.com/mrerikmt/kodama",
  },

  {
    projectId: "4",
    projImg: "/src/images/a-j-screen.png",
    projectDesc: `Alice & Jack`,
    pg: `A simple gallery site showcasing my kids artwork`,
    category: "Custom",
    link: "https://lucid-engelbart-2746eb.netlify.app/",
    gitLink: "https://github.com/mrerikmt/alice-jack",
  },

  {
    projectId: "5",
    projImg: "/src/images/green.png",
    projectDesc: `Placeholder 1`,
    pg: `lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`,
    category: "Placeholder",
    link: "#",
    gitLink: "#",
  },

  {
    projectId: "6",
    projImg: "/src/images/yellow.png",
    projectDesc: `Placeholder 2`,
    pg: `lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`,
    category: "Placeholder",
    link: "#",
    gitLink: "#",
  },

  {
    projectId: "7",
    projImg: "/src/images/blue.png",
    projectDesc: `Placeholder 3`,
    pg: `lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`,
    category: "Placeholder 3",
    link: "#",
    gitLink: "#",
  },

  {
    projectId: "8",
    projImg: "/src/images/hope-screen.png",
    projectDesc: `H.O.P.E`,
    pg: `Single page fundraising site for environmental organizations run by a group of kids.`,
    category: "Custom",
    link: "https://earth-hope.com/",
    gitLink: "https://github.com/mrerikmt/hope",
  },
];

let pageIndex = id;
showPage(pageIndex);

function showPage(n) {
  let dataIndex = pageArr[n - 1];
  projImg.setAttribute("src", dataIndex.projImg);
  projDesc.innerHTML = dataIndex.projectDesc;
  paraId.innerHTML = dataIndex.pg;
  projectCategory.innerHTML = dataIndex.category;
  projBtn.setAttribute("href", dataIndex.link);
}

//////////////Image Slider////////////////////

const slider = document.querySelector(".slider");
const slideImg = document.querySelector(".slide");
const items = document.querySelector(".slides");
const img = document.getElementById("proj-img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function slide(id, items, prev, next) {
  var posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    slides = items.getElementsByClassName("slide"),
    slidesLength = slides.length,
    slideSize = items.getElementsByClassName("slide")[0].offsetWidth,
    firstSlide = slides[0],
    lastSlide = slides[slidesLength - 1],
    cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(true),
    index = 0,
    allowShift = true;

  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);

  // Mouse events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener("touchstart", dragStart);
  items.addEventListener("touchend", dragEnd);
  items.addEventListener("touchmove", dragAction);

  function shiftData(n) {
    let dataIndex = pageArr[n - 1];
    projDesc.innerHTML = dataIndex.projectDesc;
    paraId.innerHTML = dataIndex.pg;
    projectCategory.innerHTML = dataIndex.category;
    id = n;
  }

  function prevNextBtn(n) {
    let pageIndex;

    if (n === pageArr.length) {
      pageIndex = pageArr.length;
    }
    if (n === 1) {
      pageIndex = 1;
    }
    if (n > 1 && n < pageArr.length) {
      pageIndex = n;
    }
    shiftData(pageIndex);
  }

  function left(n) {
    if (n == 1) {
      prevNextBtn(parseInt(pageArr.length));
    } else {
      prevNextBtn(parseInt(n) - 1);
    }
  }

  function right(n) {
    if (n === pageArr.length) {
      prevNextBtn(parseInt(1));
    } else {
      prevNextBtn(parseInt(n) + 1);
    }
  }

  // Click events
  prev.addEventListener("click", function () {
    // left(id);
    shiftSlide(-1, id);
  });
  next.addEventListener("click", function () {
    // right(id);
    shiftSlide(1, id);
  });

  // Transition events
  items.addEventListener("transitionend", () => setTimeout(checkIndex), 1500);

  function dragStart(e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;

    if (e.type == "touchstart") {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction(e) {
    e = e || window.event;

    if (e.type == "touchmove") {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = items.offsetLeft - posX2 + "px";
    console.log("dragAction");
  }

  function dragEnd() {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, id, "drag");
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, id, "drag");
    } else {
      items.style.left = posInitial + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
    console.log("dragEnd");
  }

  function shiftSlide(dir, id, action) {
    items.classList.add("shifting");

    let indexNext;
    function n(id) {
      if (id === pageArr.length && dir == 1) {
        indexNext = pageArr[0];
      }
      if (id >= 1 && id < pageArr.length && dir == 1) {
        indexNext = pageArr[id];
      }
      if (id == 1 && dir === -1) {
        indexNext = pageArr[pageArr.length - 1];
      }
      if (id <= pageArr.length && id > 1 && dir === -1) {
        indexNext = pageArr[id - 2];
      }
    }
    n(id);

    if (allowShift) {
      if (!action) {
        posInitial = items.offsetLeft;
      }

      if (dir == 1) {
        items.style.left = posInitial - slideSize + "px";
        index++;
        right(id);
        slides[2].setAttribute("src", indexNext.projImg);
        setTimeout(function () {
          projImg.setAttribute("src", indexNext.projImg);
        }, 1000);
      } else if (dir == -1) {
        items.style.left = posInitial + slideSize + "px";
        index--;
        left(id);
        slides[0].setAttribute("src", indexNext.projImg);
        setTimeout(function () {
          projImg.setAttribute("src", indexNext.projImg);
        }, 1000);
      }
    }
    allowShift = false;
  }

  function checkIndex() {
    items.classList.remove("shifting");

    // image moves right
    if (index == -1) {
      items.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }

    // image moves left
    if (index == slidesLength) {
      items.style.left = -(1 * slideSize) + "px";
      index = 0;
    }

    allowShift = true;
  }
}

slide(pageIndex, items, prev, next);
