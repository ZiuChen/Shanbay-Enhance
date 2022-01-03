function toggleSummaryTranslation() {
    let wordList = document.querySelectorAll(".StudySummaryItem_content__3j9YG")
    if(localStorage.getItem("config-summary") === "true") {
        localStorage.setItem("config-summary", "false")
        wordList.forEach(item => {
            item.style.color = "black"
            item.getElementsByTagName("div")[0].style.background = ""
        })
    }
    else {
        localStorage.setItem("config-summary", "true")
        wordList.forEach(item => {
            item.style.color = "#cccccc"
            item.getElementsByTagName("div")[0].style.background = "#cccccc"
        })
    }
}

function hideSummaryTranslation() {
    let checked = ""
    if(localStorage.getItem("config-summary") === "true") checked = "checked" // Key-value is not Boolean but String
    const statusSwitch = /* html */`
        <div class="span" style="margin-right: 10px;">释义遮挡</div>
        <label class="switch">
            <input type="checkbox" ${checked}>
            <div class="slider round"></div>
        </label>`
    let wordList = document.querySelectorAll(".StudySummaryItem_content__3j9YG")
    if(localStorage.getItem("config-summary") === "true") {
        wordList.forEach(item => {
            item.style.color = "#cccccc"
            item.getElementsByTagName("div")[0].style.background = "#cccccc"
        })
    }
    $($(".StudySummary_studySummary__32y_I .row").get(0)).append(statusSwitch)
    $(".slider").click(function () {
        toggleSummaryTranslation()
    })
    wordList.forEach((item) => {
        item.addEventListener("mouseenter", (e) => {
            let that = e.path[0]
            that.style.color = "black"
            that.getElementsByTagName("div")[0].style.background = ""
        })
        item.addEventListener("mouseleave", (e) => {
            if(localStorage.getItem("config-summary") === "false") return
            let that = e.path[0]
            that.style.color = "#cccccc"
            that.getElementsByTagName("div")[0].style.background = "#cccccc"
        })
    })
}
export default {
    toggleSummaryTranslation,
    hideSummaryTranslation
}