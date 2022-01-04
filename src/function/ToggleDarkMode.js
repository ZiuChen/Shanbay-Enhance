import darkStyle from "../style/DarkStyle";

function toggleDarkMode() {
    if(localStorage.getItem("config-darkmode") === "false") return
    $("head").append(`<style>${darkStyle}<style>`)
}

export default toggleDarkMode