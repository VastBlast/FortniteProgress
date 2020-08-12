/* global $, document, */


//start = new Date(1582034400000).getTime();
start = new Date(1592373600000).getTime();
//end = new Date(1591250400000).getTime();
//end = new Date(1591855200000).getTime();
//end = new Date(1598421600000).getTime();
end = new Date(1598508000000).getTime();

myInterval = setInterval(myTimer, 100);

function myTimer() {

    now = new Date().getTime();


    var timeleft = end - now;

    var days = prependZero(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
    var hours = prependZero(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = prependZero(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = prependZero(Math.floor((timeleft % (1000 * 60)) / 1000));


    //now = new Date(1589868000000).getTime();
    percent = (now - start) / (end - start) * 100;

    if (percent > 100) {
        $("#countdown").hide();
        $("#progressBorder").hide();
        $("#progressBar").hide();
        $("#c1").hide();
        $("#c2").hide();
        $("#title").text("Downtime for Season 3 has Begun!");
        $('#subtitle').show();
        clearInterval(myInterval);
        return;
    }
    //percent = 30;
    //percentR =  percent.toFixed(6);

    if (percent >= 5 && percent < 10) {
        percentR = percent.toFixed(0);
    } else if (percent >= 10 && percent < 15) {
        percentR = percent.toFixed(1);
    } else if (percent >= 15 && percent < 20) {
        percentR = percent.toFixed(3);
    } else if (percent >= 20 && percent < 25) {
        percentR = percent.toFixed(5);
    } else {
        percentR = percent.toFixed(6);
    }


    if (percent > 5) {
        $('#progressBar').text(percentR + "%");
    }

    $('#progressBar').width(percent + "%");
    $('#countdown').text(days + " : " + hours + " : " + minutes + " : " + seconds);
}
//$('#progressBar').css("display", "");

$(document).ready(function () {
    //$('#progressBar').width("80%");
    //$('#progressBar').text("80%");

});

//update Status Tab
/*function statusUpdate(setNum, totalSets, currentSet){
	remaining = totalSets - setNum;
	checkQueue = setNum + "/" + totalSets;
	percentage = setNum / totalSets *100;
	percentageR = Math.round(percentage);
	$('#statusRemaining').text(remaining);
	$('#statusQueue').text(checkQueue);
	$('#statusCurrentSet').text(currentSet);
	$('#progressBar').width(percentage + "%");
	if(percentage > 20){
	$('#progressBar').text(percentageR + "%");
	}
}*/

function prependZero(number) {
    if (number < 10)
        return "0" + number;
    else
        return number;
}
