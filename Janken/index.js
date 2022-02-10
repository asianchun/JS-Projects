const selectionButtons = document.querySelectorAll("[data-selection]")
const finalColumn = document.querySelector("[data-final-column]")
const yourScore = document.querySelector("[data-your-score]")
const computerScore = document.querySelector("[data-computer-score]")
const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌",
    beats: "paper",
  },
]

selectionButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const selectionName = button.dataset.selection
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    )
    makeSelection(selection)
  })
})

function makeSelection(selection) {
  const computerSelection = randomSelection()
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)

  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)

  if (yourWinner) incrementScore(yourScore)
  if (computerWinner) incrementScore(computerScore)
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}

function addSelectionResult(selection, winner) {
  const div = document.createElement("div")
  div.innerText = selection.emoji
  div.classList.add("result-selection")
  if (winner) div.classList.add("winner")
  finalColumn.after(div)
}

function incrementScore(score) {
  score.innerText = parseInt(score.innerText) + 1
}
