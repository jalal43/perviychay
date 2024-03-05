// Helper function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example of usage:
  const originalString = "Hello, World!";
  const reversedString = reverseString(originalString);
  console.log(`Original: ${originalString}\nReversed: ${reversedString}`);