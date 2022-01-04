import loadConfig from "./LoadConfig"
import SummaryTranslation from "../function/SummaryTranslation"
import fontToggle from "../function/FontToggle"
import noteRemove from "../function/NoteRemove"
import hideTranslation from "../function/HideTranslation"

const fontToggle_conditions = ["study-page", "index_hint", "StudyPage_nextBtn", "StudySummary"]

function Observer() {
    const OuterTargetNode = document.getElementsByClassName("Layout_main__2_zw8")[0]
    if(typeof OuterTargetNode === "undefined") return
    const OuterCallback = (mutations) => {
        mutations.forEach(mutation => {
            if(mutation.addedNodes.length === 0
            || mutation.addedNodes[0].className === undefined) return
            let currentState = mutation.addedNodes[0].className
            if(currentState.indexOf("SettingContainer_setting") !== -1) loadConfig()
            if(currentState.indexOf("row") !== -1) {
                noteRemove()
                hideTranslation()
            }
            if(currentState.indexOf("StudySummary") !== -1) SummaryTranslation.hideSummaryTranslation()
            fontToggle_conditions.forEach(condition => {
                if(currentState.indexOf(condition) !== -1) fontToggle()
            })
            if(mutation.addedNodes[0].childNodes.length === 0
                || mutation.addedNodes[0].childNodes[0].className === undefined) return
            if(mutation.addedNodes[0].childNodes[0].className.indexOf("wordBox") !== -1) fontToggle()
        })
    };
    const ExecuteFunctions = () => {
        if(window.location.hash === "#/setting") loadConfig()
        if(window.location.hash.indexOf("#/detail") !== -1) {
            fontToggle()
            noteRemove()
            hideTranslation()
        }
    }
    const OuterObserver = new MutationObserver(OuterCallback)
    OuterObserver.observe(OuterTargetNode, { childList: true, subtree: true })
    ExecuteFunctions()
}

export default Observer