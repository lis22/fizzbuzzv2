$(document).ready(function() {
  createList();

  $("#form").submit(function(e) {
    var inputNumber;

    e.preventDefault();

    removeListItems();

    inputNumber = getInput();

    fizzBuzz(inputNumber);

    });
});

/* Parses input and validates. Displays error message and
red border around textbox if not valid*/
function getInput() {

    number = parseInt($("#inputNumber").val());

    if ($.isNumeric(number)) {
      $("#inputNumber").val('');
      $(".control-label").css('visibility', 'hidden');
      $("#inputNumber").closest(".form-group").removeClass(" has-error");

      return number;
    }

    else {
      $(".control-label").show();
      $(".control-label").css('visibility', 'visible');
      $("#inputNumber").closest(".form-group").addClass(" has-error");
    }
}

/* Removes all list items from the list so that it is a fresh
list to append to each time */
function removeListItems() {
  if ($("#fizzBuzzList li").length > 0)
    ($("#fizzBuzzList li").remove());
}

/* creates the list */
function createList() {
  if ($("#fizzBuzzList").length == 0)
    $(".results").append('<ul id="fizzBuzzList"> </ul>');
}

/*figures out if should append fizz, buzz, fizzbuzz or the number
and then appends it onto the list*/
function fizzBuzz(number) {
  for (i=1; i<= number; i++)
  {
    //divisible by 3 and 5
    if((i%3==0) && (i%5==0))
      $("#fizzBuzzList").append("<li>FizzBuzz </li>");

    //divisible by only 3
    else if(i%3==0)
      $("#fizzBuzzList").append("<li> Fizz </li>");

    //divisible by only 5
    else if(i%5==0)
      $("#fizzBuzzList").append("<li>Buzz </li> ");

    //not divisible by 3 or 5
    else
      $("#fizzBuzzList").append("<li>" + i + "</li>");
  }
}
