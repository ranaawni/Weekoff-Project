 var questions = [
  ["<div class='block'>Inside which HTML element do we put the JavaScript?&nbsp;&nbsp;", "&lt;js&gt", "&lt;javascript&gt", "&lt;script&gt", "&lt;scripting&gt</div>", 3],
  ["<div class='block'>How do you write 'Hello World' in an alert box?&nbsp;&nbsp;", "msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');", "alertBox('Hello World');></div>", 2],
  ["<div class='block'>How to write an IF statement in JavaScript?&nbsp;&nbsp;", "if (i == 5)", "if i = 5", "if i == 5 then", "if i = 5 then</div>", 1],
  ["<div class='block'>How to write an IF statement for executing some code if 'i' is NOT equal to 5?&nbsp;&nbsp;", "if (i <> 5)", "if i =! 5 then", "if (i != 5)", "if i <> 5 </div>" , 3],
  ["<div class='block'>How does a WHILE loop start?&nbsp;&nbsp;", "while (i =< 10)", "while (i <= 10; i++)", "while (i <= 10)", "while i = 1 to 10 </div>", 3],
  ["<div class='block'>How does a FOR loop start?&nbsp;&nbsp;", "for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", "for (i <= 5; i++) </div>", 1],
  ["<div class='block'>What is the correct JavaScript syntax to change the content of the HTML element below?&nbsp;&nbsp;<br>&lt;p id='demo'&gtThis is a demonstration.&lt;/p&gt&nbsp;&nbsp;", "document.getElementById('demo').innerHTML = 'Hello World!';", "#demo.innerHTML = 'Hello World!';", " document.getElement('p').innerHTML = 'Hello World!';", "document.getElementByName('p').innerHTML = 'Hello World!'; </div>", 1],
  ["<div class='block'>How can you add a comment in a JavaScript?&nbsp;&nbsp;<br>", " 'This is a comment ", " //This is a comment ", " &lt;!--This is a comment--&gt; ", " #This is a comment ", 2],
  ["<div class='block'>How to insert a comment that has more than one line?&nbsp;&nbsp;", " //This comment has more than one line// ", " &lt;!--This comment has moremthan one line--&gt; ", " /*This comment has more than one line*/ ", " ##This comment has more than one line## </div>", 3],];

var plus = 0;
var time = 0;
var answer = 0;
var count = questions.length;

function sec() {
  time++;
  document.getElementById('time').innerHTML = 'Time wasted:  ' + time + ' seconds';
}

function check(num) {
  if (num == 0) {
    
    document.getElementById('option1').style.display = 'block';
    document.getElementById('option2').style.display = 'block';
    document.getElementById('option3').style.display = 'block';
    document.getElementById('option4').style.display = 'block';
    document.getElementById('question').style.display = 'block';
    document.getElementById('option1').innerHTML = questions[answer][1];
    document.getElementById('option2').innerHTML = questions[answer][2];
    document.getElementById('option3').innerHTML = questions[answer][3];
    document.getElementById('option4').innerHTML = questions[answer][4];
    document.getElementById('question').innerHTML = questions[answer][0];
    document.getElementById('start').style.display = 'none';
    document.getElementById('end').style.display = 'inline';
    
    var interval = setInterval(sec, 1000);
    
  } else {
    if (num == questions[answer][5]) {
      plus++;
      document.getElementById('result').innerHTML = 'Excellent! ';
    } else {
      document.getElementById('result').innerHTML = "Wrong! Correct answer: " + questions[answer][questions[answer][5]];
    }
    answer++;
    if (answer < count) {
      document.getElementById('option1').innerHTML = questions[answer][1];
      document.getElementById('option2').innerHTML = questions[answer][2];
      document.getElementById('option3').innerHTML = questions[answer][3];
      document.getElementById('option4').innerHTML = questions[answer][4];
      document.getElementById('question').innerHTML = questions[answer][0];
    } else {
      document.getElementById('time').id = 'stop';
      document.getElementById('option1').style.display = 'none';
      document.getElementById('option2').style.display = 'none';
      document.getElementById('option3').style.display = 'none';
      document.getElementById('option4').style.display = 'none';
      document.getElementById('question').style.display = 'none';
      document.getElementById('end').style.display = 'inline';
      var percent = Math.round(plus / count * 100);
      var result = 'Bad!';
      if (percent > 70) 
        result = 'Good!';
      if (percent == 100) 
        resutl = 'Excellent!';
      
      document.getElementById('result').innerHTML = 'Correct answers: ' + plus + ' of ' + count + ' (' + percent + '%)<br>' + result;
    }
  }
}

function log(){
  window.location = "signIn.html"
}