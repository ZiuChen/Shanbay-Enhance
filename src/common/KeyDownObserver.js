import KeyDownFunctions from "../function/KeyDownFunctions"

const shortcutKeys = JSON.parse(localStorage.getItem("config-shortkey-keycode"))
console.log("GetshortKeys");

// shortcutKey = localStorage.getItem("config-keycode")

// if(localStorage.getItem("config-keycode") === null) {
//     localStorage.setItem("config-keycode", JSON.stringify(shortcutKey))
// }

function executeFuntions(keyCode, type) {
    shortcutKeys.forEach(config => {
        if(config.id === type) {
            config.keyCodes.forEach(code => {
                if(code === keyCode) {
                    KeyDownFunctions[type]()
                } else return
            })
        }
    })
}

function keyDownObserver() {
	$(document).keydown(e => {
        executeFuntions(e.keyCode, "word-pronunce")
	});
}

export default keyDownObserver