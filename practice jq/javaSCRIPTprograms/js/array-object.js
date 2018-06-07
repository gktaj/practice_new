var companies = [
	{"name": "Auctor Velit Aliquam Corp.", "category": "Asset Management", "start": "14/08/2017", "end": "Wed, 28th, 2017"},

	{"name": "Auctor Velit Aliquam Corp.", "category": "Asset Management", "start": "14/08/2014", "end": "Wed, 28th, 2014"},
	{"name": "Iaculis Lacus Institute", "category": "Human Resources", "start": "10/01/2015", "end": "Tue, 6th, 2016"},
	{"name": "Ultrices Posuere Cubilia Consulting", "category": "Customer Service", "start": "23/12/2016", "end": "Sat, 1st, 2018"},
	{"name": "Nulla Industries", "category": "Advertising", "start": "10/06/2017", "end": "Thu, 8th, 2018"},
	{"name": "Velit Consulting", "category": "Asset Management", "start": "23/10/2018", "end": "Thu, 23rd, 2018"},
	{"name": "Et Magnis Dis Consulting", "category": "Legal Department", "start": "15/12/2018", "end": "Sat, 25th, 2019"},
	{"name": "Ac Associates", "category": "Accounting", "start": "17/02/2018", "end": "Tue, 21st, 2018"},
	{"name": "Mus Industries", "category": "Accounting", "start": "15/04/2019", "end": "Sat, 13th, 2019"}



];
//"For" Loop
var tx1 = "";
 tx1+="<tr><th>#</th><th>Name</th><th>Category</th><th>Start Date</th><th>End Date</th></tr>";
for (var i = 0; i < companies.length; i++) {
if(companies[i].end.substring(companies[i].end.lastIndexOf(',')+1).trim()<="2017"	){
   tx1+="<tr><td>"+companies[i].name.charAt(0)+"</td><td>"+companies[i].name+"</td><td>"+companies[i].category+"</td><td>"+companies[i].start+"</td><td>"+companies[i].end.substring(companies[i].end.lastIndexOf(',')+1).trim()+"</td></tr>"
}
}
document.getElementById('meta1').innerHTML="<table class='table'>"+tx1+"</table>";

//"For In" Loop
var tx2 = "";
 tx2+="<tr><th>Name</th><th>Category</th><th>Start Date</th><th>End Date</th></tr>";
for (var company in companies) {
 if(companies[company].start.substring(6) >= "2019"	){
  tx2+="<tr><td>"+companies[company].name+"</td><td>"+companies[company].category+"</td><td>"+companies[company].start.substring(6)+"</td><td>"+companies[company].end+"</td></tr>"
}
}
document.getElementById('meta2').innerHTML="<table class='table'>"+tx2+"</table>";

//forEach Loop
var tx3 = "";
 tx3+="<tr><th>#</th><th>Name</th><th>Category</th><th>Start Date</th><th>End Date</th></tr>";
companies.forEach(function(company,index) {
  var str = company.start;
var str_sub = str.substr(str.lastIndexOf("/")+1);
var end = company.end;
var end_sub =end.substr(end.lastIndexOf(",")+1);
 if(str_sub >= 2017 &&	str_sub < 2019){
     tx3+="<tr><td>"+index+"</td><td>"+company.name+"</td><td>"+company.category+"</td><td>"+str_sub+"</td><td>"+end_sub+"</td></tr>"
   }
});
document.getElementById('meta3').innerHTML="<table class='table'>"+tx3+"</table>";

var tx4 = "";
 tx4+="<tr><th>Name</th><th>Category</th><th>Start Date</th><th>End Date</th></tr>";
var companiesFilter = companies.filter(function(company){
	var str = company.start;
	var str_sub = str.substr(str.lastIndexOf("/")+1);
	if(str_sub>=2018){
return tx4+="<tr><td>"+company.name+"</td><td>"+company.category+"</td><td>"+str_sub+"</td><td>"+company.end+"</td></tr>"
	}
});
document.getElementById('meta4').innerHTML="<table class='table'>"+tx4+"</table>";

// var tx5 = "";
//  tx5+="<tr><th>Name</th><th>Category</th><th>Start Date</th><th>End Date</th></tr>";
// var companiesFilter = companies.filter(company => tx5+="<tr><td>"+company.name+"</td><td>"+company.category+"</td><td>"+company.start+"</td><td>"+company.end+"</td></tr>");
// document.getElementById('meta5').innerHTML="<table class='table'>"+tx5+"</table>";
var tx5 = "";
 tx5+="<tr><th>Name</th><th>Category</th><th>Start Date</th><th>End Date</th></tr>";
var companiesFilter = companies.map(company =>  tx5+="<tr><td>"+company.name+"</td><td>"+company.category+"</td><td>"+company.start.substr(company.start.lastIndexOf('/')+1)+"</td><td>"+company.end+"</td></tr>");
document.getElementById('meta5').innerHTML="<table class='table'>"+tx5+"</table>";
