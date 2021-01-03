function welcome(){
	alert("welcome! Press any key or click on the screen to make pikachu jump over the pokeball.")
}
var de,ds;
var character=
document.getElementById("character");
var block=
document.getElementById("block");
function jump(){
	if(character.classList!="animate"){
	character.classList.add("animate");
	}
	setTimeout(function(){
		character.classList.remove("animate");
		},500);
	ds=new Date();
}
var checkDead= setInterval(function(){
	var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	if(blockLeft<20 && blockLeft>0 && characterTop>=130){
		block.style.animation="none";
		block.style.display="none";
		de=new Date();
		var score=ds-de;
		document.write("Your Score! ",Math.abs(score));
		alert("You lose!  Refresh the page to play again.");
	}
},10);
