$(document).ready(function() {
    $("#btn_search").on("click", function(event) {
        event.preventDefault();
        var id = $("#txt_id").val();
        $.ajax({
            url: "http://jsonplaceholder.typicode.com/todos/"+id,
            type: "GET",
            success: function(data) {
                var userid = data.userId;
                var id=data.id;
                var title= data.title;
                var completed = data.completed;
                $('.MyData table tbody tr td:eq(0)').text(userid);
                $('.MyData table tbody tr td:eq(1)').text(id);
                $('.MyData table tbody tr td:eq(2)').text(title);
                $('.MyData table tbody tr td:eq(3)').text(completed);
                console.log(data);                
            },
            error: function() {
                alert("unable to get data")
            }
        });    
    });
});


