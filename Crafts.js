//steps to add craft
/*
1.make resource in game object
2.Add resource elements to //resource
3.Add materials to resource update
4.make craft in html
5.make craft function
6.fix 100500 bugs



*/
function setcraftvalue() {
  if(+Ca.value >=1)
  {
tocraft = +Ca.value
}else tocraft= 1
updateCraftButtons()
}

function OpenCraft() {
    CloseMenu()
    craftsdiv.style.display = "block"
    body.style.backgroundImage = "url(CraftsBackground.jpg)"
    resourceupdate()
    
  }
  function craftbasiccore() {

   
    if (
       craftmaterials[1] <= game.scrap &&
      craftmaterials[2] <= game.clickshard &&
      craftmaterials[3] <= game.clicks
    ) {
      game.basiccore += tocraft
      game.scrap -=   craftmaterials[1]
      game.clickshard -= craftmaterials[2]
      game.clicks -= craftmaterials[3]
      resourceupdate()
    }
  }
  function craftgenerator2() {
    if (
      craftmaterials[4] <= game.GK &&
      craftmaterials[5] <= game.generatorshard &&
      craftmaterials[6] <= game.basiccore
    ) {
      game.gen2 += tocraft
      game.GK -= craftmaterials[4]
      game.generatorshard -= craftmaterials[5]
      game.basiccore -= craftmaterials[6]
      resourceupdate()
    }
  }
 
  function craftscrapsorter() {

    if (craftmaterials[7] <= game.atom &&
      craftmaterials[8] <= game.basiccore &&
      craftmaterials[9] <= game.basedpotato
      
    ) {
      game.basedpotato -=  craftmaterials[9]
      game.basiccore -= craftmaterials[8]
       game.atom -= craftmaterials[7]

      game.scrapsorter += tocraft
      resourceupdate()
    }
  }
  function craftatomizedcopper() {
   
    if (
      game.rawcopper >= craftmaterials[10] &&
      game.atom >= craftmaterials[11] &&
      game.clicks >= craftmaterials[12]
    ) {
      game.rawcopper -=craftmaterials[10]
      game.atom -= craftmaterials[11]
      game.clicks -= craftmaterials[12]
      game.atomizedcopper += tocraft
      resourceupdate()
    }
  }
  function craftriscopper() {
    if (
      game.rat >= craftmaterials[13] &&
      game.atomizedcopper >= craftmaterials[14] &&
      game.clickshard >= craftmaterials[15]
    ) {
      game.rat -= craftmaterials[13]
      game.atomizedcopper -= craftmaterials[14]
      game.clickshard -= craftmaterials[15]
      game.riscopper += 2 * tocraft
  
      resourceupdate()
    }
  }
  function craftsilicon() {
   
    
    if (
      game.rawsilicon >= craftmaterials[16]
    ) {
        game.rawsilicon -= craftmaterials[16]
        game.silicon += tocraft
  
      resourceupdate()
    }
  }
  function craftleswafer()
  {
    let costlesboule = 1 * tocraft
    if(game.lesboule >= craftmaterials[19])
    {
      game.leswafer += 32 * tocraft
      game.lesboule -= craftmaterials[19]
      resourceupdate()
    }
  }
  function craftlesboule()
  {
  
    if(game.silicon >= craftmaterials[17] && game.rawplastic >= craftmaterials[18] )
    {
      game.lesboule += 1 * tocraft
      game.silicon -= craftmaterials[17]
      game.rawplastic -= craftmaterials[18]
      resourceupdate()
    }
  }
  function craftadvancedcore()
  {
    if(game.leswafer >= craftmaterial[20] &&
      game.riscopper >= craftmaterial[21] &&
      game.basiccore >= craftmaterial[22])
      {
        game.leswafer -= craftmaterial[20] 
      game.riscopper -= craftmaterial[21]
      game.basiccore -= craftmaterial[22]
      game.advancedcore += tocraft
      resourceupdate()
      }
  }
  function craftgen3()
  {
    let costgen2 = 10000 * tocraft
    let costadvacedcore = 30  *tocraft
   
    if(game.gen2 >= craftmaterial[23] &&
      game.advancedcore >= craftmaterial[24] &&
      game.GK >= craftmaterial[25])
    {
      game.gen2 -= craftmaterial[23]
      game.advancedcore -= craftmaterial[24]
      game.GK -= craftmaterial[25]
      game.gen3 +=tocraft
      resourceupdate()
    }
  }
  function craftwoodorchard()
  {
  
    if( game.advancedcore >= craftmaterial[26] &&
      game.clicks >=craftmaterial[27] &&
      game.leswafer >= craftmaterial[28])
    {
      game.advancedcore -= craftmaterial[26] 
      game.clicks -= craftmaterials[27] 
      game.leswafer -= craftmaterial[28]
      game.woodorchard += tocraft
      resourceupdate()
    }
  }
  function craftcoppercable()
  {
 
    if( game.riscopper >=craftmaterial[29] &&
      game.rawplastic >= craftmaterial[30])
      {
      game.riscopper -=craftmaterial[29]
      game.rawplastic -= craftmaterial[30]
      game.coppercable += tocraft
      resourceupdate()
    }
  }
  function craftsap()
  {
    
     if(game.log >= craftmaterial[31])
     {
      game.log -= craftmaterial[31]
      game.treesap += tocraft
      resourceupdate()
     }
  }
  function craftt1board()
  {
    
    if(game.plank >= craftmaterial[32] &&
      game.treesap >= craftmaterial[33])
      {
        game.plank -= craftmaterial[32]
        game.treesap -= craftmaterial[33]
        game.t1board += tocraft
        resourceupdate()
      }
  }