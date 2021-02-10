var cnt=0;
var str1="";
var str2="l";
var str3="#";	
var parent="#l1";
function cntline() {
	if(cnt===21){
		location.href="implements.html";
		return 0;
	}
	switch(cnt)
	{
		case 0:
			document.getElementById('abc').innerHTML="Next";
			document.getElementById('btns').style.width="50%";
			document.getElementById('abc').style.marginLeft="12%";
			document.getElementById('abcd').style.marginLeft="10%";
			document.getElementById('abcd').style.visibility = "visible";
			document.getElementById('explain').style.visibility = "visible";
			document.getElementById('explain').style.width = "40%";
			document.getElementById('explain').style.marginLeft ="5%";
			document.getElementById('explain').style.marginRight ="5%";
		break;
		case 1:
			document.getElementById('explain').innerHTML="Creation of an interface Action";
			document.getElementById('l1').style.color="blue";
			document.getElementById('l1').style.fontSize="1.3em";
			location.href = "#l1";
			document.getElementById('interface').style.visibility="visible";
		break;
		case 2:
			document.getElementById('explain').innerHTML="Run,Fly and Eat method declared.";
			document.getElementById('p1').style.visibility="visible";
			document.getElementById('p2').style.visibility="visible";
			document.getElementById('p3').style.visibility="visible";
			document.getElementById('l2').style.color="yellow";
		break;
		case 3:
			document.getElementById('explain').innerHTML="Class Animal implementing Action interface";
			location.href = "#l3";
			document.getElementById('l2').style.color="white";
			document.getElementById('l1').style.color="white";
			document.getElementById('l2').style.fontSize="1em";
			document.getElementById('l3').style.color="blue";
			document.getElementById('l3').style.fontSize="1.3em";
			document.getElementById('animal').style.visibility="visible";
		break;

		case 4:
			document.getElementById('explain').innerHTML="Implementation of Run method";
			document.getElementById('p4').style.visibility="visible";	
			document.getElementById('l4').style.color="yellow";
		break;

		case 5:
			document.getElementById('explain').innerHTML="Implementation of Eat method";
			document.getElementById('p5').style.visibility="visible";
			document.getElementById('l4').style.color="blue";
			document.getElementById('l5').style.color="yellow";
		break;

		case 6:
			document.getElementById('explain').innerHTML="Class Bird implementing Action interface";
			location.href = "#l6";
			document.getElementById('l3').style.color="white";
			document.getElementById('l4').style.color="white";
			document.getElementById('l5').style.color="white";
			document.getElementById('l3').style.fontSize="1em";
			document.getElementById('l6').style.color="blue";
			document.getElementById('l6').style.fontSize="1.3em";
			document.getElementById('bird').style.visibility="visible";
		break;

		case 7:
			document.getElementById('explain').innerHTML="Implementation of Fly method";
			document.getElementById('p6').style.visibility="visible";
			document.getElementById('l7').style.color="yellow";
		break;

		case 8:
			document.getElementById('explain').innerHTML="Implementation of Eat method";
			document.getElementById('p7').style.visibility="visible";
			document.getElementById('l7').style.color="blue";
			document.getElementById('l8').style.color="yellow";
		break;

		case 9:
			document.getElementById('explain').innerHTML="Run,Fly and Eat method declared.";
			document.getElementById('l6').style.color="white";
			document.getElementById('l7').style.color="white";
			document.getElementById('l8').style.color="white";
			document.getElementById('l6').style.fontSize="1em";
			document.getElementById('l9').style.color="blue";
			document.getElementById('l9').style.fontSize="1.3em";
			str1="l9"
		break;
		default:
			document.getElementById(str1).style.color="white";
			document.getElementById(str1).style.fontSize="1em";
			str1 = str2 + cnt.toString();
			document.getElementById(str1).style.color="blue";
			document.getElementById(str1).style.fontSize="1.3em";
			str3 = "#"+str1;
			console.log(str3);
			location.href=str3;			 
		break;
	}	
	if(cnt===9){
		document.getElementById('explain').innerHTML="Driving class of program";
	}
	if(cnt===11){
		document.getElementById('explain').innerHTML="Main method of driving class";
	}
	if(cnt===12){
		document.getElementById('explain').innerHTML="";
	}
	if(cnt===13){
		location.href="#lion";
		document.getElementById('explain').innerHTML="Lion came in exsistence...";
		document.getElementById('lion').style.visibility="visible";
	}
	if(cnt===14){
		document.getElementById('p1').style.backgroundColor = "orange";
		document.getElementById('p4').style.backgroundColor = "orange";
		document.getElementById('lion').src="../img/lionrun.jpg";
		document.getElementById('explain').innerHTML="Lion running..."
	}
	if(cnt===15){
		document.getElementById('p1').style.backgroundColor = "pink";
		document.getElementById('p4').style.backgroundColor = "pink";
		document.getElementById('p2').style.backgroundColor = "orange";
		document.getElementById('p5').style.backgroundColor = "orange";
		document.getElementById('explain').innerHTML="Lion sleeping ....";
		document.getElementById('lion').src="../img/lionsleep.jpg";
	}	
	if(cnt===16){
		document.getElementById('p2').style.backgroundColor = "pink";
		document.getElementById('p5').style.backgroundColor = "pink";
		location.href="#duck";
		document.getElementById('duck').style.marginLeft="9%";
		document.getElementById('explain').innerHTML="Duck came in exsistence...";
		document.getElementById('duck').style.visibility="visible";
	}
	if(cnt===17){
		document.getElementById('p3').style.backgroundColor = "orange";
		document.getElementById('p6').style.backgroundColor = "orange";
		document.getElementById('explain').innerHTML="duck flying..."
		document.getElementById('duck').src="../img/duckfly.jpg";
	}
	if(cnt===18){
		document.getElementById('p3').style.backgroundColor = "pink";
		document.getElementById('p6').style.backgroundColor = "pink";
		document.getElementById('p2').style.backgroundColor = "orange";
		document.getElementById('p7').style.backgroundColor = "orange";
		document.getElementById('explain').innerHTML="duck sleeping ....";
		document.getElementById('duck').src="../img/ducksleep.jpg";
	}	
	if(cnt===19){
		document.getElementById('p2').style.backgroundColor = "pink";
		document.getElementById('p7').style.backgroundColor = "pink";
	}
	cnt++;
}