function isPalindrome(word) {
    // If the word is empty or contains only one character, it's a palindrome
    if (word.length <= 1) {
        return true;
    }
    
    // Comparing characters from both ends of the word
    if (word[0] === word[word.length - 1]) {
        // Recursively check the rest of the word
        return isPalindrome(word.slice(1, -1));
    } else {
        return false;
    }
}

// Test cases
const word1 = "gag";
const word2 = "kayak";
const word3 = "php";
const word4 = "radar";

console.log(isPalindrome(word1));  // Output: true
console.log(isPalindrome(word2));  // Output: true
console.log(isPalindrome(word3));  // Output: true
console.log(isPalindrome(word4));  // Output: true
