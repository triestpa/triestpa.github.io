$("#nav ul li a").on('click', function(e) {

	// prevent default anchor click behavior
	e.preventDefault();

	// store hash
	var hash = this.hash;

	// animate
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top
	}, 300, function(){

	   // when done, add hash to url
	   // (default click behaviour)
	   window.location.hash = hash;
	});

});

var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
	var scrolled = $(window).scrollTop();
	$('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
	parallax();
});

$("#voyse-code").tooltip();

$("#profilepic").hover(function(){
	$("#profilepic").addClass("animated rubberBand");
},function(){
	$("#profilepic").removeClass("animated rubberBand");
});

$("#voyse-pic").hover(function(){
	$("#voyse-pic").addClass("animated pulse");
},function(){
	$("#voyse-pic").removeClass("animated pulse");
});

$("#appdev-pic").hover(function(){
	$("#appdev-pic").addClass("animated pulse");
},function(){
	$("#appdev-pic").removeClass("animated pulse");
});

$("#email").mouseover(function() {
	$(this).text('patrick.triest@gmail.com');
});

function transition(image) {
	$('#apppic').addClass('animated bounceOutRight');
	if ($('#apppic').attr("src") == image){
		$('#apppic').removeClass('animated bounceOutRight');
		$('#apppic').addClass('animated bounceInRight');
	}
	$('#apppic').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('#apppic').attr("src", image);
	});
}

$('#apppic').load(function(){
	$('#apppic').removeClass('animated bounceOutRight');
	$('#apppic').addClass('animated bounceInRight');
});

$(function(){

	$('#sandb').on('shown.bs.collapse', function () {
		transition("img/sandb.png");
	});

	$('#kdic').on('shown.bs.collapse', function () {
		transition("img/kdic.png");
	});    

	$('#db').on('shown.bs.collapse', function () {
		transition("img/db.png");
	});  

	$('#glicious').on('shown.bs.collapse', function () {
		transition("img/glicious.png");
	}); 

	$('#friendlyearth').on('shown.bs.collapse', function () {
		transition("img/friendlyearth.png");
	});

	$('#justice-served').on('shown.bs.collapse', function () {
		transition("img/justice-served.png");
	});

	$('#voyse').on('shown.bs.collapse', function () {
		transition("img/voyse.png");
	});

	$('#facetag').on('shown.bs.collapse', function () {
		transition("img/facetag.png");
	});

});