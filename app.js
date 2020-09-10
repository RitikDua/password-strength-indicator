var number = /([0-9])/;
var alphabets = /([a-z])/;
var upper=/([A-Z])/;
var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<, ])/;
$(document).ready(function(){
    $("#pwd").keyup(function(){
        if($('#pwd').val().length==0) {
            $("#a").width("0%").css("background-color","red");
            $("#a").text('0% (Weak)').css("color","black");
        }
        if($('#pwd').val().length>=4 && $('#pwd').val().length<=6) {
            $("#a").width("30%").css("background-color","red");
            $("#a").text('30% (Weak)');
        }
        if($('#pwd').val().length>=7 && $('#pwd').val().length<=8) {
            $("#a").width("40%").css("background-color","red");
            $("#a").text('40% (Weak)');
        }
        if($('#pwd').val().length>8) {
            $("#a").width("60%").css("background-color","orange");
            $("#a").text('60% (Moderate)');
        }
        if($('#pwd').val().length>8 && $('#pwd').val().match(upper)) {
            $("#a").width("70%").css("background-color","lightgreen");
            $("#a").text('70% (Good)');
        }
        if($('#pwd').val().match(alphabets) &&  $('#pwd').val().length>8 && $('#pwd').val().match(upper)) {
            $("#a").width("80%").css("background-color","lightgreen");
            $("#a").text('80% (Good)');
        }
        if($('#pwd').val().match(number) && $('#pwd').val().match(alphabets) && $('#pwd').val().match(upper) &&  $('#pwd').val().length>8) {
            $("#a").width("90%").css("background-color","lightgreen");
            $("#a").text('90% (Good)');
        }
        if($('#pwd').val().match(number) && $('#pwd').val().match(alphabets) && $('#pwd').val().match(upper) && $('#pwd').val().match(special_characters)&&$('#pwd').val().length>=8) {
            $("#a").width("100%").css("background-color","green");
            $("#a").text('100% (Strong)');
        }
    });
});