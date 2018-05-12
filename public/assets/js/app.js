$(".deleteButton").on("click", function(event) {
    event.preventDefault();
    var itemId = $(this).data("id");
    var query = "/gems/" + itemId + "/delete";
    console.log("ITEMID=" + itemId);
    console.log("query=" + query);
    $.ajax(query, {
        type: "DELETE"
    }).then(
        function(something) {
            console.log("worked");
            window.location.href = "/gems/all";
        }
    );
});

$(".like-btn").on("click", function(event) {
    event.preventDefault();
    var itemId = $(this).data("id");
    var query = "/gems/vote/like/" + itemId;
    console.log("ITEMID=" + itemId);
    console.log("query=" + query);
    $.ajax(query, {
        type: "PUT"
    }).then(
        function(something) {
            console.log("worked");
            location.reload();
        }
    );
});

