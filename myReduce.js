// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {
console.log(arr);
var reduced = arr[0];
for (let i = 0; i < arr.length; i++) {
	reduced = callback(reduced, arr[i], i, arr);
	console.log(reduced);
	if (arguments.length === 3) {
		for (let i = 0; i < arr.length; i++) {
			reduced = arguments[2];
			console.log(reduced);
		}
			} else {
			for (let i = 0; i < arr.length; i++) {
				reduced = callback(reduced, arr[i], i, arr);
		}
	}
}

return reduced;

}
/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
