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
  document.getElementById("gen2")//12
]

function revealstatus() {
  if (game.tabs[0] == false && game.GK > 0) game.tabs[0] = true
  if (game.tabs[1] == false && game.clicks > 150) game.tabs[1] = true
  if (game.tabs[2] == false && game.clicks > 10) game.tabs[2] = true
  if (game.tabs[3] == false && game.GK > 10) game.tabs[3] = true
  if (game.tabs[4] == false && game.scrap > 10) game.tabs[4] = true
  if (game.tabs[5] == false && game.GK > 0) game.tabs[5] = true
  if (game.tabs[6] == false && game.GK > 8) game.tabs[6] = true
  if (game.tabs[7] == false && game.atom > 0) game.tabs[7] = true
  if (game.tabs[8] == false && game.basedpotato > 1) game.tabs[8] = true
  if (game.tabs[9] == false && game.basedpotato > 1) game.tabs[9] = true
  if (game.tabs[10] == false && game.scrapsorter > 0) game.tabs[10] = true
  if (game.tabs[11] == false && game.scrapsorter > 0) game.tabs[11] = true
  if (game.tabs[12] == false && game.gen2> 0) game.tabs[12] = true
}
function reveal() {
  revealstatus()
  for (let i = 0; i < Partsofgame.length; i++) {
    if (game.tabs[i] == true) Partsofgame[i].style.display = "block"
  }
}


function hide() {
  for (let i = 0; i < Partsofgame.length; i++) {
    game.tabs[i] = false
    Partsofgame[i].style.display = "none"
  }
}
function showall() {
  for (let i = 0; i < game.tabs.length; i++) {
    game.tabs[i] = true
  }
  reveal()
}
hide()
reveal()
let timerreveal = setInterval(reveal, 5000)
