$(document).ready(function () {

    var events;

    $(document).on('onClick', '.container', function (e) {
        alert('clicked');
    });
    $(document).on('onClick', '#tap', function (e) {
        alert('clicked');
    });

/*
    $.ajax({
        url: 'http://localhost:8080/threadsinapoll/api/producer/event/list',
        async: true,
        success: successCallback,

        error: errorCallback
    });

    function errorCallback(request, status, error) {
        console.log(error);
    }

    function successCallback(response) {
        events = response;
    };

    function populateCarosel(events) {

        $('#1').attr("src", events[1].imageUrl);
        $('#2').attr("src", events[2].imageUrl);
        $('#3').attr("src", events[3].imageUrl);
        $('#4').attr("src", events[4].imageUrl);
        $('#5').attr("src", events[5].imageUrl);
    }

    populateCarosel(events);
*/
});
