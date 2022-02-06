let buttons = document.getElementsByClassName("craftbutton")
let buttons2 = document.getElementsByClassName("craftbutton2")
let amounts = []
let amounts2 = []
let craftmaterials = []
let craftmaterials2 = []
function decidefurnace()
{
  if(game.furnace >= tocraft)
return tocraft
else
return game.furnace
}
for (let i = 0; i < buttons.length; i++) {
  amounts[i] = 1
}
for (let i = 0; i < buttons2.length; i++) {
  amounts2[i] = 1
}
let materials = document.getElementsByClassName("materials1")
let materials2 = document.getElementsByClassName("materials2")
let mats = []//array of needed craft materials for 1 craft
let mats2 = []
for (let i = 0; i < materials.length; i++) {//fill mats array with amounths
  mats[i] = +materials[i].innerText
}
for (let i = 0; i < materials2.length; i++) {
  mats2[i] = +materials2[i].innerText
}
amounts[4] = 2
amounts[7] = 32
amounts[14] = 2
function updateCraftButtons() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML =
      "<img src='Craft.jpeg'>Craft " + (amounts[i] * tocraft).formateNumber(1e4)
  }
  for (let i = 0; i < buttons2.length; i++) {
    buttons2[i].innerHTML =
      "<img src='Craft.jpeg'>Craft " + (amounts2[i] * decidefurnace()).formateNumber(1e4)
  }
  for (let i = 0; i < materials.length; i++) {
    craftmaterials[i + 1] = mats[i] * tocraft
    materials[i].innerText = craftmaterials[i + 1].formateNumber(1e4)
  }

  for (let i = 0; i < materials2.length; i++) {
    craftmaterials2[i] = mats2[i] * decidefurnace()
    materials2[i].innerText = craftmaterials2[i].formateNumber(1e4)
  }
}
updateCraftButtons()
hiddenresdiv = document.getElementById("hiddenresources")
visibleresdiv = document.getElementById("visibleresources")
hidresnames = ["Legendary click shards: ","Lucky shard: ","Advanced scrap: ","Based atoms : ", "Saplings: ","Rat ferment: ", "Pickaxe: ","Iron ore: ","Gold ore: "]
let hidresbool = 0
let tag
function ShowHiddenResources() {
  hidres = [game.legendaryclickshard, game.luckyshard, game.advancedscrap, game.basedatom, game.sapling, game.ratferment, game.pickaxe, game.ironore, game.goldore]
  if (hidresbool == 1) {
    hidresbool = 0
    hiddenresdiv.style.display = "none"
    visibleresdiv.style.display = "block"
    hiddenresdiv.innerHTML = ""
  } else {
    hidresbool = 1
    hiddenresdiv.style.display = "block"
    visibleresdiv.style.display = "none"
    for (let i = 0; i < hidres.length; i++) {
     tag = document.createElement("p")
     tag.setAttribute("class","resource")
     tag.innerText = hidresnames[i] + hidres[i].formateNumber()
    hiddenresdiv.appendChild(tag)

    }
  }
}
