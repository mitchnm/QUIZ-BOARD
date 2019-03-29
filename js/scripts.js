function onSubmit(){
  var points=0;
  var questions=5;
  var answers=['language', 'label', 'false', 'ans3', 'parseInt']


  var question1 = document.forms['quiz']['answer1'].value;
  var question2 = document.forms['quiz']['answer2'].value;
  var question3 = document.forms['quiz']['answer3'].value;
  var question4 = document.forms['quiz']['answer4'].value;
  var question5 = document.forms['quiz']['answer5'].value;

 for(var i = 1 <= questions; i++) {
   if(eval('question' + i) == answers[i - 1]){
     score++;
   }
 }
 var results = documents.getElementById()
}