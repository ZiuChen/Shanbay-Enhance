import checkUpdate from "./CheckUpdate"
import loadConfig from "./LoadConfig"
import SummaryTranslation from "../function/SummaryTranslation"
import fontToggle from "../function/FontToggle"
import noteRemove from "../function/NoteRemove"
import hideTranslation from "../function/HideTranslation"
import toggleDarkMode from "../function/ToggleDarkMode"
import focusMode from "../function/FocusMode"
import keyDownObserver from "./KeyDownObserver"

const commonConditions = ["study-page", "index_hint", "StudyPage_nextBtn", "StudySummary"]

function Observer() {
    const OuterTargetNode = document.getElementsByClassName("Layout_main__2_zw8")[0]
    if(typeof OuterTargetNode === "undefined") return
    const OuterCallback = (mutations) => {
        mutations.forEach(mutation => {
            if(mutation.addedNodes.length === 0
            || mutation.addedNodes[0].className === undefined) return
            let currentState = mutation.addedNodes[0].className
            if(currentState.indexOf("SettingContainer_setting") !== -1) {
                loadConfig()
                focusMode()
            }
            if(currentState.indexOf("row") !== -1) {
                noteRemove()
                hideTranslation()
            }
            if(currentState.indexOf("StudySummary") !== -1) {
                SummaryTranslation.hideSummaryTranslation()
            }
            if(currentState.indexOf("study-page") !== -1) {
                keyDownObserver()
            }
            commonConditions.forEach(condition => {
                if(currentState.indexOf(condition) !== -1) {
                    fontToggle()
                    focusMode()
                }
            })
            if(mutation.addedNodes[0].childNodes.length === 0
                || mutation.addedNodes[0].childNodes[0].className === undefined) return
            if(mutation.addedNodes[0].childNodes[0].className.indexOf("wordBox") !== -1) {
                fontToggle()
                focusMode()
            }
        })
    };
    const ExecuteFunctions = () => {
        if(window.location.hash === "#/study/entry") checkUpdate()
        if(window.location.hash === "#/study?type=book") focusMode()
        if(window.location.hash === "#/setting") loadConfig()
        if(window.location.hash.indexOf("#/detail") !== -1) {
            fontToggle()
            noteRemove()
            hideTranslation()
        }
        toggleDarkMode()
        focusMode()
    }
    const OuterObserver = new MutationObserver(OuterCallback)
    OuterObserver.observe(OuterTargetNode, { childList: true, subtree: true })
    ExecuteFunctions()
}

export default Observer