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

//detect if device is small
function detectmob() {
   //if(window.innerWidth <= 800 && window.innerHeight <= 600) {
   if ($(window).width() < 800) {
     	return true;
   } else {
     	return false;
   }
}

var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
	var scrolled = $(window).scrollTop();
	$('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
	if (!detectmob()) {
		parallax();
	}
	else {
	}
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


var emailShowing = false;
$("#email").mouseover(function() {
	if (!emailShowing) {
		$("#email").fadeOut(function() {
  			$(this).text("patrick.triest@gmail.com").fadeIn();
  			emailShowing = true;
		});
	}
});

/*
$("#email").mouseout(function() {
	$("#email").fadeOut(function() {
  		$(this).text("Email").fadeIn();
	});
});
*/



$("#skill-android").hover(function() {
		$(this).attr("src", "img/skill_android_red.png");
},function() {
		$(this).attr("src", "img/skill_android.png");
});

$("#skill-ios").hover(function() {
		$(this).attr("src", "img/skill_ios_red.png");
},function() {
		$(this).attr("src", "img/skill_ios.png");
});

$("#skill-web").hover(function() {
		$(this).attr("src", "img/skill_web_red.png");
},function() {
		$(this).attr("src", "img/skill_web.png");
});

$("#skill-backend").hover(function() {
		$(this).attr("src", "img/skill_backend_red.png");
},function() {
		$(this).attr("src", "img/skill_backend.png");
});

function colorSwap(id, image) {
		$(id).attr("src", image);
}

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

	$('#connected-world').on('shown.bs.collapse', function () {
		transition("img/worldbank2.png");
	});

	$('#voyse').on('shown.bs.collapse', function () {
		transition("img/voyse.png");
	});

	$('#facetag').on('shown.bs.collapse', function () {
		transition("img/facetag2.png");
	});

	$('#events').on('shown.bs.collapse', function () {
		transition("img/events.png");
	});

	$('#obaa').on('shown.bs.collapse', function () {
		transition("img/obaa.png");
	});

	$('#blue-sky').on('shown.bs.collapse', function () {
		transition("img/blue-sky.png");
	});

	$('#get-home').on('shown.bs.collapse', function () {
		transition("img/getHome.png");
	});

});