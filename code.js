let numberforstop = 0 //numeer used to stop key trial
let decrnumber = 10 // how many numbers
let clickpower = 1 // how many button yield per click
let clicks = 10000 //clicks
let GK = 0
let GKM = 1 //GK general modifier
let GKMa = 0 // additional modifier
let loot //loot from last crate
let drop //drop chance
let dropclickpower
let dropclickshard
let upgrade3costreducer = 1
let genmult = 1
let upgrades1 = 0
//resource variable
let scrap = 0
let clickshard = 0
let generatorshard = 0
let basiccore = 0
let atom = 0

//elements
Counter = document.getElementById("Counter")
gt1 = document.getElementById("gt1")
gt2 = document.getElementById("gt2")
key1numbe = document.getElementById("key1number")
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
//resources
Scrap = document.getElementById("scrap")
Clickshard = document.getElementById("clickshard")
Generatorshard = document.getElementById("generatorshard")
Basiccore = document.getElementById("basiccore")
Atom = document.getElementById("atom")

//Speeds
let CPS = 0
//generators
let gen1 = 0
let gen2 = 0
//
function click1() {
  clicks += clickpower
  Counter.innerText = +Counter.innerText + clickpower
  dropclickshard = Math.floor(Math.random() * 100)
  if (dropclickshard < 3) {
    clickshard++
  }
  Clickshard.innerText = "Clickshards : " + clickshard
}

function onTick() {
  clicks = clicks + gen1 * (1 + clickpower / 30) * genmult + CPS //clicks per second
  gen1 += gen2 * genmult

  Counter.innerText = clicks >> 0 //export clicks on counter
  key1number.innerText = GK //export GK
  generatorshard += gen1 * 0.1 * (1 + clickpower / 1000)
  Generatorshard.innerText = "Generator shards : " + (generatorshard >> 0)
  gt1.innerText = gen1
  gt2.innerText = gen2
  GKM = (1 + GKMa) * +upgrade3.innerText
  if (gen1 > 10000) {
    atom += Math.log10(gen1) / 10 - 0.4
    Atom.innerText = "Atoms : " + (atom>>0)
  }
}
let timertick = setInterval(onTick, 1000)

function resourceupdate() {
  Scrap.innerText = "Scrap : " + scrap //export scrap
  Clickshard.innerText = "Click shards : " + clickshard //export clickshards
  Basiccore.innerText = basiccore
  Generatorshard.innerText = "Generator shards : " + (generatorshard >> 0)
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
  numberforstop = 0
  if (clicks >= 150) {
    clicks -= 150

    CloseMenu()
    keytrialdiv.style.display = "block"
    body.style.backgroundImage = "url(GKBackground.jpg)"

    let RandomNumber =
      Math.floor(Math.random() * decrnumber) * 1000 +
      Math.floor(Math.random() * decrnumber) * 100 +
      Math.floor(Math.random() * decrnumber) * 10 +
      Math.floor(Math.random() * decrnumber)
    if (RandomNumber < 1000) {
      RandomNumber = RandomNumber + (decrnumber - 1) * 1000
    }

    document.getElementById("numbercode").innerText = RandomNumber
    function changenumber() {
      if (numberforstop >= 1) {
        clearInterval(timer1)
      } else
        document.getElementById("num1").innerText = Math.floor(
          Math.random() * decrnumber
        )
    }
    let timer1 = setInterval(changenumber, 900)

    function changenumber2() {
      if (numberforstop >= 2) {
        clearInterval(timer2)
      } else
        document.getElementById("num2").innerText = Math.floor(
          Math.random() * decrnumber
        )
    }
    let timer2 = setInterval(changenumber2, 900)
    function changenumber3() {
      if (numberforstop >= 3) {
        clearInterval(timer3)
      } else
        document.getElementById("num3").innerText = Math.floor(
          Math.random() * decrnumber
        )
    }
    let timer3 = setInterval(changenumber3, 900)
    function changenumber4() {
      if (numberforstop >= 4) {
        let guessednumber = Number(
          document.getElementById("num1").innerText +
            document.getElementById("num2").innerText +
            document.getElementById("num3").innerText +
            document.getElementById("num4").innerText
        )

        if (guessednumber == RandomNumber) {
          document.getElementById("trialtip").innerText = "Correct!"
          document.getElementById("trialtip").style.color = "green"
          GK += 1 * GKM
        } else {
          trialtip.innerText = "Wrong"
          trialtip.style.color = "red"
        }
        clearInterval(timer4)
        setTimeout(function () {
          mainmenu.style.display = "block"
          keytrialdiv.style.display = "none"
          body.style.backgroundImage = "url(MAinBackground.jpg)"
          trialtip.innerText = "Use W to stop number <br> Or click"
          trialtip.style.color = "black"
        }, 1000)
      } else
        document.getElementById("num4").innerText = Math.floor(
          Math.random() * decrnumber
        )
    }
    let timer4 = setInterval(changenumber4, 900)
  }
}

function BuyGen1() {
  if (GK >= 1) {
    GK = GK - 1
    gen1++
    gt1.innerText = gen1
  }
}

function keydown() {
  if (event.code == "KeyW") {
    numberforstop++
  }
}
function OpenUpgrade() {
  CloseMenu()
  upgradesdiv.style.display = "block"
  body.style.backgroundImage = "url(UpgradesBackground.jpg)"
}
function BuyUpgrade1() {
  let cost = Math.floor(Math.pow(1.5,upgrades1))
  let effect = Number(document.getElementById("upgrade1effect").innerText)
  if (clicks >= cost) {
    clicks = clicks - cost
    clickpower += 1
   upgrades1++
    document.getElementById("upgrade1effect").innerText = effect + 1
    document.getElementById("upgrade1cost").innerText = Math.floor(Math.pow(1.5,upgrades1))
    document.getElementById("ClickPower").innerText = clickpower
  }
}
function BuyUpgrade2() {
  let cost = Number(document.getElementById("upgrade2cost").innerText)
  let effect = Number(document.getElementById("upgrade2effect").innerText)
  if (GK >= cost) {
    GK -= cost
    decrnumber--
    document.getElementById("upgrade2cost").innerText = cost + 2
    document.getElementById("upgrade2effect").innerText = effect + 1
  }
  if (decrnumber == 1) {
    document.getElementById("Upgrade2").disabled = true
    document.getElementById("Upgrade2").innerText = "MAXED!"
  }
}
function BuyUpgrade3() {
  let cost = Number(document.getElementById("upgrade3cost").innerText)
  let effect = Number(document.getElementById("upgrade3effect").innerText)
  let x = 1.3
  if (GK >= cost) {
    GK -= cost
    if (upgrade3costreducer > 2000) {
      x = log10(upgrade3costreducer) / 10 + 1
    }
    document.getElementById("upgrade3cost").innerText = Math.floor(
      cost * 4 * Math.floor(Math.log10(cost)) -
        Math.floor(Math.log10(cost)) *
          (Math.log(upgrade3costreducer) / Math.log(x))
    )
    document.getElementById("upgrade3effect").innerText = effect * 3
  }
}
function OpenCrate() {
  CloseMenu()
  cratesdiv.style.display = "block"
  body.style.backgroundImage = "url(CratesBackground.png)"
}
function history(loot) {
  loot1.innerText = loot2.innerText
  loot2.innerText = loot3.innerText
  loot3.innerText = loot4.innerText
  loot4.innerText = loot
}
function OpenCrate1() {
  if (GK >= 10) {
    drop = Math.floor(Math.random() * 100)

    GK -= 10
    if (drop < 10) {
      clicks = clicks * 1.2
      loot = "+ 20% clicks"
    } else if (drop > 9 && drop < 20) {
      GK += GKM * 3
      loot = "+ " + 4 * GKM + " Gold keys"
    } else if (drop > 19 && drop < 25) {
      let scrapdropped = Math.floor(Math.random() * 25)
      scrap += scrapdropped
      loot = "+ " + scrapdropped + " Scrap"
    } else if (drop == 25) {
      let dropGKM = Math.floor(Math.random() * 3) + 1
      GKMa += dropGKM
      loot = "+ " + dropGKM + " Gold key modifier"
    } else if (drop > 25 && drop < 35) {
      dropclickpower = Math.floor(Math.random() * 6) + 1
      clickpower += dropclickpower
      loot = "+ " + dropclickpower + " clickpower"
      document.getElementById("ClickPower").innerText = clickpower
    } else if (drop > 34 && drop < 38) {
      upgrade3costreducer = +10
      loot = "Upgrade 3 cost reduced!"
    }else if(drop >37 && drop < 43) 
    {
        let dropgenM = Math.floor(Math.random() * 10)
        genmult += dropgenM
        loot = "+ " + dropgenM + " Generator multiplier"
    }else loot = "nothing"
    
    history(loot)
  }
}
function OpenCrate2(){
if(atom >= 5)
{
drop = Math.floor(Math.random() * 100)
atom -=5
if(drop < 10)
{
let dropBcores = Math.floor(Math.random()*300)
basiccore += dropBcores
loot = "+ " + dropBcores + " Basic cores"
}
else
loot = "nothing"
history(loot)
}
}
function OpenCraft() {
  CloseMenu()
  craftsdiv.style.display = "block"
  body.style.backgroundImage = "url(CraftsBackground.jpg)"
  resourceupdate()
}
function Craft1() {
  let costscrap = 100
  let costCshards = 50
  let costclicks = 10000
  if (costscrap <= scrap && costCshards <= clickshard && costclicks <= clicks) {
    basiccore++
    scrap -= costscrap
    clickshard -= costCshards
    clicks -= costclicks
    resourceupdate()
  }
}
function Craft2() {
  let costGK = 1000
  let costGshards = 1000
  let costBcores = 20
  if (
    costGK <= GK &&
    costGshards <= generatorshard &&
    costBcores <= basiccore
  ) {
    gen2++
    GK -= costGK
    generatorshard -= costGshards
    basiccore -= costBcores
    resourceupdate()
  }
}







OpenCraft()
Close()