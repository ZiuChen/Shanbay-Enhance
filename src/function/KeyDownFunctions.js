function wordPronunceUS() {
    // US
    $(".index_trump__3bTaM:last").click()
    $(".Pronounce_audio__3xdMh:last").click()
}

function wordPronunceUK() {
    // UK
    $(".index_trump__3bTaM:first").click()
    $(".Pronounce_audio__3xdMh:first").click()
}

function examplePronunce() {
    $(".index_icon__1IK2K").click()
}

function examplePronunceRealQuestion() {
    $(".index_audio__1mSVg:first > img").click()
}

function summaryToggle() {
    $(".slider").trigger("click")
}

function collinsToggle() {
    if ($(".index_tab__37Cha.index_active__1bHoy").html() === "扇贝单词") {
        // to Collins Dictionary
        $(".index_tabNavs__3tWev:eq(0) > p:eq(1)").click()
    }
    else if($(".index_tab__37Cha.index_active__1bHoy").html() === "柯林斯词典") {
        // to Shanbay Dictionary
        $(".index_tabNavs__3tWev:eq(0) > p:eq(0)").click()
    }
}

function toggleExample() {
    // hide and remove
    if(localStorage.getItem("config-example-hide") === "隐藏并移除") {
        $($(".index_left__2LkyW p")[1]).toggleClass("removeTrans")
        $(".index_sentenceCn__XJD1u").toggleClass("removeTrans")
    }
    // hide and reserved
    if(localStorage.getItem("config-example-hide") === "隐藏并占位") {
        $($(".index_left__2LkyW p")[1]).toggleClass("hideTrans")
        $(".index_sentenceCn__XJD1u").toggleClass("hideTrans")
    }
}

export default {
    "word-pronunce-uk": wordPronunceUK,
    "word-pronunce-us": wordPronunceUS,
    "example-pronunce": examplePronunce,
    "example-pronunce-real-question": examplePronunceRealQuestion,
    "summary-toggle": summaryToggle,
    "collins-toggle": collinsToggle,
    "toggle-example": toggleExample
}