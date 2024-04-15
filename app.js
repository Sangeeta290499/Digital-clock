function displayTime(){
    let d = new Date();
    let hour = d.getHours();  //give current hours value like for 10pm it gives 22hr
    let min = d.getMinutes(); //give current min values (0 to 59)
    let sec = d.getSeconds();  //give current sec values (0 to 59)
    let amOrPm = "AM";
    
    if(hour >= 12){
        amOrPm = "PM";
    }
    if(hour > 12){
        hour = hour - 12;
    }
    if(hour < 10){
        hour = "0" + hour;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec +" "+ amOrPm; 
}
setInterval(displayTime, 1000);
