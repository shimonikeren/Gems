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
            window.location.href = "/gems/all";
        }
    );
});

$(".like-btn").on("click", function(event) {
    event.preventDefault();
    var itemId = $(this).data("id");
    var query = "/gems/vote/like/" + itemId;
    $.ajax(query, {
        type: "PUT"
    }).then(
        function(something) {
            location.reload();
        }
    );
});

$(".dislike-btn").on("click", function(event) {
    event.preventDefault();
    var itemId = $(this).data("id");
    var query = "/gems/vote/dislike/" + itemId;
    $.ajax(query, {
        type: "PUT"
    }).then(
        function(something) {
            location.reload();
        }
    );
});