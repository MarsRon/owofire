var kaomoji = ["(o´∀`o)", "(#｀ε´)", "(๑•̀ㅁ•́๑)✧", "(*≧m≦*)", "(・`ω´・)", "UwU", "OwO", ">w<", "｡ﾟ( ﾟ^∀^ﾟ)ﾟ｡", "ヾ(｀ε´)ﾉ", "(´• ω •`)", "o(>ω<)o", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "(⁀ᗢ⁀)", "(￣ε￣＠)", "( 〃▽〃)", "(o^ ^o)", "ヾ(*'▽'*)", "(*^ω^)", "(◕‿◕✿)", "(◕ᴥ◕)", "ʕ•ᴥ•ʔ", "ʕ￫ᴥ￩ʔ", "(*^.^*)", "owo", "(｡♥‿♥｡)", "uwu", "(*￣з￣)", ">w<", "^w^", "(つ✧ω✧)つ", "(/ =ω=)/"];

function getKaomoji() {
	return kaomoji[Math.floor(Math.random() * kaomoji.length)];
}

function owofire(input) {
	var owoified = input
		.replace(/l|r/g, "w")
		.replace(/L|R/g, "W")
		.replace(/n([aeiou])/g, "ny$1")
		.replace(/N([aeiou])/g, "Ny$1")
		.replace(/N([AEIOU])/g, "NY$1")
		.replace(/ove/g, "uv")
		.replace(/OVE/g, "UV")
		.replace(/nd(?= |$)/g, "ndo")
		.replace(/z(?:\s)/, "z~")
		.replace(/([^@])!+/g, `$1! ${getKaomoji()}`)
		.replace(/nd(?= |$)/g, "ndo")

		.replace(/\?/g, " uwu?")
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
		owoified += ` ${getKaomoji()}`;

	return owoified;
}

module.exports = owofire;