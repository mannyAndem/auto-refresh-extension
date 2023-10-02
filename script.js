let timer = localStorage.getItem("timer");

if (!timer) {
  let userInput = prompt(
    "Please input the desired refresh interval in seconds:"
  );
  timer = userInput;
  localStorage.setItem("timer", userInput);
}

setTimeout(() => {
  location.reload();
}, timer * 1000);

window.addEventListener("beforeunload", function (e) {
  localStorage.deleteItem("timer");
});
