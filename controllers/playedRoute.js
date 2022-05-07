
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {

	res.locals.metaTag = {
		title: "Where this guitar has been",
		content: "This page gives you a feel for the places my guitar and I have been.",
		linkMain: "css/common.css",
		linkPage: "css/played.css"
	};

	res.render("played");
});


module.exports = router;