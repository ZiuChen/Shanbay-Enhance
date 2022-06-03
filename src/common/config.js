const { version } = require("../../package.json")
const fonts = ["", "宋体", "华文中宋", "思源宋体 CN", "微软雅黑", "等线", "仿宋"]
const exampleHideType = ["隐藏并占位", "隐藏并移除", "不隐藏"]
const fontToggleSelectors = [
  {
    name: "学习页单词",
    selector: ".index_word__3nhJU",
    enable: true
  },
  {
    name: "详情页单词",
    selector: ".VocabPronounce_word__17Tma",
    enable: true
  },
  {
    name: "单词小结",
    selector: ".StudySummaryItem_studySummaryItem__k2ME0",
    enable: true
  },
  {
    name: "提示例句",
    selector: ".index_hint__2Z39O",
    enable: true
  },
  {
    name: "单词词义",
    selector: ".BayTrans_paraphrase__2JMIz",
    enable: true
  },
  {
    name: "单词例句",
    selector: ".BayTrans_exampleBox__3CsaJ",
    enable: true
  },
  {
    name: "真题词义",
    selector: ".index_name__1gkfJ",
    enable: true
  },
  {
    name: "真题例句",
    selector: ".index_left__2SYuy",
    enable: true
  },
  {
    name: "学习页选项",
    selector: ".index_btnBox__pXO_l",
    enable: false
  },
  {
    name: "音标",
    selector: ".Pronounce_phonetic__1bcqt, .index_phonetic__o-RcB",
    enable: false
  },
  {
    name: "模块前说明文本（单词解释/真题例句）",
    selector: ".span1",
    enable: false
  }
]
const shortcutKeys = [
  {
    id: "config-keycode-word-pronunce-uk",
    name: "单词发音（英）",
    able: true,
    showKeys: ["Numpad0", "UNSET"],
    keyCodes: [96, 0]
  },
  {
    id: "config-keycode-word-pronunce-us",
    name: "单词发音（美）",
    able: true,
    showKeys: ["Numpad3", "UNSET"],
    keyCodes: [99, 0]
  },
  {
    id: "config-keycode-example-pronunce",
    name: "例句发音",
    able: true,
    showKeys: ["Numpad4", "UNSET"],
    keyCodes: [100, 0]
  },
  {
    id: "config-keycode-example-pronunce-real-question",
    name: "真题例句发音",
    able: true,
    showKeys: ["Numpad5", "UNSET"],
    keyCodes: [101, 0]
  },
  {
    id: "config-keycode-summary-toggle",
    name: "小结释义遮挡",
    able: true,
    showKeys: ["Enter", "UNSET"],
    keyCodes: [13, 0]
  },
  {
    id: "config-keycode-collins-toggle",
    name: "切换柯林斯词典",
    able: true,
    showKeys: ["Numpad6", "UNSET"],
    keyCodes: [102, 0]
  },
  {
    id: "config-keycode-toggle-example",
    name: "显示/隐藏例句翻译",
    able: true,
    showKeys: ["Enter", "UNSET"],
    keyCodes: [13, 0]
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
    content: "单词总结自动发音：",
    id: "config-silp-pronunce",
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
    content: "修改选择器：",
    id: "config-fonts-selector",
    default: JSON.stringify(fontToggleSelectors),
    type: "show",
    name: "input",
    info: "自定义修改页面中哪些元素的字体，务必以最小化形式填回。"
  },
  {
    content: "快捷键增强：",
    id: "config-shortkey",
    default: "true",
    type: "show",
    name: "choice-question",
    info: "开启后，左键点击以编辑快捷键，右键点击以移除快捷键"
  },
  {
    content: "自定义快捷键：",
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
  version: version,
  config: config,
  shortcutKeys: shortcutKeys,
  fontToggleSelectors: fontToggleSelectors,
  fonts: fonts,
  exampleHideType: exampleHideType
}
