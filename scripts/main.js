/// https://api.chucknorris.io/jokes/random?category={category}
$(function() {
    $.ajax({
        type: 'GET',
        url: 'https://api.chucknorris.io/jokes/random',
        success: function(response){
            $("#chuckSays").replaceWith("<br>",response.value);
        },
        error: function(error){
            console.error(error);
        }
    })
});

clickIt.addEventListener("click", function(){
    $("#chuckSays").replaceWith(response.value)
});