function OpenUpgrade() {
  CloseMenu()
  upgradesdiv.style.display = "block"
  body.style.backgroundImage = "url(UpgradesBackground.jpg)"
  OverlayUpdate()
}
function BuyUpgrade1() {
  let cost = Math.floor(Math.pow(1.5, game.upgrades1))
  let effect = Number(document.getElementById("upgrade1effect").innerText)
  if (game.clicks >= cost) {
    game.clicks = game.clicks - cost
    game.clickpower += effect + 1 * (effect / 7 + 1) - effect
    game.upgrades1++
    cost = Math.floor(Math.pow(1.5, game.upgrades1))
    document.getElementById("upgrade1effect").innerText = (
      effect +
      1 * (effect / 7 + 1)
    ).formateNumber()
  
    game.upgrade.upgrade1cost = cost
    game.upgrade.upgrade1effect = effect + 1 * (effect / 7 + 1)
  }
  updateupgrades()
  OverlayUpdate()
}
function BuyUpgrade2() {
  let cost = Number(document.getElementById("upgrade2cost").innerText)
  let effect = Number(document.getElementById("upgrade2effect").innerText)
  if (game.GK >= cost) {
    game.GK -= cost
    game.decrnumber--

    document.getElementById("upgrade2cost").innerText = cost
    document.getElementById("upgrade2effect").innerText = effect + 1
    game.upgrade.upgrade2cost = cost
    game.upgrade.upgrade2effect = effect + 1
  }
  if (game.decrnumber == 1) {
    updateupgrades()
  }
  OverlayUpdate()
}
function BuyUpgrade3() {
  let cost = Number(document.getElementById("upgrade3cost").innerText)

  let effect = Number(document.getElementById("upgrade3effect").innerText)
  let x = 1.3
  if (game.GK >= cost) {
    game.GK -= cost
    if (game.upgrade3costreducer > 2000) {
      x = Math.log10(game.upgrade3costreducer) / 10 + 1
    }
    cost = Math.floor(
      cost * 4 * Math.floor(Math.log10(cost)) -
        Math.floor(Math.log10(cost)) *
          (Math.log(game.upgrade3costreducer) / Math.log(x))
    )
    
    game.upgrade.upgrade3cost = cost
    game.upgrade.upgrade3effect = effect * 3
  }
  updateupgrades()
  OverlayUpdate()
}
function BuyUpgrade4() {
  let cost = game.upgrade.upgrade4cost
  let effect = game.upgrade.upgrade4effect
  if (game.clicks >= cost) {
    game.clicks -= cost
    game.trialmultiplier++
  
    game.upgrade.upgrade4cost = cost * 3
    game.upgrade.upgrade4effect = effect + 1

  }
  updateupgrades()
  OverlayUpdate()
}
function BuyUpgrade5() {
  if (game.upgrade.upgrade5effect <= 0.1) {
    document.getElementById("Upgrade5").disabled = true
    document.getElementById("Upgrade5").innerText = "MAXED!"
  } else {
    if (game.riscopper >= game.upgrade.upgrade5cost) {
      game.riscopper -= game.upgrade.upgrade5cost
      if (game.upgrade.upgrade5effect == 10) {
        game.upgrade.upgrade5effect = 5
      } else if (game.upgrade.upgrade5effect <= 2) game.upgrade.upgrade5effect -= 0.1
      else game.upgrade.upgrade5effect -= 1

      game.upgrade.upgrade5cost *= 100
      updateupgrades()
      OverlayUpdate()
    }
  }
}
function BuyUpgrade6() {
  if (game.dragonlore >= game.upgrade.upgrade6cost) {
    game.dragonlore -= game.upgrade.upgrade6cost

    game.upgrade.upgrade6cost *= 30
    game.upgrade.upgrade6effect *=2
    updateupgrades()
    OverlayUpdate()
  }
}
function BuyUpgrade7() {
  if (game. advancedcore >= game.upgrade.upgrade7cost) {
    game. advancedcore -= game.upgrade.upgrade7cost
    
    game.upgrade.upgrade7cost *= 5
    game.upgrade.upgrade7effect *=2
    updateupgrades()
    OverlayUpdate()
  }
}
function BuyUpgrade8() {
if(  game.upgrade.upgrade8effect >10 ||  game.upgrade.upgrade8effect == 0){
  if (game.autoclickerfragments >= game.upgrade.upgrade8cost) {
    game.autoclickerfragments -= game.upgrade.upgrade8cost
    
    game.upgrade.upgrade8cost *= 2
    if(game.upgrade.upgrade8effect == 0)
    {
    game.upgrade.upgrade8effect = 1000
    
    }
    else
    if(game.upgrade.upgrade8effect <=100)
    game.upgrade.upgrade8effect -=10
    else
   
    game.upgrade.upgrade8effect -=100
    setInterval(click1,game.upgrade.upgrade8effect)
    updateupgrades()
    OverlayUpdate()
  }
}
else document.getElementById("Upgrade8").innerText = "maxed"
}


let upgradeelements = document.querySelectorAll(".cost")

function updateupgrades() {
 document.getElementById("ClickPower").innerText =
    game.clickpower.formateNumber() //updates clickpower showcase
 /*  document.getElementById("upgrade1cost").innerText =
    game.upgrade.upgrade1cost.formateNumber()
  document.getElementById("upgrade1effect").innerText =
    game.upgrade.upgrade1effect.formateNumber()
  document.getElementById("upgrade2cost").innerText =
    game.upgrade.upgrade2cost.formateNumber()
  document.getElementById("upgrade3cost").innerText =
    game.upgrade.upgrade3cost.formateNumber()
  document.getElementById("upgrade2effect").innerText =
    game.upgrade.upgrade2effect.formateNumber()
  document.getElementById("upgrade3effect").innerText =
    game.upgrade.upgrade3effect.formateNumber()
  document.getElementById("upgrade4cost").innerText =
    game.upgrade.upgrade4cost.formateNumber()
  document.getElementById("upgrade4effect").innerText =
    game.upgrade.upgrade4effect.formateNumber()
  document.getElementById("upgrade5cost").innerText =
    game.upgrade.upgrade5cost.formateNumber()
    document.getElementById("upgrade6cost").innerText =
    game.upgrade.upgrade6cost.formateNumber()
  document.getElementById("upgrade6effect").innerText =
    game.upgrade.upgrade6effect.formateNumber()*/
  for (let i = 0; i < upgradeelements.length; i++) {
    upgradeelements[i].innerText = Object.values(game.upgrade)[i].formateNumber()
    
  }

  if (game.upgrade.upgrade5effect <= 0.1) {
    document.getElementById("Upgrade5").disabled = true
    document.getElementById("Upgrade5").innerText = "MAXED!"
  }
  if (game.isScrapOn == 1) {
    game.isScrapOn = 0
    TurnScrap()
  }
  if (game.iswoodorchardon == 1) {
    game.iswoodorchardon = 0
    TurnOrchard()
  }

  if (game.decrnumber == 1) {
    document.getElementById("Upgrade2").disabled = true
    document.getElementById("Upgrade2").innerText = "MAXED!"
  }
}
updateupgrades()
