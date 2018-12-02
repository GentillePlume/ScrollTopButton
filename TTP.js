function ttp(box_shape, box_color, icon, icon_color, box_animation, icon_animation) {

  console.log("🎇 To The Top - launched ✔️");
  console.log("⚙️ config :");
  console.log("%cbox shape : %c" + box_shape, "color:grey", "color: black; font-weight: bold");
  console.log("%cbox color : %c" + box_color, "color:grey", "color: black; font-weight: bold");
  console.log("%cicon : %c" + icon, "color:grey", "color: black; font-weight: bold");
  console.log("%cicon color : %c" + icon_color, "color:grey", "color: black; font-weight: bold");
  console.log("%cbox animation : %c" + box_animation, "color:grey", "color: black; font-weight: bold");
  console.log("%cicon animation : %c" + icon_animation, "color:grey", "color: black; font-weight: bold");
  console.log("-----------------------");

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

  arrow.classList.add("TTP-icon");
  $(".TTP-icon").addClass(icon);

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
}