function acronymize(phrase: string): string {
  const words = phrase.split(" ");
  let acronym = "";

  for (const word of words) {
    if (word !== "") {
      acronym += word[0].toUpperCase();
    }
  }

  return acronym;
}

// Test cases
console.log(acronymize("Portable Network Graphics")); // Output: PNG
console.log(acronymize("Correct me if I'm wrong")); // Output: CMIIW
console.log(acronymize("Thanks god It's Friday")); // Output: TGIF
