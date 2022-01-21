//Overlays
//upgrade tab overlay
Clicksupgrade = document.getElementById("clicksupgrade")
GKupgrade = document.getElementById("GKupgrade")
//crates
GKcrates = document.getElementById("GKcrates")
Atomcrates = document.getElementById("Atomcrates")
function OverlayUpdate()
{
    Clicksupgrade.innerText = "Clicks : " + game.clicks.formateNumber()
    GKcrates.innerText =  GKupgrade.innerText = "GK : " + game.GK.formateNumber()
    Atomcrates.innerText = "Atoms: " + game.atom.formateNumber()

}