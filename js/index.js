$(function(){
	var bannerNum;
	homeslider();
	var changeTime = 3000;

	var timer = window.setInterval(function() {
		changeIndex('next');
	},changeTime);

	$('.prev').click(function() {
		clearInterval(timer);
		changeIndex('prev');
		setTimeout(restartTimer,0);
	});

	$('.next').click(function() {
		clearInterval(timer);
		changeIndex('next');
		setTimeout(restartTimer,0);
	});
	function restartTimer() {
		timer = window.setInterval(function() {
			changeIndex('next');
		},changeTime);
	}
	
})
var changeIndex = function (move) {
	//clearInterval(settime);
	var Index = $('.slide').length;
	for(var i = 0;i < Index; i++) {
		var self = $($('.slide')[i])
		if(self.hasClass('this')) {
			var thisIndex = i;
		}
	}

	if(move = 'prev') {
		
		if(thisIndex - 1 >= 0) {
			var newIndex = thisIndex - 1;
		} else {
			var newIndex = Index -1;
		}
		
	}
	if(move = 'next') {

		if(thisIndex + 1 < Index) {
			var newIndex = thisIndex + 1;
		} else {
			var newIndex = 0
		}

	}

	var oldSlide = $($('.slide')[thisIndex]);
	var newSlide = $($('.slide')[newIndex]);

	changeAni(oldSlide,newSlide);

	setTimeout(function(){
		oldSlide.removeClass('this');
		newSlide.removeClass('next');
		newSlide.addClass('this');
		reducePos(oldSlide);
		//setInterval(settime)
	},1000);
	
}
var reducePos = function(slide) {
	slide.children('.img-part-topLeft').children('.img-part-warpper').css('left','0px');
	slide.children('.img-part-topRight').children('.img-part-warpper').css('top','0px');
	slide.children('.img-part-bottomLeft').children('.img-part-warpper').css('bottom','0px');
	slide.children('.img-part-bottomRight').children('.img-part-warpper').css('right','0px');
}
var changeAni = function(slide,newSlide) {
	newSlide.addClass('next');
	
	slide.children('.img-part-topLeft').children('.img-part-warpper').animate({
		left: "100%",
	},1000);
	slide.children('.img-part-topRight').children('.img-part-warpper').animate({
		top: "100%",
	},1000);
	slide.children('.img-part-bottomLeft').children('.img-part-warpper').animate({
		bottom: "100%",
	},1000);
	slide.children('.img-part-bottomRight').children('.img-part-warpper').animate({
		right: "100%",
	},1000);

}

var homeslider = function() {
	$('#slider a.banner-img').each(function() {
		var $a = $(this);
		var src = $a.attr('href');
		var alt = $a.html();
		//topLeft
		addDiv($a,src,alt,'img-part-topLeft');
		//topRight
		addDiv($a,src,alt,'img-part-topRight');
		//bottomLeft
		addDiv($a,src,alt,'img-part-bottomLeft');
		//bottomRight
		addDiv($a,src,alt,'img-part-bottomRight');
		$a.remove();
	})                                                                                                                     
}

var addDiv = function(self,src,alt,position) {
	var $img = $('<a/>').addClass('image');
	var $wrapper = $('<div/>').addClass('img-part-warpper');
	var $imgwrapper = $('<div/>').addClass('imgwrapper');
	var $div = $('<div/>').addClass('img-part').addClass(position);
	$img.attr('href',src);
	$img.html(alt);
	$img.appendTo($imgwrapper);
	$imgwrapper.appendTo($wrapper);
	$wrapper.appendTo($div);
	self.after($div);
}
