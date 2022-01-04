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
    $(".SettingContainer_setting__2aBZV").css("overflow", "auto")
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
                options += `<span class="SettingContainer_questionWrap__1nE7J">?<span class="SettingContainer_question__VM3MF">开启后，单词、释义、例句的字体将会被修改</span></span>`
                options += `</span>`
                options += `<input type="checkbox" id="${item.id}" ${checked}>`
            }
            if(item.name === "select") {
                console.log("select");
                options += `<span class="SettingContainer_title__1IBOy">${item.content}</span>`
                options += `<select id="${item.id}">`
                configs.fonts.forEach((font, index) => {
                    if(font === "") return
                    let selected = ""
                    if(localStorage.getItem("config-fonts-choice") === font) selected = "selected"
                    options += `<option value="${index}" ${selected}>${font}</option>`
                })
                options += `</select>`
            }
            return options
        }
        if(item.type === "unshow") return
        $(".scriptSettings").append(/* html */`
            <div class="SettingContainer_item__3RKJY">
                ${ getFonts() }
            </div>`)
        if(localStorage.getItem("config-fonts") === "false") $("#config-fonts-choice").parent().hide()
    })
    $(".scriptSettings").change(e => {
        console.log(e);
        localStorage.setItem(e.target.id, e.target.checked)
        if(e.target.id === "config-fonts-choice") {
            localStorage.setItem(e.target.id, configs.fonts[e.target.options.selectedIndex + 1])
        }
        if(e.target.id === "config-fonts"
        && localStorage.getItem("config-fonts") === "false") {
            $("#config-fonts-choice").parent().hide()
        }
        else if(e.target.id === "config-fonts"
        && localStorage.getItem("config-fonts") === "true") {
            $("#config-fonts-choice").parent().show()
        }
    })
}
export default loadConfig