//backend
function Ticket(title, time, age){
  this.title = title;
  this.time = time;
  this.age = age;
  this.price = 20;
}
Ticket.prototype.priceCheck = function()
{
  if(this.age === "75yrs+" && this.time === "10am") {
    this.price -= 10;
  }
  else if(this.time === "10am" || this.age === "75yrs+"){
    this.price -= 5;
  }
}



//frontend
$(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();

    var inputtedTitle = $("#title").val();
    var inputtedTime = $("#time").val();
    var inputtedAge = $("#age").val();

    var newTicket = new Ticket(inputtedTitle, inputtedTime, inputtedAge)

    newTicket.priceCheck();

    $(".output").show();

    var priceString = newTicket.price.toLocaleString('en-US',{style: 'currency', currency: 'USD'});
    $(".title").text(newTicket.title);
    $(".time").text(newTicket.time);
    $(".price").text(priceString)


  });
});
