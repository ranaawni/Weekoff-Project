
$( document ).ready(function() {
  
  //In sign up form
var newUser;
  $("#signUpbtn").on('click',function(){
    var email = $("#EmailSignUp").val(); // get user email
   // console.log(email);
   var pass = $("#PassSignUp").val(); // get password

   if(pass.length < 8) {
    alert("The length of the password must be greater than 8")
   }
   else {
     var newUser = { // put the values in object
                  "email": email,
                "password": pass
                };

       console.log(newUser);
       $("#signUp").attr('action','signIn.html');
   }
   // console.log(pass);
     

             
   
 }); 

 //In sign in form 
 // check the validation

 $("#loginbtn").click(function(){
  var emailLog = $("#userNameLogin").val();
  // console.log(emailLog);
  var passLog = $("#passwordLogin").val();
  var user = {
    "email" :  emailLog,
    "password" : passLog
  };

  $.each(newUser,function(key,value){
     

  })
 });



});