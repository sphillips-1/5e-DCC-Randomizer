function GetLootFormula(challengeRating,d100){

  var table;
  switch (challengeRating){
        case "Challenge 0-4":
        	table = CR4LootTable();
        	break;
        case "Challenge 5-10":
          table = CR10LootTable();
        	break;
        case "Challenge 11-16":
          table = CR16LootTable();
        	break;
        case "Challenge 17+":
          table = CR17LootTable();
        	break;
        }
        
        var lootFormula = table[d100-1];
        console.log("testing lootformula");
        console.log(JSON.stringify(lootFormula.ArtAndGemsGP));
        console.log("ending test on lootformula");
        return lootFormula;
}

//var CR4LootTable = [";|",";|",";|",";|",";|",";|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*10;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table C","2d6*10;1d4|Magic ltem Table C","2d6*10;1d4|Magic ltem Table C","2d4*25;1d4|Magic ltem Table C","2d4*25;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d4*25;1d1|Magic ltem Table G","2d4*25;1d1|Magic ltem Table G","2d6*50;1d1|Magic ltem Table G"];
var CR10LootTable = [];
var CR16LootTable = [];
var CR17LootTable = [];


function CR4LootTable(){

  var table = [];
  var object = {ArtAndGemsGP:"", MagicItemDice:"", MagicItemTable:"", MagicItemDice2:"", MagicItemTable2:""};
  var i;
    
  for (; i < 6; i++) {
    
    object.ArtAndGemsGP="";
    object.MagicItemDice="";
    object.MagicItemTable=""; 
    object.MagicItemDice2=""; 
    object.MagicItemTable2="";

    table.push(object)
  }
  /*
  for (; i < 10; i++) {
    object.ArtAndGemsGP="2d6*10";
    object.MagicItemDice="";
    object.MagicItemTable=""; 
    object.MagicItemDice2=""; 
    object.MagicItemTable2="";

    table.push(object)
  }
  for (; i < 10; i++) {
    object.ArtAndGemsGP="2d4*25";
    object.MagicItemDice="";
    object.MagicItemTable=""; 
    object.MagicItemDice2=""; 
    object.MagicItemTable2="";

    table.push(object)
  }
  for (; i < 10; i++) {
    object.ArtAndGemsGP="2d6*50";
    object.MagicItemDice="";
    object.MagicItemTable=""; 
    object.MagicItemDice2=""; 
    object.MagicItemTable2="";

    table.push(object)
  }
  
  for (; i < 8; i++) {
    
    object.ArtAndGemsGP="2d6*10";
    object.MagicItemDice="1d6";
    object.MagicItemTable="Magic Item Table A"; 
    object.MagicItemDice2=""; 
    object.MagicItemTable2="";

    table.push(object)
  }
  for (; i < 8; i++) {
    
    object.ArtAndGemsGP="2d4*25";
    object.MagicItemDice="1d6";
    object.MagicItemTable="Magic Item Table A"; 
    object.MagicItemDice2=""; 
    object.MagicItemTable2="";

    table.push(object)
  }
  for (; i < 8; i++) {
    
    object.ArtAndGemsGP="2d6*50";
    object.MagicItemDice="1d6";
    object.MagicItemTable="Magic Item Table A"; 
    object.MagicItemDice2=""; 
    object.MagicItemTable2="";

    table.push(object)
  }
  for (; i < 5; i++) {
    object.ArtAndGemsGP="2d6*10";
    object.MagicItemDice="1d4";
    object.MagicItemTable="Magic ltem Table B"; 
    object.MagicItemDice2=""; 
    object.MagicItemTable2="";

    table.push(object)
  }
  for (; i < 5; i++) {
    object.ArtAndGemsGP="2d4*25";
    object.MagicItemDice="1d4";
    object.MagicItemTable="Magic ltem Table B"; 
    object.MagicItemDice2=""; 
    object.MagicItemTable2="";

    table.push(object)
  }
  for (; i < 5; i++) {
    object.ArtAndGemsGP="2d6*50";
    object.MagicItemDice="1d4";
    object.MagicItemTable="Magic ltem Table B"; 
    object.MagicItemDice2=""; 
    object.MagicItemTable2="";

    table.push(object)
  }
  for (; i < 5; i++) {
    object.ArtAndGemsGP="2d4*25";
    object.MagicItemDice="1d4";
    object.MagicItemTable="Magic ltem Table C"; 
    object.MagicItemDice2=""; 
    object.MagicItemTable2="";

    table.push(object)
  }
  for (; i < 5; i++) {
    object.ArtAndGemsGP="2d6*50";
    object.MagicItemDice="1d4";
    object.MagicItemTable="Magic ltem Table C"; 
    object.MagicItemDice2=""; 
    object.MagicItemTable2="";

    table.push(object)
  }
  for (; i < 7; i++) {
    object.ArtAndGemsGP="2d4*25";
    object.MagicItemDice="1d4";
    object.MagicItemTable="Magic ltem Table F"; 
    object.MagicItemDice2=""; 
    object.MagicItemTable2="";

    table.push(object)
  }
  for (; i < 5; i++) {
    object.ArtAndGemsGP="2d6*50";
    object.MagicItemDice="1d4";
    object.MagicItemTable="Magic ltem Table F"; 
    object.MagicItemDice2=""; 
    object.MagicItemTable2="";

    table.push(object)
  }  
  for (; i < 2; i++) {
    object.ArtAndGemsGP="2d4*25";
    object.MagicItemDice="1d1";
    object.MagicItemTable="Magic ltem Table G"; 
    object.MagicItemDice2=""; 
    object.MagicItemTable2="";

    table.push(object)
  } 
  for (; i < 1; i++) {
    object.ArtAndGemsGP="2d6*50";
    object.MagicItemDice="1d1";
    object.MagicItemTable="Magic ltem Table G"; 
    object.MagicItemDice2=""; 
    object.MagicItemTable2="";

    table.push(object)
  }
  */
  return table;
}
