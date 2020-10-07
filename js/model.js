    var spelActief = false;
    var actieveSpeler = 0;
    var spelBord = [];
    var kleurSpeler = [];
    kleurSpeler[1] = "rood";
    kleurSpeler[2] = "geel";


    function beginSpel() {
        if (spelActief == true) return false;

        spelActief = true;
        for (rij=0; rij<=5; rij++) {
            spelBord[rij] = [];
            for (kolom=0; kolom<=6; kolom++) {
                spelBord[rij][kolom] = 0;
            }
        }

    tekenSpelBord();
    actieveSpeler = 1;
}

function tekenSpelBord() {
    for (kolom=0; kolom<=6; kolom++) {
        for (rij=0; rij<=5; rij++) {
            document.getElementById('square_'+rij+'_'+kolom).innerHTML ="<span class='piece player"+spelBord[rij][kolom]+"'> </span>";
        }
    }
}


