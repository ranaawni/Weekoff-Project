
$( document ).ready(function() {
  
  //In sign up form
var newUser;
  $("#signUpbtn").on('click',function(){
    var email = $("#EmailSignUp").val(); // get user email
   // console.log(email);
   var pass = $("#PassSignUp").val(); // get password
   // console.log(pass);
    var newUser = { // put the values in object
                  "email": email,
                "password": pass,
                };

      // console.log(newUser);  

      window.open("signIn.html");        
   
 }); 

 //In sign in form 
 // check the validation



});