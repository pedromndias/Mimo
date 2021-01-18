let counter = 3;

function upvote() {
    counter++;
    document.getElementById("votes").innerHTML = counter + " votes";
}

function downvote() {
    counter--;
    document.getElementById("votes").innerHTML = counter + " votes";
}
