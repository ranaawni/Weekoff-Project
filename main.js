
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

   $(".final").hide();

    // $("#submitbtn").click(function(){
       

    //          if( $("#exampleInputEmail").val()=='admin@admin.com' && $("#exampleInputPassword").val()=='password') {
    //                    window.open("cards.html");
    //                  }
    //              else {
    //                 alert("Please try again");
    //              }
 
                 $("#logoutbtn").click(function() {
                  
                  $("#alogout").attr('href','signIn.html');
                  $("#logIn")[0].reset();
      
                 
            });
      
      


var cards = document.querySelectorAll('.memory-card');
var hasFlippedCard=false;

var lockBoard=false;
var firstCard;
var secondCard;
// var score = 0;
var score = $("#score").html();

function flipCard() {
  if (lockBoard) return;
  if(this===firstCard) return;
  this.classList.add('flip');

  if(!hasFlippedCard){
     // first click
  
    hasFlippedCard = true;
    firstCard = this;

    return;
  } 
    // second click
    hasFlippedCard = false;
    secondCard = this;

     checkForMatch();

}
function checkForMatch() {
  var isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
     isMatch ? disableCards()  : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  score++;
  $("#score").html = score;
restBoard();
}

function unflipCards() {
lockBoard=true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

   restBoard();
  }, 1500);


}

function restBoard(){
  hasFlippedCard,lockBoard=false,false;
  firstCard,secondCard=null,null;
}


(function shuffle(){
    cards.forEach(card=>{
let randomPos = Math.floor(Math.random()*12); 
card.style.order=randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));


  

});