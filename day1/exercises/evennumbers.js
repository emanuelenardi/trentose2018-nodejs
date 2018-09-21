// it stores the number of arguments
const myArguments = process.argv.slice(2);

const from = myArguments[0];
const to = myArguments[1];

// console.log(process.argv);

// Overriding the version toString method.
// myArguments.toString = function() {
//     return ('[' + this.join(' , ') + ']');
// };

// Checking the slicing
// console.log(myArguments);
// console.log('myArguments = ' + myArguments);

// checking the requisites
const noIsCorrect = (myArguments.length === 2);
const typeIsCorrect = (
	typeof parseInt(from) === "number" &&
	typeof parseInt(to) == "number"
);

// console.log(noIsCorrect);
// console.log(typeIsCorrect);

// if the no. of arguments is correct then proceed
if (
	noIsCorrect &&
	typeIsCorrect
) {
	for (let i = 0; i < myArguments.length; i++) {
		console.log(myArguments[i]);
	}
} else {
	console.log("incorrect number of arguments");
}
