
const fillInput = (theID) => {
	document.getElementById(theID).style.backgroundColor = "#93b7db";
	event.preventDefault();
}

const fullInput = (theID) => {
	document.getElementById(theID).style.backgroundColor = "transparent";
}


// This checks to make sure data is entered on client side
document.getElementById("button").addEventListener("click", function() {

	let inputName = document.getElementById("byWho").value.trim();
	let inputComment = document.getElementById("addedWhat").value.trim();

	if (inputName === "") {
		fillInput("byWho");
	} else {
		fullInput("byWho");
	}

	if (inputComment === "") {
		fillInput("addedWhat");
	} else {
		fullInput("addedWhat");
	}
});

let theCs = document.getElementsByClassName("replyBtn");

for (let i = 0 ; i < theCs.length ; i++) {

	theCs[i].addEventListener("click", (event) => {

		let inputName = document.getElementById("byWho").value.trim();
		let inputComment = document.getElementById("addedWhat").value.trim();

		if (inputName === "") {
			fillInput("byWho");
		} else {
			fullInput("byWho");
		}

		if (inputComment === "") {
			fillInput("addedWhat");
		} else {
			fullInput("addedWhat");
		}
	});
};
