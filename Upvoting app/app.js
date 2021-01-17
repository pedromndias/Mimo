let counter = 3;

function upvote() {
    document.getElementById("votes").innerHTML = counter + " votes";
    counter++;
}

function downvote() {
    document.getElementById("votes").innerHTML = counter + " votes";
    counter--;
}