const openButton = document.querySelector("[data-modal-target]")
const closeButton = document.querySelector("[data-close-button]")
const overlay = document.getElementById("overlay")

openButton.addEventListener("click", () => {
  const modal = document.querySelector(openButton.dataset.modalTarget)
  openModal(modal)
})

closeButton.addEventListener("click", () => {
  const modal = closeButton.closest(".modal")
  closeModal(modal)
})

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active")
  modals.forEach((modal) => {
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return

  modal.classList.add("active")
  overlay.classList.add("active")
}

function closeModal(modal) {
  if (modal == null) return

  modal.classList.remove("active")
  overlay.classList.remove("active")
}
