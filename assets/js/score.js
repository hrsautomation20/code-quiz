function printHighscores() {
  // To get scores from localStorage or set it to empty array
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  // Shorting the score by descending order
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function (score) {
    // Create li tag for each Score
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " you scored - " + score.score;

    // Displaying score on page/li
    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}

function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

//To run print function when page loads
printHighscores();
