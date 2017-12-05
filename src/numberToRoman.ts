type IntRomanMapType = { int: number, roman: string }[];

/**
 * 
 * @param {number} number 
 * @returns {string} Roman numeral
 */
function numberToRoman(number: number): string {
  // This map includes only variations which enough to convert any number
  // Please don't add or remove any item
  const intRomanMap: IntRomanMapType = [
    { int: 1000, roman: 'M' },
    { int: 900, roman: 'CM' },
    { int: 500, roman: 'D' },
    { int: 400, roman: 'CD' },
    { int: 100, roman: 'C' },
    { int: 90, roman: 'XC' },
    { int: 90, roman: 'XC' },
    { int: 50, roman: 'L' },
    { int: 40, roman: 'XL' },
    { int: 10, roman: 'X' },
    { int: 9, roman: 'IX' },
    { int: 5, roman: 'V' },
    { int: 4, roman: 'IV' },
    { int: 1, roman: 'I' },
  ];

  let rest = number;
  let processed = '';

  intRomanMap.forEach((item) => {
    while (rest >= item.int) {
      rest -= item.int;
      processed += item.roman;
    }
  });
  
  return processed;
}

export default numberToRoman;
