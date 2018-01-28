$(document).ready(function () {
	$(".second-level-menu").load('nav-my-accounts.html', function () { //load 2nd level menu contents
		$('.second-level-menu').secondLevelMenu('.indicator');
	});
	$(".third-level-menu").load('nav-holdings.html', function () { //load 3rd level menu contents
		$('.third-level-menu').thirdLevelMenu('.indicator');
	});
	$(".sub-content").load('holdings-summary.html'); //load page contents
	setup_switches();
	setup_left_nav();
});

function setup_switches() {
	$('.switch').find('.active-item').each(function () {
		$(this).parent().find('.switch-bg').css({
			'left': ($(this).position().left - 1) + 'px',
			'width': ($(this).outerWidth() + 2) + 'px'
		});
	});

	$('.switch').click(function () {
		var a = $(this).find('.active-item');
		var na = $(this).find('.item');
		a.removeClass('active-item').addClass('item');
		na.removeClass('item').addClass('active-item');
		$(this).parent().find('.switch-bg').css({
			'left': (na.position().left - 1) + 'px',
			'width': (na.outerWidth() + 2) + 'px'
		});
	});

	$('.on-off-switch').click(function () {
		var item = $(this).find('.item');
		var bg = $(this).find('.switch-bg');
		var state = item.hasClass('state-on');
		if (state) {
			item.removeClass('state-on').addClass('state-off').css({
				'text-align': 'left'
			}).text('Off');
			bg.css({
				'left': '',
				'right': '-1px'
			})
		} else {
			item.removeClass('state-off').addClass('state-on').css({
				'text-align': 'right'
			}).text('On');
			bg.css({
				'right': '',
				'left': '-1px'
			})
		}
	});
}

function setup_left_nav() {

	//$('.second-level-menu').secondLevelMenu('.indicator');
	//$('.third-level-menu').thirdLevelMenu('.indicator');

	var mainContent = $("#main-content");
	var mainContentDisplay = false;

	//localStorage.removeItem("notFirstLoad");

	function applyLeftMenu() {
		if ($('.left-menu-button').is(':hidden')) {
			mainContent.parent().css({
				'overflow': 'visible'
			});
		} else {
			mainContent.parent().css({
				'overflow': 'hidden'
			});

			if (localStorage.getItem("notFirstLoad") == null) {
				localStorage.setItem("notFirstLoad", 1);
				mainContent.css({
					'left': '245px'
				});
				setTimeout(rollOutLeftMenu, 2000);
			}
		}
	}

	function rollOutLeftMenu() {
		mainContent.css({
			'left': '0'
		});
	}

	$(".left-menu-button a").click(function () {
		if (mainContentDisplay) {
			mainContentDisplay = false;
			mainContent.css({
				'left': '0'
			});
		} else {
			mainContentDisplay = true;
			mainContent.css({
				'left': '245px'
			});
		}
		return false;
	});

	applyLeftMenu();

	$(window).on('resize', function () {
		applyLeftMenu();
	});

};


$( document ).ajaxComplete(function() {
  $(".table-sortable").tablesorter();
});