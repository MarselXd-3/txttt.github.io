const all = document.querySelectorAll("li");
const odds = document.querySelectorAll("li:nth-child(odd)");
const evens = document.querySelectorAll("li:nth-child(even)");
const root = document.documentElement;

let oddColor = "#C51DF8";
let evenColor = "#A5DD09";
const whiteColor = "#CCCCCC";

const radios = document.querySelectorAll("input[type=radio]");
const labels = document.querySelectorAll("label");

const oddPick = document.querySelector("#oddPick");
const evenPick = document.querySelector("#evenPick");
let colorPickers = document.querySelector(".color-pickers");

let label, labelCol, choice;

oddPick.value = oddColor;
evenPick.value = evenColor;

function changeTextColor(val) {
	all.forEach((a) => (a.style.color = ""));
	labels.forEach((l) => (l.style.color = ""));
	colorPickers.style.opacity = 1;
	switch (val) {
		case "odd":
			odds.forEach((o) => (o.style.color = oddColor));
			label.style.color = oddColor;
			break;
		case "even":
			evens.forEach((e) => (e.style.color = evenColor));
			label.style.color = evenColor;
			break;
		case "both":
			odds.forEach((o) => (o.style.color = oddColor));
			evens.forEach((e) => (e.style.color = evenColor));
			label.style.color = whiteColor;
			break;
		default:
			colorPickers.style.opacity = 0;
	}
}

function updateOddColor(e) {
	oddColor = e.target.value;

	if (choice === "both") labelCol ? whiteColor : oddColor;

	label.style.color = labelCol;
	odds.forEach((o) => (o.style.color = oddColor));
}

function updateEvenColor(e) {
	evenColor = e.target.value;

	if (choice === "both") labelCol ? whiteColor : evenColor;

	label.style.color = labelCol;
	evens.forEach((e) => (e.style.color = evenColor));
}

for (const radio of radios) {
	radio.onclick = (e) => {
		choice = e.target.value;
		label = e.target.parentNode;

		if (choice === "odd") changeTextColor("odd");
		else if (choice === "even") changeTextColor("even");
		else if (choice === "both") changeTextColor("both");
		else changeTextColor("");
	};
}

oddPick.addEventListener("change", updateOddColor, false);
oddPick.addEventListener("input", updateOddColor, false);
evenPick.addEventListener("change", updateEvenColor, false);
evenPick.addEventListener("input", updateEvenColor, false);