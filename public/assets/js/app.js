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
$("#like-btn").on("click", (event) => {
    event.preventDefault();
    let itemId = $(this).data("id");
    let query = "/gems/vote/like/" + itemId;
    console.log("ITEMID=" + itemId);
    console.log("query=" + query);
    $.ajax(query, {
        type: "PUT"
    }).then((like) => {
        console.log("ldisike" + like)
        location.reload()
    })

})



$("#dislike-btn").on("click", (event) => {
    event.preventDefault();
    let itemId = $(this).data("id");
    let query = "/gems/vote/dislike/" + itemId;
    console.log("ITEMID=" + itemId);
    console.log("query=" + query);
    $.ajax(query, {
        type: "PUT"
    }).then((like) => {
        console.log("ldisike" + like)
        location.reload()
    })

})