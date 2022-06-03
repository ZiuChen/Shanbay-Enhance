import sendRequest from "./SendRequest"
import initializeConfig from "./InitializeConfig"
import log from "./Log"
import Config from "./Config"
const ScriptID = "437942"
const GreasyUrl = `https://greasyfork.org/zh-CN/scripts/${ScriptID}`

async function CheckUpdate() {
  log(`script loaded: ${Config.version}`)
  if (window.location.hash !== "#/study/entry") return
  initializeConfig()
  sendRequest(GreasyUrl, (obj) => {
    return obj.querySelectorAll(".script-show-version>span")[1].textContent
  }).then((res) => {
    let weightRemote = 0
    let weightNow = 0
    res
      .split(".")
      .reverse()
      .forEach((value, index) => {
        weightRemote += (index + 1) * Math.pow(100, index + 1) * value
      })
    Config.version
      .split(".")
      .reverse()
      .forEach((value, index) => {
        weightNow += (index + 1) * Math.pow(100, index + 1) * value
      })
    if (weightRemote > weightNow) {
      log("need update")
      toastr.options = {
        timeOut: 999999999,
        onclick: () => {
          location.href = `${GreasyUrl}/code/${ScriptID}.user.js`
        }
      }
      toastr.warning(`有新版本：${res}，点击更新脚本。`, `Shanbay Enhance`)
    } else {
      log("version Checked")
      if (localStorage.getItem("config-update") !== "true") return
      toastr.options = { timeOut: 1000 }
      toastr.success(`版本已是最新：${Config.version}`, `Shanbay Enhance`)
    }
  })
}

export default CheckUpdate
