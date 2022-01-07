function wordPronunce() {
    // TODO: custom US or UK
    // US
    $(".index_trump__3bTaM:last").click()
    $(".Pronounce_audio__3xdMh:last").click()
    // UK
    // $(".index_trump__3bTaM:first").click()
    // $(".Pronounce_audio__3xdMh:first").click()
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

export default {
    "word-pronunce": wordPronunce,
    "example-pronunce": examplePronunce,
    "example-pronunce-real-question": examplePronunceRealQuestion,
    "summary-toggle": summaryToggle,
    "collins-toggle": collinsToggle
}