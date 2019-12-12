$(document).ready(function () {
    $(".change-devoured").on("click", function () {
        var id = $(this).data("id");
        var newDevoured = $(this).data("eaten");
        console.log(newDevoured)
        var isDevoured = {
            devoured: true
        }

        // Send the POST request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(
            function (data) {
                console.log("BURGER BEEN DEVOURED");

                // Reload the page to get the updated list
                location.reload();
            }

        );

        if (newDevoured) {
            $(".changed-devoured").css({ "visibility": "hidden" });
        }
    });


    $("#submit").on("click", function (event) {
        event.preventDefault();
        $("#is-devoured").css({ "display": "block" });
        $("#not-devoured").css({ "display": "block" });
        var newBurger = {
            burger_name: $("#burger-input").val().trim(),
        };
        console.log(newBurger)

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("NEW BURGER");
                // Reload the page to get the updated list
                //$("not-devoured-list").append($("#burger-list"))

                location.reload();
            }
        );


    });
});

