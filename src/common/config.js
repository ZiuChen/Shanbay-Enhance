const config = [
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
        content: "检查更新提示：",
        id: "config-update",
        default: true,
        type: "show",
        name: "choice"
    }
]
const fonts = ["", "宋体", "华文中宋", "思源宋体 CN", "微软雅黑", "等线", "仿宋"]
const exampleHideType = ["隐藏并占位", "隐藏并移除", "不隐藏"]

export default {
    config: config,
    fonts: fonts,
    exampleHideType: exampleHideType
}