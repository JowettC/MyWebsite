$(document).ready(function() {
  document.getElementById("contactMe").addEventListener("click", myFunction);

  function myFunction() {
    $('html,body').animate({
        scrollTop: $("Footer").offset().top
      },
      'slow');
  }
  // function contactMeJS(){
  //   $("#contactMe").click(function() {
  //     $('html,body').animate({
  //         scrollTop: $("Footer").offset().top
  //       },
  //       'slow');
  //   });
  // }
  console.log("test")
});
