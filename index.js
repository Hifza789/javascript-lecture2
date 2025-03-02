// Arrays


let names = ["Ali","Zeee","Zeee","Sarah","tom"];
//             0      1      2      3
// index numbers 0-infinity
console.log(names[3]);
   
names.push("Lahore");
names.push("1000");
names.push("7878");
names.push("islamabad");
// removing data
names.pop();
console.log(names);

names.shift();
console.log(names);
let elementAt = names.indexOf("Ali");

if (elementAt < 0) {
    alert("Unable to find the respective element");
} else {
    alert("Element finded at: " + elementAt);
}
let firstName = "Hifsa";
let lastName = "Abbas";

let fullName = firstName +" " + lastName;
console.log(fullName);

let reveredArr = names.reverse();
console.log(reveredArr);
console.log(reveredArr[0]);

console.log(names.join(","));

console.log(names.reverse());
function sayHello(){
    console.log("sayhello");
    alert("sayhello");
}


