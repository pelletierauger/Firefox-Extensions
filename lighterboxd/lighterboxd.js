document.body.style.color = "black";  

let titles = document.querySelectorAll(".film-table .headline-3 a");
for(let i = 0; i < titles.length; i++) {
  titles[i].style.color = "black"
}

let sitebody = document.getElementsByClassName("site-body");
// sitebody[0].style.background = "white";
// sitebody[0].style.background = "#E8E8E8";
sitebody[0].style.background = "#DCDCDC";

// ————————————————————————————————————————————————————————————————————

let profileNavigation = document.querySelectorAll(".-is-mini-nav .profile-navigation");
for(let i = 0; i < profileNavigation.length; i++) {
  profileNavigation[i].style.backgroundColor = "#DCDCDC";
}

let profileMiniPerson = document.querySelectorAll(".profile-mini-person .title-3 a");
for(let i = 0; i < profileMiniPerson.length; i++) {
  profileMiniPerson[i].style.color = "#000000";
}

let navLink = document.querySelectorAll(".profile-navigation .navlist > .navitem .navlink");
for(let i = 0; i < navLink.length; i++) {
  navLink[i].style.color = "#000000";
}

let navLinkActive = document.querySelectorAll(".profile-navigation .navlist > .navitem.-active .navlink, .profile-navigation .navlist > .navitem.-active .navlink[href]");
for(let i = 0; i < navLinkActive.length; i++) {
  navLinkActive[i].style.color = "#4C91CB";
}

let titleN = document.querySelectorAll(".title-0, .title-1, .title-2, .title-3, .title-4");
for(let i = 0; i < titleN.length; i++) {
  titleN[i].style.color = "black";
}

let profileStat = document.querySelectorAll(".profile-statistic .value");
for(let i = 0; i < profileStat.length; i++) {
  profileStat[i].style.color = "black";
}

let sectionHeading = document.querySelectorAll(".section-heading");
for(let i = 0; i < sectionHeading.length; i++) {
  sectionHeading[i].style.color = "black";
}

let tableTHead = document.querySelectorAll(".import-activity thead th, .person-table thead th, .table thead th");
for(let i = 0; i < tableTHead.length; i++) {
  tableTHead[i].style.background = "#DCDCDC";
}

let tableTHead2 = document.querySelectorAll(".activity-table tbody td, .person-table tbody td, .table tbody td");
for(let i = 0; i < tableTHead2.length; i++) {
  tableTHead2[i].style.color = "#000000";
}

let filmTable = document.querySelectorAll(".film-table tbody td.td-actions");
for(let i = 0; i < filmTable.length; i++) {
  filmTable[i].style.background = "#DCDCDC";
}

let attributionName = document.querySelectorAll(".attribution-block > .attribution .context .name");
for(let i = 0; i < attributionName.length; i++) {
  attributionName[i].style.color = "#000000";
}

let textSlug = document.querySelectorAll(".text-slug");
for(let i = 0; i < textSlug.length; i++) {
  textSlug[i].style.background = "#BFBFBF";
  textSlug[i].style.color = "#000000";
}

let prose = document.querySelectorAll(".body-text.-prose");
for(let i = 0; i < prose.length; i++) {
  // prose[i].style.color = "gray";
}

let otherStyles = `
.film-news, .watch-panel, .banner {
  display: none;
}
.section:first-child {
  margin-top: 0;
}
.attribution-block > .attribution .context .name {
  color: black;
}
.film-header-lockup.-default .headline-1 {
  text-shadow: none;
}
.film-title, .headline-1, .headline-2, .headline-3, .headline-4 {
  color: black;
}
.film-header-lockup.-default p:not(#user-actions-menu) {
  color: black;
  text-shadow: none;
}
.film-header-lockup.-default p:not(#user-actions-menu) a:not(.play) {
  color: black;
}
.backdrop-container {
  height: 455px;
}
.actions-panel > ul > li {
  color: black;
  background-color: #BFBFBF;
}
.actions-panel > ul > li a{
  color: black;
}
.action-large .action {
  color: black;
}
.section-heading a {
  color: black;
}
.logged-summary li dl dd a {
    color: black;
}
.activity-summary {
  color: black;
}
.timeline li .target {
  color: #7882B4;
}
.logged-summary li h3 {
  color: #DCDCDC;
}
.body-text.-prose a {
  color: #8899aa;
}
`;

let styleSheet = document.createElement("style");
styleSheet.innerText = otherStyles;
document.head.appendChild(styleSheet);

let asideSection = document.querySelectorAll(".section:nth-of-type(1)");
for(let i = 0; i < asideSection.length; i++) {
  asideSection[i].style.marginTop = 0;
}