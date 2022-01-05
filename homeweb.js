var acc = document.getElementsByClassName("accordion-item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    })
};

