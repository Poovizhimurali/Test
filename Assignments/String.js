
let originalWord = "madam";
let chars = originalWord.split("");
let reversedWord = "";
for (let i = chars.length - 1; i >= 0; i--) {
    reversedWord += chars[i];
}
console.log("Reversed Word:", reversedWord);
if (originalWord === reversedWord) {
    console.log("It’s a palindrome!");
} else {
    console.log("Not a palindrome!");
}