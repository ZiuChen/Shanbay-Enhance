import loadConfig from "./LoadConfig"
import SummaryTranslation from "../function/SummaryTranslation"

function Observer() {
    const OuterTargetNode = document.getElementsByClassName("Layout_main__2_zw8")[0]
    if(typeof OuterTargetNode === "undefined") return
    const executeInnerFunction = () => {
        if(document.getElementsByClassName("StudySummary_studySummary__32y_I").length === 1
            && document.getElementsByClassName("switch").length !== 1) {
                SummaryTranslation.hideSummaryTranslation()
        } else return
    }
    const executeOuterFunction = () => {
        if(document.getElementsByClassName("SettingContainer_setting__2aBZV").length === 1) {
            loadConfig()
        } else return
    }
    const InnerCallback = () => {
        executeInnerFunction()
    }
    const OuterCallback = (mutationsList) => {
        console.log(mutationsList)
        executeOuterFunction()
        const InnerTargetNode = document.getElementsByClassName("StudyPage_studyPage__1Ri5C")[0]
        if(typeof InnerTargetNode === "undefined") return
        const InnerObserver = new MutationObserver(InnerCallback)
        InnerObserver.observe(InnerTargetNode, { childList: true, subtree: true })
    };
    const OuterObserver = new MutationObserver(OuterCallback)
    OuterObserver.observe(OuterTargetNode, { childList: true })
}

export default Observer