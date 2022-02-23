var employeeData;
function hello(flag){
	var x=" " ,i;
	var xTable = " ";
	
	xTable = '<table class="table table-bordered  table-striped ">';
	xTable = xTable + '<thead class="thead-dark">';
	xTable = xTable + '<tr> <th scope="col">employeenumber</th> <th scope="col">Name</th> <th scope="col">Place</th> <th scope="col">State</th> <th scope="col">Department</th> </tr>'
	xTable = xTable + '</thead>';
	
	xTable = xTable + '<tbody>';
	if(flag==3){
		var eno = parseInt(document.getElementById("form").value);
		eno=eno-101;
		xTable = xTable + '<tr> <th scope="row"> '+(eno+101)+' </th> <td>'+employeeData[eno].First+'</td> <td>'+employeeData[eno].Place+'</td> <td>'+employeeData[eno].state+'</td> </tr>';
		
	}
	else{
	for(var i=0;i<employeeData.length;i++){ 
		if(flag == 0){
			xTable = xTable + '<tr> <th scope="row"> '+(i+101)+' </th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].state+'</td> <td>'+employeeData[i].department+'</td> </tr>';
		}
		else if(flag==1 && i%2!=0){
			xTable = xTable + '<tr> <th scope="row"> '+(i+101)+' </th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].state+'</td> <td>'+employeeData[i].department+'</td></tr>';
		}
		else if(flag==2 && i%2==0){
			xTable = xTable + '<tr> <th scope="row"> '+(i+101)+' </th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].state+'</td> <td>'+employeeData[i].department+'</td></tr>';
		}
	}
	}
	xTable = xTable + '</tbody>';
	xTable = xTable + '</table>';
	
	document.getElementById("demo").innerHTML= xTable;
}

function myFunction() {
	
 document.getElementById("demo").innerHTML="";

}
employeeData=[{
    "First":"Bhagya",
    "Last":"B",
    "Place":"Nargund",
    "state":"Karnataka",
	"department":"Salsforce dev",
  },
  {
    "First":"Jothilakshami",
    "Last":"V",
    "Place":"Rajapalayam",
    "state":"TN",
	"department":"Salsforce dev",
  },
  {
    "First":"Aman",
    "Last":"Kumar",
    "Place":"Agra",
    "state":"UP",
	"department":"Salsforcedev",
  },
   {
    "First":"Nidhi",
    "Last":"Sham",
    "Place":"panaji",
    "state":"Goa",
	"department":"Salsforcedev",
  },
  {
    "First":"Shivang",
    "Last":"Gupta",
    "Place":"Greater Noida",
    "state":"UP",
	"department":"Salsforcedev",
  },
  {
    "First":"Shivani",
    "Last":"Gupta",
    "Place":"Haridwar",
    "state":"UK",
	"department":"Salsforcedev",
  },
  {
    "First":"Jyoti",
    "Last":"M",
    "Place":"pune",
    "state":"MH",
	"department":"Salsforcedev",
  },
  {
    "First":"Vihan",
    "Last":"Roshan",
    "Place":"Hubli",
    "state":"KA",
	"department":"SalsforceAdmin",
  },
  {
    "First":"Rishab",
    "Last":"Kumar",
    "Place":"Greater Noida",
    "state":"UP",
	"department":"SalsforceAdmin",
  },
  {
    "First":"Deepak",
    "Last":"Kumar",
    "Place":"Bhopal",
    "state":"MP",
	"department":"Salsforcedev",
  },
  {
    "First":"Anu",
    "Last":"Agarwal",
    "Place":"Noida",
    "state":"Delhi",
	"department":"SalsforceAdmin",
  },
  {
    "First":"Shubhangi",
    "Last":"vats",
    "Place":"Bangalore",
    "state":"KA",
	"department":"SalsforceAdmin",
  } ]









