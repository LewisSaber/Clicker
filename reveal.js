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
  document.getElementById("Upgrade4"),//15
  document.getElementById("Upgrade5"),//16
  document.getElementById("Upgrade6"),//17 
  Dragonloreupgrade,//18
  document.getElementById("gen3"),//19
  document.getElementById("craftwoodorchard"),//20
  document.getElementById("woodmats"),//21
  document.getElementById("WoodOrchard"),//22
  document.getElementById("craftorchard"),//23
  RIScopperupgrade,//24
  Advcoreupgrade,//25
  document.getElementById("Upgrade7"),//26
  document.getElementById("Upgrade8"),//27
  Autoclickfragsupgrade,//28
  document.getElementById("Upgrade9"),//29
  document.getElementById("circuitcratecraft"),//30
 Dwarf,//31
  document.getElementById("Upgrade10"),//32
  document.getElementById("mineshaftmats"),//33
  document.getElementById("forgecrafts"),//34
  document.getElementById("Forge"),//35
  document.getElementById("Mineshaft"),//36
  document.getElementById("forgemats"),//37
  document.getElementById("gen4"),//38
]
tabs = []
for (let i = 0; i <Partsofgame.length; i++) {
  tabs.push(false)
}
function revealstatus() {
  if (tabs[0] == false && game.GK > 0) tabs[0] = true
  if (tabs[1] == false && game.clicks > 2000) tabs[1] = true
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
  if (tabs[16] == false && game.scrapsorter> 0) tabs[16] = true
  if (tabs[17] == false && game.dragonlore> 0) tabs[17] = true
  if (tabs[18] == false && game.dragonlore> 0) tabs[18] = true
  if (tabs[19] == false && game.gen3> 0) tabs[19] = true
  if (tabs[20] == false && game.gen3> 0) tabs[20] = true
  if (tabs[21] == false && game.woodorchard> 0) tabs[21] = true
  if (tabs[22] == false && game.woodorchard> 0) tabs[22] = true
  if (tabs[21] == false && game.woodorchard> 0) tabs[21] = true
  if (tabs[23] == false && game.woodorchard> 0) tabs[23] = true
  if (tabs[24] == false && game.scrapsorter > 0) tabs[24] = true
  if (tabs[25] == false && game.scrapsorter > 0) tabs[25] = true
  if (tabs[26] == false && game.scrapsorter > 0) tabs[26] = true
  if (tabs[27] == false && game.autoclickerfragments > 0 &&(game.upgrade.upgrade8effect >10 || game.upgrade.upgrade8effect == 0)) tabs[27] = true
  if (tabs[28] == false && game.autoclickerfragments > 0 &&( game.upgrade.upgrade8effect >10 || game.upgrade.upgrade8effect == 0)) tabs[28] = true
  if (tabs[29] == false && game.gen2 > 0 ) tabs[29] = true
  if (tabs[30] == false && game.dwarf > 0 ) tabs[30] = true
  if (tabs[31] == false && game.dwarf > 0 ) tabs[31] = true
  if (tabs[32] == false && game.enrichedsilicon > 0 ) tabs[32] = true
  if (tabs[33] == false && game.mineshaft > 0 ) tabs[33] = true
  if (tabs[34] == false && game.obsidian > 0 ) tabs[34] = true
  if (tabs[34] == true && game.forge > 0 ) tabs[34] = false
  if (tabs[35] == false && game.forge > 0 ) tabs[35] = true
  if (tabs[36] == false && game.mineshaft > 0 ) tabs[36] = true
  if (tabs[37] == false && game.furnace > 0 ) tabs[37] = true
  if (tabs[38] == false && game.gen4 > 0 ) tabs[38] = true


}
function reveal() {
  revealstatus()
  for (let i = 0; i < Partsofgame.length; i++) {
    if (tabs[i] == true) Partsofgame[i].style.display = "block"
    else
    Partsofgame[i].style.display = "none"
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
function GameStage1()
{
  game.upgrades1 = 0
  game.upgrades10 = 0
  game.upgrade = {
    upgrade1cost: 1,
    upgrade1effect: 0,
    upgrade2cost: 1,
    upgrade2effect: 0,
    upgrade3cost: 10,
    upgrade3effect: 1,
    upgrade4cost: 10000,
    upgrade4effect: 1,
    upgrade5cost: 1,
    upgrade5effect: 10,
    upgrade6cost: 10,
    upgrade6effect: 1,
    upgrade7cost: 2,
    upgrade7effect: 1,
    upgrade8cost: 1,
    upgrade8effect: 0,
    upgrade9cost: 1e30,
    upgrade9effect: 1,
    upgrade10cost: 1,
    upgrade10effect: 1,
  }
  updateupgrades()
  save()
}

