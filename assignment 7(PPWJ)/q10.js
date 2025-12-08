let bday = new Date(1998, 6, 15); // July (month index 6)

let day = bday.getDate();

let month = bday.toLocaleString("en-US", { month: "long" });

let year = bday.getFullYear();

console.log(`${day} ${month} ${year}`);