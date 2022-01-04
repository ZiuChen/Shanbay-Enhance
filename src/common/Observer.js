import loadConfig from "./LoadConfig"
import SummaryTranslation from "../function/SummaryTranslation"
import fontToggle from "../function/FontToggle"

const fontToggle_conditions = ["study-page", "index_hint", "StudyPage_nextBtn", "StudySummary"]

function Observer() {
    const OuterTargetNode = document.getElementsByClassName("Layout_main__2_zw8")[0]
    if(typeof OuterTargetNode === "undefined") return
    const OuterCallback = (mutations) => {
        mutations.forEach(mutation => {
            if(mutation.addedNodes.length === 0) return
            if(mutation.addedNodes[0].className === undefined) return
            let currentState = mutation.addedNodes[0].className
            console.log(currentState);
            if(currentState.indexOf("SettingContainer_setting") !== -1) loadConfig()
            fontToggle_conditions.forEach(condition => {
                if(currentState.indexOf(condition) !== -1) fontToggle()
            })
            if(currentState.indexOf("StudySummary") !== -1) SummaryTranslation.hideSummaryTranslation()
        })

    };
    const OuterObserver = new MutationObserver(OuterCallback)
    OuterObserver.observe(OuterTargetNode, { childList: true, subtree: true })
}

export default Observer