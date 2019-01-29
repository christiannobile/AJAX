// GET request in Vanilla JS
/*
function getRequest() { //function
    xhr = new XMLHttpRequest(); //xml http request object
    xhr.open('GET', 'https://thatsthespir.it/api', true); //request from webserver


    xhr.onload = function () {
        if (this.status == 200){ //response server loaded 
            let jsonObject = JSON.parse(this.responseText); //Json object met eigenschappen bv: name, auteur, enz
            console.log(jsonObject);
            document.getElementById('quoteText').innerHTML = jsonObject.quote; //eigenschap van object toegevoegd aan div id
        }
    }
    xhr.send(); //sends to the client browser
}
*/

//Jquery Ajax GET request
function generateQuote() {

    $.ajax({
        type: "GET",
        url: "https://thatsthespir.it/api",
        success: function (response) {
            $('#quoteText').html(response.quote);
        }
    });
}