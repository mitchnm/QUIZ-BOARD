function add(question1, question2, question3, question4, question5) {
  return question1 + question2 + question3 + question4 + question5;
};

$(document).ready(function () {
  $("form#quiz").submit(function (event) {
    event.preventDefault();
    var question1 = parseInt($('input:radio[name=answer1]:checked').val());
    var question2 = parseInt($('input:radio[name=answer2]:checked').val());
    var question3 = parseInt($('input:radio[name=answer3]:checked').val());
    var question4 = parseInt($('input:radio[name=answer4]:checked').val());
    var question5 = parseInt($('input:radio[name=answer5]:checked').val());
    var result = add(question1, question2, question3, question4, question5)


    $(".dip").text("YOUR SCORE: " + result + " POINTS OUT OF 50");

  });
});