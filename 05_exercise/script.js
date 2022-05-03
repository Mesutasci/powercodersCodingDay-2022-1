/*
Write a function called *getLastValue*. Pass an array of strings to the function, which sorts the strings alphabetically and returns the last element.

Example: <br>
Input: ["Monday","Thursday","Saturday","Wednesday","Tuesday"] <br>
Output: Wednesday*/

const names = ["mesut", "huseyin", "murat", "ahmet", "mustafa", "emre"];

const sortedNames = names.sort();

const lengthList = sortedNames.length;

const lastElement = sortedNames[lengthList-1];
console.log(sortedNames);
console.log(lastElement);
