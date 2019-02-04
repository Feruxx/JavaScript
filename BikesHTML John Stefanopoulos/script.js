var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("photos");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
     
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(slides, 2000);

}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("photos");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000);
}

function carousel2() {
  var i;
  var x = document.getElementsByClassName("dot");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "inline-block"; 
  setTimeout(carousel, 2000);
}


function getAge(dateString) {
  
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    var birthDate = new Date(document.getElementById("bdate").value);
    var age = parseInt(today.getFullYear() - birthDate.getFullYear());
    //if(dd<10) {
    //  dd = '0'+dd
    //} 

    //if(mm<10) {
     // mm = '0'+mm
    //} 

   // today = yyyy + '-' + mm + '-' + dd;
    //var age = parseInt((today-birthDate)/(24*3600*1000));
    //var m = today.getMonth() - birthDate.getMonth();
    //if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //    age--;
    //}
    
    if(age>=18){
      alert(age);
      alert("You may proceed")
    }
    else{
      alert(age)
      alert("Under 18, Returning to home page")
      document.getElementById('checkthis').disabled = true;
      document.getElementById('sub').disabled = true;
      document.getElementById("dice").readOnly = true;
      document.getElementById("bdate").readOnly = true;
      document.getElementById("platina").readOnly = true;
      return     
    }
}


function rand(){
      var katara = Math.floor((10000+Math.random()*90000));
      document.getElementById('dice').value = katara;
      document.getElementById('dice').innerHTML = katara;
      
    }

function validate(){

      var troxalia = document.getElementById('platina').value;
      var trimeno = document.getElementById('dice').value;
        console.log(trimeno);
        console.log(troxalia);
        if(troxalia==trimeno){
            alert('Correct Capcha');
        }else{
            alert('Wrong Capcha');
        }
      
    }
function checkForm(){
 
  if(document.feedback.name.value == '' || document.feedback.surname.value == '' || document.feedback.psw.value =='' || document.feedback.confirmpsw.value =='' || document.feedback.bdate.value =='' || document.feedback.phone.value =='' || document.feedback.area.value =='' || document.feedback.vertify.value =='' || document.feedback.platina.value != document.feedback.dice.value || document.feedback.psw.value != document.feedback.confirmpsw.value || document.feedback.trimeno.value != document.feedback.troxalia.value){
    return false;
}
}

function nxt(){


     document.getElementById("step2").style.display = 'block';
     document.getElementById("dice").readOnly = true;
     document.getElementById("bdate").readOnly = true;
     document.getElementById("platina").readOnly = true;
     document.getElementById("psw").readOnly = true;
     document.getElementById("confirmpsw").readOnly = true;
     document.getElementById("name").readOnly = true;
     document.getElementById("surname").readOnly = true;
     document.getElementById("mailing").readOnly = true;
     document.getElementById("area").readOnly = true;
     document.getElementById("phone").readOnly = true;
     document.getElementById("sub").disabled = true;
     document.getElementById("captsa").disabled = true;
     document.getElementById("vertify").disabled = true;
   }
  
   


addEventListener("load", function () {
          setTimeout(hideURLbar, 0);
         }, false);
         
         function hideURLbar() {
          window.scrollTo(0, 1);
         }


var psw = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var psw = document.getElementById("psw");
var symbol = document.getElementById("symbol");
var confirmpsw = document.getElementById("confirmpsw");
var showmatch = document.getElementById("showmatch");

// When the user clicks on the password field, show the message box
psw.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box

// When the user starts to type something inside the password field
psw.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(psw.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(psw.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(psw.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  var symbols = /[!@#$%^&*?]/g;
  if(psw.value.match(symbols)){
    symbol.classList.remove("invalid");
    symbol.classList.add("valid");
  } else{
    symbol.classList.remove("valid");
    symbol.classList.add("invalid");
  }

  
  // Validate length
  if(psw.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

 // if(psw.value() != confirmpsw.value()) {
   
    
   // showmatch.classList.remove("invalid");
    //showmatch.classList.add("valid");

  //} else {

    //showmatch.classList.remove("valid");
    //showmatch.classList.add("invalid");
  //}

psw.onchange = validatePassword;
confirmpsw.onkeyup = validatePassword;


}


function validatePassword(){
  if(psw.value != confirmpsw.value) {
    confirmpsw.setCustomValidity("Passwords Don't Match");
  } else {
    confirmpsw.setCustomValidity('');
  }
}

psw.onchange = validatePassword;
confirmpsw.onkeyup = validatePassword;


function cc_format(value) {
      var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
      var matches = v.match(/\d{4,10}/g);
      var match = matches && matches[0] || ''
      var parts = []
      for (i=0, len=match.length; i<len; i+=4) {
        parts.push(match.substring(i, i+4))
      }
      if (parts.length) {
        return parts.join(' ')
      }else {
        return value
        }
      }
onload = function() {
      document.getElementById('visa3').oninput = function() {
          this.value = cc_format(this.value)

      }

      document.getElementById('mastercard3').oninput = function() {
          this.value = cc_format(this.value)
      }

      document.getElementById('diners3').oninput = function() {
          this.value = cc_format(this.value)

      }
}


function showvisa(){
    document.getElementById('mastercard2').style.display = 'none';
    document.getElementById('diners2').style.display = 'none';
    document.getElementById('visa2').style.display = 'block';
}

function showmastercard(){
    document.getElementById('visa2').style.display = 'none';
    document.getElementById('diners2').style.display = 'none';
    document.getElementById('mastercard2').style.display = 'block';
}

function showdiners(){
    document.getElementById('visa2').style.display = 'none';
    document.getElementById('mastercard2').style.display = 'none';
    document.getElementById('diners2').style.display = 'block';
}
