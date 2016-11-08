$(function () {
    $("button[href]").click(function (event) {
        window.protocolCheck($(this).attr("href"),
            function () {
                window.location.href = "http://storageexplorer.com/";
            });
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
    });
});
