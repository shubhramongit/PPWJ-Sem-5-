let name="Shreemaya & Sons";

let encoded=encodeURIComponent(name);
console.log("encoded:", encoded);

let decoded=decodeURIComponent(encoded);
console.log("Decoded:", decoded);