const faces = ['UwU', 'OwO', 'owo', 'uwu', '^w^', '>w<', 'x3', '^-^', 'w', ':3', 'ÚwÚ']

const getFace = () => faces[Math.floor(Math.random() * faces.length)]

module.exports = function owofire(input) {
  let text = input
    .replace(/l|r/g, 'w')
    .replace(/L|R/g, 'W')
    .replace(/N(?=[aeiou])/g, 'Ny')
    .replace(/n(?=[aeiou])/g, 'ny')
    .replace(/N(?=[AEIOU])/g, 'NY')
    .replace(/ove/g, 'uv')
    .replace(/OVE/g, 'UV')
    .replace(/nd\b/g, 'ndo')
    .replace(/z\b/g, 'z~')
    .replace(/!+(?=\s)/g, `! ${getFace()}`)
    .replace(/\?+(?=\s|$)/g, ` ${getFace()}?`)
    .replace(/the/g, 'da')
    .replace(/this/g, 'dis')
    .replace(/with/g, 'wif')
    .replace(/youw/g, 'ur')
    .replace(/you/g, 'u')
    .replace(/,/g, '~')
    .replace(/:\)/g, ':3')
    .replace(/:O/g, 'OwO')
    .replace(/:o/g, 'owo')
    .replace(/:D/g, 'UwU')
    .replace(/XD/g, 'X3')
    .replace(/xD/g, 'x3')

  return text
}
