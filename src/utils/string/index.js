/**
* Convert From/To Binary/Decimal/Hexadecimal in JavaScript
* https://gist.github.com/faisalman
*
* Copyright 2012-2015, Faisalman <fyzlman@gmail.com>
* Licensed under The MIT License
* http://www.opensource.org/licenses/mit-license
*/

const ConvertBase = function (num) {
  return {
    from(baseFrom) {
      return {
        to(baseTo) {
          return parseInt(num, baseFrom).toString(baseTo);
        },
      };
    },
  };
};

// binary to decimal
export const bin2dec = function (num) {
  return ConvertBase(num).from(2).to(10);
};

// binary to hexadecimal
export const bin2hex = function (num) {
  return ConvertBase(num).from(2).to(16);
};

// decimal to binary
export const dec2bin = function (num) {
  return ConvertBase(num).from(10).to(2);
};

// decimal to hexadecimal
export const dec2hex = function (num) {
  return ConvertBase(num).from(10).to(16);
};

// hexadecimal to binary
export const hex2bin = function (num) {
  return ConvertBase(num).from(16).to(2);
};

// hexadecimal to decimal
export const hex2dec = function (num) {
  return ConvertBase(num).from(16).to(10);
};
