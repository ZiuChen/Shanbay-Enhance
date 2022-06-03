const style = /* CSS */ `
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
input[type=text] {
    width: 220px;
    border: 1px solid #ccc;
    background-color: #fff;
    height: 30px;
    margin-top: 4px;
    line-height: 30px;
}

input[id=config-fonts-choice-tmp] {
    margin-left: 10px;
}

input[id=config-fonts-selector] {
    width: 450px;
}

button[class~=short-keys] {
    height: 25px;
    padding-right: 5px;
    padding-left: 5px;
    margin-top: 5px;
    margin-right: 10px;
    cursor: pointer;
    border: 1px solid #ccc;
}

button:focus {
    background-color: #ccc;
}

button[class~=settingbutton] {
    height: 25px;
    padding-right: 5px;
    padding-left: 5px;
    margin-top: 5px;
    margin-right: 20px;
    cursor: pointer;
    border: 1px solid #ccc;
}

.short-keys-wrap {
    width: 1000px;
}

/* hide translation */
.hideTrans {
    color: #cccccc;
    background-color: #cccccc;
}

.removeTrans {
    display: none;
}

.showTrans {
    color: black;
    background-color: ;
}

`

export default style
