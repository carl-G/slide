$(function(){
	var bannerNum,thisIndex;
	$('.prev').click(function (){
		bannerNum = parseInt($('.banner').length);

		for (var i = 0; i < bannerNum;i++) {
			var self = $($('.banner')[i]);
			if(self.hasClass("this")) {
				var Index = i;
			} else {
				self.removeClass('this');
			}
		}
		$($('.banner')[Index]).removeClass('this');
		if (Index == 0) {
			thisIndex = bannerNum - 1;
		} else {
			thisIndex = Index - 1;
		}
		
		console.log(Index,thisIndex);
		$($('.banner')[thisIndex]).addClass('this');
	});
	$('.next').click(function (){
		bannerNum = parseInt($('.banner').length);
		
		for (var i = 0; i < bannerNum;i++) {
			var self = $($('.banner')[i]);
			if(self.hasClass("this")) {
				var Index = i;
			} else {
				self.removeClass('this');
			}
		}
		$($('.banner')[Index]).removeClass('this');
		if (Index == bannerNum) {
			thisIndex = 0;
		} else {
			thisIndex = Index + 1;
		}
		console.log(Index,thisIndex);
		$($('.banner')[thisIndex]).addClass('this');
	})

})
