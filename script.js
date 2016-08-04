$(document).ready(function(){
  $('#spies').append('<button class="addSpies">New Spy</button>');
  $('.addSpies').on('click', addNewSpy);
  $('#spies').append('<p>Total Number of Active Spies: ' + activeSpies + '</p>');
});
var activeSpies = 0;
//add a new spy to the DOM, create a random number for spy;

function addNewSpy(){
  $('#spies').append('<div class="spy"></div>');
  $sp = $("#spies").children().last();
  $sp.append('<p>Spy Number:'+ randomNumber(100, 500) + '<button class="change">Change</button>' + '<button class="delete">Delete</button>' + '</p>');
}


//uses the random number function to randomly generate a spy number;
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

//I couldn't get my button to work
$(".spy").on("click", ".delete", delSpy)

function delSpy(){
  $(this).parent().remove();
}
