import LoadUrl from "./common/LoadUrl"
import LoadConfig from "./common/LoadConfig"
import Observer from "./common/Observer"
import CheckUpdate from "./common/CheckUpdate"

window.onload = () => {
    LoadUrl()
    LoadConfig()
    Observer()
    CheckUpdate()
}