
$(function () {
	'use strict';
	$('html').niceScroll({
		cursorcolor:'#f7600e',
		cursorwidth:7,
		cursorborder:'1px solid #f7600e'
		});


// make header height just like my window
$('.header').height($(window).height());

// Scroll to Features

$('.header .arrow i').click(function() {
	$('html, body').animate({
		scrollTop: $('.Features').offset().top
		}, 1000);
	});
	
$('.hire').click(function () {
	$('html, body').animate({
		scrollTop: $('.Our-Team').offset().top
		}, 1000);
	});

// Show Hidden Items From Work 

$('.show-more').click(function () {
	
	$('.our-work .hidden').fadeIn(2000);
	});
	
// make a slider for testim

	var leftArrow = $('.Testim .fa-chevron-left'),
		rightArrow = $('.Testim .fa-chevron-right');

function checkClients(){
	
	if ($('.Client:first').hasClass('active'))
	{ leftArrow.fadeOut();
		}else
		{	leftArrow.fadeIn();
			}
	if ($('.Client:last').hasClass('active'))
	{	rightArrow.fadeOut();
		}else
		{	rightArrow.fadeIn();
			}			
	}
	checkClients();
	
$('.Testim i').click(function () {
	
	if($(this).hasClass('fa-chevron-right'))
	{ $('.Testim .active').fadeOut(100, function(){
		
		$(this).removeClass('active').next('.Client').addClass('active').fadeIn();
		
		checkClients();
		});
		
		}else
		{	$('.Testim .active').fadeOut(100, function(){
		
		$(this).removeClass('active').prev('.Client').addClass('active').fadeIn();
		
		checkClients();
		});
			}
		
	});		
	
});	