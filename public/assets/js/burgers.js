$(function() {

    $(".devour-button").on("click", function(event) {

      var id = $(this).data("id");
      let newStatus = { 
        devoured: true 
      };
        
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newStatus    
      })
      .then(function() {
          console.log("changed status to devoured");
          location.reload();
        }
      );


    });
  
    $("#submit").on("click", function(event) {
     

      console.log("submit clicked");
      
      let newName = $("#bu").val().trim();
      let newBurger = { name: newName };
      
      console.log(newBurger);
     
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      })
      .then(function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
  });