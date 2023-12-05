let unsorted = [3.0, "a", "7", 'x', 20, "d", 4, "f", 8];

function oneCharacter(a) {
  let evens = [];
  let odds = [];
  let chars = [];

  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === "number" && !isNaN(a[i])) {
      if (a[i] % 2 === 0) {
        evens.push(a[i]);
      } else {
        odds.push(a[i]);
      }
    } else if (typeof a[i] === 'string') {
      chars.push(a[i]);
    }
  }

  const sortedEvens = sortArray(evens);
  const sortedOdds = sortArray(odds);
  const sortedChars = sortArray(chars);

  return {
    evens: sortedEvens,
    odds: sortedOdds,
    chars: sortedChars,
  };
}

function sortArray(arrInput) {
  // Sort array using JavaScript's sort function
  return arrInput.sort((a, b) => {
    // For strings, compare based on their Unicode code points
    if (typeof a === 'string' && typeof b === 'string') {
      return a.localeCompare(b);
    }
    return a - b;
  });
}

console.log(oneCharacter(unsorted));
