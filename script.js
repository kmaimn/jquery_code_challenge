$(document).ready(function(){
  $('#spies').append('<button class="newSpy">Add Spy</button>' + 'Number of Spies: ' + '<span></span>');
  $('.newSpy').on('click', addNewSpy);
  $('#spies').on('click', '.delete', delSpy);
  $('#spies').on('click', '.change', changeSpy);
  $('.newSpy').on('click', spyCounter);
});

var spyCount = 0;

function addNewSpy(){
  $('#spies').append('<div class="spy">' + 'Spy #: ' + randomNumber(100, 500) + '<button class="delete">Delete</button>' + '<button class="change">Change</button>' + '</div>');
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function delSpy(){
  $(this).parent().remove();
}

function changeSpy(){
  $(this).parent().toggleClass('red');
}

function spyCounter(){
  spyCount++;
  console.log(spyCount);
  $('span').text(spyCount);
}

//I referenced the weekend homework to help with the issue of my delete button not working - i had everythign in my document ready tags, so the position didnt matter in that case;
