window,onload = function() {
	//var greating;
	//var element = document.getElementById("intro");

	var button = document.querySelector("button");
	button.addEventListener("click", addText);


	function addText() {
		var textFeild = document.getElementById("textfield");
		var msg = "<h1> HOT PINK!</h1>";
		textFeild.innerHTML = msg;
 	}

}