import configs from "./config"

function loadConfig() {
    // Config Initialize
    configs.config.forEach(item => {
        if(localStorage.getItem(item.id) === null) localStorage.setItem(item.id, item.default)
    })
    if(window.location.hash !== "#/setting") return
    // Update Setting List
    $(".SettingContainer_item__3RKJY").wrapAll(`<div class="defaultSettings"></div>`)
    $(".SettingContainer_setting__2aBZV").append(`<div class="scriptSettings"></div>`)
    configs.config.forEach(item => {
        function getFonts() {
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
                options += `<select id="${item.id}">`
                configs.fonts.forEach((font, index) => {
                    let selected = ""
                    if(localStorage.getItem("config-fonts-choice") === font) selected = "selected"
                    options += `<option value="${index}" ${selected}>${font}</option>`
                })
                options += `</select>`
                if(item.id === "config-fonts-choice") {
                    options += `<input type="text" id="config-fonts-choice-tmp" placeholder="自定义字体">`
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
                ${ getFonts() }
            </div>`)
    })
    $(".SettingContainer_setting__2aBZV").css("overflow", "auto")
    $(".SettingContainer_setting__2aBZV").css("height", "660px")
    // $(".scriptSettings .SettingContainer_title__1IBOy").css("font-weight", "bold")
    if(localStorage.getItem("config-fonts") === "false") $("#config-fonts-choice").parent().hide()
    if($("#config-fonts-choice")[0].options.selectedIndex === 0) $("#config-fonts-choice-tmp").val(localStorage.getItem("config-fonts-choice"))
    $(".scriptSettings").change(e => {
        localStorage.setItem(e.target.id, e.target.checked)
        if(e.target.id === "config-fonts-choice") {
            localStorage.setItem(e.target.id, configs.fonts[e.target.options.selectedIndex])
        }
        if(e.target.id === "config-fonts-choice-tmp") {
            localStorage.setItem("config-fonts-choice", e.target.value)
        }
        if(e.target.id === "config-fonts"
        && localStorage.getItem("config-fonts") === "false") {
            $("#config-fonts-choice").parent().hide()
        }
        else if(e.target.id === "config-fonts"
        && localStorage.getItem("config-fonts") === "true") {
            $("#config-fonts-choice").parent().show()
        }
        if(e.target.name === "config-example-hide") {
            localStorage.setItem("config-example-hide", e.target.defaultValue)
        }
        toastr.options = { timeOut: 1000 }
        toastr.success("设置已更新", "Shanbay Enhance")
    })
}
export default loadConfig