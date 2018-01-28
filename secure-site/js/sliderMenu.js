//$(document).ready(function () {

$.fn.secondLevelMenu = function (slideItem) {
	var container = $(this);
	var slidingElement = $(slideItem);
	var lineWidth = slidingElement.outerWidth();
	var firstLi = container.children().first();
	var offsetFirst = firstLi.position();
	var widthFirst = firstLi.outerWidth();
	var firstCenter = ((offsetFirst.left + (widthFirst / 2)) - (lineWidth / 2));

	slidingElement.css({
		left: (container.find('.active').position().left + (container.find('.active').outerWidth() / 2)) - (lineWidth / 2) - offsetFirst.left + 'px'
	});

	container.children().each(function (index) {

		$(this).click(function () {
			$(".second-level-menu a").removeClass('active');
			$(this).addClass('active');
			slidingElement.animate({
				left: (container.find('.active').position().left + (container.find('.active').outerWidth() / 2)) - (lineWidth / 2) - offsetFirst.left + 'px'
			});
			$(".third-level-menu").load($(this).attr('data-menu'), function () { //add event to load 3rd level menu contents
				$('.third-level-menu').thirdLevelMenu('.indicator');
			});
			$(".sub-content").load($(this).attr('href'));
			return false;
		});
	});
}

$.fn.thirdLevelMenu = function (slideItem) {
	var container = $(this);
	var slidingElement = $(slideItem);
	var lineWidth = slidingElement.outerWidth();
	var firstLi = container.children().first();

	container.children().each(function (index) {

		$(this).click(function () {
			$(".third-level-menu a").removeClass('active');
			$(this).addClass('active');
			$(".sub-content").load($(this).attr('href'));
			return false;
		});

	});

}
