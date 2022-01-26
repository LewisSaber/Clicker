let buttons = document.getElementsByClassName("craftbutton")
let amounts = []
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
function updateCraftButtons()
{
    for (let i = 0; i < buttons.length; i++) {
     
        buttons[i].innerHTML = "<img src='Craft.jpeg'>Craft " + (amounts[i]*tocraft).formateNumber()
        
    }
    for(let i = 0; i < materials.length;i++)
    {
        materials[i].innerText = (mats[i]*tocraft).formateNumber()
    }
}
updateCraftButtons()
