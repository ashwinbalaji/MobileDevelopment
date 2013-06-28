/*function doClick(e) {  
    alert($.label.text);
}*/

function popUp(e){
	
	
	/*if($.win1.backgroundColor != "#000"){
		$.win1.backgroundColor = "#000";
	}
		else if($.win1.backgroundColor == "#000"){
		$.win1.backgroundColor = "#F7F3F7";
	}*/
	 // create request
	/*var data = {"collegeID":3,"collegeName":"University Departments of Anna University, Chennai - SAP Campus"};
	 
    var xhr = Titanium.Network.createHTTPClient();
    //set timeout
    xhr.setTimeout(10000);

    //Here you set the webservice address and method
    xhr.open('POST', "http://10.0.2.2:82/calais/connect.php?");

    //set enconding
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    //send request with parameters
    xhr.send("data="+JSON.stringify(data));

    // function to deal with errors
    xhr.onerror = function() {
	alert("error");
    };

    // function to deal with response
    xhr.onload = function() {
        var obj = JSON.parse(this.responseText);
		alert("obj");
    };*/
   
/*var data = {};
data.firstName = $.firstNameTxt.value;
data.lastName = $.lastNameTxt.value;
var url = "http://10.0.2.2:82/calais/connect.php?data="+JSON.stringify(data);
var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
        // this.responseText holds the raw text return of the message (used for JSON)
        // this.responseXML holds any returned XML (used for SOAP web services)
        // this.responseData holds any returned binary data
        Ti.API.debug(this.responseText);
        alert('success'+this.responseText);
    },
    onerror: function(e) {
        Ti.API.debug(e.error);
        alert('error');
    },
    timeout:5000
});

xhr.open("GET", url);
alert(data);
xhr.send();*/
alert("win1");
$.win1.close();
$.win2.open();

}

$.win1.open();
