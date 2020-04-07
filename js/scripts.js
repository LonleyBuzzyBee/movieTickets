// Business Logic -----------------------
function Ticket(agePrice, moviePrice, showTimePrice){
  this.agePrice = agePrice,
  this.moviePrice = moviePrice,
  this.showTimePrice = showTimePrice,
  this.basePrice = 7
}

//This can be moved to UI in future updates
Ticket.prototype.printTicket = function(totalPrice){
  $("p#hidden").show();
  $("#cost").html(totalPrice);
};

Ticket.prototype.addPrices = function() {
  var totalPrice = this.agePrice + this.moviePrice + this.showTimePrice + this.basePrice;
  this.printTicket(totalPrice);
};


// user interface logic -------------------------------

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var agePrice = parseInt($("#age").val());
    var moviePrice = parseInt($("#movie").val());
    var showTimePrice = parseInt($("#showtime").val());
    var newTicket = new Ticket (agePrice, moviePrice, showTimePrice);
    
    newTicket.addPrices();
  });
});