
$( document ).ready(function() {

    $("li.dropdown").click( function(){
      $(this).toggleClass("open");
    });
    $(".hamburger").click( function(){
      $(this).toggleClass("is-active");
      $("ul.nav-list").toggleClass("is-active");
    });

});
