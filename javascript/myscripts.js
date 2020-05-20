function showAlert(){
	alert('You clicked my button, sucker!!!!!');
}

function testWritingToLog(){
	let noun1 = document.getElementById("noun1").value;
	let noun2 = document.getElementById("noun2").value;
	let verb1 = document.getElementById("verb1").value;
	let adjective1 = document.getElementById("adjective1").value;
	let verb2 = document.getElementById("verb2").value;
	let pronoun1 = document.getElementById("pronoun1").value;
	let pronoun2 = document.getElementById("pronoun2").value;

	let madLib = pronoun1+" took the "+noun1+
		         " and "+verb2+" on it really hard with a "+verb1+" and then put it next to the "+noun2+"."+
		         " Then "+pronoun1+" went "+adjective1+" to "+ pronoun2+
				 " with the "+noun1+". "+pronoun2 +" liked it but "+pronoun1+" gave the "+noun2+" to "+pronoun2+
				 ", not the "+noun1+
	             " that he liked.  It was a "+adjective1+" day!!!"

	document.getElementById("madLibResult").innerHTML = madLib;
}