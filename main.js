// alert ("Yyfyhhf")

$(document) .ready(function () {
    $("#l1") .on("click" , function() {
console.log("clicked")
    $("#p1") .toggle();
    });
});
$(document) .ready(function () {
    $("#l2") .on("click" , function() {
console.log("clicked")
    $("#p2") .toggle();
    });
});
$(document) .ready(function () {
    $("#l3") .on("click" , function() {
console.log("clicked")
    $("#p3") .toggle();
    });
});
$(document) .ready(function () {
    $("#l4") .on("click" , function() {
console.log("clicked")
    $("#p4") .toggle();
    });
});
$(document) .ready(function () {
    $("#l5") .on("click" , function() {
console.log("clicked")
    $("#p5") .toggle();
    });
});

$(document) .ready(function () {
    $("#l6") .on("click" , function() {
console.log("clicked")
    $("#p6") .toggle();
    });
});
$(document) .ready(function () {
    $("#l7") .on("click" , function() {
console.log("clicked")
    $("#p7") .toggle();
    });
});
$(document) .ready(function () {
    $("#l8") .on("click" , function() {
console.log("clicked")
    $("#p8") .toggle();
    });
});
$(document) .ready(function () {
    $("#l9") .on("click" , function() {
console.log("clicked")
    $("#p9") .toggle();
    });
});
$(document) .ready(function () {
    $("#l_10") .on("click" , function() {
console.log("clicked")
    $("#p_10") .toggle();
    });
});

// $(document).ready(function () {
//   $("#menu li").on("click", function () {
//     const target = $(this).data("target");

//     // Fade out all contents except the clicked one
//     $(".colli").not(target).fadeOut(200);

//     // Fade toggle the clicked one
//     $(target).fadeToggle(200);
//   });
// });



$(document) .ready(function () {
    $("#investment_drop") .on("click" , function() {
console.log("clicked")
    $(".investment_drop_down") .toggle();
    });
});

$(document) .ready(function () {
    $(".header_three_line_button") .on("click" , function() {
console.log("clicked")
    $(".mobile_fade_toggle") .toggle();
    });
});


document.addEventListener("DOMContentLoaded", () => {
   const div = document.getElementById("row1");
   const colors = ["#0d102c", "#0f2765"];
   let currentColorIndex = 0;


  if (div) {
       setInterval(() => {
           div.style.backgroundColor = colors[currentColorIndex];
           currentColorIndex = (currentColorIndex + 1) % colors.length;
       }, 2000);
   }

})



$(function () {

  if ($('#whatsapp-float').length) return;

  $('body').append(`
    <div id="whatsapp-wrapper">
      <span class="wa-tooltip">
        Message us on WhatsApp
        <span class="wa-arrow"></span>
      </span>

      <a id="whatsapp-float"
         href="https://wa.me/+447480792502?text=Hi%20I%20need%20help"
         target="_blank"
         aria-label="Chat on WhatsApp">
          <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  `);

});




document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("a");
  btn.href = "https://wa.me/234XXXXXXXXXX";
  btn.target = "_blank";
  btn.className = "whatsapp-float";
  btn.innerHTML = `<i class="fab fa-whatsapp"></i>`;
  document.body.appendChild(btn);
});