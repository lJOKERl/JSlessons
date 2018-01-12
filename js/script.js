window.onload = function () {
"use strict";
//console.log();

	var tabLinks = document.querySelectorAll("#tabs > li > a"),
		tabs = document.querySelectorAll("#tabs > li"),
		conts = document.querySelectorAll("#content > div"),
		accHead = document.querySelectorAll(".acc_header"),
		accord = document.querySelectorAll(".accordeon");

	/* Обрезаем длинные называния ссылок */
	for (var i = 0; i < tabLinks.length; i++) {
		if (tabLinks[i].textContent.length > 15) {
			tabLinks[i].textContent = tabLinks[i].textContent.slice(0, 15) + "...";
		}
	}

	/* Вкладки */
	/* Функция принимает массив элементов и class который нужно им присвоить */
	function clearClasses(arr, cls) {
		for (var i = 0; i < arr.length; i++) {
			arr[i].classList = cls;
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
			clearClasses(tabs, "tab");
			clearClasses(conts, "cont");
			this.classList = "selected_tab";
			conts[k].classList = "show";
		}
	}

	/* Сворачиваем-разворачиваем блоки */
	for (var i = 0; i < accHead.length; i++) {
		let k = i;
		accHead[i].onclick = function (e) {
			clearClasses(accord, "accordeon");
			this.nextElementSibling.classList.toggle("show");

			if (accord[k].classList.contains("show")) {
				clearClasses(accHead, "acc_header");
				this.classList.add("show");
			}
		}
	}
}
