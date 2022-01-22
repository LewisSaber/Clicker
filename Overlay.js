//Overlays
//upgrade tab overlay
Clicksupgrade = document.getElementById("clicksupgrade")
GKupgrade = document.getElementById("GKupgrade")
RIScopperupgrade = document.getElementById("RIScopperupgrade")
Dragonloreupgrade = document.getElementById("Dragonloreupgrade")
//crates
GKcrates = document.getElementById("GKcrates")
Atomcrates = document.getElementById("Atomcrates")
function OverlayUpdate()
{
    Clicksupgrade.innerText = "Clicks : " + game.clicks.formateNumber()
    GKcrates.innerText =  GKupgrade.innerText = "GK : " + game.GK.formateNumber()
    Atomcrates.innerText = "Atoms: " + game.atom.formateNumber()
    RIScopperupgrade.innerText = "RIS copper: "+ game.riscopper.formateNumber()
    Dragonloreupgrade.innerText = "Dragonlore: "+ game.dragonlore.formateNumber()
}