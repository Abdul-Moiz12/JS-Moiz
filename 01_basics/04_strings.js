const name = "Abdul Moiz"
const degree = "Cs"

console.log(`My name is ${name} and I'm a ${degree} student.`);

const subName = new String('Design Analysis')
console.log(subName.length)
console.log(subName.__proto__)
console.log(subName.toLowerCase())
console.log(subName.charAt(2))
console.log(subName.indexOf('D'))

const newString = subName.substring(0,6)
console.log(newString)

const anotherString = subName.slice(-15,5) 
console.log(anotherString)

const oneString = "  Chhipa    "
console.log(oneString)
console.log(oneString.trim())

const url = "https://moiz.com/moiz20%chhipa"
console.log(url.replace('20%', '-'))
console.log(url.includes('abdul'))
console.log(subName.split('  '))


