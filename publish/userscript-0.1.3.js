// ==UserScript==
// @name             扇贝单词增强
// @name:en          Shanbay Enhance
// @description      扇贝单词功能增强，带来更好的背单词体验。❤单词总结释义遮挡❤隐藏例句翻译❤自定义单词例句字体
// @description:en   More function for Shanbay.
// @version          0.1.3
// @author           ZiuChen
// @namespace        https://greasyfork.org/zh-CN/users/605474
// @icon             https://gitee.com/ziuc/utool-filebed/raw/master/20210514-231824-0795.png
// @source           git+https://github.com/ZiuChen/Shanbay-Enhance.git
// @match            https://www.shanbay.com/*
// @match            https://web.shanbay.com/wordsweb/*
// @require          https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js
// @require          https://cdn.bootcdn.net/ajax/libs/toastr.js/latest/js/toastr.min.js
// @license          MIT
// ==/UserScript==


/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./package.json":
/***/ ((module) => {

module.exports = JSON.parse('{"name":"shanbay-enhance","version":"0.1.3","description":"More function for Shanbay.","main":"userscript.js","scripts":{"dev":"webpack --mode development --config config/webpack.config.dev.js","build":"webpack --mode production --config config/webpack.config.prod.js"},"repository":{"type":"git","url":"git+https://github.com/ZiuChen/Shanbay-Enhance.git"},"author":"ZiuChen","license":"MIT","bugs":{"url":"https://github.com/ZiuChen/Shanbay-Enhance/issues"},"homepage":"https://github.com/ZiuChen/Shanbay-Enhance#readme","devDependencies":{"@babel/core":"^7.16.7","babel-loader":"^8.2.3","userscript-metadata-webpack-plugin":"^0.1.1","webpack":"^5.65.0","webpack-cli":"^4.9.1","webpack-livereload-plugin":"^3.0.2","webpack-merge":"^5.8.0"},"dependencies":{}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/common/style.js
const style =
/* CSS */
`
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
.toastr-center {
    top: 50%;
    left: 50%;
    margin-top: -30px;
    margin-left: -150px;
}

/* config input text */
#config-fonts-choice-tmp {
    width: 220px;
    margin-left: 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    height: 30px;
    margin-top: 4px;
    line-height: 30px;
}

`;
/* harmony default export */ const common_style = (style);
;// CONCATENATED MODULE: ./src/common/LoadUrl.js


function LoadUrl() {
  const cssUrl = [{
    name: `toastr`,
    url: `https://cdn.bootcdn.net/ajax/libs/toastr.js/latest/toastr.min.css`
  }];
  cssUrl.forEach(item => {
    $("head").append(`<link href="${item.url}" rel="stylesheet">`);
  });
  $("head").append(`<style>${common_style}<style>`);
}

/* harmony default export */ const common_LoadUrl = (LoadUrl);
;// CONCATENATED MODULE: ./src/common/config.js
const config = [{
  content: "单词总结释义遮挡：",
  id: "config-summary",
  default: true,
  type: "show",
  name: "choice"
}, {
  content: "部分字体修改：",
  id: "config-fonts",
  default: true,
  type: "show",
  name: "choice-question",
  info: "开启后，单词、释义、例句的字体将会被修改"
}, {
  content: "选择使用的字体：",
  id: "config-fonts-choice",
  default: "宋体",
  type: "show",
  name: "select"
}, {
  content: "例句翻译隐藏：",
  id: "config-example-hide",
  default: "隐藏并占位",
  type: "show",
  name: "radio"
}, {
  content: "移除笔记栏：",
  id: "config-note-remove",
  default: true,
  type: "show",
  name: "choice"
}, {
  content: "检查更新提示：",
  id: "config-update",
  default: true,
  type: "show",
  name: "choice"
}];
const fonts = ["", "宋体", "华文中宋", "思源宋体 CN", "微软雅黑", "等线", "仿宋"];
const exampleHideType = ["隐藏并占位", "隐藏并移除", "不隐藏"];
/* harmony default export */ const common_config = ({
  config: config,
  fonts: fonts,
  exampleHideType: exampleHideType
});
;// CONCATENATED MODULE: ./src/common/LoadConfig.js


function loadConfig() {
  // Config Initialize
  common_config.config.forEach(item => {
    if (localStorage.getItem(item.id) === null) localStorage.setItem(item.id, item.default);
  });
  if (window.location.hash !== "#/setting") return; // Update Setting List

  $(".SettingContainer_item__3RKJY").wrapAll(`<div class="defaultSettings"></div>`);
  $(".SettingContainer_setting__2aBZV").append(`<div class="scriptSettings"></div>`);
  common_config.config.forEach(item => {
    function getFonts() {
      let options = "";
      let checked = "";
      if (localStorage.getItem(item.id) === "true") checked = "checked"; // Key-value is not Boolean but String

      if (item.name === "choice") {
        options += `<span class="SettingContainer_title__1IBOy">${item.content}`;
        options += `</span>`;
        options += `<input type="checkbox" id="${item.id}" ${checked}>`;
      }

      if (item.name === "choice-question") {
        options += `<span class="SettingContainer_title__1IBOy">${item.content}`;
        options += `<span class="SettingContainer_questionWrap__1nE7J">?<span class="SettingContainer_question__VM3MF">${item.info}</span></span>`;
        options += `</span>`;
        options += `<input type="checkbox" id="${item.id}" ${checked}>`;
      }

      if (item.name === "select") {
        options += `<span class="SettingContainer_title__1IBOy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ${item.content}</span>`;
        options += `<select id="${item.id}">`;
        common_config.fonts.forEach((font, index) => {
          let selected = "";
          if (localStorage.getItem("config-fonts-choice") === font) selected = "selected";
          options += `<option value="${index}" ${selected}>${font}</option>`;
        });
        options += `</select>`;

        if (item.id === "config-fonts-choice") {
          options += `<input type="text" id="config-fonts-choice-tmp" placeholder="自定义字体">`;
        }
      }

      if (item.name === "radio") {
        options += `<span class="SettingContainer_title__1IBOy">${item.content}</span>`;
        options += `<div>`;
        common_config.exampleHideType.forEach((type, index) => {
          let checked = "";
          if (localStorage.getItem("config-example-hide") === type) checked = "checked";
          options += `<label><input type="radio" name="config-example-hide" value="${type}" ${checked}>${type}</label>`;
        });
      }

      return options;
    }

    if (item.type === "unshow") return;
    $(".scriptSettings").append(
    /* html */
    `
            <div class="SettingContainer_item__3RKJY">
                ${getFonts()}
            </div>`);
  });
  $(".SettingContainer_setting__2aBZV").css("overflow", "auto");
  $(".SettingContainer_setting__2aBZV").css("height", "660px"); // $(".scriptSettings .SettingContainer_title__1IBOy").css("font-weight", "bold")

  if (localStorage.getItem("config-fonts") === "false") $("#config-fonts-choice").parent().hide();
  if ($("#config-fonts-choice")[0].options.selectedIndex === 0) $("#config-fonts-choice-tmp").val(localStorage.getItem("config-fonts-choice"));
  $(".scriptSettings").change(e => {
    localStorage.setItem(e.target.id, e.target.checked);

    if (e.target.id === "config-fonts-choice") {
      localStorage.setItem(e.target.id, common_config.fonts[e.target.options.selectedIndex]);
    }

    if (e.target.id === "config-fonts-choice-tmp") {
      localStorage.setItem("config-fonts-choice", e.target.value);
    }

    if (e.target.id === "config-fonts" && localStorage.getItem("config-fonts") === "false") {
      $("#config-fonts-choice").parent().hide();
    } else if (e.target.id === "config-fonts" && localStorage.getItem("config-fonts") === "true") {
      $("#config-fonts-choice").parent().show();
    }

    if (e.target.name === "config-example-hide") {
      localStorage.setItem("config-example-hide", e.target.defaultValue);
    }

    toastr.options = {
      timeOut: 1000
    };
    toastr.success("设置已更新", "Shanbay Enhance");
  });
}

/* harmony default export */ const LoadConfig = (loadConfig);
;// CONCATENATED MODULE: ./src/function/SummaryTranslation.js
function toggleSummaryTranslation() {
  let wordList = document.querySelectorAll(".StudySummaryItem_content__3j9YG");

  if (localStorage.getItem("config-summary") === "true") {
    localStorage.setItem("config-summary", "false");
    wordList.forEach(item => {
      item.style.color = "black";
      item.getElementsByTagName("div")[0].style.background = "";
    });
  } else {
    localStorage.setItem("config-summary", "true");
    wordList.forEach(item => {
      item.style.color = "#cccccc";
      item.getElementsByTagName("div")[0].style.background = "#cccccc";
    });
  }
}

function hideSummaryTranslation() {
  let checked = "";
  if (localStorage.getItem("config-summary") === "true") checked = "checked"; // Key-value is not Boolean but String

  const statusSwitch =
  /* html */
  `
        <div class="span" style="margin-right: 10px;">释义遮挡</div>
        <label class="switch">
            <input type="checkbox" ${checked}>
            <div class="slider round"></div>
        </label>`;
  let wordList = document.querySelectorAll(".StudySummaryItem_content__3j9YG");

  if (localStorage.getItem("config-summary") === "true") {
    wordList.forEach(item => {
      item.style.color = "#cccccc";
      item.getElementsByTagName("div")[0].style.background = "#cccccc";
    });
  }

  $($(".StudySummary_studySummary__32y_I .row").get(0)).append(statusSwitch);
  $(".slider").click(function () {
    toggleSummaryTranslation();
  });
  wordList.forEach(item => {
    item.addEventListener("mouseenter", e => {
      let that = e.path[0];
      that.style.color = "black";
      that.getElementsByTagName("div")[0].style.background = "";
    });
    item.addEventListener("mouseleave", e => {
      if (localStorage.getItem("config-summary") === "false") return;
      let that = e.path[0];
      that.style.color = "#cccccc";
      that.getElementsByTagName("div")[0].style.background = "#cccccc";
    });
  });
}

/* harmony default export */ const SummaryTranslation = ({
  toggleSummaryTranslation,
  hideSummaryTranslation
});
;// CONCATENATED MODULE: ./src/function/FontToggle.js
const selectors = [{
  name: "学习页单词",
  selector: ".index_word__3nhJU"
}, {
  name: "详情页单词",
  selector: ".VocabPronounce_word__17Tma"
}, {
  name: "单词小结",
  selector: ".StudySummaryItem_studySummaryItem__k2ME0"
}, {
  name: "提示例句",
  selector: ".index_hint__2Z39O"
}, {
  name: "单词词义",
  selector: ".BayTrans_paraphrase__2JMIz"
}, {
  name: "单词例句",
  selector: ".BayTrans_exampleBox__3CsaJ"
}, {
  name: "真题词义",
  selector: ".index_name__1gkfJ"
}, {
  name: "真题例句",
  selector: ".index_left__2SYuy"
}];

function fontToggle() {
  if (localStorage.getItem("config-fonts") === "false") return;
  selectors.forEach(item => {
    $(item.selector).css("font-family", localStorage.getItem("config-fonts-choice"));
  });
}

/* harmony default export */ const FontToggle = (fontToggle);
;// CONCATENATED MODULE: ./src/function/NoteRemove.js
function noteRemove() {
  if (localStorage.getItem("config-note-remove") === "false") return;
  $(`h6:contains("笔记")`).parent().parent().hide();
}

/* harmony default export */ const NoteRemove = (noteRemove);
;// CONCATENATED MODULE: ./src/function/HideTranslation.js
function hideTranslation() {
  if (localStorage.getItem("config-example-hide") === "不隐藏") return;
  let en = $(".index_sentenceEn__1Qjgx");
  let cn = $(".index_sentenceCn__XJD1u");
  let example = $(".index_left__2LkyW p");

  if (localStorage.getItem("config-example-hide") === "隐藏并移除") {
    for (let i = 0; i < $(".index_sentenceEn__1Qjgx").length; i++) {
      $(en[i]).attr("title", $(cn[i]).text());
      $(en[i]).css("cursor", "pointer");
      $(en[i]).click(() => {
        $(cn[i]).toggle();
      });
    }

    $(example[0]).attr("title", $(example[1]).text());
    $(example[0]).css("cursor", "pointer");
    $(example[0]).click(() => {
      $(example[1]).toggle();
    });
    $($(".index_left__2LkyW p")[1]).hide();
    $(".index_sentenceCn__XJD1u").hide();
  }

  if (localStorage.getItem("config-example-hide") === "隐藏并占位") {
    for (let i = 0; i < $(".index_sentenceEn__1Qjgx").length; i++) {
      $(cn[i]).css("cursor", "pointer");
      $(cn[i]).css({
        "color": "#cccccc",
        "background-color": "#cccccc"
      });
      $(cn[i]).mouseenter(e => {
        $(e.target).css({
          "color": "black",
          "background-color": ""
        });
      });
      $(cn[i]).mouseleave(e => {
        $(e.target).css({
          "color": "#cccccc",
          "background-color": "#cccccc"
        });
      });
    }

    $(example[1]).css("cursor", "pointer");
    $(example[1]).css({
      "color": "#cccccc",
      "background-color": "#cccccc"
    });
    $(example[1]).mouseenter(e => {
      $(e.target).css({
        "color": "black",
        "background-color": ""
      });
    });
    $(example[1]).mouseleave(e => {
      $(e.target).css({
        "color": "#cccccc",
        "background-color": "#cccccc"
      });
    });
  }
}

/* harmony default export */ const HideTranslation = (hideTranslation);
;// CONCATENATED MODULE: ./src/common/Observer.js





const fontToggle_conditions = ["study-page", "index_hint", "StudyPage_nextBtn", "StudySummary"];

function Observer() {
  const OuterTargetNode = document.getElementsByClassName("Layout_main__2_zw8")[0];
  if (typeof OuterTargetNode === "undefined") return;

  const OuterCallback = mutations => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length === 0 || mutation.addedNodes[0].className === undefined) return;
      let currentState = mutation.addedNodes[0].className;
      if (currentState.indexOf("SettingContainer_setting") !== -1) LoadConfig();

      if (currentState.indexOf("row") !== -1) {
        NoteRemove();
        HideTranslation();
      }

      if (currentState.indexOf("StudySummary") !== -1) SummaryTranslation.hideSummaryTranslation();
      fontToggle_conditions.forEach(condition => {
        if (currentState.indexOf(condition) !== -1) FontToggle();
        if (mutation.addedNodes[0].childNodes.length === 0 || mutation.addedNodes[0].childNodes[0].className === undefined) return;
        if (mutation.addedNodes[0].childNodes[0].className.indexOf("wordBox") !== -1) FontToggle();
      });
    });
  };

  const ExecuteFunctions = () => {
    if (window.location.hash === "#/setting") LoadConfig();

    if (window.location.hash.indexOf("#/detail") !== -1) {
      FontToggle();
      NoteRemove();
      HideTranslation();
    }
  };

  const OuterObserver = new MutationObserver(OuterCallback);
  OuterObserver.observe(OuterTargetNode, {
    childList: true,
    subtree: true
  });
  ExecuteFunctions();
}

/* harmony default export */ const common_Observer = (Observer);
;// CONCATENATED MODULE: ./src/common/SendRequest.js
async function sendRequest(url, callBack, options) {
  let res = await fetch(url, options).then(response => {
    return response.blob();
  }).then(blob => {
    return new Promise(resolve => {
      let reader = new FileReader();

      reader.onload = () => {
        let htmlData = reader.result;
        htmlData = new window.DOMParser().parseFromString(htmlData, "text/html");
        resolve(htmlData);
      };

      reader.readAsText(blob, 'GBK');
    });
  }).then(response => {
    return callBack(response);
  }).catch(error => {
    console.error(error);
  });
  return res;
}

/* harmony default export */ const SendRequest = (sendRequest);
;// CONCATENATED MODULE: ./src/common/Log.js
function log(msg) {
  console.log(`%c[Shanbay Enhance] ${msg}`, "color: #209e85");
}

/* harmony default export */ const Log = (log);
;// CONCATENATED MODULE: ./src/common/CheckUpdate.js


const GreasyUrl = "https://greasyfork.org/zh-CN/scripts/437942";

const {
  version
} = __webpack_require__("./package.json");

async function CheckUpdate() {
  Log(`script loaded: ${version}`);
  if (window.location.hash !== "#/study/entry") return;
  SendRequest(GreasyUrl, obj => {
    return obj.querySelectorAll('.script-show-version>span')[1].textContent;
  }).then(res => {
    let weightLastest = 0;
    let weightNow = 0;
    res.split('.').reverse().forEach((value, index) => {
      weightLastest += (index + 1) * value;
    });
    version.split('.').reverse().forEach((value, index) => {
      weightNow += (index + 1) * value;
    });

    if (weightLastest > weightNow) {
      Log("need update");
      toastr.options = {
        extendedTimeOut: 999999999,
        onclick: () => {
          window.open(`${GreasyUrl}`);
        }
      };
      toastr.warning(`有新版本：${res}`, `Shanbay Enhance`);
    } else {
      Log("version Checked");
      if (localStorage.getItem("config-update") !== "true") return;
      toastr.options = {
        timeOut: 1000
      };
      toastr.success(`版本已是最新：${version}`, `Shanbay Enhance`);
    }
  });
}

/* harmony default export */ const common_CheckUpdate = (CheckUpdate);
;// CONCATENATED MODULE: ./src/index.js




window.onload = () => {
  common_LoadUrl();
  common_CheckUpdate();
  common_Observer();
};
})();

/******/ })()
;