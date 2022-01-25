let buttons = document.getElementsByClassName("craftbutton")
let amounts = []
for (let i = 0; i < buttons.length; i++) {
   amounts[i] = 1
    
}
amounts[4] = 2
amounts[7] = 32
function updateCraftButtons()
{
    for (let i = 0; i < buttons.length; i++) {
     
        buttons[i].innerHTML = "<img src='Craft.jpeg'>Craft " + (amounts[i]*tocraft).formateNumber()
        
    }
}
updateCraftButtons()
