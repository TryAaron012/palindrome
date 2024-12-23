function palindromeCheck() {

    let word1 = prompt("Enter the first word:");
    let word2 = prompt("Enter the second word:");

    
    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    
    let reversedWord1 = reverseString(word1);
    let reversedWord2 = reverseString(word2);

    
    if (word1 === reversedWord1) {
        alert(word1 + " is a palindrome.");
    } else {
        alert(word1 + " is not a palindrome.");
    }

    if (word2 === reversedWord2) {
        alert(word2 + " is a palindrome.");
    } else {
        alert(word2 + " is not a palindrome.");
    }
}