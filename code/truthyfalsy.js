let wordCount = 1; // Any number other than 0 is considered as truthy value.

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
} // Prints Great! You've started your work!


let favoritePhrase = ''; // Empty string is considered as falsy value.

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
// Prints This string is definitely empty.
