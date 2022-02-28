const charAmountRange = document.getElementById("charAmountRange")
const charAmountNumber = document.getElementById("charAmountNumber")
const form = document.getElementById("passwordGenerator")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeNumberElement = document.getElementById("includeNumbers")
const includeSymbolElement = document.getElementById("includeSymbols")
const passwordDisplay = document.getElementById("passwordDisplay")
const UPPERCASE = arrayFromLowToHigh(65, 90)
const LOWERCASE = arrayFromLowToHigh(97, 122)
const NUMBERS = arrayFromLowToHigh(48, 57)
const SYMBOLS = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126))

charAmountNumber.addEventListener("input", syncCharAmount)
charAmountRange.addEventListener("input", syncCharAmount)
form.addEventListener("submit", (e) => {
  e.preventDefault()

  const charAmount = charAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumberElement.checked
  const includeSymbols = includeSymbolElement.checked

  const password = generatePassword(
    charAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  )

  passwordDisplay.innerText = password
})

function syncCharAmount(e) {
  const value = e.target.value
  charAmountNumber.value = value
  charAmountRange.value = value
}

function generatePassword(charAmount, uppercase, numbers, symbols) {
  const passwordChar = []
  let charCodes = LOWERCASE

  if (uppercase) charCodes = charCodes.concat(UPPERCASE)
  if (numbers) charCodes = charCodes.concat(NUMBERS)
  if (symbols) charCodes = charCodes.concat(SYMBOLS)

  for (let i = 0; i < charAmount; i++) {
    const character = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordChar.push(String.fromCharCode(character))
  }

  return passwordChar.join("")
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }

  return array
}
