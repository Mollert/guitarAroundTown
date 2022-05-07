
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {

	res.locals.metaTag = {
		title: "Mementos page",
		content: "This page shows mementos I've been given while playing.",
		linkMain: "css/common.css",
		linkPage: "css/mementos.css"
	};

	res.render("mementos");
});


module.exports = router;