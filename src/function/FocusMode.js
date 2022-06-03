function focusMode() {
  if (localStorage.getItem("config-focus-mode") === "false") {
    $(".Nav_nav__3kyeO").show()
    $(".Footer_footerWrap__L4iuD").show()
    $(".Layout_page__2Wedt").css("padding-bottom", "")
  } else if (localStorage.getItem("config-focus-mode") === "true") {
    $(".Nav_nav__3kyeO").hide()
    $(".Footer_footerWrap__L4iuD").hide()
    $(".Layout_page__2Wedt").css("padding-bottom", "0px")
    if (window.location.hash === "#/study/entry") {
      toastr.options = {
        onclick: () => {
          location.hash = "#/setting"
        }
      }
      toastr.info("专注模式已开启", "Shanbay Enhance")
    }
  }
}

export default focusMode
