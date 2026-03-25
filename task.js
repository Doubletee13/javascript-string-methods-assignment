/*
INDIVIDUAL TASK
==================
1. Create an initials generator program

- Ask for full name
- Output initials

Example:
Andrew Solex → A.S
*/
let fullName = prompt("What is your fullname?").toUpperCase()
let splittedName = fullName.split(" ")
console.log(`Your initials are: ${splittedName[0][0]}.${splittedName[1][0]}`)
/*
2. Create a word position finder

- Ask for a sentence
- Ask for a letter
- Show the position of that letter
*/
let sentence = prompt("Enter a sentence").toLowerCase()
let letter = prompt(`Enter letter you wish to find it's position in your sentence`).toLowerCase()
let indexOfLetter = sentence.indexOf(letter)
console.log(`letter '${letter}' is at position ${indexOfLetter + 1} in the sentence '${sentence}'`)
/*
3. Build a username generator

- Ask for:
-> First name
-> Last name

- Create a username like:
andrewsolex_11

(11 = total number of characters in first name and last name)
*/
let firstName = prompt("What is your first name?")
let lastName = prompt("What is your last name?")
let userName = firstName + lastName
console.log(`Your username is ${userName}_${userName.length}`)

















