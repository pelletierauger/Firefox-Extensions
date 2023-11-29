document.body.style.color = "black";  

// let titles = document.querySelectorAll(".film-table .headline-3 a");
// for(let i = 0; i < titles.length; i++) {
//   titles[i].style.color = "black"
// }

// let sitebody = document.getElementsByClassName("site-body");
// // sitebody[0].style.background = "white";
// // sitebody[0].style.background = "#E8E8E8";
// sitebody[0].style.background = "#DCDCDC";

let otherStyles = `
.site-background-color {
  background-color: #DCDCDC !important;
}
.browse-left-arrow:focus, .browse-left-arrow:hover, .browse-right-arrow:focus, .browse-right-arrow:hover {
  background-color: #DCDCDC;
}
.browse-left-arrow, .browse-right-arrow {
  background-color: #DCDCDC;
}
primary-color strong {
  color: black !important;
}
.site-font-primary-color, .site-font-primary-color strong {
  color: black !important;
}
body, div, dl, h1, h2, h3, h4, h5, h6, li, nav, ol, p, section, table, ul {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 1rem;
    line-height: 1.45;
    font-weight: bold;
}
.site-font-secondary-color, .site-font-secondary-color strong {
    color: #789 !important;
}
label.read-more-trigger {
    color: #000;
}
.tooltip {
    height: auto;
    // overflow: hidden;
}
`;

let styleSheet = document.createElement("style");
styleSheet.innerText = otherStyles;
document.head.appendChild(styleSheet);