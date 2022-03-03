$(function drawSector(){
    var activeBorder = $("#activeBorder");
    var prec = activeBorder.children().children().text();
    if (prec > 100)
        prec = 100;
    var deg = prec*3.6;
    if (deg <= 180){
        activeBorder.css('background-image','linear-gradient(' + (90+deg) + 'deg, transparent 50%, #A2ECFB 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
    }
    else{
        activeBorder.css('background-image','linear-gradient(' + (deg-90) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
    }
    
    var startDeg = $("#startDeg").attr("class");
    activeBorder.css('transform','rotate(' + startDeg + 'deg)');
    $("#circle").css('transform','rotate(' + (-startDeg) + 'deg)');
});