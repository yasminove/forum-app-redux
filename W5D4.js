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

/*
1- Write the filter function then use it in a function of your own to illustrate how we use it. 
*/

function filter() {
  // your code here
}

/*
2- Write the new version of reduce function then use it in a function of your own to illustrate how we use it. 
*/

function reduce() {
  // your code here
}

/*
3- Write down here what are you thinking at the moment, HONESTLY 
*/
