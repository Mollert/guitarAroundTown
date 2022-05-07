
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {

	res.locals.metaTag = {
		title: "Introducing Guitar Around Town",
		content: "This is the main site page that introduces myself and lists the links along with my contact information concerning my guitar appearances.",
		linkMain: "css/home.css"
	};

	res.render("home");
});


module.exports = router;