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
        name: "choice-question"
    },
    {
        content: "选择使用的字体：",
        id: "config-fonts-choice",
        default: "宋体",
        type: "show",
        name: "select"
    },
    {
        content: "检查更新提示：",
        id: "config-update",
        default: true,
        type: "show",
        name: "choice"
    }
]
const fonts = ["", "宋体", "思源黑体", "思源宋体 CN", "微软雅黑"]

export default {
    config: config,
    fonts: fonts
}