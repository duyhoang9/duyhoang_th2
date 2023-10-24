// js

function revealFeature(letter) {
  // Show the clicked image and its Hide Result button
  // The letter A, B, or C gets clicked and hidden gets removed (now visible)
  document.getElementById(`img-${letter}`).classList.remove("hidden");
  document
    .querySelector(
      `.img-container .hide-button[onclick="hideImage('${letter}')"]`
    )
    .classList.remove("hidden");
}

function hideImage(letter) {
  // Hides image and its Hide Result button
  // Hidden gets added back and it's all hidden again
  document.getElementById(`img-${letter}`).classList.add("hidden");
  document
    .querySelector(
      `.img-container .hide-button[onclick="hideImage('${letter}')"]`
    )
    .classList.add("hidden");
}
