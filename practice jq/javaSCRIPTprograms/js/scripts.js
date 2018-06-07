document.getElementById('actionForm').addEventListener("submit",bookmarker);
	
function bookmarker(e){
	
	e.preventDefault();
	var webName = document.getElementById('websiteName').value;
	var webUrl = document.getElementById('websiteUrl').value;

	if(!vaidationForm(webName,webUrl)){
		
		return false;
	}
	var bookmarkList ={
		Name:webName,
		URL:webUrl
	
	}
	if(localStorage.getItem("outbookmark")==null){
		var newbookmark=[];
		newbookmark.push(bookmarkList);
		localStorage.setItem("outbookmark",JSON.stringify(newbookmark));
		alert("if");
		
	}
	else{
		var newbookmark =JSON.parse(localStorage.getItem("outbookmark"));
		newbookmark.push(bookmarkList);
		localStorage.setItem("outbookmark",JSON.stringify(newbookmark));
		alert("else");
	}
	document.getElementById('actionForm').reset();
	fetchbookmark();
}

/*window.onload = function() {
document.getElementById('actionForm').reset();
}
*/
function fetchbookmark(){
	
	var newbookmark =JSON.parse(localStorage.getItem("outbookmark"));
	var resultbookmark =document.getElementById("bookmarkResult");
	resultbookmark.innerHTML="";
	for(var i =0;i<newbookmark.length;i++){
		var Name =newbookmark[i].Name;
		var URL =newbookmark[i].URL;

 /*var pattern = /^((http|https|ftp):\/\/)/;

if(!pattern.test(URL)) {
    URL = "https://" + URL;
}*/

 
		resultbookmark.innerHTML+='<div class="card-header">'+'<h3>'+ Name +' <a href="'+URL+'" class="btn btn-info">Visit</a> '+ ' <a href="#" class="btn btn-danger" onclick="deletebookmark(\''+URL+'\')"> delete </a>'+'</h3>'+'</div>'
		//resultbookmark.innerHTML +="<div class='card-body'>" + '<h3>' + Name +'<a class="btn btn-default" href="'+URL+'">Visit</a>'+'<a class="btn btn-default" onclick="deletethis(\''+URL+'\')" href="#">Delete</a>'+'</h3>'+'</div>';
		
	}
	}
	
function deletebookmark(URL){
	var newbookmark =JSON.parse(localStorage.getItem("outbookmark"));
		for(var i =0;i<newbookmark.length;i++){
		if (newbookmark[i].URL==URL){
			
		newbookmark.splice(i,1);
		}
	}
	
		localStorage.setItem("outbookmark",JSON.stringify(newbookmark));
			fetchbookmark();
}

function vaidationForm(webName,webUrl){
	if(!webName || !webUrl){
		alert('Please fill Both fields');
		return false;
	}
	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);
var t = webUrl;

/*if (t.match(regex)) {
  alert("Successful match");
} else {
  alert("No match");
}*/
if(!t.match(regex)){
	alert('Please Enter Valid URL');
	return false;
	
}
return true;
}

