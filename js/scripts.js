$(document).ready(function() {
    $('form#places').submit(function(event) {
            event.preventDefault();
            var inputcity = $('input#city').val();
            var inputtimeof_year = $('input#timeof_year').val();
            var inputnotes = $('input#notes').val();
            var inputcountry = $('input#country').val();

            var places = {city: inputcity, timeof_year: inputtimeof_year, notes: inputnotes, country: inputcountry};

            $("ul#links").append("<span class='place-info'>" + places.city +  " " + places.country + "</span><br>");


            $('.place-info').last().click(function() {
            $('#show-location').show();
            $('#show-location h2').text(places.city + " " + places.country + " ");
            $('.city').text(places.city);
            $('.country').text(places.country);
            $('.notes').text(places.notes);
            $('.timeof_year').text(places.timeof_year);



        });
    });
});
