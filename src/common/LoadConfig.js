function loadConfig() {
    // Config Initialize
    const configTags = [
        {
            content: "单词总结释义遮挡：",
            id: "config-summary",
            default: true
        },
        {
            content: "自动检查更新：",
            id: "config-update",
            default: true
        }
    ]
    configTags.forEach(item => {
        if(localStorage.getItem(item.id) === null) localStorage.setItem(item.id, item.default)
    })
    if(window.location.hash !== "#/setting") return
    // Update Setting List
    $(".SettingContainer_item__3RKJY").wrapAll(`<div class="defaultSettings"></div>`)
    $(".SettingContainer_setting__2aBZV").append(`<div class="scriptSettings"></div>`)
    $(".SettingContainer_setting__2aBZV").css("overflow", "auto")
    configTags.forEach(item => {
        let checked = ""
        if(localStorage.getItem(item.id) === "true") checked = "checked" // Key-value is not Boolean but String
        $(".scriptSettings").append(/* html */`
            <div class="SettingContainer_item__3RKJY">
            <span class="SettingContainer_title__1IBOy">${item.content}</span>
            <input type="checkbox" id="${item.id}" ${checked}>
            </div>`)
    })
    $(".scriptSettings").change(() => {
        for(let i = 0; i < $(".scriptSettings input").length; i++) {
            let item = $(".scriptSettings input")[i]
            localStorage.setItem(item.id, item.checked)
        }
    })
}
export default loadConfig