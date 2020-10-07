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
			kiesDeBeurt(); 
			}
						
			function tekenSpelBord() {
				controleerWinnaar(); 
				for (kolom=0; kolom<=6; kolom++) {
					for (rij=0; rij<=5; rij++) {
						document.getElementById('square_'+rij+'_'+kolom).innerHTML ="<span class='piece player"+spelBord[rij][kolom]+"'> </span>";
					}	
				}
			}
			
			function controleerWinnaar() {	
				//check horizontaal link naar rechts				
				for (i=1; i<=2; i++) {
					
					for (kolom = 0; kolom <=3; kolom++) {
						for (rij = 0; rij <=5; rij++) {
							if (spelBord[rij][kolom] == i) {
								if ((spelBord[rij][kolom+1] == i) && (spelBord[rij][kolom+2] == i) && (spelBord[rij][kolom+3] == i)) {
									stopSpel(i);
									return true; 
								}
							}
						}
					}
				}
				
				//check veritcaal van boven naar beneden
				for (i=1; i<=2; i++) {
					
					for (kolom = 0; kolom <=6; kolom++) {
						for (rij = 0; rij <=2; rij++) {
						
							if (spelBord[rij][kolom] == i) {
								if ((spelBord[rij+1][kolom] == i) && (spelBord[rij+2][kolom] == i) && (spelBord[rij+3][kolom] == i)) {
									stopSpel(i); 
									return true; 
								}
							}
						}
					}
				}
				
				//check diagonaal naar beneden
				for (i=1; i<=2; i++) {
					for (kolom = 0; kolom <=3; kolom++) {
						for (rij = 0; rij <=2; rij++) {							
							if (spelBord[rij][kolom] == i) {
								if ((spelBord[rij+1][kolom+1] == i) && (spelBord[rij+2][kolom+2] == i) && (spelBord[rij+3][kolom+3] == i)) {
									stopSpel(i);
									return true;
								}
							}
						}
					}
				}
								
				//check diagonaal naar boven
				for (i=1; i<=2; i++) {					
					for (kolom = 0; kolom <=3; kolom++) {					
						for (rij = 3; rij <=5; rij++) {					
							if (spelBord[rij][kolom] == i) {
								if ((spelBord[rij-1][kolom+1] == i) && (spelBord[rij-2][kolom+2] == i) && (spelBord[rij-3][kolom+3] == i)) {
									stopSpel(i);
									return true;
								}
							}
						}
					}
				}
			}
			
            /* Functie stopSpel zorgt er voor dat het spel niet verder gaat als een speler gewonnen heeft */
			function stopSpel(spelerGewonnen) {
				spelActief = false; 
				document.getElementById('game_info').innerHTML = "De winnaar is: Speler " + spelerGewonnen; 
			}
			
			/* Functie kiesDeBeurt laat zien welke speler aan de beurt is */
			function kiesDeBeurt() {
				if (spelActief) { 
					document.getElementById('game_info').innerHTML = "Het is de beurt aan: Speler " + actieveSpeler + " <span class='player"+actieveSpeler+"'>(" + kleurSpeler[actieveSpeler] + ")</span>";
				}
			}			
			
			/* Functie laatVallen kiest het eerste beschikbare vakje vanaf onder gerekend */
			function laatVallen (kolom) {
					
					for (rij=5; rij>=0; rij--) { 
						if (spelBord[rij][kolom] == 0) {							
							spelBord[rij][kolom] = actieveSpeler;
							tekenSpelBord(); 							
							if (actieveSpeler == 1) {
								actieveSpeler = 2;
							} else {
								actieveSpeler = 1;
							}
														
							kiesDeBeurt();
							return true;
						}
					}
			}