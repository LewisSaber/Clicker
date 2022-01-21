function OpenCraft() {
    CloseMenu()
    craftsdiv.style.display = "block"
    body.style.backgroundImage = "url(CraftsBackground.jpg)"
    resourceupdate()
    
  }
  function craftbasiccore() {
    let costscrap = 100 * tocraft
    let costCshards = 50 * tocraft
    let costclicks = 5e12 * tocraft
    if (
      costscrap <= game.scrap &&
      costCshards <= game.clickshard &&
      costclicks <= game.clicks
    ) {
      game.basiccore += tocraft
      game.scrap -= costscrap
      game.clickshard -= costCshards
      game.clicks -= costclicks
      resourceupdate()
    }
  }
  function craftgenerator2() {
    let costGK = 1e8 * tocraft
    let costGshards = 3e7 * tocraft
    let costBcores = 20 * tocraft
    if (
      costGK <= game.GK &&
      costGshards <= game.generatorshard &&
      costBcores <= game.basiccore
    ) {
      game.gen2 += tocraft
      game.GK -= costGK
      game.generatorshard -= costGshards
      game.basiccore -= costBcores
      resourceupdate()
    }
  }
  function setcraftvalue() {
      if(+Ca.value >=1)
      {
    tocraft = +Ca.value
}else tocraft= 1
  }
  function craftscrapsorter() {
    let costBpotato = 200 * tocraft
    let costAtoms = 100 * tocraft
    let costBcores = 1000 * tocraft
    if (
      costBpotato <= game.basedpotato &&
      costBcores <= game.basiccore &&
      costAtoms <= game.atom
    ) {
      game.atom -= costAtoms
      game.basedpotato -= costBpotato
      game.basiccore -= costBcores
      game.scrapsorter += tocraft
      resourceupdate()
    }
  }
  function craftatomizedcopper() {
    let costRawcopper = 2 * tocraft
    let costAtoms = 200 * tocraft
    let costClicks = 1e26 * tocraft
    if (
      game.rawcopper >= costRawcopper &&
      game.atom >= costAtoms &&
      game.clicks >= costClicks
    ) {
      game.rawcopper -= costRawcopper
      game.atom -= costAtoms
      game.clicks -= costClicks
      game.atomizedcopper += tocraft
      resourceupdate()
    }
  }
  function craftriscopper() {
    let costRat = 3 * tocraft
    let costatomizedcopper = 5 * tocraft
    let costclickshards = 1000 * tocraft
    if (
      game.rat >= costRat &&
      game.atomizedcopper >= costatomizedcopper &&
      game.clickshard >= costclickshards
    ) {
      game.rat -= costRat
      game.atomizedcopper -= costatomizedcopper
      game.clickshard -= costclickshards
      game.riscopper += 2 * tocraft
  
      resourceupdate()
    }
  }
  function craftsilicon() {
    let costRawsilicon = 1 * tocraft
    
    if (
      game.rawsilicon >= costRawsilicon
    ) {
        game.rawsilicon -= costRawsilicon
        game.silicon += tocraft
  
      resourceupdate()
    }
  }
  