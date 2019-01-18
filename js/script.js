/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Resonance","We Are The Champions","Happier (Stripped)","Voyager"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
let artists = ["HOME","Queen","Marshmello","Daft Punk"];

let songLengths = ["3:32","2:59","4:10","3:48"];

let imageLinks = ["https://f4.bcbits.com/img/a3321951232_10.jpg",
"https://images-na.ssl-images-amazon.com/images/I/81emvwXY-9L._SL1481_.jpg",
"https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F29c043a3797febfabdba5d01200c3539.500x500x1.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Daft_Punk_-_Discovery.jpg/220px-Daft_Punk_-_Discovery.jpg"];

let songLinks = ["https://www.youtube.com/watch?v=UqyT8IEBkvY","https://youtu.be/SAaO6XvUhd0","https://youtu.be/6OqyD4KhV-M","https://youtu.be/tEJpLDEOivA"];

    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
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
    $("#links").append(`<a target="_blank" href=${sLinks}>`);
});

imageLinks.forEach(function(link){
    $("#images").append(`<img src="${link}">`);
});

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    let a = $("#song").val();
    let b = $("#artist").val();
    let c = $("#length").val();
    let d = $("#image").val();
    let e = $("#link").val();
    
    console.log("test");
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();