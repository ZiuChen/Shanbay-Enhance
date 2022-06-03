import KeyDownFunctions from "../function/KeyDownFunctions"

function executeFuntions(keyCode, type) {
  if (localStorage.getItem("config-shortkey") === "false") return
  let shortcutKeys = JSON.parse(localStorage.getItem("config-shortkey-keycode"))
  shortcutKeys.forEach((config) => {
    if (config.id.indexOf(type) !== -1) {
      config.keyCodes.forEach((code) => {
        if (code === keyCode) {
          KeyDownFunctions[type]()
          return
        } else return
      })
    }
  })
}

function keyDownObserver() {
  $(document).off("keydown") // Unbind all events first
  $(document).on("keydown", (e) => {
    executeFuntions(e.keyCode, "word-pronunce-uk")
    executeFuntions(e.keyCode, "word-pronunce-us")
    executeFuntions(e.keyCode, "example-pronunce")
    executeFuntions(e.keyCode, "example-pronunce-real-question")
    executeFuntions(e.keyCode, "summary-toggle")
    executeFuntions(e.keyCode, "collins-toggle")
    executeFuntions(e.keyCode, "toggle-example")
  })
}

export default keyDownObserver
