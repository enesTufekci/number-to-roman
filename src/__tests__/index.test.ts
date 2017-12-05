import numberToRoman from '../numberToRoman';

describe('numberToRoman', () => {
  it('should convert number into roman numeral', () => {
    expect(numberToRoman(1)).toEqual('I');
    expect(numberToRoman(3)).toEqual('III');
    expect(numberToRoman(14)).toEqual('XIV');
    expect(numberToRoman(198)).toEqual('CXCVIII');
    expect(numberToRoman(1567)).toEqual('MDLXVII');
  });
});
