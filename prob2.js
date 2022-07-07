//QUESTION 2 
//Write a Node.js program that takes the string from a command-line argument
//and searches for it in this file. Return true if the string exists otherwise return
//false.
//For eg. node index.js browser
//browser → String
//import { readFileSync } from 'node:fs';

var myArgs = process.argv.slice(2);

var mytext; 
mytext = myArgs[0];
 

const {readFileSync, promises: fsPromises} = require('fs');
//const fileUrl = new URL('file://https://gist.github.com/GarvJain03/11979012b1f07395794148f9f7ab4b1c#file-example-txt');

function checkIfContainsSync(filename, str) {
  const contents = readFileSync(filename, 'utf-8');
  const result = contents.includes(str);
  return result;
}
//  true
console.log(checkIfContainsSync('./example.txt',mytext));
//MADE BY ASHMIT KAUSHIK 10D
