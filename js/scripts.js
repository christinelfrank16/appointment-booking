$(document).ready(function(){
  $("form#appointmentInfo").submit(function(event){
    $("#modalName").text($("input#name").val());
    $("#modalDescription").text($("input#description").val());
    $("#modalDate").text($("input#date").val());
    $("#modalStartTime").text($("input#startTime").val());
    $("#modalEndTime").text($("input#endTime").val());
    $(".modal").show();
    event.preventDefault();
  });

});
