// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name); 
  }
  
  function destructivelyPrependCat(name) {
    cats.unshift(name); 
  }

  function destructivelyRemoveLastCat() {
    cats.pop(); 
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift(); // Remove the first cat from the 'cats' array.
  }
  
  function appendCat(name) {
    const catsCopy = [...cats]; // Create a copy of the original 'cats' array.
    catsCopy.push(name); // Append the cat's name to the copy.
    return catsCopy; // Return the modified copy of the array, leaving the original 'cats' array unchanged.
  }
  
  function prependCat(name) {
    const catsCopy = [...cats]; // Create a copy of the original 'cats' array.
    catsCopy.unshift(name); // Prepend the cat's name to the copy.
    return catsCopy; // Return the modified copy of the array, leaving the original 'cats' array unchanged.
  }
  
  function removeLastCat() {
    const catsCopy = [...cats]; // Create a copy of the original 'cats' array.
    catsCopy.pop(); // Remove the last cat from the copy using the pop method.
    return catsCopy; // Return the modified copy of the array, leaving the original 'cats' array unchanged.
  }
  
  function removeFirstCat() {
    const catsCopy = [...cats]; // Create a copy of the original 'cats' array.
    catsCopy.shift(); // Remove the first cat from the copy using the shift method.
    return catsCopy; // Return the modified copy of the array, leaving the original 'cats' array unchanged.
  }
  