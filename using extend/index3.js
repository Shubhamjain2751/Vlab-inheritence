var cnt=0;
var str1="";
var str2="l";
var str3="#";	
var parent="#l1";
function cntline() {
	if(cnt===20){
		location.href="Extends.html";
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
			document.getElementById('explain').innerHTML="Creation of a class Action.";
			document.getElementById('l1').style.color="blue";
			document.getElementById('l1').style.fontSize="1.3em";
			location.href = "#l1";
			document.getElementById('class').style.visibility="visible";
		break;
		case 2:
			document.getElementById('explain').innerHTML="Declaring and defining Sleep method.";
			document.getElementById('p1').style.visibility="visible";			
			document.getElementById('l2').style.color="yellow";
		break;
		case 3:
			document.getElementById('explain').innerHTML="Declaring and difining Eat method";
			document.getElementById('p2').style.visibility="visible";
			document.getElementById('l2').style.color="blue";
			document.getElementById('l3').style.color="yellow";
		break;

		case 4:
			location.href="#l4";
			document.getElementById('explain').innerHTML="Creating a class Amimal which extends class Action.";
			document.getElementById('animal').style.visibility="visible";
			document.getElementById('l1').style.color="white";
			document.getElementById('l2').style.color="white";
			document.getElementById('l3').style.color="white";
			document.getElementById('l1').style.fontSize="1em";
			document.getElementById('l4').style.color="blue";
			document.getElementById('l4').style.fontSize="1.3em";
		break;

		case 5:
			document.getElementById('explain').innerHTML="Declaring and defining a method of run.";
			document.getElementById('p3').style.visibility="visible";
			document.getElementById('l5').style.color="yellow";
		break;

		case 6:
			document.getElementById('bird').style.visibility="visible";
			document.getElementById('l4').style.color="white";
			document.getElementById('l5').style.color="white";
			document.getElementById('l4').style.fontSize="1em";
			document.getElementById('explain').innerHTML="Creation of class Bird which extends class Action.";
			location.href = "#l6";
			document.getElementById('l6').style.color="blue";
			document.getElementById('l6').style.fontSize="1.3em";
			//document.getElementById('bird').style.visibility="visible";
		break;

		case 7:
			document.getElementById('p4').style.visibility="visible";
			document.getElementById('explain').innerHTML="Declaring and defining method Fly. ";
			document.getElementById('l7').style.color="yellow";
		break;

		default:
			if(cnt===8){
				document.getElementById('l6').style.fontSize="1em";
				document.getElementById('l6').style.color="white";
				document.getElementById('l7').style.color="white";
				str1="l7";	
			}
			else
			{
				document.getElementById(str1).style.color="white";
				document.getElementById(str1).style.fontSize="1em";
				str1 = str2 + cnt.toString();
				document.getElementById(str1).style.color="blue";
				document.getElementById(str1).style.fontSize="1.3em";
				str3 = "#"+str1;
				console.log(str3);
				location.href=str3;
			}			 
		break;
	}	
	if(cnt===8){
		document.getElementById('explain').innerHTML="Driving class of program.";
	}
	if(cnt===9){
		document.getElementById('explain').innerHTML="Main method of driving class.";
	}
	if(cnt===10){
		document.getElementById('explain').innerHTML="Object Dog of class Amimal created.";
		document.getElementById('lion').style.visibility="visible";
	}
	if(cnt===11){
		document.getElementById('explain').innerHTML="Object Duck of class Bird created.";
				location.href="#duck";
		document.getElementById('duck').style.marginLeft="9%";
		document.getElementById('duck').style.visibility="visible";
	}
	if(cnt===12){
		document.getElementById('p3').style.backgroundColor = "orange";
		document.getElementById('lion').src="../img/lionrun.jpg";
		document.getElementById('explain').innerHTML="Lion Running.";		
	}	
	if(cnt===13){
		document.getElementById('p3').style.backgroundColor = "pink";
		document.getElementById('p1').style.backgroundColor = "orange";
		document.getElementById('lion').src="../img/lioneat.jpg";
		document.getElementById('explain').innerHTML="Lion Eating.";		
	}
	if(cnt===14){
		document.getElementById('p1').style.backgroundColor = "pink";
		document.getElementById('p2').style.backgroundColor = "orange";
		document.getElementById('lion').src="../img/lionsleep.jpg";
		document.getElementById('explain').innerHTML="Lion Sleeping.";
	}
	if(cnt===15){
		document.getElementById('p2').style.backgroundColor = "pink";
		document.getElementById('p4').style.backgroundColor = "orange";
		document.getElementById('duck').src="../img/duckfly.jpg";
		document.getElementById('explain').innerHTML="Duck Flying.";
	}
	if(cnt===16){
		document.getElementById('p4').style.backgroundColor = "pink";
		document.getElementById('p1').style.backgroundColor = "orange";
		document.getElementById('duck').src="../img/duckeat.jpg";
		document.getElementById('explain').innerHTML="Duck Eating.";
	}
	if(cnt===17){
		document.getElementById('p1').style.backgroundColor = "pink";
		document.getElementById('p2').style.backgroundColor = "orange";
		document.getElementById('duck').src="../img/ducksleep.jpg";
		document.getElementById('explain').innerHTML="Duck Sleeping.";
	}
	if(cnt===18){
		document.getElementById('p2').style.backgroundColor = "pink";
		document.getElementById('explain').innerHTML=" ";
	}
		
	cnt++;
}