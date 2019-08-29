
function GetLootFormula(challengeRating,d100){
  
  var table = [];
  var object = {ArtAndGemsGP:"", MagicItemDice:"", MagicItemTable:"", MagicItemDice2:"", MagicItemTable2:""};
  var i;
  
    object.ArtAndGemsGP="1";
    table.push(object);

    object.ArtAndGemsGP="2";
    table.push(object);

    console.log(table[0].ArtAndGemsGP);
  
    return table[0].ArtAndGemsGP;
}


