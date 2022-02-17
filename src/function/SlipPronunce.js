function slipPronunce() {
    if(localStorage.getItem("config-silp-pronunce") === "false") return
    let tds = $(".StudySummaryItem_studySummaryItem__k2ME0")
    tds.each(index => {
        let item = $(tds[index])
        let sound = item.find(".StudySummaryItem_sound__htCqt img")
        item.on("mouseenter", () => {
            sound.trigger("click")
        })
    })
}

export default slipPronunce