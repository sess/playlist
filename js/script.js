/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Mr. FEAR","We Are The Champions","Happier (Stripped)","Voyager"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
let artists = ["SIAMES","Queen","Marshmello","Daft Punk"];

let songLengths = ["4:06","2:59","4:10","3:48"];

let imageLinks = ["https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fffaba625612e564ac6805c14619eb660.500x500x1.jpg",
"https://images-na.ssl-images-amazon.com/images/I/81emvwXY-9L._SL1481_.jpg",
"https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F29c043a3797febfabdba5d01200c3539.500x500x1.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Daft_Punk_-_Discovery.jpg/220px-Daft_Punk_-_Discovery.jpg"];

let songLinks = ["https://www.youtube.com/embed/EFt3q8Zws3c","https://www.youtube.com/embed/SAaO6XvUhd0",
"https://www.youtube.com/embed/6OqyD4KhV-M","https://www.youtube.com/embed/tEJpLDEOivA"];

    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    
function displaySongInfo(){
    songs.forEach(function(song){
        $("#songs").append(`<p> ${song} </p>`);
    });

    artists.forEach(function(artist){
        $("#artists").append(`<p> ${artist} </p>`);
    });

    songLengths.forEach(function(length){
        $("#lengths").append(`<p> ${length} </p>`);
    });

    songLinks.forEach(function(sLinks){
        $("#links").append(`<a target="_blank" href=${sLinks}>Play</a>`);
    });

    imageLinks.forEach(function(link){
        $("#images").append(`<img src="${link}">`);
    });    
}

function emptySongInfo(){
    $("#songs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
    $("#images").empty();
    // Use jQuery to empty all of the remaining divs
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    songs.push($("#song").val());
    artists.push($("#artist").val());
    songLengths.push($("#length").val());
    imageLinks.push($("#image").val());
    songLinks.push($("#link").val());
}


$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();