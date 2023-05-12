// // Set the countdown date to Friday at 11:00 am BST
// const countdownDate = new Date("May 12, 2023 11:00:00").getTime();
//
// // Update the countdown timer every second
// const countdownTimer = setInterval(function() {
//
// 	// Get the current date and time
// 	const now = new Date().getTime();
//
// 	// Calculate the time remaining until the countdown date
// 	const timeRemaining = countdownDate - now;
//
// 	// Calculate the days, hours, minutes, and seconds remaining
// 	const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
// 	const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// 	const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
// 	const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
//
// 	// Update the countdown timer element with the time remaining
// 	document.getElementById("countdown-timer").innerHTML = "Countdown: " + days + "d " + hours + "h "
// 	+ minutes + "m " + seconds + "s ";
//
// 	// If the countdown date has passed, stop the countdown timer
// 	if (timeRemaining < 0) {
// 		clearInterval(countdownTimer);
// 		document.getElementById("countdown-timer").innerHTML = "Countdown has ended!";
// 	}
//
// }, 1000);


var countDownDate = new Date("2023-05-12T10:00:00Z").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days.toString().padStart(2, "0");
  document.querySelector(".hours").innerHTML = hours.toString().padStart(2, "0");
  document.querySelector(".minutes").innerHTML = minutes.toString().padStart(2, "0");
  document.querySelector(".seconds").innerHTML = seconds.toString().padStart(2, "0");

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown-clock").innerHTML = "IT'S FRIDAY 11:00 AM BST!";
  }
}, 1000);
