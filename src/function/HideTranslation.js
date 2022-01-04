function hideTranslation() {
    if(localStorage.getItem("config-example-hide") === "不隐藏") return
    let en = $(".index_sentenceEn__1Qjgx")
    let cn = $(".index_sentenceCn__XJD1u")
    let example = $(".index_left__2LkyW p")
    if(localStorage.getItem("config-example-hide") === "隐藏并移除") {
        for(let i=0; i<$(".index_sentenceEn__1Qjgx").length; i++) {
            $(en[i]).attr("title", $(cn[i]).text())
            $(en[i]).css("cursor", "pointer")
            $(en[i]).click(() => { $(cn[i]).toggle() })
        }
        $(example[0]).attr("title", $(example[1]).text())
        $(example[0]).css("cursor", "pointer")
        $(example[0]).click(() => { $(example[1]).toggle() })
        $($(".index_left__2LkyW p")[1]).hide()
        $(".index_sentenceCn__XJD1u").hide()
    }
    if(localStorage.getItem("config-example-hide") === "隐藏并占位") {
        for(let i=0; i<$(".index_sentenceEn__1Qjgx").length; i++) {
            $(cn[i]).css("cursor", "pointer")
            $(cn[i]).css({"color": "#cccccc", "background-color": "#cccccc"})
            $(cn[i]).mouseenter(e => {
                $(e.target).css({"color": "black", "background-color": ""})
            })
            $(cn[i]).mouseleave(e => {
                $(e.target).css({"color": "#cccccc", "background-color": "#cccccc"})
            })
        }
        $(example[1]).css("cursor", "pointer")
        $(example[1]).css({"color": "#cccccc", "background-color": "#cccccc"})
        $(example[1]).mouseenter(e => {
            $(e.target).css({"color": "black", "background-color": ""})
        })
        $(example[1]).mouseleave(e => {
            $(e.target).css({"color": "#cccccc", "background-color": "#cccccc"})
        })
    }
}

export default hideTranslation