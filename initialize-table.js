$(document).ready(function () {
    var i = 1;

    $("#createLink").click(function () {
       i++

        var country = $("td input:first").val()
        var capital = $(" td input:last").val()
        var del = $("<a></a>").html("  [Delete]")
        var down = $("<a></a>").html("  [Done]")
        var up = $("<a></a>").html("  [up]")

        var td1 = $("<td></td>").text(country)
        var td2 = $("<td></td>").text(capital)
        var td3 = $("<td></td>").append(up, down, del)

        var newRow = $("<tr></tr>").append(td1, td2, td3)
        var selectedRow = $("tr").eq("i")


        console.log(selectedRow);
        console.log(capital);
        $("table").append(newRow)
       
        del.click(function () {
           
            $(this).parent().parent().remove();
        })








    })


})