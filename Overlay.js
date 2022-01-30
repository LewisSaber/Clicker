//Overlays
//upgrade tab overlay
Clicksupgrade = document.getElementById("clicksupgrade")
GKupgrade = document.getElementById("GKupgrade")
Autoclickfragsupgrade = document.getElementById("Autoclickfragsupgrade")
RIScopperupgrade = document.getElementById("RIScopperupgrade")
Dragonloreupgrade = document.getElementById("Dragonloreupgrade")
Advcoreupgrade = document.getElementById("Advcoreupgrade")
//crates
GKcrates = document.getElementById("GKcrates")
Atomcrates = document.getElementById("Atomcrates")
Bcircuitcrates = document.getElementById("Bcircuitcrates")

function OverlayUpdate()
{
    Clicksupgrade.innerText = "Clicks : " + game.clicks.formateNumber()
    GKcrates.innerText =  GKupgrade.innerText = "GK : " + game.GK.formateNumber()
    Autoclickfragsupgrade.innerText = "Autoclick frags: " + game.autoclickerfragments.formateNumber()
    Atomcrates.innerText = "Atoms: " + game.atom.formateNumber()
    RIScopperupgrade.innerText = "RIS copper: "+ game.riscopper.formateNumber()
    Dragonloreupgrade.innerText = "Dragonlore: "+ game.dragonlore.formateNumber()
    Advcoreupgrade.innerText = "Adv cores: "+ game.advancedcore.formateNumber()
    Bcircuitcrates.innerText = "Basic circuits: " + game.basiccircuit.formateNumber()
}
