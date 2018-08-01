"use strict";
$(() => {

    let currentTable = null;

    for (let i = 0; i < 9; i++) {
        $("#table").append(`<div>${(i+1)}</div>`);
    }

    $("#table div").attr("class", "tabledivs available");

    $("#table").click(function() {
        $("#seatform").fadeIn("slow");
    });

    $("body").on("click", "#table div.available", (e) => {
        $("#seatform").show();
        $("#seatform #seatforminfo form p").text(`Table Number: ${$(e.target).text()}`);
        currentTable = $(e.target);

    });

    ////Form////

    $("body").on("click", "#seatforminfo img:first, #seatforminfo button:first", (e) => {
        $("#button").click(function() {
            $("#seatform").fadeOut("slow")
        });
        $("img").click(function() {
            $("#seatform").fadeOut("slow")
        });
        if (e.target.tagName === "BUTTON") {
            currentTable
                .removeClass("available")
                .addClass("reserved")
                .data("guest-name", $("input").eq(0).val())
                .data("guest-phone", $("input").eq(1).val())
                .data("guest-size", $("input").eq(2).val());
            // console.dir(currentTable.data("guest-name"));
            // console.dir(currentTable.data("guest-phone"));
            // console.dir(currentTable.data("guest-size"));
        }
    });

    $("body").on("mouseenter mouseleave", "#table div.reserved, section.guest-details", (e) => {
        $(".guest-details").toggle();
        $(e.target).css("cursor", "not-allowed");
        console.log($(e.target));
        $("p.guest-name").text(`Name: ${$(e.target).data("guest-name")}`);
        $("p.guest-size").text(`Size of party: ${$(e.target).data("guest-size")}`);
    });
});