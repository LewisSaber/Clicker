function OpenUpgrade() {
    CloseMenu()
    upgradesdiv.style.display = "block"
    body.style.backgroundImage = "url(UpgradesBackground.jpg)"
  }
  function BuyUpgrade1() {
    let cost = Math.floor(Math.pow(1.5, game.upgrades1))
    let effect = Number(document.getElementById("upgrade1effect").innerText)
    if (game.clicks >= cost) {
      game.clicks = game.clicks - cost
      game.clickpower += effect + 1 * (effect/7 + 1) - effect
      game.upgrades1++
      cost = Math.floor(Math.pow(1.5, game.upgrades1))
      document.getElementById("upgrade1effect").innerText = (effect + 1 * (effect/7 + 1)).formateNumber()
      document.getElementById("upgrade1cost").innerText =cost.formateNumber()
      
      document.getElementById("ClickPower").innerText = game.clickpower
      game.upgrade1cost = cost
      game.upgrade1effect = effect + 1 * (effect/7 + 1)
    }
  }
  function BuyUpgrade2() {
    let cost = Number(document.getElementById("upgrade2cost").innerText)
    let effect = Number(document.getElementById("upgrade2effect").innerText)
    if (game.GK >= cost) {
      game.GK -= cost
      game.decrnumber--
  
      document.getElementById("upgrade2cost").innerText = (cost + 1).formateNumber()
      document.getElementById("upgrade2effect").innerText = effect + 1
      game.upgrade2cost = (cost + 1)
      game.upgrade2effect = effect + 1
    }
    if (game.decrnumber == 1) {
      document.getElementById("Upgrade2").disabled = true
      document.getElementById("Upgrade2").innerText = "MAXED!"
    }
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
      cost= (Math.floor(
        cost * 4 * Math.floor(Math.log10(cost)) -
          Math.floor(Math.log10(cost)) *
            (Math.log(game.upgrade3costreducer) / Math.log(x))
      ))
      document.getElementById("upgrade3cost").innerText = cost.formateNumber()
      document.getElementById("upgrade3effect").innerText = (effect * 3).formateNumber()
      game.upgrade3cost = cost
      game.upgrade3effect = effect * 3
    }
  }
  function BuyUpgrade4() {
    let cost =  game.upgrade4cost
    let effect = game.upgrade4effect
    if (game.clicks >= cost) {
      game.clicks -= cost
      game.trialmultiplier++
      document.getElementById("upgrade4cost").innerText = (cost * 3).formateNumber()
      document.getElementById("upgrade4effect").innerText = effect + 1
      game.upgrade4cost = (cost * 3)
      game.upgrade4effect = effect + 1
    }
  }
  function updateupgrades() {
    document.getElementById("ClickPower").innerText = game.clickpower.formateNumber() //updates clickpower showcase
    document.getElementById("upgrade1cost").innerText = game.upgrade1cost.formateNumber()
    document.getElementById("upgrade1effect").innerText = game.upgrade1effect.formateNumber()
    document.getElementById("upgrade2cost").innerText = game.upgrade2cost.formateNumber()
    document.getElementById("upgrade3cost").innerText = game.upgrade3cost.formateNumber()
    document.getElementById("upgrade2effect").innerText = game.upgrade2effect.formateNumber()
    document.getElementById("upgrade3effect").innerText = game.upgrade3effect.formateNumber()
    document.getElementById("upgrade4cost").innerText = game.upgrade4cost.formateNumber()
    document.getElementById("upgrade4effect").innerText = game.upgrade4effect.formateNumber()
    if (game.isScrapOn == 1) {
      game.isScrapOn = 0
      TurnScrap()
    }
  
    if (game.decrnumber == 1) {
      document.getElementById("Upgrade2").disabled = true
      document.getElementById("Upgrade2").innerText = "MAXED!"
    }
  }
  updateupgrades()