function noteRemove() {
  if (localStorage.getItem("config-note-remove") === "false") return
  $(`h6:contains("笔记")`).parent().parent().hide()
}

export default noteRemove
