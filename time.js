
// JavaScript code here
function updateTime() {
// Create a new Date object to get the current date and time
var now = new Date();

// Get hours, minutes, and seconds from the Date object
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

// Pad single digit minutes and seconds with leading zeros
minutes = (minutes < 10 ? '0' : '') + minutes;
seconds = (seconds < 10 ? '0' : '') + seconds;

// Set the time string to display
var timeString = hours + ':' + minutes + ':' + seconds;

// Display the time
document.getElementById('clock').textContent = timeString;
}

// Call updateTime every second
setInterval(updateTime, 1000);




// let a = 1;
// let b ;
// (a < 3)? b ="true": b="false "
// document.write(b)

// let day = new Date().getDay();
// switch (day) {

//     case 0:
//         document.write('mo')
//         break;

//     case 1:
//         document.write('tu')
//         break;

//     case 3:
//         document.write('we')
//         break;

//     case 4:
//         document.write('th')
//         break;

//     case 5:
//         document.write('fri')
//         break;

//     case 6:
//         document.write('sa')
//         break;

//     case 7:
//         document.write('sun')
//         break;

//     default:
//         document.write('False')
//         break;
// }

