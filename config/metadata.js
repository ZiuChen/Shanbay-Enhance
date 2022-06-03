const { author, repository, version } = require("../package.json")

module.exports = {
  name: "扇贝单词增强",
  "name:en": "Shanbay Enhance",
  description:
    "扇贝单词功能增强，带来更好的背单词体验。❤单词总结释义遮挡❤隐藏例句翻译❤自定义单词例句字体❤自定义功能快捷键❤专注模式/深色模式",
  "description:en": "More function for Shanbay.",
  version: version,
  author: author,
  namespace: "https://greasyfork.org/zh-CN/users/605474",
  icon: "https://fastly.jsdelivr.net/gh/ZiuChen/ZiuChen@main/avatar.jpg",
  source: repository.url,
  supportURL: repository.url,
  match: ["https://www.shanbay.com/*", "https://web.shanbay.com/wordsweb/*"],
  require: [
    "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js",
    "https://cdn.bootcdn.net/ajax/libs/toastr.js/latest/js/toastr.min.js"
  ],
  updateURL:
    "https://fastly.jsdelivr.net/gh/ZiuChen/Shanbay-Enhance@main/publish/index.prod.user.js",
  downloadURL:
    "https://fastly.jsdelivr.net/gh/ZiuChen/Shanbay-Enhance@main/publish/index.prod.user.js",
  grant: [],
  license: "MIT"
}
