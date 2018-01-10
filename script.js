window.onload = function () {
"use strict";
//console.log();

	var tabLinks = document.querySelectorAll("#tabs > li > a"),
		tabs = document.querySelectorAll("#tabs > li"),
		conts = document.querySelectorAll("#content > div");

	//console.log(tabContent)

	/* Обрезаем длинные называния ссылок */
	for (var i = 0; i < tabLinks.length; i++) {
		if (tabLinks[i].textContent.length > 15) {
			tabLinks[i].textContent = tabLinks[i].textContent.slice(0, 15) + "...";
		}
	}

	/* Вкладки */
	function clearClasses(array) {
		for (var i = 0; i < tabs.length; i++) {
			tabs[i].classList = "tab";
		}
	}

	function clearContClasses(array) {
		for (var i = 0; i < conts.length; i++) {
			conts[i].classList = "cont";
		}
	}

	function showContBox(array) {
		for (var i = 0; i < conts.length; i++) {
			return conts[i].style.display = "block";
		}
	}

	for (var i = 0; i < tabs.length; i++) {
		let k = i;
		tabs[i].onclick = function () {
			clearClasses();
			clearContClasses();
			this.classList = "selected_tab";
			conts[k].classList = "show";
		}
	}

	// tabs[i].addEventListener('click', function () {
	// 	alert(1);
	// })
}
