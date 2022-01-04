const selectors = [
    {
        name: "学习页单词",
        selector: ".index_word__3nhJU"
    },
    {
        name: "详情页单词",
        selector: ".VocabPronounce_word__17Tma"
    },
    {
        name: "单词小结",
        selector: ".StudySummaryItem_studySummaryItem__k2ME0"
    },
    {
        name: "提示例句",
        selector: ".index_hint__2Z39O"
    },
    {
        name: "单词词义",
        selector: ".BayTrans_paraphrase__2JMIz"
    },
    {
        name: "单词例句",
        selector: ".BayTrans_exampleBox__3CsaJ"
    },
    {
        name: "真题词义",
        selector: ".index_name__1gkfJ"
    },
    {
        name: "真题例句",
        selector: ".index_left__2SYuy"
    },
]

function fontToggle() {
    if(localStorage.getItem("config-fonts") === "false") return
    selectors.forEach(item => {
        $(item.selector).css("font-family", localStorage.getItem("config-fonts-choice"))
    })
}

export default fontToggle