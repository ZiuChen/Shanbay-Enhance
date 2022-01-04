import sendRequest from "./SendRequest"
import log from "./Log"
const GreasyUrl = "https://greasyfork.org/zh-CN/scripts/437942"
const { version } = require('../../package.json')

async function CheckUpdate() {
    log(`script loaded: ${version}`)
    if(window.location.hash !== "#/study/entry") return
    sendRequest(GreasyUrl, (obj) => {
        return obj.querySelectorAll('.script-show-version>span')[1].textContent
    })
    .then(res => {
        let weightLastest = 0
        let weightNow = 0
        res.split('.').reverse().forEach((value, index) => {
            weightLastest += (index + 1) * value
        })
        version.split('.').reverse().forEach((value, index) => {
            weightNow += (index + 1) * value
        })
        if (weightLastest > weightNow) {
            log("need update")
            toastr.options = {
                extendedTimeOut: 999999999,
                onclick: () => { window.open(`${GreasyUrl}`) }
            }
            toastr.warning(`有新版本：${res}`, `Shanbay Enhance`)
        } else {
            log("version Checked")
            if(localStorage.getItem("config-update") !== "true") return
            toastr.options = { timeOut: 1000 }
            toastr.success(`版本已是最新：${version}`, `Shanbay Enhance`)
        }
    })
}

export default CheckUpdate