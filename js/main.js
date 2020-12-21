window.onload = function() {
	var degS, degM, degH;

	showTime();

	setInterval(function (){	
		showTime();
	},1000);

	function showTime() {
		date    = new Date();
		seconds = date.getSeconds();
		minutes = date.getMinutes();
		houres  = date.getHours();

		degS = seconds * 6 ;
		degM = minutes * 6 ;
		degH = houres  * 30 ;

		second.style.transform = "rotate(" + degS + "deg)";
		minute.style.transform = "rotate(" + degM + "deg)";
		houer.style.transform  = "rotate(" + degH + "deg)";

		(degM >= 90 )  ? houer.style.transform = "rotate(" + (degH + 7.5) + "deg)"  : '';
		(degM >= 180 ) ? houer.style.transform = "rotate(" + (degH + 15)  + "deg)"  : '';
		(degM >= 270 ) ? houer.style.transform = "rotate(" + (degH + 22.5) + "deg)" : '';

	}

};