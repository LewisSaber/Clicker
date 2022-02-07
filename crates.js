Crates = document.getElementById("crates")
Crateinfodiv = document.getElementById("crateinfodiv")
infodiv = document.getElementById("crateinfotext")
function opencrateinfo()
{
    Crates.style.display = "none"
    Crateinfodiv.style.display = "block"
    
}
function luck()
{

    return (1 + game.luckyshard/25)
}
function back()
{
    Crates.style.display =  "block"
    Crateinfodiv.style.display ="none"
}
function goldcrateinfo()
{
    infodiv.innerHTML = "When you open multiple crates,all drop(exept legendary) gets multiplied by amount of crates you open at once<br> Drops from crate : <br>"+
    "- 10% 30x gen 1 <br> - 10% 3 GK * Multipier <br> - 5% 1-25 scrap <br> - 1% 1-3 GK multiplicator <br> - 9% 1-6 clickpower <br> - 3% upgrade3 cost reducer(half wip) <br> - 5% 1-10 generator multiplier<br> - 2% 1 legendary clickshard (boost clickshard gain by 1% )<br><div style='color:yellow'>Legendary drops : <br></div> - 0.1% Sqrt(crates you open) Dragonlores, history color : red<br> - 1% Autoclicker fragments, if you open >900 crates at once, gain is based on bought autoclicker interval upgrades, history color: blue<br> - 1% (1-2 * based atom) Advanced scrap, multiply scrap gain by itself, drops if you open LESS then 100 crates, history color: green<br> - 0,5% 1-4 broken gold rings, drops if you open more then 10k crates, history color: yellow <br> - 0,02% 1 lucky shard, gives +4% more drop from crates, applies TO ALL dropps, history color: RAINBOW<br> "
}
function atomcrateinfo()
{
    infodiv.innerHTML = "When you open multiple crates,all drop(exept legendary) gets multiplied by amount of crates you open at once<br> Drops from crate : <br> - 10% 1-300 Basic cores<br> - 4% 50-100 Legendaryclickshards <br> - 10% 1000-2000 generator multiplier <br> - 8% 10-12 based potato <br> - 3% 100-300 GK multiplicators, drops if you have at least 1 dwarf<br><div style='color:yellow'>Legendary drops : <br></div> - 1% Sqrt(crates you open) Booster cores,after you get generator 3, history color: yellow<br> - 1% Autoclicker fragments, 10x more then in gold crate, gain is based on bought autoclicker interval upgrades, history color: blue<br> - 1% Dragonlores,sqrt(crates to open) * 5 * basedatoms, drops if 10+ crates opened at once, history color: red<br> - 0.5% 1 Based atom, if you open more then 1 crate, boost atom gain by itself, history color : green<br> - 0,1% 1 relic clickshard, drops if you open 10k+ crates, boosts Leg clickshard effect by 1%, history color: purple <br> - 0,05% 1 lucky shard, gives +4% more drop from crates, applies TO ALL dropps, history color: RAINBOW<br>"
}
function bcircuitcrateinfo()
{
infodiv.innerHTML = "When you open multiple crates,all drop(exept legendary) gets multiplied by amount of crates you open at once<br> Drops from crate : <br> - 6% 1-4 Enriched silicon<br> - 5% 1-3 saplings,multiply production of wood ochard<br> - 5% 1-10 dwarfs<br> - 5% 10k - 40k Basic cores<br> - 4% 1-4 rat ferment, each boost rat gain by 20%<br> - 3% 100-300 advanced cores<br> - 3% 1-100 woodorchards<br> - 2% 1e5-5e5 Legendary clickshards<br> - 2% 1e6 - 5e6 Scrap sorters, drop if you open 100+ crates<br> - 1% 1-4 pickaxes, boost mineshafts<br> <div style='color:yellow'>Legendary drops : <br></div> <br> - 0,08% 1 lucky shard, gives +4% more drop from crates, applies TO ALL dropps, history color: RAINBOW<br>"

}