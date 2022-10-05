


$(document).ready(function () {






    $("button").on("click", function () {
        var word = $("#searchText").val()
        console.log(word);
        var list = [];
        $('li').each(function (i, elem) {
            list.push($(elem).text());
        });
        console.log(list);
        list.forEach(w => {
            if (w == word) {
                $("#result").append(word)



            }
        })





    });




});