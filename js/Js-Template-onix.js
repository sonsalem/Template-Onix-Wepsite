function nav() {
    var x = document.getElementById("toggel-menu-one")
    var y = document.getElementById("toggel-menu-three")
    var z = document.getElementById("links")
    if (x.style.transform === "rotate(45deg)") {
        x.style.transform = "none";
      } else {
        x.style.transform = "rotate(45deg)";
      };
    if (x.style.width === "100%") {
        x.style.width = "70%";
    }else {
        x.style.width = "100%";
    }
    if (y.style.transform === "rotate(45deg)") {
        y.style.transform = "none";
      } else {
        y.style.transform = "rotate(45deg)";
      };
    if (y.style.width === "100%") {
        y.style.width = "70%";
    }else {
        y.style.width = "100%";
    }
    if (z.style.height === "250px") {
        z.style.height = "0";
    }else {
        z.style.height = "250px";
    }
}
$(document).ready(function(){
    $(".owl-portfolio").owlCarousel({
      rtl:true,
      loop:true,
      margin:10,
      nav:true,
      autoplay : true ,
      responsive:{
          0:{
              items:1,
              margin:0
  
          },
          567:{
              items:2,
              margin:20
  
          },
          992:{
              items:3,
              margin : 20 ,
          },
          1500:{
              items:4,
              margin : 20 ,
          }
        }
      }
    );
  });
$(document).ready(function(){
    $(".owl-services").owlCarousel({
      rtl:true,
      loop:true,
      margin:10,
      nav:true,
      autoplay : true ,
      responsive:{
          0:{
              items:1,
              margin:0
  
          },
          767:{
              items:2,
              margin:20
  
          },
          992:{
              items:3,
              margin : 20 ,
          },
          1500:{
              items:4,
              margin : 20 ,
          }
        }
      }
    );
  });