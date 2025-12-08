let now = new Date();

let concert = new Date("December 31, 2025 23:59:59");

let diff = concert - now;  // book: date difference gives milliseconds

let days = Math.floor(diff / (1000 * 60 * 60 * 24));

let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

console.log(`Time left: ${days} days, ${hours} hours, ${minutes} minutes`);
  