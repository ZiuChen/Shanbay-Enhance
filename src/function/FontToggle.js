function fontToggle() {
    if(localStorage.getItem("config-fonts") === "false") return
    let selectors = JSON.parse(localStorage.getItem("config-fonts-selector"))
    let fontToggle = /* CSS */`
        .fontToggle {
            font-family: ${localStorage.getItem("config-fonts-choice")};
        }
    `
    $("head").append(`<style class="fontToggle">${fontToggle}</style>`)
    selectors.forEach(selector => {
        if(selector.enable === false) return
        $(selector.selector).addClass("fontToggle")
    })
}

export default fontToggle