function generatePoke() {
    let input = $('#input').val();

    if (input != "") { //run if input is not empty
        $('#searchFailed').empty(); //call webserver
        $.ajax({
            type: "GET",
            url: "https://pokeapi.co/api/v2/pokemon-species/" + input + '/',
            success: function (response) {

                console.log(response); //print ID number
                $('#IdNumber').html("ID: " + response.id);
                $('#prevEv').empty();
                if (response.evolves_from_species != null) {
                    $('#prevEv').html(response.evolves_from_species.name);
                }
            },

        });

        $.ajax({
            type: "GET",
            url: "https://pokeapi.co/api/v2/pokemon/" + input + '/',
            success: function (response) {

                console.log(response);

                $('#moves').empty();

                var x;
                if (response.moves.length > 4) {
                    x = 4;
                } else {
                    x = response.moves.length
                }
                for (let index = 0; index < x; index++) { //get 4 random pokemon moves from the array
                    var randomMoves = Math.floor(Math.random() * response.moves.length);

                    console.log(response.moves[randomMoves].move.name);
                    $('#moves').append('<li>' + response.moves[randomMoves].move.name + '</li>');
                }

                $('#photo').html('<img class="pokemon__img" src="' + response.sprites.front_default + '">'); // output pokemon image
                console.log(response.sprites.front_default);

            }
        });
    } else {
        $('#IdNumber').empty();
        $('#photo').empty();
        $('#moves').empty();
        $('#prevEv').empty();
        $('#searchFailed').html("Please try again, this is not a pokemon");
    }
}