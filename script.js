// Optional interactivity
document.querySelector("button").addEventListener("click", () => {
    alert("Command copied to clipboard!");
    navigator.clipboard.writeText("npm install trade-data-generator");
  });
  