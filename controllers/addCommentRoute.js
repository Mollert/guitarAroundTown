
const express = require("express");
const fs = require("fs");
const { DateTime } = require("luxon");
const router = express.Router();


// Access to no-words
let nonoWords = require("../public/javascript/nonoWords.js");
// Need number for id
let useID = require("../idNumbers/createID.js");
// Parse comments so readable 
//let postItParsed = require("../comments/translate/translateToJS.js");


router.post("/", (req, res) => {

	res.locals.metaTag = {
		title: "My comment page",
		content: "This page shows that your comment has been added to the rest.",
		linkMain: "css/common.css",
		linkPage: "css/comments.css"
	};

//	console.log(req.body);

	let checked = false;
	let together = req.body.byWho + " " + req.body.addedWhat;
	let separated = [];

// Separate the string to check each entry for profanity
	separated = together.split(" ");

	for (let i = 0 ; i < separated.length ; i++) {

		let workingLC = separated[i].toLowerCase();

		for (let j = 0 ; j < nonoWords.length ; j++) {
			if (workingLC.indexOf(nonoWords[j]) > -1) {
				checked = true;
				j = nonoWords.length;				
			}
		}
	}

// If entries contain profanity, send back language page
	if (checked) {
			res.render("noProfanity");

// If no bad language, proceed with adding comment
	} else {

		let stringComments = fs.readFileSync("./comments/theComments.json");
		let comments = JSON.parse(stringComments);

		let mainID = Number(useID());

		let rightNow = DateTime.now();

// Create new comment
		let newComment = {
			id: mainID,
			replyID: mainID.toString() + "R",
			margin: 0,
			guest: req.body.byWho,
			date: rightNow.monthShort + " " + rightNow.day + ", " + rightNow.year,
			comment: req.body.addedWhat
	}	

// If a reply to another comment then req.body = 3; else a original comment
		if (Object.keys(req.body).length === 3) {

			let theOne = Object.keys(req.body)[2];
			theOne = theOne.slice(0, -1);

			let repliedTo = Number(theOne);
			let repliedToIndex = 0;
// Looping through comments to find the comment that the reply was written to	
			for (let i = 0 ; i < comments.length ; i++) {

				if (comments[i].id === repliedTo) {				
					newComment.margin = comments[i].margin + 1.6;
					repliedToIndex = i + 1;
				}
			}
			comments.splice(repliedToIndex, 0, newComment);

		} else {
			comments.unshift(newComment);		
		}

		let allComments = JSON.stringify(comments);	

		let path = "./comments/theComments.json"

		fs.writeFile(path, allComments, {flag: "w"}, (error) => {
//		postItParsed();		
			if (error) {
				console.log(error.message);		
			}
		});

		res.render("comments", { comments });
	}
});


module.exports = router;