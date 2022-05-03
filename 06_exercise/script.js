/*
Write a function called *weekNumbersToWords* when given an input array of numbers 1-7, it outputs an array of the weeksdays written out. You must use a switch, not if/else.

Example: <br>
Input: [1,4,6,3,2] <br>
Output: ["Monday","Thursday","Saturday","Wednesday","Tuesday"]

Estimated time: 30 minutes <br>
Total points: 30 */

const dayNumbers = [1, 5, 7, 3]

let weekDays = []; 
dayNumbers.forEach(day =>  { 
    switch (day) {
    case 1:
        weekDays.push("Monday");
        break;
    case 2:
        weekDays.push("Tuesday");
        break;
    case 3:
        weekDays.push("Wednesday");
        break;
    case 4:
        weekDays.push("Thursday");
        break;
    case 5:
        weekDays.push("Friday");
        break;
    case 6:
        weekDays.push("Saturday");
        break;
    case 6:
        weekDays.push("Saturday");
        break;
  default:
    weekDays.push("Undifined");
    }
});
console.log(weekDays);

