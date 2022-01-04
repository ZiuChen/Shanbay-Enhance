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

export default style