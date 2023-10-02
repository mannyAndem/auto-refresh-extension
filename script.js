// The timer variable holds the time interval for page refreshes.

// After every reload, the timer variable is set to the value of timer in localStorage.
let timer = localStorage.getItem("timer");

// On intial run of this script, timer will be undefined since the value of timer in localStorage is unset
// If this is the case, prompt the user to enter a time interval in seconds.
if (!timer) {
  let userInput = prompt(
    "Please input the desired refresh interval in seconds:"
  );

  // Set the value of timer to the userInput and also set same in localStorage
  timer = userInput;
  localStorage.setItem("timer", userInput);
}

// This is the core functionality of the extension. Set a timeout which reloads the page after the time set in the variable, "timer", has elapsed. This will also reload this script.
setTimeout(() => {
  location.reload();
}, timer * 1000);

// When the user closes the tab or browser, delete the value of timer from localStorage so that the user can initialize their desired time on next use.
window.addEventListener("beforeunload", () => {
  localStorage.deleteItem("timer");
});
