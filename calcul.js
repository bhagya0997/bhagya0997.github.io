function add(){
	
	var x=document.getElementById('num1').value;
	var y=document.getElementById('num2').value;
	document.getElementById ('res').innerHTML =parseInt(x)+ parseInt(y);
	
}

function sub(){
	var x=document.getElementById('num1').value;
	var y=document.getElementById('num2').value;
	document.getElementById ('res').innerHTML =parseInt(x)- parseInt(y);
	
	}

function divide(){
    var x=document.getElementById('num1').value;
    var y=document.getElementById('num2').value;
    document.getElementById ('res').innerHTML =parseInt(x)/parseInt(y);
 }
 function mul(){
    var x=document.getElementById('num1').value;
    var y=document.getElementById('num2').value;
    document.getElementById ('res').innerHTML =parseInt(x)*parseInt(y);
 
 }