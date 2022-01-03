import style from "./style";

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
    $("head").append(`<style>${style}<style>`)
}

export default LoadUrl