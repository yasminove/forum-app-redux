/*
1) implement the last version of each 
*/


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
1) implement map function

*/
	function map(array, f) {
	  var acc = [];
	  each(array,function(element,i){
	  	acc.push(f(element,i))
	  })
	  return acc;
	}


/*
1) implement the improved map 
*/


function map(coll, f) {
	var acc = [];
      if (!Array.isArray(coll)) {
	acc = {};
  }
  each(coll, function(element, key) {
    acc[key] = f(element, key) ;
  });
	  
	 return acc;
}
  ***