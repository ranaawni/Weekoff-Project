
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
  var user1 = {
   email : 'ranaalhmoud92@gmail.com',
   password : 123456789
};

// var emailLog;
// var passLog;
// var result;

  $('#passwordLogin').keypress(function(e) {
    if (e.keyCode == 13 && this.value == "123456789" && $("#userNameLogin").val() == "ranaalhmoud92@gmail.com") {
        $("#loginbtn").click(function(){
          $("#logIn").attr('action','index.html')
        })
    }
  });

  /////// For Index.html


});