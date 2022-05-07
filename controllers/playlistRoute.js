
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {

	res.locals.metaTag = {
		title: "My song playlist page",
		content: "This page presents the list of songs along with the author which I play.",
		linkMain: "css/common.css",
		linkPage: "css/playlist.css"
	};

	res.render("playlist");
});


module.exports = router;