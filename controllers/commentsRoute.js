
const express = require("express");
const fs = require("fs");
const router = express.Router();


router.get("/", (req, res) => {

	res.locals.metaTag = {
		title: "My comment page",
		content: "Check out the comments left by others and/or add your own.",
		linkMain: "css/common.css",
		linkPage: "css/comments.css"
	};

	let theList = fs.readFileSync("./comments/theComments.json");

	let comments = JSON.parse(theList);

	res.render("comments", { comments });
});


module.exports = router;