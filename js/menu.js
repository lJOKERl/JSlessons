var menuArr = [
	"<a href='index.html'>Главная</a>", 
	"<a href='async.html'>Асинхронность</a>",
	"<a href='bom.html'>БОМ</a>"
];

var ul = document.querySelector('#menu');

for (var i = 0; i < menuArr.length; i++) {
	var li = document.createElement("li");

	li.innerHTML = menuArr[i];
	ul.appendChild(li);
}	



