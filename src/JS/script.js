"use strict";

////////////Smooth Scrolling//////////////////

////////////////////////////////////////////////////
let mobile;

$(document).ready(function () {
  /* For the sticky navigation */
  $(".portfolio").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: 200,
    }
  );

  /* "Tell me about your project" button */
  $(".button1").click(function () {
    $("html, body").animate(
      { scrollTop: $(".contact-section").offset().top },
      1000
    );
  });

  // "Back To Top" button (footer)
  $(".go-to-top").click(function () {
    $("html, body").animate({ scrollTop: $(".top").offset().top }, 1000);
  });

  // /* Navigation Scroll */

  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        //////////////////////////
        if (target.length && mobile == true) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top + 1,
            },
            1000
          );
          return false;
        }
        //////////////////////
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 55,
            },
            1000
          );
          return false;
        }
      }
    });
  });
});

////////////////Form Submission//////////////////////
const form = document.getElementById("email-form");
// const submitBtn = document.getElementById("my-form-button");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok == true) {
        status.innerHTML = "Thank you! Your submission has been received!";
        form.reset();
      } else {
        status.innerHTML =
          "Something went wrong while submitting the form. Feel free to email me directly at erik@eriksnyder.dev";
      }
    })
    .catch((error) => {
      status.innerHTML =
        "Something went wrong while submitting the form. Feel free to email me directly at erik@eriksnyder.dev";
    });
}

form.addEventListener("submit", handleSubmit);

////////////Maintain About Section Aspect Ratio//////////
const about = document.getElementById("about");
const aboutWidth = window.innerWidth;

function aboutRatio() {
  let ratio = aboutWidth * 0.391691395;
  if (window.innerWidth > 700) {
    about.style.height = ratio + "px";
  }
}
aboutRatio();

window.onresize = () => {
  location.reload();
};

/////////////////Mobile Navigation//////////////////////
const navIcon = document.querySelector(".mobile-nav-icon");
const nav = document.querySelector("nav ul");
const close = document.querySelector(".close");

navIcon.addEventListener("click", navMenu);

function navMenu() {
  nav.style.display = "flex";
  navIcon.style.display = "none";
  close.style.display = "block";
  return (mobile = true);
}

close.addEventListener("click", closeMenu);

function closeMenu() {
  nav.style.display = "none";
  close.style.display = "none";
  navIcon.style.display = "block";
}

////////////Nav Links Active on scroll
let section = document.querySelectorAll("section");
let lists = document.querySelectorAll(".nav-link");
function activeLink(li) {
  lists.forEach((item) => item.classList.remove("active"));
  li.classList.add("active");
}
lists.forEach((item) =>
  item.addEventListener("click", function () {
    activeLink(this);
  })
);

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY + 60;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`).parentElement;
      activeLink(target);
    }
  });
};

/////////////Portfolio Links//////////////////////
let id;

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");

console.log("local storage", localStorage);

one.addEventListener("click", () => {
  id = 1;
  localStorage.setItem("projectId", id);
  console.log(id);
});

two.addEventListener("click", () => {
  id = 2;
  localStorage.setItem("projectId", id);
  console.log(id);
});

three.addEventListener("click", () => {
  id = 3;
  localStorage.setItem("projectId", id);
  console.log(id);
});

four.addEventListener("click", () => {
  id = 4;
  localStorage.setItem("projectId", id);
  console.log(id);
});

five.addEventListener("click", () => {
  id = 5;
  localStorage.setItem("projectId", id);
  console.log(id);
});

six.addEventListener("click", () => {
  id = 6;
  localStorage.setItem("projectId", id);
  console.log(id);
});

seven.addEventListener("click", () => {
  id = 7;
  localStorage.setItem("projectId", id);
  console.log(id);
});

eight.addEventListener("click", () => {
  id = 8;
  localStorage.setItem("projectId", id);
  console.log(id);
});

////////////////////////////////////////////////

// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll("nav-link");
// window.onscroll = () => {
//   var current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (scrollY >= sectionTop - 60) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");
//     }
//   });
// };
