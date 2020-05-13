// Helper functions
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

/*
Using filter, write the following function:
-Write a function called evenMultThree that takes an array of numbers as a parameter, 
and returns an array of only the even numbers in the array that are also multiple of 3
evenMultThree([2,3,1,12,18,0,21,90]) ====> [12,18,90]
*/

/*
Using filter, write a function called endsWithChar that takes two parameters: an array of strings, and a character (e.g. "a"), 
and returns an array of only the strings that end with that character:
var studentQuote = ["we", "just", "love", "breaks", "we", "hate", "assessments", "sorry", ":("];
endsWithChar(studentQuote, "e"); // => [”we”,”love", "we", "hate"]
*/