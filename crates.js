Crates = document.getElementById("crates")
Crateinfodiv = document.getElementById("crateinfodiv")
infodiv = document.getElementById("crateinfotext")
function opencrateinfo()
{
    Crates.style.display = "none"
    Crateinfodiv.style.display = "block"
    
}
function back()
{
    Crates.style.display =  "block"
    Crateinfodiv.style.display ="none"
}
function goldcrateinfo()
{
    infodiv.innerHTML = "When you open multiple crates,all drop(exept legendary) gets multiplied by amount of crates you open at once<br> Drops from crate : <br>"+
    "- 10% 30x gen 1 <br> - 10% 3 GK * Multipier <br> - 5% 1-25 scrap <br> - 1% 1-3 GK multiplicator <br> - 9% 1-6 clickpower <br> - 3% upgrade3 cost reducer(half wip) <br> - 5% 1-10 generator multiplier<br> - 2% 1 legendary clickshard (boost clickshard gain by Lclickshard/100 )<br><div style='color:yellow'>Legendary drops : <br></div> - 0.1% Sqrt(crates you open) Dragonlores, history color : red<br> - 1% Autoclicker fragments, if you open >900 crates at once, gain is based on bought autoclicker interval upgrades, history color: blue<br> "
}
function atomcrateinfo()
{
    infodiv.innerHTML = "When you open multiple crates,all drop(exept legendary) gets multiplied by amount of crates you open at once<br> Drops from crate : <br> - 10% 1-300 Basic cores<br> - 4% 50-100 Legendaryclickshards <br> - 10% 1000-2000 generator multiplier <br> - 8% 10-12 based potato <br><div style='color:yellow'>Legendary drops : <br></div> - 1% Sqrt(crates you open) Booster cores,after you get generator 3, history color: red<br> - 1% Autoclicker fragments,10x more then in gold crate, gain is based on bought autoclicker interval upgrades, history color: blue<br> - 0,5% 1 Based atom,if you open more then 1 crate, boost atom gain by itself, history color : green<br>"
}