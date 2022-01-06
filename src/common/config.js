const fonts = ["", "宋体", "华文中宋", "思源宋体 CN", "微软雅黑", "等线", "仿宋"]
const exampleHideType = ["隐藏并占位", "隐藏并移除", "不隐藏"]
const shortcutKeys = [
    {
        id: "config-keycode-word-pronunce",
        name: "单词发音",
        able: true,
        showKeys: ["Numpad3"],
        keyCodes: [99]
    },
    {
        id: "config-keycode-example-pronunce",
        name: "例句发音",
        able: true,
        showKeys: ["Numpad4"],
        keyCodes: [100]
    },
    {
        id: "config-keycode-example-pronunce-real-question",
        name: "真题例句发音",
        able: true,
        showKeys: ["Numpad5"],
        keyCodes: [101]
    },
    {
        id: "config-keycode-summary-toggle",
        name: "小结释义遮挡",
        able: true,
        showKeys: ["Enter", "NumpadEnter"],
        keyCodes: [108, 13]
    }
]
const config = [
    {
        content: "深色模式：",
        id: "config-darkmode",
        default: false,
        type: "show",
        name: "choice"
    },
    {
        content: "单词总结释义遮挡：",
        id: "config-summary",
        default: true,
        type: "show",
        name: "choice"
    },
    {
        content: "部分字体修改：",
        id: "config-fonts",
        default: true,
        type: "show",
        name: "choice-question",
        info: "开启后，单词、释义、例句的字体将会被修改"
    },
    {
        content: "选择使用的字体：",
        id: "config-fonts-choice",
        default: "宋体",
        type: "show",
        name: "select"
    },
    {
        content: "快捷键增强：",
        id: "config-shortkey",
        default: "true",
        type: "show",
        name: "choice"
    },
    {
        content: "自定义快捷键",
        id: "config-shortkey-keycode",
        default: JSON.stringify(shortcutKeys),
        type: "show",
        name: "select"
    },
    {
        content: "例句翻译隐藏：",
        id: "config-example-hide",
        default: "隐藏并占位",
        type: "show",
        name: "radio"
    },
    {
        content: "移除笔记栏：",
        id: "config-note-remove",
        default: true,
        type: "show",
        name: "choice"
    },
    {
        content: "自动进入专注模式：",
        id: "config-focus-mode",
        default: false,
        type: "show",
        name: "choice"
    },
    {
        content: "检查更新提示：",
        id: "config-update",
        default: true,
        type: "show",
        name: "choice"
    }
]

export default {
    config: config,
    shortcutKeys: shortcutKeys,
    fonts: fonts,
    exampleHideType: exampleHideType,
}