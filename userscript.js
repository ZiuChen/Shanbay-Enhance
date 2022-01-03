// ==UserScript==
// @name            扇贝单词增强
// @name:en         Shanbay Enhance
// @description     扇贝单词功能增强，带来更好的背单词体验。❤单词总结释义遮挡
// @description:en  More function for Shanbay.
// @version         0.1
// @author          Ziu
// @namespace       https://greasyfork.org/zh-CN/users/605474
// @icon            https://gitee.com/ziuc/utool-filebed/raw/master/20210514-231824-0795.png
// @match           https://web.shanbay.com/wordsweb/*
// @require         https://cdn.bootcdn.net/ajax/libs/toastr.js/latest/js/toastr.min.js
// @grant           GM_info
// @license         MIT
// ==/UserScript==

'use strict';
const GreasyUrl = "https://greasyfork.org/zh-CN/scripts/437942"
const version = GM_info.script.version

const styleTag = /* CSS */ `
    /* switch  */
    .switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 34px;
    }

    .switch input {display:none;}

    .slider {
        position: absolute;
        cursor: pointer;
        height: 25px;
        width: 45px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 19px;
        width: 19px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        -webkit-transition: .3s;
        transition: .3s;
    }

    input:checked + .slider {
        background-color: #209e85;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #209e85;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    /* toastr position */
    .toastr-center{
        top: 50%;
        left: 50%;
        margin-top: -30px;
        margin-left: -150px;
    }
`;

log(`script loaded: ${version}`)

function LoadUrl() {
    const cssUrl = [
        {
            name: `toastr`,
            url: `https://cdn.bootcdn.net/ajax/libs/toastr.js/latest/toastr.min.css`
        }
    ]
    cssUrl.forEach(item => {
        $("head").append(`<link href="${item.url}" rel="stylesheet">`)
    })
    $("head").append(`<style>${styleTag}<style>`)
}

function Observer() {
    const OuterTargetNode = document.getElementsByClassName("Layout_main__2_zw8")[0]
    if(typeof OuterTargetNode === "undefined") return
    const executeInnerFunction = () => {
        if(document.getElementsByClassName("StudySummary_studySummary__32y_I").length === 1
            && document.getElementsByClassName("switch").length !== 1) {
            HideSummaryTranslation()
        } else return
    }
    const executeOuterFunction = () => {
        if(document.getElementsByClassName("SettingContainer_setting__2aBZV").length === 1) {
            LoadConfig()
        } else return
    }
    const InnerCallback = () => {
        executeInnerFunction()
    }
    const OuterCallback = () => {
        executeOuterFunction()
        const InnerTargetNode = document.getElementsByClassName("StudyPage_studyPage__1Ri5C")[0]
        if(typeof InnerTargetNode === "undefined") return
        const InnerObserver = new MutationObserver(InnerCallback)
        InnerObserver.observe(InnerTargetNode, { childList: true, subtree: true })
    };
    const OuterObserver = new MutationObserver(OuterCallback)
    OuterObserver.observe(OuterTargetNode, { childList: true })
}

function log(msg) {
    console.log(`%c[Shanbay Enhance] ${msg}`,"color: #209e85")
}

async function CheckUpdate() {
    if(window.location.hash !== "#/study/entry") return
    sendRequest(GreasyUrl, (obj) => {
        return obj.querySelectorAll('.script-show-version>span')[1].textContent
    })
    .then(res => {
        let weightLastest = 0
        let weightNow = 0
        res.split('.').reverse().forEach((value, index) => {
            weightLastest += (index + 1) * value
        })
        version.split('.').reverse().forEach((value, index) => {
            weightNow += (index + 1) * value
        })
        if (weightLastest > weightNow) {
            log("need update")
            toastr.options = {
                extendedTimeOut: 999999999,
                onclick: () => { window.open(`${GreasyUrl}`) }
            }
            toastr.warning(`有新版本：${res}`, `Shanbay Enhance`)
        } else {
            log("version Checked")
            toastr.success(`版本已是最新：${version}`, `Shanbay Enhance`)
        }
    })
}

function LoadConfig() {
    // Config Initialize
    const configTags = [
        {
            content: "单词总结释义遮挡：",
            id: "config-summary",
            default: true
        },
        // {
        //     content: "专注模式：",
        //     id: "config-focus",
        //     default: false
        // }
    ]
    configTags.forEach(item => {
        if(localStorage.getItem(item.id) === null) localStorage.setItem(item.id, item.default)
    })
    if(window.location.hash !== "#/setting") return
    // Update Setting List
    $(".SettingContainer_item__3RKJY").wrapAll(`<div class="defaultSettings"></div>`)
    $(".SettingContainer_setting__2aBZV").append(`<div class="scriptSettings"></div>`)
    $(".SettingContainer_setting__2aBZV").css("overflow", "auto")
    configTags.forEach(item => {
        let checked = ""
        if(localStorage.getItem(item.id) === "true") checked = "checked" // Key-value is not Boolean but String
        $(".scriptSettings").append(/* html */`
            <div class="SettingContainer_item__3RKJY">
            <span class="SettingContainer_title__1IBOy">${item.content}</span>
            <input type="checkbox" id="${item.id}" ${checked}>
            </div>`)
    })
    $(".scriptSettings").change(() => {
        for(let i = 0; i < $(".scriptSettings input").length; i++) {
            let item = $(".scriptSettings input")[i]
            localStorage.setItem(item.id, item.checked)
        }
    })
}

function ToggleSummaryTranslation() {
    let wordList = document.querySelectorAll(".StudySummaryItem_content__3j9YG")
    if(localStorage.getItem("config-summary") === "true") {
        localStorage.setItem("config-summary", "false")
        wordList.forEach(item => {
            item.style.color = "black"
            item.getElementsByTagName("div")[0].style.background = ""
        })
    }
    else {
        localStorage.setItem("config-summary", "true")
        wordList.forEach(item => {
            item.style.color = "#cccccc"
            item.getElementsByTagName("div")[0].style.background = "#cccccc"
        })
    }
}

function HideSummaryTranslation() {
    let checked = ""
    if(localStorage.getItem("config-summary") === "true") checked = "checked" // Key-value is not Boolean but String
    const statusSwitch = /* html */`
        <div class="span" style="margin-right: 10px;">释义遮挡</div>
        <label class="switch">
            <input type="checkbox" ${checked}>
            <div class="slider round"></div>
        </label>`
    let wordList = document.querySelectorAll(".StudySummaryItem_content__3j9YG")
    if(localStorage.getItem("config-summary") === "true") {
        wordList.forEach((item) => {
            item.style.color = "#cccccc"
            item.getElementsByTagName("div")[0].style.background = "#cccccc"
        })
    }
    wordList.forEach((item) => {
        item.addEventListener("mouseenter", (e) => {
            let that = e.path[0]
            that.style.color = "black"
            that.getElementsByTagName("div")[0].style.background = ""
        })
        item.addEventListener("mouseleave", (e) => {
            if(localStorage.getItem("config-summary") === "false") return
            let that = e.path[0]
            that.style.color = "#cccccc"
            that.getElementsByTagName("div")[0].style.background = "#cccccc"
        })
    })
    $($(".StudySummary_studySummary__32y_I .row").get(0)).append(statusSwitch)
    $(".slider").click(function () {
        ToggleSummaryTranslation()
    })
}

async function sendRequest(url, callBack, options) {
    let res = await fetch(url, options)
        .then(response => { return response.blob() })
        .then(blob => {
            return new Promise(resolve => {
                let reader = new FileReader();
                reader.onload = () => {
                    let htmlData = reader.result;
                    htmlData = (new window.DOMParser()).parseFromString(htmlData, "text/html");
                    resolve(htmlData)
                }
                reader.readAsText(blob, 'GBK')
            })
        })
        .then(response => {
            return callBack(response)
        })
        .catch(error => { console.error(error) })
    return res
}

window.onload = () => {
    LoadUrl()
    CheckUpdate()
    LoadConfig()
    Observer()
}

