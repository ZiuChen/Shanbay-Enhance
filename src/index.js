import LoadUrl from "./common/LoadUrl"
import Observer from "./common/Observer"
import CheckUpdate from "./common/CheckUpdate"

window.onload = () => {
    LoadUrl()
    CheckUpdate()
    Observer()
}