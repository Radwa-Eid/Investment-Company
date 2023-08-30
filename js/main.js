/*Loading Start */
let headerScrolling = document.getElementById("headerScrolling");
/*Back To Top Button Action Start */
let backTop = document.getElementById("backTop");
let headerTools = document.getElementById("headerTools");
/* On Scrolling */

/* On Click */
backTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
/*Back To Top Button Action End */
$(document).ready(function () {
  $(".loading").fadeOut(1000, function () {
    $("body").css("overflow-y", "auto");
    /*window Scrolling Start*/
    window.onscroll = function () {
      if (scrollY >= 300) {
        backTop.style.display = "block";
        headerScrolling.classList.add("headerScroll");
      } else {
        backTop.style.display = "none";
        headerScrolling.classList.remove("headerScroll");
      }
    };
    /*window Scrolling End*/
  });
});
/*Loading End */
/*Home Page Slider Start*/
$("#homeSlider").owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 1500,
  autoplayHoverPause: true,
  navText: [
    `<i class="fa-solid fa-chevron-left"></i>`,
    `<i class="fa-solid fa-chevron-right"></i>`,
  ],
});
/*Home Page Slider End*/

// PopUp Video
let videoPlay = document.getElementById("videoPlay");
let closeVideo=document.getElementById("closeVideo");
let videoLink=document.getElementById("videoLink")
console.log(videoLink)
closeVideo.addEventListener("click",function(){
  videoPlay.style.display = "none";
})
videoLink.addEventListener("click",function(){
  videoPlay.style.display = "block";
})  
