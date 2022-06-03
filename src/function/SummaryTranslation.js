function executeToggle(passIn, withFor) {
  if (withFor === 1) {
    for (let i = 0; i < passIn.length; i++) {
      $(passIn[i]).find("div").toggleClass("hideTrans")
    }
  } else $(passIn).find("div").toggleClass("hideTrans")
}

function toggleSummaryTranslation() {
  let wordList = $(".StudySummaryItem_content__3j9YG")
  if (localStorage.getItem("config-summary") === "true") {
    localStorage.setItem("config-summary", "false")
    executeToggle(wordList, 1)
  } else {
    localStorage.setItem("config-summary", "true")
    executeToggle(wordList, 1)
  }
}

function hideSummaryTranslation() {
  let checked = ""
  if (localStorage.getItem("config-summary") === "true") checked = "checked" // Key-value is not Boolean but String
  const statusSwitch = /* html */ `
        <div class="span" style="margin-right: 10px;">释义遮挡</div>
        <label class="switch">
            <input type="checkbox" ${checked}>
            <div class="slider round"></div>
        </label>`
  let wordList = $(".StudySummaryItem_content__3j9YG")
  if (localStorage.getItem("config-summary") === "true") {
    executeToggle(wordList, 1)
  }
  $($(".StudySummary_studySummary__32y_I .row").get(0)).append(statusSwitch)
  $(".slider").click(function () {
    toggleSummaryTranslation()
  })
  for (let i = 0; i < wordList.length; i++) {
    $(wordList[i]).mouseenter(() => {
      if (localStorage.getItem("config-summary") === "false") return
      executeToggle(wordList[i], 0)
    })
    $(wordList[i]).mouseleave(() => {
      if (localStorage.getItem("config-summary") === "false") return
      executeToggle(wordList[i], 0)
    })
  }
}
export default {
  toggleSummaryTranslation,
  hideSummaryTranslation
}
