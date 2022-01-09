import initializeConfig from "./InitializeConfig"
import focusMode from "../function/FocusMode"
import toggleDarkMode from "../function/ToggleDarkMode"
import configs from "./Config"
import ConfigOperation from "./ConfigOperation"

function loadConfig() {
    // Config Initialize
    initializeConfig()
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
                    options += `<span class="short-keys-wrap">`
                    shortcutKeys.forEach(key => {
                        options += `${key.name}：`
                        key.showKeys.forEach((showKey, index) => {
                            options += `<button class="short-keys ${key.id}" key="${key.keyCodes[index]}">${showKey}</button>`
                        })
                    })
                    options += `</span>`
                }
            }
            else if(item.id === "config-fonts-selector") {
                options += `<span class="SettingContainer_title__1IBOy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ${item.content}`
                options += `<span class="SettingContainer_questionWrap__1nE7J">?<span class="SettingContainer_question__VM3MF">${item.info}</span></span>`
                options += `</span>`
                options += `<input type="text" id="config-fonts-selector" placeholder="自定义选择器" value="">`
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
    $(".scriptSettings").append(/* html */`
    <div class="SettingContainer_item__3RKJY">
        <span class="SettingContainer_title__1IBOy">设置选项：</span>
        <span class="SettingContainer_minititle">导出当前设置：</span>
        <button type="checkbox" class="settingbutton export-setting">Export</button>
        <span class="SettingContainer_minititle">导入已有设置：</span>
        <button type="checkbox" class="settingbutton import-setting">Import</button>
        <span class="SettingContainer_minititle">恢复初始设置：</span>
        <button type="checkbox" class="settingbutton restore-setting">Restore</button>
    </div>`)
    $(".settingbutton").click((e) => {
        let operation = e.target.classList[1]
        if(operation.indexOf("export") !== -1) ConfigOperation.exportConfig()
        if(operation.indexOf("import") !== -1) ConfigOperation.importConfig()
        if(operation.indexOf("restore") !== -1) ConfigOperation.restoreConfig()
    })
    if(localStorage.getItem("config-fonts") === "false") $("#config-fonts-choice").parent().hide()
    $("#config-fonts-selector").val(localStorage.getItem("config-fonts-selector"))
    if($("#config-fonts-choice")[0].options.selectedIndex === 0) $("#config-fonts-choice-tmp").val(localStorage.getItem("config-fonts-choice"))
    if(localStorage.getItem("config-shortkey") === "false") $(".short-keys-wrap").parent().hide()
    function leftClickCallBack(e) {
        toastr.options = { timeOut: 999999999, preventDuplicates: true }
        toastr.info("请按下任意键以设置快捷键", "Shanbay Enhance")
        $(document).keydown(keydownEvent => {
            // TODO: move to change() duplicated key varify lacked
            let KeyCodesConfigs = JSON.parse(localStorage.getItem("config-shortkey-keycode"))
            KeyCodesConfigs.forEach(KeyCodesConfig => {
                if(KeyCodesConfig.id === e.target.classList[1]) {
                    if(KeyCodesConfig.keyCodes.indexOf(keydownEvent.keyCode) !== -1) {
                        toastr.clear()
                        toastr.options = { timeOut: 1000, preventDuplicates: true }
                        toastr.error("快捷键重复", "Shanbay Enhance")
                        return
                    }
                    let index = KeyCodesConfig.keyCodes.indexOf(parseInt(e.target.attributes["key"].value))
                    KeyCodesConfig.showKeys[index] = keydownEvent.code
                    KeyCodesConfig.keyCodes[index] = keydownEvent.keyCode
                    toastr.clear()
                    $(e.target).trigger("change", {type: "shortKey-add", event: {clickEvent: e, keyDownEvent: keydownEvent}})
                }
            })
            localStorage.setItem("config-shortkey-keycode", JSON.stringify(KeyCodesConfigs))
            $(document).off("keydown")
        })
    }
    function rightClickCallBack(e) {
        e.preventDefault()
        $(e.target).trigger("change", {type: "shortKey-remove", event: {clickEvent: e}})
        let KeyCodesConfigs = JSON.parse(localStorage.getItem("config-shortkey-keycode"))
        KeyCodesConfigs.forEach(KeyCodesConfig => {
            if(KeyCodesConfig.id === e.target.classList[1]) {
                let index = KeyCodesConfig.showKeys.indexOf(e.target.innerText)
                KeyCodesConfig.showKeys[index] = "UNSET"
                KeyCodesConfig.keyCodes[index] = 0
                localStorage.setItem("config-shortkey-keycode", JSON.stringify(KeyCodesConfigs))
            }
        })
    }
    $(".short-keys").click(e => {
        leftClickCallBack(e)
    })
    $(".short-keys").contextmenu(e => {
        // contextmenu handler
        rightClickCallBack(e)
    })
    $(".scriptSettings").change((e, data) => {
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
            $("#config-fonts-selector").parent().hide()
        }
        else if(e.target.id === "config-fonts"
        && localStorage.getItem("config-fonts") === "true") {
            $("#config-fonts-choice").parent().show()
            $("#config-fonts-selector").parent().show()
        }
        if(e.target.id === "config-fonts-selector") {
            localStorage.setItem("config-fonts-selector", $("#config-fonts-selector").val())
        }
        if(e.target.id === "config-shortkey"
        && localStorage.getItem("config-shortkey") === "false") {
            $(".short-keys-wrap").parent().hide()
        }
        else if(e.target.id === "config-shortkey"
        && localStorage.getItem("config-shortkey") === "true") {
            $(".short-keys-wrap").parent().show()
        }
        if(e.target.classList[0] === "short-keys") {
            let clickEvent = data.event.clickEvent
            let keyDownEvent = data.event.keyDownEvent
            let newTag = ``
            if(data.type === "shortKey-add") {
                newTag = `<button class="short-keys ${clickEvent.target.classList[1]}" key="${keyDownEvent.keyCode}">${keyDownEvent.code}</button>`
            }
            else if(data.type === "shortKey-remove") {
                newTag = `<button class="short-keys ${clickEvent.target.classList[1]}" key="0">UNSET</button>`
            }
            $(clickEvent.target).replaceWith(newTag)
            $(".short-keys").off() // remove all listening
            $(".short-keys").click(e => {
                // Add listening again
                leftClickCallBack(e)
            })
            $(".short-keys").contextmenu(e => {
                rightClickCallBack(e)
             })
        }
        if(e.target.name === "config-example-hide") {
            localStorage.setItem("config-example-hide", e.target.defaultValue)
        }
        toastr.options = { timeOut: 1000, preventDuplicates: true }
        toastr.success("设置已更新", "Shanbay Enhance")
    })
}
export default loadConfig