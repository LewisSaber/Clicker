
let numberforstop = 0 //numeer used to stop key trial
 // how many numbers
 //game.clicks
let loot //loot from last crate
let drop //drop chance





let scraptimer
let tocraft = 1


//drop variable
let dropScrapsort
let dropclickpower
let dropclickshard
function reset() {
game = {
  clicks : 0,
  GKMa : 0,
  GKM : 1,
  GK : 0,
  clickpower : 1,
  decrnumber : 10,
  upgrade3costreducer: 1,
  genmult: 1,
  upgrades1: 0,
  upgrade1cost : 1,
  upgrade1effect : 0,
  upgrade2cost: 1,
  upgrade3cost: 10,
  upgrade2effect: 0,
  upgrade3effect: 1,
  legendaryclickshard: 0,
  isScrapOn : 0,
  scrap : 0,
  clickshard : 0,
  generatorshard : 0,
  basiccore : 0,
  atom : 0,
  basedpotato : 0,
  scrapsorter : 0,
  booster : 0,
  boostercore : 0,
  rawcopper : 0,
  rawsilicon : 0,
  rawplastic : 0,
  atomizedcopper : 0,
  rat : 0,
  riscopper : 0,
  gen1 : 0,
  gen2 : 0
}


}
reset ()
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
}
load()

function loadGame(loadgame) {
  //Sets each variable in 'game' to the equivalent variable in 'loadgame' (the saved file)
  for (i=0; i<Object.keys(loadgame).length; i++) {
    if (loadgame[Object.keys(loadgame)[i]] != "undefined") {
      if (typeof loadgame[Object.keys(loadgame)[i]] == "string") {game[Object.keys(loadgame)[i]] = loadgame[Object.keys(loadgame)[i]]}
      else {game[Object.keys(game)[i]] = loadgame[Object.keys(loadgame)[i]]}
    }
  }
}

function updateupgrades()
{
  document.getElementById("upgrade1cost").innerText = game.upgrade1cost
  document.getElementById("upgrade1effect").innerText = game.upgrade1effect
  document.getElementById("upgrade2cost").innerText = game.upgrade2cost
  document.getElementById("upgrade3cost").innerText = game.upgrade3cost
  document.getElementById("upgrade2effect").innerText = game.upgrade2effect
  document.getElementById("upgrade3effect").innerText = game.upgrade3effect
  if(game.isScrapOn == 1)
  {
    game.isScrapOn = 0
    TurnScrap()
  }

  if (game.decrnumber == 1) {
    document.getElementById("Upgrade2").disabled = true
    document.getElementById("Upgrade2").innerText = "MAXED!"

  }

}
updateupgrades()



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




//
function click1() {
  game.clicks += game.clickpower
  Counter.innerText = +Counter.innerText + game.clickpower
  if(game.legendaryclickshard + 2 > 50)
  {
    game.clickshard += (game.legendaryclickshard+2)/100
  }
  else{
  dropclickshard = Math.floor(Math.random() * 100)

  if (dropclickshard < game.legendaryclickshard+3) {
    game.clickshard++
  }
}
  Clickshard.innerText = "Clickshards : " + (game.clickshard>>0)

}

function onTick() {
  game.clicks = game.clicks + game.gen1 * (1 + game.clickpower / 30) * game.genmult  //game.clicks per second
  game.gen1 += game.gen2 * game.genmult

  Counter.innerText = game.clicks >> 0 //export game.clicks on counter
  key1number.innerText = game.GK //export game.GK
  game.generatorshard += game.gen1 * 0.1 * (1 + game.clickpower / 1000)
  Generatorshard.innerText = "Generator shards : " + (game.generatorshard >> 0)
  gt1.innerText = game.gen1
  gt2.innerText = game.gen2
  game.GKM = (1 + game.GKMa) * +game.upgrade3effect
  if (game.gen1 > 10000) {
    game.atom += Math.log10(game.gen1) / 10 - 0.4
    Atom.innerText = "Atoms : " + (game.atom>>0)
    Boostercore.innerText = "Booster cores : " + game.boostercore
  }
}
let timertick = setInterval(onTick, 1000)

function resourceupdate() {
  Scrap.innerText = "Scrap : " + game.scrap //export game.scrap
  Clickshard.innerText = "Click shards : " + (game.clickshard>>0) //export clickshards
  Basiccore.innerText = game.basiccore
  Generatorshard.innerText = "Generator shards : " + (game.generatorshard >> 0)
  Atom.innerText = "Atoms : " + (game.atom>>0)
  Basedpotato.innerText = "Based potatoes : " + (game.basedpotato>>0)
  Scrapsorter.innerText = game.scrapsorter
  Rawcopper.innerText = "Raw copper : " + game.rawcopper
  Rawsilicon.innerText = "Raw silicon : " + game.rawsilicon
  Rawplastic.innerText = "Raw plastic : " + game.rawplastic
  Rat.innerText ="Rats : " + game.rat
  Atomizedcopper.innerText = game.atomizedcopper
  Riscopper.innerText = game.riscopper

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
  if (game.clicks >= 150) {
    game.clicks -= 150

    CloseMenu()
    keytrialdiv.style.display = "block"
    body.style.backgroundImage = "url(GKBackground.jpg)"

    let RandomNumber =
      Math.floor(Math.random() * game.decrnumber) * 1000 +
      Math.floor(Math.random() * game.decrnumber) * 100 +
      Math.floor(Math.random() * game.decrnumber) * 10 +
      Math.floor(Math.random() * game.decrnumber)
    if (RandomNumber < 1000) {
      RandomNumber = RandomNumber + (game.decrnumber - 1) * 1000
    }

    document.getElementById("numbercode").innerText = RandomNumber
    function changenumber() {
      if (numberforstop >= 1) {
        clearInterval(timer1)
      } else
        document.getElementById("num1").innerText = Math.floor(
          Math.random() * game.decrnumber
        )
    }
    let timer1 = setInterval(changenumber, 900)

    function changenumber2() {
      if (numberforstop >= 2) {
        clearInterval(timer2)
      } else
        document.getElementById("num2").innerText = Math.floor(
          Math.random() * game.decrnumber
        )
    }
    let timer2 = setInterval(changenumber2, 900)
    function changenumber3() {
      if (numberforstop >= 3) {
        clearInterval(timer3)
      } else
        document.getElementById("num3").innerText = Math.floor(
          Math.random() * game.decrnumber
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
          game.GK += 1 * game.GKM
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

function Buygen1() {
  if (game.GK >= 1) {
    game.GK = game.GK - 1
    game.gen1++
    gt1.innerText = game.gen1
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
  let cost = Math.floor(Math.pow(1.5,game.upgrades1))
  let effect = Number(document.getElementById("upgrade1effect").innerText)
  if (game.clicks >= cost) {
    game.clicks = game.clicks - cost
    game.clickpower += 1
   game.upgrades1++
    document.getElementById("upgrade1effect").innerText = effect + 1
    document.getElementById("upgrade1cost").innerText = Math.floor(Math.pow(1.5,game.upgrades1))
    document.getElementById("ClickPower").innerText = game.clickpower
    game.upgrade1cost = Math.floor(Math.pow(1.5,game.upgrades1));
  game.upgrade1effect = effect + 1;
    
  }
}
function BuyUpgrade2() {
  let cost = Number(document.getElementById("upgrade2cost").innerText)
  let effect = Number(document.getElementById("upgrade2effect").innerText)
  if (game.GK >= cost) {
    game.GK -= cost
    game.decrnumber--
    
    document.getElementById("upgrade2cost").innerText = cost + 1
    document.getElementById("upgrade2effect").innerText = effect + 1
    game.upgrade2cost = cost + 1;
  game.upgrade2effect = effect + 1;
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
      x = log10(game.upgrade3costreducer) / 10 + 1
    }
    document.getElementById("upgrade3cost").innerText = Math.floor(
      cost * 4 * Math.floor(Math.log10(cost)) -
        Math.floor(Math.log10(cost)) *
          (Math.log(game.upgrade3costreducer) / Math.log(x))
    )
    document.getElementById("upgrade3effect").innerText = effect * 3
    game.upgrade3cost = document.getElementById("upgrade3cost").innerText
    game.upgrade3effect = effect * 3
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
  if (game.GK >= 10) {
    drop = Math.floor(Math.random() * 100)

    game.GK -= 10
    if (drop < 10) {
      game.clicks = game.clicks * 1.2
      loot = "+ 20% clicks"
    } else if (drop > 9 && drop < 20) {
      game.GK += game.GKM * 3
      loot = "+ " + 4 * game.GKM + " Gold keys"
    } else if (drop > 19 && drop < 25) {
      let scrapdropped = Math.floor(Math.random() * 25)
      game.scrap += scrapdropped
      loot = "+ " + scrapdropped + " Scrap"
    } else if (drop == 25) {
      let dropGKM = Math.floor(Math.random() * 3) + 1
      game.GKMa += dropGKM
      loot = "+ " + dropGKM + " Gold key modifier"
    } else if (drop > 25 && drop < 35) {
      dropclickpower = Math.floor(Math.random() * 6) + 1
      game.clickpower += dropclickpower
      loot = "+ " + dropclickpower + "clickpower"
      document.getElementById("ClickPower").innerText = game.clickpower
    } else if (drop > 34 && drop < 38) {
      game.upgrade3costreducer = +10
      loot = "Upgrade 3 cost reduced!"
    }else if(drop >37 && drop < 43) 
    {
        let dropgenM = Math.floor(Math.random() * 10)
        game.genmult += dropgenM
        loot = "+ " + dropgenM + " Generator multiplier"
    }
    else if(drop > 42 && drop < 45){
      game.legendaryclickshard++;
      loot = "legendary clickshard!"
    }
    else loot = "nothing"
    
    history(loot)
  }
}
function OpenCrate2(){
if(game.atom >= 5)
{
drop = Math.floor(Math.random() * 100)
game.atom -=5
if(drop < 10)
{
let dropBcores = Math.floor(Math.random()*300)
game.basiccore += dropBcores
loot = "+ " + dropBcores + " Basic cores"
}
else
if(drop < 15 && drop > 10)
{
  let dropLshard = Math.floor(Math.random()*50) + 50
  game.legendaryclickshard += dropLshard
  loot = "+ " + dropLshard + " Legendary shards"
}else
if(drop >14 &&  drop < 25)
{
  let dropgenM = Math.floor(Math.random() * 1000)+1000
  game.genmult += dropgenM
  loot = "+ " + dropgenM + " Generator multiplier"
}else
if(drop >24 && drop < 28)
{
  let dropBpotato = Math.floor(Math.random() * 3)+1
  game.basedpotato += dropBpotato
  loot = "+ " + dropBpotato + " Based potatoes"
}
else
if(drop > 27 && drop < 32)
{
  game.boostercore++
  loot = " + 1 game.booster core"
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
  if (costscrap <= game.scrap && costCshards <= game.clickshard && costclicks <= game.clicks) {
    game.basiccore += tocraft
    game.scrap -= costscrap
    game.clickshard -= costCshards
    game.clicks -= costclicks
    resourceupdate()
  }
}
function craftgenerator2() {
  let costGK = 1000*tocraft
  let costGshards = 1000*tocraft
  let costBcores = 20*tocraft
  if (
    costGK <= game.GK &&
    costGshards <= game.generatorshard &&
    costBcores <= game.basiccore
  ) {
    game.gen2 +=tocraft
    game.GK -= costGK
    game.generatorshard -= costGshards
    game.basiccore -= costBcores
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
  if(costBpotato <= game.basedpotato &&
    costBcores <= game.basiccore &&
    costAtoms <= game.atom)
    {
      game.atom -= costAtoms
      game.basedpotato -=costBpotato
      game.basiccore -= costBcores
      game.scrapsorter +=tocraft
      resourceupdate()
    }
}
function craftatomizedcopper()
{
  let costRawcopper = 2*tocraft
  let costAtoms = 200*tocraft
  let costClicks = 100000*tocraft
  if(game.rawcopper >= costRawcopper &&
   game.atom >= costAtoms&&
    game.clicks >= costClicks)
    {
      game.rawcopper -= costRawcopper 
   game.atom -= costAtoms
    game.clicks -= costClicks
    game.atomizedcopper+= tocraft
    resourceupdate()
    }
}
function craftriscopper()
{
  let costRat = 3*tocraft
  let costatomizedcopper = 5*tocraft
  let costclickshards = 1000*tocraft
  if(game.rat >= costRat && 
    game.atomizedcopper>= costatomizedcopper &&
    game.clickshard >- costclickshards)
    {
    game.rat -= costRat 
    game.atomizedcopper-= costatomizedcopper 
    game.clickshard -= costclickshards
    game.riscopper += 2*tocraft
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
  if(game.isScrapOn == 1)
  {
    document.getElementById("TurnScrap").style.backgroundImage = "url(off.jpg)"
    game.isScrapOn = 0;
    clearInterval(scraptimer)
    document.getElementById("TurnScrap").innerHTML = "Turn  <br> on"
  }
  else
  {
    document.getElementById("TurnScrap").style.backgroundImage = "url(on.jpg)"
    game.isScrapOn = 1;
    scraptimer = setInterval(sortscrap, 4000)
    document.getElementById("TurnScrap").innerHTML = "Turn  <br> off"
  }

}
function sortscrap()
{
  if(game.scrap >= game.scrapsorter)
  {
    game.scrap -= game.scrapsorter
  drop = Math.floor(Math.random()*100)
  if(drop < 10)
  {
    dropScrapsort = (Math.floor(Math.random() * 2)+1)*game.scrapsorter
    game.rawcopper += dropScrapsort

  }
  if(drop>9 && drop < 20)
  {
    dropScrapsort = (Math.floor(Math.random() * 3)+1)*game.scrapsorter
    game.rawsilicon += dropScrapsort
  }
  if(drop >19 && drop < 30)
  {
    dropScrapsort = (Math.floor(Math.random() * 10)+1)*game.scrapsorter
    game.rawplastic += dropScrapsort
  }
  if(drop > 29 && drop < 36)
  {
    dropScrapsort = (Math.floor(Math.random() * 2)+1)*game.scrapsorter
    game.rat += dropScrapsort
  }
  resourceupdate()
 }
 else TurnScrap()
}






OpenCraft()
Close()