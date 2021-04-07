var faces = ["UwU", "OwO", "owo", "uwu", "^w^", ">w<", "x3", "^-^", ";;w;;", ":3", "ÚwÚ"];

function getFace() {
	return faces[Math.floor(Math.random() * faces.length)];
}

module.exports = function owofire(input) {
	var owoified = input
		.replace(/l|r/g, "w")
		.replace(/L|R/g, "W")
		.replace(/n([aeiou])/g, "ny$1")
		.replace(/N([aeiou])/g, "Ny$1")
		.replace(/N([AEIOU])/g, "NY$1")
		.replace(/ove/g, "uv")
		.replace(/OVE/g, "UV")
		.replace(/nd(?=\s+|$)/g, "ndo")
		.replace(/z(\s)/g, "z~$1")
		.replace(/([^@])!+/g, `$1! ${getFace()}`)

		.replace(/\?+/g, ` ${getFace()}?`)
		.replace(/the/g, "teh")
		.replace(/this/g, "dis")
		.replace(/with/g, "wif")
		.replace(/youw/g, "ur")
		.replace(/you/g, "u")
		.replace(/,|;/g, "~")
		.replace(/:\)/g, ":3")
		.replace(/:O/g, "OwO")
		.replace(/:o/g, "owo")
		.replace(/:D/g, "UwU")
		.replace(/XD/g, "X3")
		.replace(/xD/g, "x3");

	// Prevent duplicate kaomoji at the end of the string
	if (!input.endsWith("!"))
		owoified += ` ${getFace()}`;

	return owoified;
}