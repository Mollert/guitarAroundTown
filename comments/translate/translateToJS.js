
const fs = require("fs");


// Translates and posts the comments to a form that is easily read
let postItParsed = () => {

	let stringifyForm = fs.readFileSync("./comments/theComments.json");

	let parseIt = JSON.parse(stringifyForm);

	let path = "./comments/translate/commentsJS.js"
	let translated = JSON.stringify(parseIt, null, 2);

	fs.writeFile(path, translated, {flag: "w"}, (error) => {	
		if (error) {
			console.log(error.message);		
		}
	});
};

module.exports =  postItParsed;