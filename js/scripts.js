function onSubmit(){
  var points=0;
  var questions=5;
 


  var question1 = document.forms['quiz']['answer1'].value;
  var question2 = document.forms['quiz']['answer2'].value;
  var question3 = document.forms['quiz']['answer3'].value;
  var question4 = document.forms['quiz']['answer4'].value;
  var question5 = document.forms['quiz']['answer5'].value;

  if(question1 === 'language')  {
    points++
  }
  if(question2 === 'label')  {
    points++
  }
  if(question3 === 'false')  {
    points++
  }
  if(question4 === 'ans3')  {
    points++
  }
  if(question5 === 'parseInt')  {
    points++
  }
 
document.getElementById("result").innerHtml = "You got" + points + "points"
}