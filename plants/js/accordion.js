

var btn = document.getElementsByClassName("panel__btn");
var i;

for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    this.classList.toggle("panel__btn-active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var accordion = document.getElementsByClassName("main__prices-accordion");
var a;

for (a = 0; a < accordion.length; a++) {
  accordion[a].addEventListener("click", function () {
    this.classList.toggle("main__prices-accordion-active");
  });
}



// var b;

// for (b = 0; b < btn.length; b++) {
//   btn.onclick = function () {
//     document.getElementsByClassName('panel__arrow').classList.toggle('panel__arrow-active');
//   }
// }
// var b;

// for (b = 0; b < accordion.length; b++) {
//     accordion[b].addEventListener("click", function() {
//         this.classList.toggle("panel__arrow-active");
//     });
// }