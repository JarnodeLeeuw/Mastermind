var code = [];
var colors = ['red', 'blue', 'yellow', 'green', 'black', 'purple', 'white', 'brown'];

function genCode() {
	var i;
	for (i = 0; i <4; i++) {
		var color = colors[Math.floor(Math.random() * colors.length)];
		console.log ("number =" + color)
		code.push(color);
	}
}

function viewCode(){
	for (i = 1; i <5; i++){
		document.getElementById('code' + i).style.fill = code[i-1];
		document.getElementById('code' + i).style.stroke = 'black';//BEWAREN! LAAT CODE ZIEN!!
}
}