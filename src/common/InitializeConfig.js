import configs from "./Config"
import log from "./Log"

function initializeConfig() {
  configs.config.forEach((item) => {
    if (localStorage.getItem(item.id) === null) localStorage.setItem(item.id, item.default)
    if (item.id === "config-shortkey-keycode") {
      let currentShortcutKeys = JSON.parse(localStorage.getItem("config-shortkey-keycode"))
      let defaultShortcutKeys = configs.shortcutKeys
      let defaultFuntions = defaultShortcutKeys.map((defaultKey) => {
        return defaultKey.id
      })
      let currentFuntions = currentShortcutKeys.map((currentKey) => {
        return currentKey.id
      })
      let removedFunctions = currentFuntions.filter((currentFunction) => {
        return defaultFuntions.indexOf(currentFunction) === -1
      })
      let newFunctions = defaultFuntions.filter((defaultFuntion) => {
        return currentFuntions.indexOf(defaultFuntion) === -1
      })
      // remove removed functions
      currentShortcutKeys.forEach((currentKey, index) => {
        if (removedFunctions.indexOf(currentKey.id) !== -1) {
          log("remove shortKey config")
          currentShortcutKeys.splice(index, 1)
        }
      })
      // add new functions
      defaultShortcutKeys.forEach((defaultKey, index) => {
        if (newFunctions.indexOf(defaultKey.id) !== -1) {
          log("add new shortKey config")
          currentShortcutKeys.splice(index, 0, defaultKey)
        }
      })
      localStorage.setItem("config-shortkey-keycode", JSON.stringify(currentShortcutKeys))
    }
  })
}

export default initializeConfig
