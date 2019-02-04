/*

$(document).ready(function() {
    $("input[name=credidcard]").on( "change", function() {

         var test = $(this).val();
         $("#visa2").hide();
         $("#mastercard2").hide();
         $("#diners2").hide();
         $("#"+test).show();
    } );
});
*/
$("#visa3").mouseout(function(){
var value = $("#visa3").val();

    if ( value.length <12){
    	alert("visa needs 10 chars") 
    }
    else{
    	alert("visa fine")
    }
});

$("#mastercard3").mouseout(function(){
var value = $("#mastercard3").val();

    if ( value.length <12){ 
    	alert("mastercard needs 10 chars") 
    }
    else{
    	alert(" mastercard fine")
    }
});

$("#diners3").mouseout(function(){
var value = $("#diners3").val();

    if ( value.length <12){
    	alert("diners needs 10 chars") 
    }
    else{
    	alert("diners fine")
    }
});
/*
$('#psw, #confirmpsw').on('keyup', function () {
  if ($('#psw').val() == $('#confirmpsw').val()) {
    $('#showmatch').html('Matching','✔').css('color', 'green');
  } else 
    $('#showmatch').html('Not Matching','✖').css('color', 'red');
});
*/

$('#psw, #confirmpsw').on('keyup', function () {
  if ($('#psw').val() != $('#confirmpsw').val()) {
    $('#showmatch').html('Passwords dont match',"✖").css('color', 'red');
    $('#showmatch').removeClass("valid");
    $('#showmatch').addClass("invalid");
  } else 
    $('#showmatch').html('Passwords match',"✔").css('color', 'green');
    $('#showmatch').removeClass("invalid");
    $('#showmatch').addClass("valid");
});

