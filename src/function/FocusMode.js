function focusMode() {
    if(localStorage.getItem("config-focus-mode") === "false") return
    if(window.location.hash === "#/study/entry") {
        toastr.options = {
            onclick : () => { location.hash = "#/setting" }
        }
        toastr.info("专注模式已开启", "Shanbay Enhance")
    }
    $(".Nav_nav__3kyeO").hide()
    $(".Footer_footerWrap__L4iuD").hide()
    $(".Layout_page__2Wedt").css("padding-bottom", "0px")
}

export default focusMode