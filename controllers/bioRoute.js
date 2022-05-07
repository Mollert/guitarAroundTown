
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {

	res.locals.metaTag = {
		title: "My bio page",
		content: "This page presents my bio for those that are interested.",
		linkMain: "css/common.css",
		linkPage: "css/bio.css"		
	};

	res.render("bio");
});


module.exports = router;