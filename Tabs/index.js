const tabs = document.querySelectorAll("[data-target]")
const tabContents = document.querySelectorAll("[data-content]")

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active")
    })
    target.classList.add("active")

    tabs.forEach((tab) => {
      tab.classList.remove("active")
    })
    tab.classList.add("active")
  })
})
