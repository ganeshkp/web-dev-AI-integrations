// var hour=new Date().getHours();

var hour=5;
// morning=4am to 11am
// day 12am to 6pm
// evening 7pm to 10pm
// night 11pm to 3am

if (hour >= 4 && hour <= 11){
	document.getElementById("welcomeMsg").innerHTML="GOOD MORNING";
	document.body.style.backgroundColor="white";
	document.getElementById("welcomeImg").src="morning.jpg"
} else if (hour >= 12 && hour <= 18){
	document.getElementById("welcomeMsg").innerHTML="GOOD DAY";
	document.body.style.backgroundColor="yellow";
	document.getElementById("welcomeImg").src="afternoon.jpg"
} else if (hour >= 19 && hour <= 22){
	document.getElementById("welcomeMsg").innerHTML="GOOD EVENING";
	document.body.style.backgroundColor="pink";
	document.getElementById("welcomeImg").src="evening.jpg"
} else{
	document.getElementById("welcomeMsg").innerHTML="GOOD NIGHT";
	document.body.style.backgroundColor="gray";
	document.getElementById("welcomeImg").src="night.jpg"
}