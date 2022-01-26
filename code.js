let numberforstop = 0 //numeer used to stop key trial
// how many numbers
//game.clicks
let loot //loot from last crate
let drop //drop chance

let scraptimer
let woodtimer 
let tocraft = 1
let toopen = 1
let formatestring
//drop variable
let dropScrapsort
let dropclickpower
let dropclickshard
function reset() {
  game = {
    clicks: 0,
    GKMa: 0,
    GKM: 1,
    GK: 0,
    clickpower: 1,
    decrnumber: 7,
    upgrade3costreducer: 1,
    genmult: 1,
    upgrades1: 0,
    
    legendaryclickshard: 0,
    isScrapOn: 0,
    scrap: 0,
    clickshard: 0,
    generatorshard: 0,
    basiccore: 0,
    atom: 0,
    basedpotato: 0,
    scrapsorter: 0,
    booster: 0,
    boostercore: 0,
    rawcopper: 0,
    rawsilicon: 0,
    rawplastic: 0,
    atomizedcopper: 0,
    rat: 0,
    riscopper: 0,
    gen1: 0,
    gen2: 0,
   
    trialmultiplier: 1,
   
    silicon: 0,
    dragonlore: 0,
  
    lesboule: 0,
    leswafer: 0,
    advancedcore: 0,
    gen3: 0,
    gen4: 0,
    woodorchard: 0,
    iswoodorchardon: 0,
    makeBark: 0,
    makePlank: 0,
    makeLog: 0,
    bark: 0,
    plank: 0,
    log: 0,
    coppercable : 0,
    treesap : 0,
    t1board : 0,
   
    upgrade : {
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
    }
  }
}
reset()

function save() {
  localStorage.setItem("theClickerSave", JSON.stringify(game))
}
setInterval(save, 5000)
function load() {
  reset()
  let loadgame = JSON.parse(localStorage.getItem("theClickerSave"))
  if (loadgame != null) {
    loadGame(loadgame)
  }

  //Keys,generators,upgrades,crates,crafts,upgrade2,upgrade3
}
load()
tabs = []
for (let i = 0; i < 30; i++) {
  tabs.push(false)
}
function loadGame(loadgame) {
  //Sets each variable in 'game' to the equivalent variable in 'loadgame' (the saved file)
  for (i = 0; i < Object.keys(loadgame).length; i++) {
    if (loadgame[Object.keys(loadgame)[i]] != "undefined") {
      if (typeof loadgame[Object.keys(loadgame)[i]] == "string") {
        game[Object.keys(loadgame)[i]] = loadgame[Object.keys(loadgame)[i]]
      } else {
        game[Object.keys(game)[i]] = loadgame[Object.keys(loadgame)[i]]
      }
    }
    //else  Object.value(game)[i] = Object.value(game)[i]
  }
}
Number.prototype.formateNumber = function (max = 1e5) {
  if (this.valueOf() > max) 
 

  {
   formatestring = this.valueOf().toExponential(1).replace("+", "")
  }
  else formatestring = this.valueOf() >> 0
  return formatestring
}
//else game[Object.keys(game)[i]] = game[i]

//elements
Counter = document.getElementById("Counter")
gt1 = document.getElementById("gt1")
gt2 = document.getElementById("gt2")
gt3 = document.getElementById("gt3")

key1number = document.getElementById("key1number")
mainmenu = document.getElementById("mainmenu")
body = document.getElementById("body")
keytrialdiv = document.getElementById("keytrialdiv")
upgradesdiv = document.getElementById("upgradesdiv")
craftsdiv = document.getElementById("craftsdiv")
trialtip = document.getElementById("trialtip")
cratesdiv = document.getElementById("cratesdiv")
loot1 = document.getElementById("loot1")
loot2 = document.getElementById("loot2")
loot3 = document.getElementById("loot3")
loot4 = document.getElementById("loot4")
upgrade3 = document.getElementById("upgrade3effect")
Ca = document.getElementById("Tocraft")
Oa = document.getElementById("ToOpen")
placeholder = document.getElementById("placeholder")
//resources
Clickscraft = document.getElementById("clickscraft")
GKcraft = document.getElementById("GKcraft")
Scrap = document.getElementById("scrap")
Clickshard = document.getElementById("clickshard")
Generatorshard = document.getElementById("generatorshard")
Basiccore = document.getElementById("basiccore")
Atom = document.getElementById("atom")
Basedpotato = document.getElementById("basedpotato")
Scrapsorter = document.getElementById("scrapsorter")
Boostercore = document.getElementById("boostercore")
Booster = document.getElementById("booster")
Rawcopper = document.getElementById("rawcopper")
Rawsilicon = document.getElementById("rawsilicon")
Rawplastic = document.getElementById("rawplastic")
Rat = document.getElementById("rat")
Atomizedcopper = document.getElementById("atomizedcopper")
Riscopper = document.getElementById("riscopper")
Silicon = document.getElementById("silicon")
LESboule = document.getElementById("lesboule")
LESwafer = document.getElementById("leswafer")
Advancedcore = document.getElementById("advancedcore")
Woodorchard = document.getElementById("woodorchard")
Bark = document.getElementById("bark")
Plank = document.getElementById("plank")
Log = document.getElementById("log")
Coppercable =  document.getElementById("coppercable")
Treesap = document.getElementById("treesap")
T1board = document.getElementById("t1board")

//
function click1() {
  game.clicks += game.clickpower

  Counter.innerText = game.clicks.formateNumber() //export game.clicks on counter

  if (game.legendaryclickshard + 2 > 50) {
    game.clickshard += (game.legendaryclickshard + 2) / 100
  } else {
    dropclickshard = Math.floor(Math.random() * 100)
  }
  if (dropclickshard < game.legendaryclickshard + 3) {
    game.clickshard++
  }

  Clickshard.innerText = "Clickshards : " + game.clickshard.formateNumber(1e4)
}

function onTick() {
  game.clicks =
    game.clicks + game.gen1 * (1 + game.clickpower / 30) * game.genmult //game.clicks per second
  game.gen1 += game.gen2 * game.genmult
  game.gen2 += game.gen3 * game.genmult * (game.dragonlore+1)
  Counter.innerText = game.clicks.formateNumber()
  key1number.innerText = game.GK.formateNumber(1e4) //export game.GK

  game.generatorshard += game.gen1 * 0.1 * (1 + game.clickpower / 1000)
  Generatorshard.innerText =
    "Generator shards : " + game.generatorshard.formateNumber()

  gt1.innerText = game.gen1.formateNumber()
  gt2.innerText = game.gen2.formateNumber()
  gt3.innerText = game.gen3.formateNumber()

  game.GKM = (1 + game.GKMa) * +game.upgrade.upgrade3effect

  if (game.gen2 > 0) {
    game.atom +=
      (Math.log10(game.gen1) /
        Math.log10(game.upgrade.upgrade5effect) /
        game.upgrade.upgrade5effect) *
      game.upgrade.upgrade6effect
    Atom.innerText = "Atoms : " + game.atom.formateNumber()
  }
  document.getElementById("ClickPower").innerText =
    game.clickpower.formateNumber()
}

let timertick = setInterval(onTick, 1000)

function resourceupdate() {
  Clickscraft.innerText = "Clicks : " + game.clicks.formateNumber()
  GKcraft.innerText = "Gold keys : " + game.GK.formateNumber()
  Scrap.innerText = "Scrap : " + game.scrap.formateNumber() //export game.scrap
  Clickshard.innerText = "Click shards : " + game.clickshard.formateNumber() //export clickshards
  Basiccore.innerText = game.basiccore.formateNumber()
  Generatorshard.innerText =
    "Generator shards : " + game.generatorshard.formateNumber()
  Atom.innerText = "Atoms : " + game.atom.formateNumber()
  Basedpotato.innerText = "Based potatoes : " + game.basedpotato.formateNumber()
  Scrapsorter.innerText = game.scrapsorter.formateNumber()
  Rawcopper.innerText = "Raw copper : " + game.rawcopper.formateNumber()
  Rawsilicon.innerText = "Raw silicon : " + game.rawsilicon.formateNumber()
  Rawplastic.innerText = "Raw plastic : " + game.rawplastic.formateNumber()
  Rat.innerText = "Rats : " + game.rat.formateNumber()
  Atomizedcopper.innerText = game.atomizedcopper.formateNumber()
  Riscopper.innerText = game.riscopper.formateNumber()
  Boostercore.innerText = "Booster cores : " + game.boostercore.formateNumber()
  Silicon.innerText = game.silicon.formateNumber()
  LESboule.innerText = game.lesboule.formateNumber()
  LESwafer.innerText = game.leswafer.formateNumber()
  Advancedcore.innerText = game.advancedcore.formateNumber()
  Woodorchard.innerText = game.woodorchard.formateNumber()
  Bark.innerText ="Wood barks: "+ game.bark.formateNumber()
  Log.innerText ="Wood logs: " +  game.log.formateNumber()
  Plank.innerText ="Wood planks: " + game.plank.formateNumber()
  Coppercable.innerText = game.coppercable.formateNumber()
  Treesap.innerText = game.treesap.formateNumber()
  T1board.innerText = game.t1board.formateNumber()
  OverlayUpdate()
}
function CloseMenu() {
  mainmenu.style.display = "none"
}
function Close() {
  mainmenu.style.display = "block"
  body.style.backgroundImage = "url(MAinBackground.jpg)"
  keytrialdiv.style.display = "none"
  upgradesdiv.style.display = "none"
  cratesdiv.style.display = "none"
  craftsdiv.style.display = "none"
}
function keytrial() {
  if (game.decrnumber <= 1 && game.clicks >= 2000) {
    game.GK += 1 * game.GKM * game.trialmultiplier
    game.clicks -= 2000
    key1number.innerText = game.GK.formateNumber(1e4)
  } else {
    numberforstop = 0
    if (game.clicks >= 2000) {
      game.clicks -= 2000

      CloseMenu()
      keytrialdiv.style.display = "block"
      body.style.backgroundImage = "url(GKBackground.jpg)"

      let RandomNumber =
        Math.floor(Math.random() * game.decrnumber) * 100 +
        Math.floor(Math.random() * game.decrnumber) * 10 +
        Math.floor(Math.random() * game.decrnumber)
      if (RandomNumber < 100) {
        RandomNumber = RandomNumber + (game.decrnumber - 1) * 100
      }

      document.getElementById("numbercode").innerText = RandomNumber

      function changenumber2() {
        if (numberforstop >= 1) {
          clearInterval(timer2)
        } else
          document.getElementById("num2").innerText = Math.floor(
            Math.random() * game.decrnumber
          )
      }
      let timer2 = setInterval(changenumber2, 900)
      function changenumber3() {
        if (numberforstop >= 2) {
          clearInterval(timer3)
        } else
          document.getElementById("num3").innerText = Math.floor(
            Math.random() * game.decrnumber
          )
      }
      let timer3 = setInterval(changenumber3, 900)
      function changenumber4() {
        if (numberforstop >= 3) {
          let guessednumber = Number(
            document.getElementById("num2").innerText +
              document.getElementById("num3").innerText +
              document.getElementById("num4").innerText
          )

          if (guessednumber == RandomNumber) {
            document.getElementById("trialtip").innerText = "Correct!"
            document.getElementById("trialtip").style.color = "green"
            game.GK += 1 * game.GKM * game.trialmultiplier
          } else {
            trialtip.innerText = "Wrong"
            trialtip.style.color = "red"
          }
          clearInterval(timer4)
          setTimeout(function () {
            mainmenu.style.display = "block"
            keytrialdiv.style.display = "none"
            body.style.backgroundImage = "url(MAinBackground.jpg)"
            trialtip.innerHTML = "Use W to stop number <br> Or click"
            trialtip.style.color = "black"
          }, 1000)
        } else
          document.getElementById("num4").innerText = Math.floor(
            Math.random() * game.decrnumber
          )
      }
      let timer4 = setInterval(changenumber4, 900)
    }
  }
}

function Buygen1() {
  if (game.GK >= 1) {
    game.GK = game.GK - 1
    game.gen1++
    gt1.innerText = game.gen1.formateNumber()
  }
}

function keydown() {
  if (event.code == "KeyW") {
    numberforstop++
  }
}

function setcratevalue() {//made by sirtage
  if (+Oa.value > 999) {
    Oa.value = 999
  } else if (+Oa.value <= 1) Oa.value = 1
 
  return Oa.value
  
}
function OpenCrate() {
  CloseMenu()
  cratesdiv.style.display = "block"
  body.style.backgroundImage = "url(CratesBackground.png)"
  OverlayUpdate()
}
function history(loot) {

  loot1.style.color = loot2.style.color
  loot2.style.color = loot3.style.color
  if (placeholder.style.color == "black") loot3.style.color = "black"
  else loot3.style.color = "red"
  placeholder.style.color = loot4.style.color

  loot1.innerText = loot2.innerText
  loot2.innerText = loot3.innerText
  loot3.innerText = loot4.innerText
  loot4.innerText = loot
}


function OpenCrate1() {
  toopen = +setcratevalue()
  if (game.GK >= 10 * toopen) {
    drop = Math.floor(Math.random() * 100)
    loot4.style.color = "black"
    game.GK -= 10 * toopen
    if (drop < 10) {
      game.gen1 += 30 * toopen
      loot = "+" + (30 * toopen).formateNumber() + " gen 1"
    } else if (drop > 9 && drop < 20) {
      game.GK += game.GKM * 3 * toopen
      loot = "+ " + (3 * game.GKM * toopen).formateNumber() + " Gold keys"
    } else if (drop > 19 && drop < 25) {
      let scrapdropped = Math.floor(Math.random() * 25) * toopen
      game.scrap += scrapdropped
      loot = "+ " + scrapdropped.formateNumber() + " Scrap"
    } else if (drop == 25) {
      let dropGKM = (Math.floor(Math.random() * 3) + 1) * toopen
      game.GKMa += dropGKM
      loot = "+ " + dropGKM.formateNumber() + " Gold key modifier"
    } else if (drop > 25 && drop < 35) {
      dropclickpower = (Math.floor(Math.random() * 6) + 1) * toopen
      game.clickpower += dropclickpower
      loot = "+ " + dropclickpower.formateNumber() + " clickpower"
    } else if (drop > 34 && drop < 38) {
      game.upgrade.upgrade3costreducer += 10 * toopen
      loot = "Upgrade 3 cost reduced!(half WIP)"
    } else if (drop > 37 && drop < 43) {
      let dropgenM = Math.floor(Math.random() * 10) * toopen
      game.genmult += dropgenM
      loot = "+ " + dropgenM + " Generator multiplier"
    } else if (drop > 42 && drop < 45) {
      game.legendaryclickshard += toopen
      loot = "legendary clickshard!"
    } else if (drop == 45) {
      let dropdragonlore = Math.floor(Math.random() * 10)
      if (dropdragonlore == 1) {
        game.dragonlore += Math.floor(Math.sqrt(toopen))
        loot = " + " + Math.floor(Math.sqrt(toopen)) + " Dragonlore"
        loot4.style.color = "red"
      }
    } else loot = "nothing"

    history(loot)

    OverlayUpdate()
  }
}
function OpenCrate2() {
  toopen = +setcratevalue()
  if (game.atom >= 5 * toopen) {
    drop = Math.floor(Math.random() * 100)
    game.atom -= 5 * toopen
    if (drop < 10) {
      let dropBcores = Math.floor(Math.random() * 300) * toopen
      game.basiccore += dropBcores
      loot = "+ " + dropBcores.formateNumber() + " Basic cores"
    } else if (drop < 15 && drop > 10) {
      let dropLshard = (Math.floor(Math.random() * 50) + 50) * toopen
      game.legendaryclickshard += dropLshard
      loot = "+ " + dropLshard.formateNumber() + " Legendary shards"
    } else if (drop > 14 && drop < 25) {
      let dropgenM = (Math.floor(Math.random() * 1000) + 1000) * toopen
      game.genmult += dropgenM
      loot = "+ " + dropgenM.formateNumber() + " Generator multiplier"
    } else if (drop > 24 && drop < 33) {
      let dropBpotato = (Math.floor(Math.random() * 3) + 10) * toopen * game.upgrade.upgrade7effect
      game.basedpotato += dropBpotato
      loot = "+ " + dropBpotato.formateNumber() + " Based potatoes"
    } else if (drop > 32 && drop < 34) {
      game.boostercore += toopen
      loot = " + " + toopen + " booster core"
    } else loot = "nothing"
    history(loot)
    OverlayUpdate()
    loot4.style.color = "black"
  }
}

function OpenScrapSorting() {
  CloseMachine()
  document.getElementById("crafts").style.display = "none"

  document.getElementById("ScrapSorting").style.display = "block"
}
function OpenWoodorchard() {
  CloseMachine()
  Currentlymakingwood()
  document.getElementById("crafts").style.display = "none"
  document.getElementById("WoodOrcharddiv").style.display = "block"
}

function CloseMachine() {
  document.getElementById("ScrapSorting").style.display = "none"
  document.getElementById("crafts").style.display = "block"
  document.getElementById("WoodOrcharddiv").style.display = "none"
}
function TurnScrap() {
  if (game.isScrapOn == 1) {
    document.getElementById("TurnScrap").style.backgroundImage = "url(off.jpg)"
    game.isScrapOn = 0
    clearInterval(scraptimer)
    document.getElementById("TurnScrap").innerHTML = "Turn  <br> on"
  } else {
    document.getElementById("TurnScrap").style.backgroundImage = "url(on.jpg)"
    game.isScrapOn = 1
    scraptimer = setInterval(sortscrap, 4000)
    document.getElementById("TurnScrap").innerHTML = "Turn  <br> off"
  }
}
function TurnOrchard() {
  if (game.iswoodorchardon == 1) {
    document.getElementById("TurnWoodorchard").style.backgroundImage =
      "url(off.jpg)"
    game.iswoodorchardon = 0
    clearInterval(scraptimer)
    document.getElementById("TurnWoodorchard").innerHTML = "Turn  <br> on"
  } else {
    document.getElementById("TurnWoodorchard").style.backgroundImage =
      "url(on.jpg)"
    game.iswoodorchardon = 1
    woodtimer = setInterval(cutwood, 1000)
    document.getElementById("TurnWoodorchard").innerHTML = "Turn  <br> off"
  }
}

function sortscrap() {
  if (game.scrap >= game.scrapsorter) {
    game.scrap -= game.scrapsorter
    drop = Math.floor(Math.random() * 100)
    if (drop < 10) {
      dropScrapsort = (Math.floor(Math.random() * 2) + 1) * game.scrapsorter
      game.rawcopper += dropScrapsort
    }
    if (drop > 9 && drop < 20) {
      dropScrapsort = (Math.floor(Math.random() * 3) + 1) * game.scrapsorter
      game.rawsilicon += dropScrapsort
    }
    if (drop > 19 && drop < 30) {
      dropScrapsort = (Math.floor(Math.random() * 10) + 1) * game.scrapsorter
      game.rawplastic += dropScrapsort
    }
    if (drop > 29 && drop < 36) {
      dropScrapsort = (Math.floor(Math.random() * 2) + 1) * game.scrapsorter
      game.rat += dropScrapsort
    }
    resourceupdate()
  } else TurnScrap()
}
function Currentlymakingwood() {
  let currwood = document.getElementById("Currproducingwood")
  if (game.makeBark == 1) currwood.innerHTML = "Currently making: <br> Bark"
  else if (game.makePlank == 1)
    currwood.innerHTML = "Currently making: <br> Plank"
  else currwood.innerHTML = "Currently making: <br> Log"
}
function cutwood() {
  if (game.makeBark >0 ) {
    game.bark += 4 * game.woodorchard
    Bark.innerText ="Wood barks: "+ game.bark.formateNumber()
  }
    if (game.makeLog > 0) {
      game.log += 1 * game.woodorchard
      Log.innerText = "Wood logs: " +game.log.formateNumber()
    }
    if (game.makePlank > 0) {
      game.plank += 2 * game.woodorchard
      Plank.innerText = "Wood planks : "  + game.plank.formateNumber()
    }
  
}

//OpenCraft()
//Close()
