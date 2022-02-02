const name = document.querySelector("#name")
const password = document.querySelector("#password")
const form = document.querySelector("form")
const error = document.querySelector("#error")

form.addEventListener("submit", (e) => {
  let messages = []

  if (name.value === "" || name.value == null) {
    messages.push("Name is required")
  }

  if (password.value.length <= 6) {
    messages.push("Password must be longer than six characters")
  }

  if (password.value === "password") {
    messages.push("Password cannot be a password")
  }

  if (messages.length > 0) {
    e.preventDefault() //Prevents the form submitting
    error.innerText = messages.join(", ")
  }
})
