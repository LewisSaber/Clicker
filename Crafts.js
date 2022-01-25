//steps to add craft
/*
1.make resource in game object
2.Add resource elements to //resource
3.Add materials to resource update
4.make craft in html
5.make craft function
6.fix 100500 bugs



*/
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
  function craftleswafer()
  {
    let costlesboule = 1 * tocraft
    if(game.lesboule >= costlesboule)
    {
      game.leswafer += 32 * tocraft
      game.lesboule -= costlesboule
      resourceupdate()
    }
  }
  function craftlesboule()
  {
    let costsilicon = 64 * tocraft
    let costrawplastic = 32 * tocraft
    if(game.silicon >= costsilicon && game.rawplastic >= costrawplastic )
    {
      game.lesboule += 1 * tocraft
      game.silicon -= costsilicon
      game.rawplastic -= costrawplastic
      resourceupdate()
    }
  }
  function craftadvancedcore()
  {
    let costLESwafer = 320 * tocraft
    let costRIScopper = 10 * tocraft
    let costBasiccore = 3000 * tocraft
    if(game.leswafer >= costLESwafer &&
      game.riscopper >= costRIScopper &&
      game.basiccore >= costBasiccore)
      {
        game.leswafer -= costLESwafer 
      game.riscopper -= costRIScopper 
      game.basiccore -= costBasiccore
      game.advancedcore += tocraft
      resourceupdate()
      }
  }
  function craftgen3()
  {
    let costgen2 = 10000 * tocraft
    let costadvacedcore = 30  *tocraft
    let costGK = 1e12 * tocraft
    if(game.gen2 >= costgen2 &&
      game.advancedcore >= costadvacedcore &&
      game.GK >= costGK)
    {
      game.gen2 -= costgen2 
      game.advancedcore -= costadvacedcore 
      game.GK -= costGK
      game.gen3 +=tocraft
      resourceupdate()
    }
  }
  function craftwoodorchard()
  {
    let costadvacedcore = 50  *tocraft
    let costclicks = 1e34 * tocraft
    let costLESwafer = 10000 * tocraft
    if( game.advancedcore >= costadvacedcore &&
      game.clicks >= costclicks &&
      game.leswafer >= costLESwafer)
    {
      game.advancedcore -= costadvacedcore 
      game.clicks -= costclicks 
      game.leswafer -= costLESwafer
      game.woodorchard += tocraft
      resourceupdate()
    }
  }
  function craftcoppercable()
  {
   let costRIScopper = 2 * tocraft
   let costPlastic = 32 * tocraft
    if( game.riscopper >= costRIScopper &&
      game.rawplastic >= costPlastic)
      {
      game.riscopper -= costRIScopper 
      game.rawplastic -= costPlastic
      game.coppercable += tocraft
      resourceupdate()
    }
  }
  function craftsap()
  {
     let costlog = 10 * tocraft
     if(game.log >= costlog)
     {
      game.log -= costlog
      game.treesap += tocraft
      resourceupdate()
     }
  }
  function craftt1board()
  {
    costwoodplanks = 40  *tocraft
    costTreesap = 20 * tocraft
    if(game.plank >= costwoodplanks &&
      game.treesap >= costTreesap)
      {
        game.plank -= costwoodplanks 
        game.treesap -= costTreesap
        game.t1board += tocraft
        resourceupdate()
      }
  }