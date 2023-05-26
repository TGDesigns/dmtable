$(document).ready(function() {
    $("#nav-fixed-box ul li a").click(function () {
        $("#nav-fixed-box ul li a").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");   
    });
});
$( ".detail-accordion" ).on( "click", function() {
  $(this).next(".accordion-info").toggle( "fast" );
});