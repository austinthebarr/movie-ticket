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
    //debugger;
    var inputtedTitle = $("#title").val();
    var inputtedTime = $("#time").val();
    var inputtedAge = $("#age").val();
    //debugger;


    var newTicket = new Ticket(inputtedTitle, inputtedTime, inputtedAge)
    console.log(newTicket);
    newTicket.priceCheck();
    console.log(newTicket);
    $(".title").text(newTicket.title);
    $(".time").text(newTicket.time);
    $(".price").text(newTicket.price)


  });
});
