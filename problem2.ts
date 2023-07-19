function atbashCipher(input: string): string {
  const plainAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const cipherAlphabet = "zyxwvutsrqponmlkjihgfedcba";

  const inputLowerCase = input.toLowerCase();
  let result = "";

  for (const char of inputLowerCase) {
    if (/[a-z]/.test(char)) {
      const index = plainAlphabet.indexOf(char);
      result += cipherAlphabet[index];
    } else {
      result += char;
    }
  }

  return result;
}

// Test cases
console.log(atbashCipher("Olivn rkhfn wloli hrg znvg")); // Output: Loremipsumdolorsitamet
console.log(atbashCipher("Svool dliow! R'n ovzimrmt gbkvhxirkg!")); // Output: HelloworldImlearningtypescript
console.log(atbashCipher("Gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt")); // Output: Thequickbrownfoxjumpsoverthelazydog
