let vakjes=new Array(6);
for (let i=0;i<6;i++)
{
    vakjes[i]=new Array(6);
}

for(let rij=0;rij<6;rij++)

    for(let culum=0;culum<6;culum++)

        vakjes[rij][culum]="leeg";
let container = document.getElementById("cont");

for(var i = 0; i < 42; i++){

    var backside = document.createElement("div");
    backside.className = 'items';
    container.appendChild(backside);
}