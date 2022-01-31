//steps to add craft
/*
1.make resource in game object
2.Add resource elements to //resource
3.Add materials to resource update
4.make craft in html
5.make craft function
6.fix 100500 bugs



*/
setcraft1 = document.getElementById("setcraft1")
setcraft2 = document.getElementById("setcraft2")
setcraft3 = document.getElementById("setcraft3")
setcraft4 = document.getElementById("setcraft4")

function setcraftvalue(value) {
if(value >=1){
tocraft = value
}else tocraft= 1
Ca.value = tocraft
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
    if(game.leswafer >= craftmaterials[20] &&
      game.riscopper >= craftmaterials[21] &&
      game.basiccore >= craftmaterials[22])
      {
        game.leswafer -= craftmaterials[20] 
      game.riscopper -= craftmaterials[21]
      game.basiccore -= craftmaterials[22]
      game.advancedcore += tocraft
      resourceupdate()
      }
  }
  function craftgen3()
  {
  
   
    if(game.gen2 >= craftmaterials[23] &&
      game.advancedcore >= craftmaterials[24] &&
      game.GK >= craftmaterials[25])
    {
      game.gen2 -= craftmaterials[23]
      game.advancedcore -= craftmaterials[24]
      game.GK -= craftmaterials[25]
      game.gen3 +=tocraft
      resourceupdate()
    }
  }
  function craftwoodorchard()
  {
  
    if( game.advancedcore >= craftmaterials[26] &&
      game.clicks >=craftmaterials[27] &&
      game.leswafer >= craftmaterials[28])
    {
      game.advancedcore -= craftmaterials[26] 
      game.clicks -= craftmaterials[27] 
      game.leswafer -= craftmaterials[28]
      game.woodorchard += tocraft
      resourceupdate()
    }
  }
  function craftcoppercable()
  {
 
    if( game.riscopper >=craftmaterials[29] &&
      game.rawplastic >= craftmaterials[30])
      {
      game.riscopper -=craftmaterials[29]
      game.rawplastic -= craftmaterials[30]
      game.coppercable += tocraft
      resourceupdate()
    }
  }
  function craftsap()
  {
    
     if(game.log >= craftmaterials[31])
     {
      game.log -= craftmaterials[31]
      game.treesap += tocraft
      resourceupdate()
     }
  }
  function craftt1board()
  {
    
    if(game.plank >= craftmaterials[32] &&
      game.treesap >= craftmaterials[33])
      {
        game.plank -= craftmaterials[32]
        game.treesap -= craftmaterials[33]
        game.t1board += tocraft
        resourceupdate()
      }
  }
  function craftbasiccircuit()
  {
    
    if(game.coppercable >= craftmaterials[34] &&
      game.t1board >= craftmaterials[35] &&
      game.GK >= craftmaterials[36])
      {
        game.coppercable -= craftmaterials[34]
        game.t1board -= craftmaterials[35]
        game.GK -= craftmaterials[36]
        game.basiccircuit += tocraft*2
        resourceupdate()
      }
  }
  function craftmineshaft()
  {
if(game.advancedcore >= craftmaterials[37] &&
  game.dwarf >= craftmaterials[38] &&
  game.bark >= craftmaterials[39])
  {
    game.mineshaft += tocraft
    game.advancedcore -= craftmaterials[37] 
  game.dwarf -= craftmaterials[38] 
  game.bark -= craftmaterials[39]
  resourceupdate()
  }

  }
  function craftforgebasin()
  {
    if(game.obsidian >= craftmaterials[40]&&
      game.dwarf >= craftmaterials[41]&&
      game.coal >= craftmaterials[42])
      {
        game.forgebasin+= tocraft
        game.obsidian -= craftmaterials[40]
        game.dwarf -= craftmaterials[41]
        game.coal -= craftmaterials[42]
        resourceupdate()
      }

  }
  function craftforge()
  {
    if(game.cobblestone >= craftmaterials[43]&&
      game.dwarf >= craftmaterials[44]&&
      game.forgebasin >= craftmaterials[45])
      {
        game.cobblestone -= craftmaterials[43]
        game.dwarf -= craftmaterials[44]
        game.forgebasin -= craftmaterials[45]
        game.forge = 1

      }
  }