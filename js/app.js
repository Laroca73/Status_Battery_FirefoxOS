$(function() {

  $("#get-battery").click(function() {
    var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

    var time= battery.dischargingTime; //alert(time);
    var hrs = Math.floor(time/3600);
    var min = Math.floor((time%3600)/60);
    time = time % 60;
    if(time<10) time = "0" + time;
    if(min<10) min = "0" + min;

    if (battery.charging == true) { 
    	$("#battery-pct0").text(  "Yes, it's charging!");
    	$("#battery-pct1").text( Math.round( battery.level * 100) + "% available battery");  
    } else {
    	$("#battery-pct0").text ("Not charging");
        $("#battery-pct1").text( Math.round( battery.level * 100) + "%  (" + hrs +"h. "+ min +"m.)  remaining battery");
    }
   
  });
});