import Config from "./Config"
import log from "./Log"

const checkString = "Shanbay Enhance Setting"
async function importConfig() {
  let input = document.createElement("input")
  input.type = "file"
  input.click()
  $(input).change((e) => {
    let reader = new FileReader()
    reader.onload = (res) => {
      let target = res.target
      if (target.result.indexOf(`${checkString}`) === -1) {
        toastr.error("请检查设置文件是否正确", "Shanbay Enhance")
        log("Import aborted")
        $(input).val("")
        return
      }
      let data = JSON.parse(target.result)
      data.forEach((config, index) => {
        if (index === 0) return
        localStorage.setItem(config.id, config.value)
      })
      toastr.success("成功导入设置，即将刷新", "Shanbay Enhance")
      log("Settings have been imported")
      setTimeout("location.reload()", 1000)
    }
    reader.readAsText(e.target.files[0], "utf-8")
  })
}

function exportConfig() {
  let version = Config.version
  let timeStamp = new Date().valueOf()
  let currentConfig = [{ check: `${checkString}`, version: version, timeStamp: timeStamp }]
  Config.config.forEach((config) => {
    let currentConfigObj = {}
    currentConfigObj.id = config.id
    currentConfigObj.value = localStorage.getItem(config.id)
    currentConfig.push(currentConfigObj)
  })
  currentConfig = JSON.stringify(currentConfig)
  let blob = new Blob([currentConfig], { type: "text/json" }),
    a = document.createElement("a")
  a.download = `[Shanbay Enhance] setting.json`
  a.href = window.URL.createObjectURL(blob)
  toastr.success("成功导出设置", "Shanbay Enhance")
  setTimeout(() => {
    a.click()
  }, 1000)
  log("Settings Exported")
}

function restoreConfig() {
  toastr.success("成功恢复初始设置，即将刷新", "Shanbay Enhance")
  setTimeout(() => {
    localStorage.clear()
    location.reload()
  }, 1000)
  log("Settings have been reset")
}

export default {
  importConfig: importConfig,
  exportConfig: exportConfig,
  restoreConfig: restoreConfig
}
