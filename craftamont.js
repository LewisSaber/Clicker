let buttons = document.getElementsByClassName("craftbutton")
let amounts = []
let craftmaterials = []
for (let i = 0; i < buttons.length; i++) {
  amounts[i] = 1
}
let materials = document.getElementsByClassName("materials1")
let mats = []
for (let i = 0; i < materials.length; i++) {
  mats[i] = +materials[i].innerText
}
amounts[4] = 2
amounts[7] = 32
amounts[14] = 2
function updateCraftButtons() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML =
      "<img src='Craft.jpeg'>Craft " + (amounts[i] * tocraft).formateNumber(1e4)
  }
  for (let i = 0; i < materials.length; i++) {
    craftmaterials[i + 1] = mats[i] * tocraft
    materials[i].innerText = craftmaterials[i + 1].formateNumber(1e4)
  }
}
updateCraftButtons()
hiddenresdiv = document.getElementById("hiddenresources")
visibleresdiv = document.getElementById("visibleresources")
hidres = [game.legendaryclickshard, game.luckyshard, game.advancedscrap, game.basedatom]
hidresnames = ["Legendary click shards: ","Lucky shard: ","Advanced scrap: ","Based atoms : "]
let hidresbool = 0
let tag
function ShowHiddenResources() {
  hidres = [game.legendaryclickshard, game.luckyshard, game.advancedscrap, game.basedatom]
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
