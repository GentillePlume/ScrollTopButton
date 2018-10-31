console.log("TTP launched");

// ########## BUILD
var button = document.createElement("div");
document.body.appendChild(button);
button.classList.add("TTP-button");

$(".TTP-button").css({
  "display": "flex",
  "position": "fixed",
  "bottom": "50px",
  "right": "50px",
  "width": "100px",
  "height": "100px",
  "justify-content": "center",
  "align-items": "center",
  "border-radius": "100%",
  "background-color": "black",
  "cursor": "pointer",
  "visibility": "hidden",
  "opacity": "0",
  "transition": "opacity .3s ease-in-out 0s"
});

var arrow = document.createElement("i");
button.appendChild(arrow);

arrow.classList.add("fas");
arrow.classList.add("fa-angle-up");
arrow.classList.add("TTP-icon");

$(".TTP-icon").css({
  "font-size": "75px",
  "color": "white"
});

// ########## ENGINE
$(document).scroll(function() {
  if ($(document).scrollTop() > 0) {
    $(".TTP-button").css({
      "visibility": "visible",
      "opacity": "1"
    });

  } else {
    $(".TTP-button").css({
      "opacity": "0"
    });
    setTimeout(function() {
      $(".TTP-button").css({
        "visibility": "hidden"
      });
    }, 300);
  }
})