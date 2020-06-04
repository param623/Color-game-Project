var numSquares = 6;
var colors = getSelectColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numSquares = 3;
	colors = getSelectColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];	
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numSquares = 6;
	colors = getSelectColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];	
			squares[i].style.display = "block";
	}
});
colorDisplay.textContent = pickedColor;

for(var i = 0; i< squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!!"
			reset.textContent = "Play again?";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again!!"
		}
	});
}

function changeColor(color){
	for(var i=0; i < squares.length; i++){
		squares[i].style.background = color;
	}
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function getSelectColors(num){
	var arr = [];
	for(var i=0 ; i < num ; i++){
		arr.push(randomColors());
	}
	return arr;
}

function randomColors(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

reset.addEventListener("click", function(){
	colors = getSelectColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
	for(var i = 0 ; i < squares.length ; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
})