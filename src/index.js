import React from "react";
import ReactDom from "react-dom";
import "./assets/common.less";
console.log(1231231231)

const png = require("./assets/img/v2-c16278ddebeedc4a64912e527cf7fb45_b.jpg").default
console.log(png)
document.querySelector("#sdk-app").innerHTML = `<img src = ${png} alt=""/>`
ReactDom.render(<div>1231231231</div>, document.getElementById("sdk-app"));