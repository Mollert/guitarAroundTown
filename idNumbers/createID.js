
const fs = require("fs");


// Get next number for comment id then write the new number back
let createID = () => {

	let path = "./idNumbers/idStorage.txt"

	let data = fs.readFileSync(path, "utf8");

	let newData = Number(data);
	newData++;

	newData = newData.toString();

	fs.writeFile(path, newData, {flag: "w"}, (error) => {
		if (error) {
			console.log(error.message);		
		}
	});

	return newData;
}


module.exports =  createID;