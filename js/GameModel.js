export class GameModel
{
    constructor()
    {
        for (var rij=0; rij<=5; rij++) {
            document.writeln("<tr>");
            for (var kolom=0; kolom<=6; kolom++) {
                document.writeln("<td id='square_" + rij + "_"+ kolom +"' class='board_square''></td>" );

            }
            document.writeln("</tr>");
        }
    }
}