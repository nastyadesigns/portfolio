$(document).ready (function() {
$(".circle").hide();
$(".less").hide();
	
$(".project").hover(function(){
$(".circle").toggle();	
});

$(".project2").hover(function(){
$(".circle").toggle();	
});

$(".rotate").click(function () {
   $(this).toggleClass("down");
})
	
$(".toggle").click(function () {
  $(".more").toggle();
  $ (".less").toggle();
})
	
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $(document).on('click', 'a[href^="#about"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
	
	
  $(document).on('click', 'a[href^="#work"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
	
	
	 $(document).on('click', 'a[href^="#contact"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
	
	 $(document).on('click', 'a[href^="#socials"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
	});