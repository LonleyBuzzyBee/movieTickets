function Ticket(agePrice, moviePrice, showTimePrice){
  this.agePrice = agePrice;
  this.moviePrice = moviePrice;
  this.showTimePrice = showTimePrice;
}

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var agePrice = $("#age").val();
    var moviePrice = $("#movie").val();
    var showTimePrice = $("#showtime").val();
    new Ticket = new Ticket (agePrice, moviePrice, showtimePrice);
  })
})