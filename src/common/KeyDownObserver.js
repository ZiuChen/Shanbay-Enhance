import KeyDownFunctions from "../function/KeyDownFunctions"

function executeFuntions(keyCode, type) {
    let shortcutKeys = JSON.parse(localStorage.getItem("config-shortkey-keycode"))
    shortcutKeys.forEach(config => {
        if(config.id.indexOf(type) !== -1) {
            config.keyCodes.forEach(code => {
                if(code === keyCode) {
                    KeyDownFunctions[type]()
                    return
                } else return
            })
        }
    })
}

function keyDownObserver() {
	$(document).keydown(e => {
        executeFuntions(e.keyCode, "word-pronunce")
        executeFuntions(e.keyCode, "example-pronunce")
        executeFuntions(e.keyCode, "example-pronunce-real-question")
        executeFuntions(e.keyCode, "summary-toggle")
        executeFuntions(e.keyCode, "collins-toggle")
	});
}

export default keyDownObserver