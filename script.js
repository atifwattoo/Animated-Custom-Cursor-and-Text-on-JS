var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");
var timeout;

// Custom cursor code
main.addEventListener("mousemove", (details) => {
  cursor.style.left = details.x + "px";
  cursor.style.top = details.y + "px";
  cursor.style.display = "block";

  // Function for cursor display none when we stop moving
  function stopMove() {
    cursor.style.display = "none";
  }
  clearTimeout(timeout); // clearTimeout() function is used to stop setTimeout() function
  timeout = setTimeout(stopMove, 1000);
});

// Cursor display none when corsor move out of the screen
addEventListener("mouseout", () => {
  cursor.style.display = "none";
});
