//AIzaSyDVmCT72skg8UIfLNxobO1sGHdguGivzZ8
/*function initialize()
{
	alert('init run')
	var mapProp = {
		center:new google.maps.LatLng(51.508742,-0.120850),
		zoom:5,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map=new google.maps.Map(document.getElementById("googleMap")
		,mapProp);
}
alert("init created");
google.maps.event.addDomListener(window, 'load', initialize());
alert("init called");*/
//#############################################################################################################
//-------------------------------------begin part to uncomment (postcode to latlong)---------------------------
//#############################################################################################################
/*var postcode = 'RG27HG'
if(window.XMLHttpRequest){
	xmlhttp = new XMLHttpRequest();
} else {
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
}
alert('good so far')
xmlhttp.open("GET", "PC.php?postcode = "+postcode, false);
alert('url opened')
xmlhttp.send();
alert("request sent. status: ")
if(xmlhttp.status == 200) {
	var xmlDoc = xmlhttp.responseXML;
	var lat = 0
	var lng = 0
	var latlst = xmlDoc.getElementsByTagName("lat");
	var lnglst = xmlDoc.getElementsByTagName("lng");
	lat = (latlst[0].childNodes[0].nodeValue);
	lng = (lnglst[0].childNodes[0].nodeValue);
	alert(lat+" "+lng)
}*/
//#######################################################################################
//----------------------------------end part to uncomment--------------------------------
//#######################################################################################

/*function call_this() {
	var text_area = document.forms["input"]["species"].value;
	var near_area = document.forms["input"]["location"].value;
	alert(near_area); 
	alert(text_area);
	if (near_area.length() >= 6 && near_area.length() <= 7){
		var validPostcode = true;
	} else {
		alert("Postcode is invalid");
		var validPostcode = false;
	}
	var marker=new google.maps.Marker({
  		position:myCenter,
  	});

	marker.setMap(map)
	return false;
	}*/



/*google.maps.event.addDomListener(window, 'load', initialize);
	var marker=new google.maps.Marker({
		position:myCenter,
  		animation:google.maps.Animation.BOUNCE
  	});

	marker.setMap(map);*/

