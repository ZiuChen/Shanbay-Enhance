function hideTranslation() {
    if(localStorage.getItem("config-example-hide") === "不隐藏") return
    let en = $(".index_sentenceEn__1Qjgx") // real question
    let cn = $(".index_sentenceCn__XJD1u")
    let example = $(".index_left__2LkyW p")
    if(localStorage.getItem("config-example-hide") === "隐藏并移除") {
        for(let i=0; i<$(".index_sentenceEn__1Qjgx").length; i++) {
            $(en[i]).attr("title", $(cn[i]).text())
            $(en[i]).css("cursor", "pointer")
            $(en[i]).click(() => { $(cn[i]).toggleClass("removeTrans") })
        }
        $(example[0]).attr("title", $(example[1]).text())
        $(example[0]).css("cursor", "pointer")
        $(example[0]).click(() => { $(example[1]).toggleClass("removeTrans") })
        $($(".index_left__2LkyW p")[1]).toggleClass("removeTrans")
        $(".index_sentenceCn__XJD1u").toggleClass("removeTrans")
    }
    if(localStorage.getItem("config-example-hide") === "隐藏并占位") {
        for(let i=0; i<$(".index_sentenceEn__1Qjgx").length; i++) {
            $(cn[i]).toggleClass("hideTrans")
            $(cn[i]).mouseenter(e => {
                $(e.target).toggleClass("hideTrans")
            })
            $(cn[i]).mouseleave(e => {
                $(e.target).toggleClass("hideTrans")
            })
        }
        $(example[1]).toggleClass("hideTrans")
        $(example[1]).mouseenter(e => {
            $(e.target).toggleClass("hideTrans")
        })
        $(example[1]).mouseleave(e => {
            $(e.target).toggleClass("hideTrans")
        })
    }
}

export default hideTranslation