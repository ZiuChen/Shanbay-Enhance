import focusMode from "../function/FocusMode"
import toggleDarkMode from "../function/ToggleDarkMode"
import configs from "./Config"
import CommonData from "./CommonData"

function loadConfig() {
    // Config Initialize
    configs.config.forEach(item => {
        if(localStorage.getItem(item.id) === null) localStorage.setItem(item.id, item.default)
    })
    if(window.location.hash !== "#/setting") return
    // Update Setting List
    $(".SettingContainer_item__3RKJY").wrapAll(`<div class="defaultSettings"></div>`)
    $(".SettingContainer_setting__2aBZV").append(`<div class="scriptSettings"></div>`)
    $(".SettingContainer_setting__2aBZV").css("overflow", "auto")
    $(".SettingContainer_setting__2aBZV").css("height", "660px")
    configs.config.forEach(item => {
        function getOptions() {
            let options = ""
            let checked = ""
            if(localStorage.getItem(item.id) === "true") checked = "checked" // Key-value is not Boolean but String
            if(item.name === "choice") {
                options += `<span class="SettingContainer_title__1IBOy">${item.content}`
                options += `</span>`
                options += `<input type="checkbox" id="${item.id}" ${checked}>`
            }
            if(item.name === "choice-question") {
                options += `<span class="SettingContainer_title__1IBOy">${item.content}`
                options += `<span class="SettingContainer_questionWrap__1nE7J">?<span class="SettingContainer_question__VM3MF">${item.info}</span></span>`
                options += `</span>`
                options += `<input type="checkbox" id="${item.id}" ${checked}>`
            }
            if(item.name === "select") {
                options += `<span class="SettingContainer_title__1IBOy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ${item.content}</span>`
                if(item.id === "config-fonts-choice") {
                    options += `<select id="${item.id}">`
                    configs.fonts.forEach((font, index) => {
                        let selected = ""
                        if(localStorage.getItem("config-fonts-choice") === font) selected = "selected"
                        options += `<option value="${index}" ${selected}>${font}</option>`
                    })
                    options += `</select>`
                    options += `<input type="text" id="config-fonts-choice-tmp" placeholder="自定义字体">`
                }
                else if(item.id === "config-shortkey-keycode") {
                    let shortcutKeys
                    if(localStorage.getItem("config-shortkey-keycode") === null) {
                        shortcutKeys = configs.shortcutKeys
                    }else shortcutKeys = JSON.parse(localStorage.getItem("config-shortkey-keycode"))
                    shortcutKeys.forEach(key => {
                        CommonData.keyCode
                        options += `${key.name}：`
                        key.showKeys.forEach(showKey => {
                            options += `<button class="short-keys" id="${key.id}">${showKey}</button>`
                        })
                    })
                }
            }
            if(item.name === "radio") {
                options += `<span class="SettingContainer_title__1IBOy">${item.content}</span>`
                options += `<div>`
                configs.exampleHideType.forEach((type, index) => {
                    let checked = ""
                    if(localStorage.getItem("config-example-hide") === type) checked = "checked"
                    options += `<label><input type="radio" name="config-example-hide" value="${type}" ${checked}>${type}</label>`
                })
            }
            return options
        }
        if(item.type === "unshow") return
        $(".scriptSettings").append(/* html */`
            <div class="SettingContainer_item__3RKJY">
                ${ getOptions() }
            </div>`)
    })
    if(localStorage.getItem("config-fonts") === "false") $("#config-fonts-choice").parent().hide()
    if($("#config-fonts-choice")[0].options.selectedIndex === 0) $("#config-fonts-choice-tmp").val(localStorage.getItem("config-fonts-choice"))
    if(localStorage.getItem("config-shortkey") === "false") $("#config-keycode-word-pronunce").parent().hide()
    $(".short-keys").click(clickEvent => {
        console.log(clickEvent);
        toastr.options = { extendedTimeOut: 999999999 }
        toastr.info("请按下任意键以设置快捷键", "Shanbay Enhance")
        $(document).keydown(keydownEvent => {
            console.log(keydownEvent);
            let KeyCodesConfigs = JSON.parse(localStorage.getItem("config-shortkey-keycode"))
            KeyCodesConfigs.forEach(keyCode => {
                if(keyCode.id === clickEvent.target.id) {
                    if(keyCode.keyCodes.indexOf(keydownEvent.keyCode) !== -1) {
                        console.log(keyCode.keyCodes.indexOf(keydownEvent.keyCode));
                        toastr.clear()
                        toastr.options = { timeOut: 1000 }
                        toastr.error("快捷键重复", "Shanbay Enhance")
                        return
                    }
                    keyCode.showKeys.push(keydownEvent.code)
                    keyCode.keyCodes.push(keydownEvent.keyCode)
                    toastr.clear()
                    $(clickEvent.target).trigger("change")
                }
            })
            console.log(KeyCodesConfigs)
            localStorage.setItem("config-shortkey-keycode", JSON.stringify(KeyCodesConfigs))
            $(document).off("keydown")
        })
        
    })
    $(".scriptSettings").change(e => {
        console.log(e);
        localStorage.setItem(e.target.id, e.target.checked)
        if(e.target.id === "config-fonts-choice") {
            localStorage.setItem(e.target.id, configs.fonts[e.target.options.selectedIndex])
        }
        if(e.target.id === "config-fonts-choice-tmp") {
            localStorage.setItem("config-fonts-choice", e.target.value)
            $("#config-fonts-choice-tmp").css("font-family", e.target.value)
        }
        if(e.target.id === "config-darkmode") {
            toggleDarkMode()
        }
        if(e.target.id === "config-focus-mode") {
            focusMode()
        }
        if(e.target.id === "config-fonts"
        && localStorage.getItem("config-fonts") === "false") {
            $("#config-fonts-choice").parent().hide()
        }
        else if(e.target.id === "config-fonts"
        && localStorage.getItem("config-fonts") === "true") {
            $("#config-fonts-choice").parent().show()
        }
        if(e.target.id === "config-shortkey"
        && localStorage.getItem("config-shortkey") === "false") {
            $("#config-keycode-word-pronunce").parent().hide()
        }
        else if(e.target.id === "config-shortkey"
        && localStorage.getItem("config-shortkey") === "true") {
            $("#config-keycode-word-pronunce").parent().show()
        }
        if(e.target.className === "short-keys") {
            location.reload()
            // let shortKeys = JSON.parse(localStorage.getItem("config-shortkey-keycode"))
            // shortKeys.forEach(key => {
            //     if(key.id === e.target.id) {
            //         key.keyCodes.splice(0, key.keyCodes.length) //empty keyCodes
            //         e.target.value
            //     }
                
            // })
        }
        if(e.target.name === "config-example-hide") {
            localStorage.setItem("config-example-hide", e.target.defaultValue)
        }
        toastr.options = { timeOut: 1000 }
        toastr.success("设置已更新", "Shanbay Enhance")
    })
}
export default loadConfig