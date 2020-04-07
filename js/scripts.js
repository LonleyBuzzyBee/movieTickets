$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var age = $("#age").val();
    var movie = $("#movie").val(); //val will give price, change property name?
    var showtime = $("#showtime").val();
  })
})