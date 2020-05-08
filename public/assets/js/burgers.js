// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#devour-button").on("click", function(event) {
      var id = $(this).data("id");
    
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: "true"
      }).then(
        function() {
          console.log("changed status to devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = $("#bu").val().trim()
      
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });