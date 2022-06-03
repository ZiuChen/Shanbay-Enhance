import darkStyle from "../style/DarkStyle"

function toggleDarkMode() {
  if (localStorage.getItem("config-darkmode") === "false") {
    $("head .dark-style").remove()
  } else if (localStorage.getItem("config-darkmode") === "true") {
    $("head").append(`<style class="dark-style">${darkStyle}<style>`)
  }
}

export default toggleDarkMode
