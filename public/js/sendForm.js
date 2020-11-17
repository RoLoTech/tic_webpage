$("#send-button").on("click", function () {
    submitMeasure();
    alert("Sus medidas han sido registradas correctamente");
})

function submitMeasure() {
    name = $("#nameData").val()
    id = $("#idData").val()
    startDate = $("#startDateData").val()
    endDate = $("#endDateData").val()
    amount = $("#amountData").val()
    $.ajax({
        method: "POST",
        url: "http://179.27.97.57:3306/register_data",
        crossDomain: true,
        dataType: "json",
        data: {
            "name": name,
            "ci": id,
            "start_date": startDate,
            "end_date": endDate,
            "amount": amount
        }
    }).done(function () {
        console.log("Success")
    })
}
