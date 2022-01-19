let numberforstop = 0 //numeer used to stop key trial
let decrnumber = 10 // how many numbers
let clickpower = 1 // how many button yield per click
let clicks = 0 //clicks
let GK = 0
let GKM = 1 //GK general modifier
let GKMa = 0 // additional modifier
let loot //loot from last crate
let drop //drop chance

let upgrade3costreducer = 1
let genmult = 1
let upgrades1 = 0
let legendaryclickshard = 0 
let isScrapOn = 0
let scraptimer
let tocraft = 1
//resource variable
let scrap = 0
let clickshard = 0
let generatorshard = 0
let basiccore = 0
let atom = 0
let basedpotato = 0
let scrapsorter = 0
let booster = 0
let boostercore = 0
let rawcopper = 0
let rawsilicon = 0
let rawplastic = 0
let rat = 0
let atomizedcopper = 0
let riscopper = 0

//drop variable
let dropScrapsort
let dropclickpower
let dropclickshard






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
Ca = document.getElementById("Tocraft")
//resources
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


//Speeds
let CPS = 0
//generators
let gen1 = 0
let gen2 = 0
//
function click1() {
  clicks += clickpower
  Counter.innerText = +Counter.innerText + clickpower
  if(legendaryclickshard + 2 > 50)
  {
    clickshard += (legendaryclickshard+2)/100
  }
  else{
  dropclickshard = Math.floor(Math.random() * 100)

  if (dropclickshard < legendaryclickshard+3) {
    clickshard++
  }
}
  Clickshard.innerText = "Clickshards : " + (clickshard>>0)

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
    Boostercore.innerText = "Booster cores : " + boostercore
  }
}
let timertick = setInterval(onTick, 1000)

function resourceupdate() {
  Scrap.innerText = "Scrap : " + scrap //export scrap
  Clickshard.innerText = "Click shards : " + (clickshard>>0) //export clickshards
  Basiccore.innerText = basiccore
  Generatorshard.innerText = "Generator shards : " + (generatorshard >> 0)
  Atom.innerText = "Atoms : " + (atom>>0)
  Basedpotato.innerText = "Based potatoes : " + (basedpotato>>0)
  Scrapsorter.innerText = scrapsorter
  Rawcopper.innerText = "Raw copper : " + rawcopper
  Rawsilicon.innerText = "Raw silicon : " + rawsilicon
  Rawplastic.innerText = "Raw plastic : " + rawplastic
  Rat.innerText ="Rats : " + rat
  Atomizedcopper.innerText = atomizedcopper
  Riscopper.innerText = riscopper

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
          trialtip.innerHTML = "Use W to stop number <br> Or click"
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
    }
    else if(drop > 42 && drop < 45){
      legendaryclickshard++;
      loot = "legendary clickshard!"
    }
    else loot = "nothing"
    
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
if(drop < 15 && drop > 10)
{
  let dropLshard = Math.floor(Math.random()*50) + 50
  legendaryclickshard += dropLshard
  loot = "+ " + dropLshard + " Legendary shards"
}else
if(drop >14 &&  drop < 25)
{
  let dropgenM = Math.floor(Math.random() * 1000)+1000
  genmult += dropgenM
  loot = "+ " + dropgenM + " Generator multiplier"
}else
if(drop >24 && drop < 28)
{
  let dropBpotato = Math.floor(Math.random() * 3)+1
  basedpotato += dropBpotato
  loot = "+ " + dropBpotato + " Based potatoes"
}
else
if(drop > 27 && drop < 32)
{
  boostercore++
  loot = " + 1 booster core"
}else
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
function craftbasiccore() {
  let costscrap = 100 *tocraft
  let costCshards = 50 *tocraft
  let costclicks = 10000 *tocraft
  if (costscrap <= scrap && costCshards <= clickshard && costclicks <= clicks) {
    basiccore += tocraft
    scrap -= costscrap
    clickshard -= costCshards
    clicks -= costclicks
    resourceupdate()
  }
}
function craftgenerator2() {
  let costGK = 1000*tocraft
  let costGshards = 1000*tocraft
  let costBcores = 20*tocraft
  if (
    costGK <= GK &&
    costGshards <= generatorshard &&
    costBcores <= basiccore
  ) {
    gen2 +=tocraft
    GK -= costGK
    generatorshard -= costGshards
    basiccore -= costBcores
    resourceupdate()
  }

}
function setcraftvalue()
{
  tocraft = +Ca.value 
}
function craftscrapsorter()
{
  let costBpotato = 20 *tocraft
  let costAtoms = 100*tocraft
  let costBcores = 1000*tocraft
  if(costBpotato <= basedpotato &&
    costBcores <= basiccore &&
    costAtoms <= atom)
    {
      atom -= costAtoms
      basedpotato -=costBpotato
      basiccore -= costBcores
      scrapsorter +=tocraft
      resourceupdate()
    }
}
function craftatomizedcopper()
{
  let costRawcopper = 2*tocraft
  let costAtoms = 200*tocraft
  let costClicks = 100000*tocraft
  if(rawcopper >= costRawcopper &&
   atom >= costAtoms&&
    clicks >= costClicks)
    {
      rawcopper -= costRawcopper 
   atom -= costAtoms
    clicks -= costClicks
    atomizedcopper += tocraft
    resourceupdate()
    }
}
function craftriscopper()
{
  let costRat = 3*tocraft
  let costatomizedcopper = 5*tocraft
  let costclickshards = 1000*tocraft
  if(rat >= costRat && 
    atomizedcopper >= costatomizedcopper &&
    clickshard >- costclickshards)
    {
    rat -= costRat 
    atomizedcopper -= costatomizedcopper 
    clickshard -= costclickshards
    riscopper += 2*tocraft
    resourceupdate()
    }
}

function OpenScrapSorting()
{
  
  document.getElementById("crafts").style.display = "none"
  document.getElementById("ScrapSorting").style.display = "block"
}
function CloseMachine()
{
  document.getElementById("ScrapSorting").style.display = "none"
  document.getElementById("crafts").style.display = "block"

} 
function TurnScrap()
{
  if(isScrapOn == 1)
  {
    document.getElementById("TurnScrap").style.backgroundImage = "url(off.jpg)"
    isScrapOn = 0;
    clearInterval(scraptimer)
    document.getElementById("TurnScrap").innerHTML = "Turn  <br> on"
  }
  else
  {
    document.getElementById("TurnScrap").style.backgroundImage = "url(on.jpg)"
    isScrapOn = 1;
    scraptimer = setInterval(sortscrap, 4000)
    document.getElementById("TurnScrap").innerHTML = "Turn  <br> off"
  }

}
function sortscrap()
{
  if(scrap >= scrapsorter)
  {
    scrap -= scrapsorter
  drop = Math.floor(Math.random()*100)
  if(drop < 10)
  {
    dropScrapsort = (Math.floor(Math.random() * 2)+1)*scrapsorter
    rawcopper += dropScrapsort

  }
  if(drop>9 && drop < 20)
  {
    dropScrapsort = (Math.floor(Math.random() * 3)+1)*scrapsorter
    rawsilicon += dropScrapsort
  }
  if(drop >19 && drop < 30)
  {
    dropScrapsort = (Math.floor(Math.random() * 10)+1)*scrapsorter
    rawplastic += dropScrapsort
  }
  if(drop > 29 && drop < 36)
  {
    dropScrapsort = (Math.floor(Math.random() * 2)+1)*scrapsorter
    rat += dropScrapsort
  }
  resourceupdate()
 }
 else TurnScrap()
}






OpenCraft()
Close()