
const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const { DateTime } = require("luxon");

const app = express();
const router = express.Router();
const port = process.env.PORT || 7800;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname ,"public")));

app.engine("handlebars", engine({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname ,"views"));

const playlist = require("./controllers/playlistRoute.js");
const played = require("./controllers/playedRoute.js");
const bio = require("./controllers/bioRoute.js");
const mementos = require("./controllers/mementosRoute.js");
const comments = require("./controllers/commentsRoute.js");
const addComment = require("./controllers/addCommentRoute.js");
const homePage = require("./controllers/homeRoute.js");

app.use("/playlist", playlist);
app.use("/played", played);
app.use("/bio", bio);
app.use("/mementos", mementos);
app.use("/comments", comments);
app.use("/addComment", addComment);
app.use("/", homePage);


app.listen(port, () => console.log(`Tuned In and Turned On to port ${port}`));