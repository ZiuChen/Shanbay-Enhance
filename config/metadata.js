const { author, repository, version } = require('../package.json')

module.exports = {
    "name": "扇贝单词增强",
    "name:en": "Shanbay Enhance",
    "description": "扇贝单词功能增强，带来更好的背单词体验。❤单词总结释义遮挡❤隐藏例句翻译❤自定义单词例句字体",
    "description:en": "More function for Shanbay.",
    "version": version,
    "author": author,
    "namespace": 'https://greasyfork.org/zh-CN/users/605474',
    "icon": "https://gitee.com/ziuc/utool-filebed/raw/master/20210514-231824-0795.png",
    "source": repository.url,
    "match": [
        "https://www.shanbay.com/*",
        "https://web.shanbay.com/wordsweb/*"
    ],
    require: [
        "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js",
        "https://cdn.bootcdn.net/ajax/libs/toastr.js/latest/js/toastr.min.js"
    ],
    "grant": [],
    'license': 'MIT'
}