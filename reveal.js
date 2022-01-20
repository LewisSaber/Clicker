let Partsofgame = [
  document.getElementById("generator"), //0
  document.getElementById("keys"), //1
  document.getElementById("UpgradesButton"), //2
  document.getElementById("CratesButton"), //3
  document.getElementById("CrаftsButton"), //4
  document.getElementById("Upgrade2"), //5
  document.getElementById("Upgrade3"), //6
  document.getElementById("atom"), //7
  document.getElementById("pastcrate2"), //8
  document.getElementById("craftscrapsorter"), //9
  document.getElementById("scrapmats"), //10
  document.getElementById("ScrapSorter"),//11
  document.getElementById("gen2"),//12
  document.getElementById("scrapcraft"),//13
  document.getElementById("craftbooster"),//14
  document.getElementById("Upgrade4")//15
]

function revealstatus() {
  if (tabs[0] == false && game.GK > 0) tabs[0] = true
  if (tabs[1] == false && game.clicks > 150) tabs[1] = true
  if (tabs[2] == false && game.clicks > 10) tabs[2] = true
  if (tabs[3] == false && game.GK > 10) tabs[3] = true
  if (tabs[4] == false && game.scrap > 10) tabs[4] = true
  if (tabs[5] == false && game.GK > 0) tabs[5] = true
  if (tabs[6] == false && game.GK > 8) tabs[6] = true
  if (tabs[7] == false && game.atom > 0) tabs[7] = true
  if (tabs[8] == false && game.basedpotato > 1) tabs[8] = true
  if (tabs[9] == false && game.basedpotato > 1) tabs[9] = true
  if (tabs[10] == false && game.scrapsorter > 0) tabs[10] = true
  if (tabs[11] == false && game.scrapsorter > 0) tabs[11] = true
  if (tabs[12] == false && game.gen2> 0) tabs[12] = true
  if (tabs[13] == false && game.scrapsorter> 0) tabs[13] = true
  //if (tabs[14] == false && game.GK> 0) tabs[14] = true
  if (tabs[15] == false && game.GK> 0) tabs[15] = true
}
function reveal() {
  revealstatus()
  for (let i = 0; i < Partsofgame.length; i++) {
    if (tabs[i] == true) Partsofgame[i].style.display = "block"
  }
}


function hide() {
  for (let i = 0; i < Partsofgame.length; i++) {
    tabs[i] = false
    Partsofgame[i].style.display = "none"
  }
}
function showall() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i] = true
  }
  reveal()
}
hide()
reveal()
let timerreveal = setInterval(reveal, 5000)
