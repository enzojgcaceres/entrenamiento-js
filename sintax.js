// () => expression

// param => expression

// (param) => expression

// (param1, paramN) => expression

// () => {
//  statements
// }

// param => {
//  statements
// }

// (param1, paramN) => {
//  statements
// }

// Traditional anonymous function
(function (a) {
    return a + 100;
  });
  
  // 1. Remove the word "function" and place arrow between the argument and opening body bracket
  (a) => {
    return a + 100;
  };
  
  // 2. Remove the body braces and word "return" — the return is implied.
  (a) => a + 100;
  
  // 3. Remove the parameter parentheses
  a => a + 100;
  
