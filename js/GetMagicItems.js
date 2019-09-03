function GetMagicItems(LootFormula){
  	var magicItems = [];

  	//Magic Table #1
	var magicItem1Dice = rollAndCombineDice(LootFormula.MagicItemDice);
	var output;
	
	switch (LootFormula.MagicItemTable){
        case "Magic Item Table A":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}
        	break;
        case "Magic Item Table B":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableB(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic Item Table C":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableC(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic Item Table D":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableD(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic Item Table E":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableE(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic Item Table F":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableF(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic Item Table G":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableG(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic Item Table H":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableH(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic Item Table I":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableI(getRandomArbitrary(100)));
    		}	
        	break;
        }
	  


  	//Magic Table #2
  	var magicItem2Dice = rollAndCombineDice(LootFormula.MagicItemDice2);
	switch (LootFormula.MagicItemTable2){
        case "Magic Item Table A":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}
        	break;
        case "Magic Item Table B":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableB(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic Item Table C":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableC(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic Item Table D":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableD(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic Item Table E":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableE(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic Item Table F":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableF(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic Item Table G":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableG(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic Item Table H":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableH(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic Item Table I":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableI(getRandomArbitrary(100)));
    		}	
        	break;
        }
	return magicItems;
  }



function MagicTableA(d100){

	var magicItem;

	if(inRange(d100, 1, 50)) {magicItem =  "Potion of healing";}
	else if(inRange(d100,51,60)) {magicItem =  "Spell scroll (cantrip)";}
	else if(inRange(d100,61,70)){magicItem =  "Potion of climbing";}
	else if(inRange(d100,71,90)){magicItem =  "Spell Scroll (1st level)";}
	else if(inRange(d100,91,94)){magicItem =  "Spell Scroll (2nd level)";}
	else if(inRange(d100,95,98)){magicItem =  "Greater potion of healing";}
	else if(inRange(d100,99,99)){magicItem =  "Bag of holding";}
	else if(inRange(d100,100,100)){magicItem =  "Driftglobe";} 

	return magicItem;
}

function MagicTableB(d100){

	var magicItem;

	if(inRange(d100, 1, 15)) {magicItem =  "Potion of greater healing";}
	else if(inRange(d100, 16, 22)) {magicItem =  "Potion of fire breath";}
	else if(inRange(d100, 23, 29)) {magicItem =  "Potion of resistance";}
	else if(inRange(d100, 30, 34)) {magicItem =  "Ammunition, +1";}
	else if(inRange(d100, 35, 39)) {magicItem =  "Potion of animal friendship";}
	else if(inRange(d100, 40, 44)) {magicItem =  "Potion of hill giant strength";}
	else if(inRange(d100, 45, 49)) {magicItem =  "Potion of growth";}
	else if(inRange(d100, 50, 54)) {magicItem =  "Potion of water breathing";}
	else if(inRange(d100, 55, 59)) {magicItem =  "Spell scroll (2nd level)";}
	else if(inRange(d100, 60, 64)) {magicItem =  "Spell scroll (3rd level)";}
	else if(inRange(d100, 65, 67)) {magicItem =  "Bag of holding";}
	else if(inRange(d100, 68, 70)) {magicItem =  "Keoghtom's ointment";}
	else if(inRange(d100, 71, 73)) {magicItem =  "Oil of slipperiness";}
	else if(inRange(d100, 74, 75)) {magicItem =  "Dust of disappearance";}
	else if(inRange(d100, 76, 77)) {magicItem =  "Dust of dryness";}
	else if(inRange(d100, 78, 79)) {magicItem =  "Dust of sneezing and choking";}
	else if(inRange(d100, 80, 81)) {magicItem =  "Elemental gem";}
	else if(inRange(d100, 82, 83)) {magicItem =  "Philter of love";}
	else if(inRange(d100, 84, 84)) {magicItem =  "Alchemy jug";}
	else if(inRange(d100, 85, 85)) {magicItem =  "Cap of water breathing";}
	else if(inRange(d100, 86, 86)) {magicItem =  "Cloak of the manta ray";}
	else if(inRange(d100, 87, 87)) {magicItem =  "Driftglobe";}
	else if(inRange(d100, 88, 88)) {magicItem =  "Goggles of night";}
	else if(inRange(d100, 89, 89)) {magicItem =  "Helm of comprehending languages";}
	else if(inRange(d100, 90, 90)) {magicItem =  "Immovable rod";}
	else if(inRange(d100, 91, 91)) {magicItem =  "Lantern of revealing";}
	else if(inRange(d100, 92, 92)) {magicItem =  "Mariner's armor";}
	else if(inRange(d100, 93, 93)) {magicItem =  "Mithral armor";}
	else if(inRange(d100, 94, 94)) {magicItem =  "Potion of poison";}
	else if(inRange(d100, 95, 95)) {magicItem =  "Ring of swimming";}
	else if(inRange(d100, 96, 96)) {magicItem =  "Robe of useful items";}
	else if(inRange(d100, 97, 97)) {magicItem =  "Rope of climbing";}
	else if(inRange(d100, 98, 98)) {magicItem =  "Saddle of the cavalier";}
	else if(inRange(d100, 99, 99)) {magicItem =  "Wand of magic detection";}
	else if(inRange(d100, 100, 100)) {magicItem =  "Wand of secrets";}

	return magicItem;
}
function MagicTableC(d100){

	var magicItem;

	if(inRange(d100, 1, 15)) {magicItem =  "Potion of superior healing";}
	else if(inRange(d100, 16, 22)) {magicItem =  "Spell scroll (4th level)";}
	else if(inRange(d100, 23, 27)) {magicItem =  "Ammunition, +2";}
	else if(inRange(d100, 28, 32)) {magicItem =  "Potion of clairvoyance";}
	else if(inRange(d100, 33, 37)) {magicItem =  "Potion of diminution";}
	else if(inRange(d100, 38, 42)) {magicItem =  "Potion of gaseous form";}
	else if(inRange(d100, 43, 47)) {magicItem =  "Potion of frost giant strength";}
	else if(inRange(d100, 48, 52)) {magicItem =  "Potion of stone giant strength";}
	else if(inRange(d100, 53, 57)) {magicItem =  "Potion of heroism";}
	else if(inRange(d100, 58, 62)) {magicItem =  "Potion of invulnerability";}
	else if(inRange(d100, 63, 67)) {magicItem =  "Potion of mind reading";}
	else if(inRange(d100, 68, 72)) {magicItem =  "Spell scroll (5thlevel)";}
	else if(inRange(d100, 73, 75)) {magicItem =  "Elixir of health";}
	else if(inRange(d100, 76, 78)) {magicItem =  "Oil of etherealness";}
	else if(inRange(d100, 79, 81)) {magicItem =  "Potion of fire giant strength";}
	else if(inRange(d100, 82, 84)) {magicItem =  "Quaal's feather token";}
	else if(inRange(d100, 85, 87)) {magicItem =  "Scroll of protection";}
	else if(inRange(d100, 88, 89)) {magicItem =  "Bag of beans";}
	else if(inRange(d100, 90, 91)) {magicItem =  "Bead of force";}
	else if(inRange(d100, 92, 92)) {magicItem =  "Chime of opening";}
	else if(inRange(d100, 93, 93)) {magicItem =  "Decanter of endless water";}
	else if(inRange(d100, 94, 94)) {magicItem =  "Eyes of minute seeing";}
	else if(inRange(d100, 95, 95)) {magicItem =  "Folding boat";}
	else if(inRange(d100, 96, 96)) {magicItem =  "Heward's handy haversack";}
	else if(inRange(d100, 97, 97)) {magicItem =  "Horseshoes of speed";}
	else if(inRange(d100, 98, 98)) {magicItem =  "Necklace of fireballs";}
	else if(inRange(d100, 99, 99)) {magicItem =  "Periapt of health";}
	else if(inRange(d100, 100, 100)) {magicItem =  "Sending Stones";}

	return magicItem;
}
function MagicTableD(d100){

	var magicItem;

	if(inRange(d100, 1, 20)) {magicItem =  "Potion of supreme healing";}
	else if(inRange(d100, 21, 30)) {magicItem =  "Potion of invisibility";}
	else if(inRange(d100, 31, 40)) {magicItem =  "Potion of speed";}
	else if(inRange(d100, 41, 50)) {magicItem =  "Spell scroll (6th level)";}
	else if(inRange(d100, 51, 57)) {magicItem =  "Spell scroll (7th level)";}
	else if(inRange(d100, 58, 62)) {magicItem =  "Ammunition, +3";}
	else if(inRange(d100, 63, 67)) {magicItem =  "Oil of sharpness";}
	else if(inRange(d100, 68, 72)) {magicItem =  "Potion of flying";}
	else if(inRange(d100, 73, 77)) {magicItem =  "Potion of cloud giant strength";}
	else if(inRange(d100, 78, 82)) {magicItem =  "Potion of longevity";}
	else if(inRange(d100, 83, 87)) {magicItem =  "Potion of vitality";}
	else if(inRange(d100, 88, 92)) {magicItem =  "Spell scroll (8th level)";}
	else if(inRange(d100, 93, 95)) {magicItem =  "Horseshoes of a zephyr";}
	else if(inRange(d100, 96, 98)) {magicItem =  "Nolzur's marvelous pigments";}
	else if(inRange(d100, 99, 99)) {magicItem =  "Bag of devouring";}
	else if(inRange(d100, 100, 100)) {magicItem =  "Portable hole";}

	return magicItem;
}
function MagicTableE(d100){

	var magicItem;

	if(inRange(d100, 1, 30)) {magicItem =  "Spell scroll (8th level)";}
	else if(inRange(d100, 31, 55)) {magicItem =  "Potion of storm giant strength";}
	else if(inRange(d100, 56, 70)) {magicItem =  "Poti on of supreme healing";}
	else if(inRange(d100, 71, 85)) {magicItem =  "Spell scroll (9st level)";}
	else if(inRange(d100, 86, 93)) {magicItem =  "Universal solvent";}
	else if(inRange(d100, 94, 98)) {magicItem =  "Arrow of slaying";}
	else if(inRange(d100, 99, 100)) {magicItem =  "Sovereign glue";}

	return magicItem;
}
function MagicTableF(d100){

	var magicItem;

	if(inRange(d100, 1, 15)) {magicItem =  "Weapon, +1";}
	else if(inRange(d100, 16, 18)) {magicItem =  "Shield,+ 1";}
	else if(inRange(d100, 19, 21)) {magicItem =  "Sentinel shield";}
	else if(inRange(d100, 22, 23)) {magicItem =  "Amulet of proof against detection and location";}
	else if(inRange(d100, 24, 25)) {magicItem =  "Boots of elvenkind";}
	else if(inRange(d100, 26, 27)) {magicItem =  "Boots of striding and springing";}
	else if(inRange(d100, 27, 29)) {magicItem =  "Bracers of archery";}
	else if(inRange(d100, 30, 31)) {magicItem =  "Brooch of shielding";}
	else if(inRange(d100, 32, 33)) {magicItem =  "Broom of flying";}
	else if(inRange(d100, 34, 35)) {magicItem =  "Cloak of elvenkind";}
	else if(inRange(d100, 36, 37)) {magicItem =  "Cloak of protection";}
	else if(inRange(d100, 38, 39)) {magicItem =  "Gauntlets of ogre power";}
	else if(inRange(d100, 40, 41)) {magicItem =  "Hat of disguise";}
	else if(inRange(d100, 42, 43)) {magicItem =  "Javelin of lightning";}
	else if(inRange(d100, 44, 45)) {magicItem =  "Pearl of power";}
	else if(inRange(d100, 46, 47)) {magicItem =  "Rod of the pact keeper, + 1";}
	else if(inRange(d100, 48, 49)) {magicItem =  "Slippers of spider climbing";}
	else if(inRange(d100, 50, 51)) {magicItem =  "Staff of the adder";}
	else if(inRange(d100, 52, 53)) {magicItem =  "Staff of the python";}
	else if(inRange(d100, 54, 55)) {magicItem =  "Sword of vengeance";}
	else if(inRange(d100, 56, 57)) {magicItem =  "Trident of fish command";}
	else if(inRange(d100, 58, 59)) {magicItem =  "Wand of magic missiles";}
	else if(inRange(d100, 60, 61)) {magicItem =  "Wand of the war mage, + 1";}
	else if(inRange(d100, 62, 63)) {magicItem =  "Wand of web";}
	else if(inRange(d100, 64, 65)) {magicItem =  "Weapon of warning";}
	else if(inRange(d100, 66, 66)) {magicItem =  "Adamantine armor (chain mail)";}
	else if(inRange(d100, 67, 67)) {magicItem =  "Adamantine armor (chain shirt)";}
	else if(inRange(d100, 68, 68)) {magicItem =  "Adamantine armor (scale mail)";}
	else if(inRange(d100, 69, 69)) {magicItem =  "Bag of tricks (gray)";}
	else if(inRange(d100, 70, 70)) {magicItem =  "Bag of tricks (rust)";}
	else if(inRange(d100, 71, 71)) {magicItem =  "Bag of tricks (tan)";}
	else if(inRange(d100, 72, 72)) {magicItem =  "Boots of the winterlands";}
	else if(inRange(d100, 73, 73)) {magicItem =  "Circlet of blasting";}
	else if(inRange(d100, 74, 74)) {magicItem =  "Deck of illusions";}
	else if(inRange(d100, 75, 75)) {magicItem =  "Eversmoking bottle";}
	else if(inRange(d100, 76, 76)) {magicItem =  "Eyes of charming";}
	else if(inRange(d100, 77, 77)) {magicItem =  "Eyes of the eagle";}
	else if(inRange(d100, 78, 78)) {magicItem =  "Figurine of wondrous power (silver raven)";}
	else if(inRange(d100, 79, 79)) {magicItem =  "Gem of brightness";}
	else if(inRange(d100, 80, 80)) {magicItem =  "Gloves of missile snaring";}
	else if(inRange(d100, 81, 81)) {magicItem =  "Gloves of swimming and climbing";}
	else if(inRange(d100, 82, 82)) {magicItem =  "Gloves of thievery";}
	else if(inRange(d100, 83, 83)) {magicItem =  "Headband of intellect";}
	else if(inRange(d100, 84, 84)) {magicItem =  "Helm of telepathy";}
	else if(inRange(d100, 85, 85)) {magicItem =  "Instrument of the bards (Doss lute)";}
	else if(inRange(d100, 86, 86)) {magicItem =  "Instrument of the bards (Fochlucan bandore)";}
	else if(inRange(d100, 87, 87)) {magicItem =  "Instrument of the bards (Mac-Fuimidh cittern)";}
	else if(inRange(d100, 88, 88)) {magicItem =  "Medallion of thoughts";}
	else if(inRange(d100, 89, 89)) {magicItem =  "Necklace of adaptation";}
	else if(inRange(d100, 90, 90)) {magicItem =  "Periapt of wound closure";}
	else if(inRange(d100, 91, 91)) {magicItem =  "Pipes of haunting";}
	else if(inRange(d100, 92, 92)) {magicItem =  "Pipes of the sewers";}
	else if(inRange(d100, 93, 93)) {magicItem =  "Ring of jumping";}
	else if(inRange(d100, 94, 94)) {magicItem =  "Ring of mind shielding";}
	else if(inRange(d100, 95, 95)) {magicItem =  "Ring of warmth";}
	else if(inRange(d100, 96, 96)) {magicItem =  "Ring of water walking";}
	else if(inRange(d100, 97, 97)) {magicItem =  "Quiver of Ehlonna";}
	else if(inRange(d100, 98, 98)) {magicItem =  "Stone of good luck";}
	else if(inRange(d100, 99, 99)) {magicItem =  "Wind fan";}
	else if(inRange(d100, 100, 100)) {magicItem =  "Winged boots";}

	return magicItem;
}
function MagicTableG(d100){

	var magicItem;

	if(inRange(d100, 1, 100)) {
		magicItem =  "NULL";
	} 
	return magicItem;
}
function MagicTableH(d100){

	var magicItem;

	if(inRange(d100, 1, 10)) {magicItem =  "Weapon, +3";}
	else if(inRange(d100, 11, 12)) {magicItem =  "Amulet of the planes";}
	else if(inRange(d100, 13, 14)) {magicItem =  "Carpet of flying";}
	else if(inRange(d100, 15, 16)) {magicItem =  "Crystal ball (very rare version)";}
	else if(inRange(d100, 17, 18)) {magicItem =  "Ring of regeneration";}
	else if(inRange(d100, 19, 20)) {magicItem =  "Ring of shooting stars";}
	else if(inRange(d100, 21, 22)) {magicItem =  "Ring of telekinesis";}
	else if(inRange(d100, 23, 24)) {magicItem =  "Robe of scintillating colors";}
	else if(inRange(d100, 25, 26)) {magicItem =  "Robe of stars";}
	else if(inRange(d100, 27, 28)) {magicItem =  "Rod of absorption";}
	else if(inRange(d100, 29, 30)) {magicItem =  "Rod of alertness";}
	else if(inRange(d100, 31, 32)) {magicItem =  "Rod of security";}
	else if(inRange(d100, 33, 34)) {magicItem =  "Rod of the pact keeper, +3";}
	else if(inRange(d100, 35, 36)) {magicItem =  "Scimitar of speed";}
	else if(inRange(d100, 37, 38)) {magicItem =  "Shield, +3";}
	else if(inRange(d100, 39, 40)) {magicItem =  "Staff of fire";}
	else if(inRange(d100, 41, 42)) {magicItem =  "Staff of frost";}
	else if(inRange(d100, 43, 44)) {magicItem =  "Staff of power";}
	else if(inRange(d100, 45, 46)) {magicItem =  "Staff of striking";}
	else if(inRange(d100, 47, 48)) {magicItem =  "Staff of thunder and lightning";}
	else if(inRange(d100, 49, 50)) {magicItem =  "Sword of sharpnes";}
	else if(inRange(d100, 51, 52)) {magicItem =  "Wand of polymorph";}
	else if(inRange(d100, 53, 54)) {magicItem =  "Wand of the war mage, + 3";}
	else if(inRange(d100, 55, 55)) {magicItem =  "Adamantine armor (half plate)";}
	else if(inRange(d100, 56, 56)) {magicItem =  "Adamantine armor (plate)";}
	else if(inRange(d100, 57, 57)) {magicItem =  "Animated shield";}
	else if(inRange(d100, 58, 58)) {magicItem =  "Belt of fire giant strength";}
	else if(inRange(d100, 59, 59)) {magicItem =  "Belt of frost (or stone) giant strength";}
	else if(inRange(d100, 60, 60)) {magicItem =  "Armor, + 1 breastplate";}
	else if(inRange(d100, 61, 61)) {magicItem =  "Armor of resistance (breastplate)";}
	else if(inRange(d100, 62, 62)) {magicItem =  "Candle of invocation";}
	else if(inRange(d100, 63, 63)) {magicItem =  "Armor, +2 chain mail";}
	else if(inRange(d100, 64, 64)) {magicItem =  "Armor, +2 chain shirt";}
	else if(inRange(d100, 65, 65)) {magicItem =  "Cloak of arachnida";}
	else if(inRange(d100, 66, 66)) {magicItem =  "Dancing sword";}
	else if(inRange(d100, 67, 67)) {magicItem =  "Demon armor";}
	else if(inRange(d100, 68, 68)) {magicItem =  "Dragon scale mail";}
	else if(inRange(d100, 69, 69)) {magicItem =  "Dwarven plate";}
	else if(inRange(d100, 70, 70)) {magicItem =  "Dwarven thrower";}
	else if(inRange(d100, 71, 71)) {magicItem =  "Efreeti bottle";}
	else if(inRange(d100, 72, 72)) {magicItem =  "Figurine of wondrous power (obsidian steed)";}
	else if(inRange(d100, 73, 73)) {magicItem =  "Frost brand";}
	else if(inRange(d100, 74, 74)) {magicItem =  "Helm of brilliance";}
	else if(inRange(d100, 75, 75)) {magicItem =  "Horn ofValhalla (bronze)";}
	else if(inRange(d100, 76, 76)) {magicItem =  "Instrument of the bards (Anstruthharp)";}
	else if(inRange(d100, 77, 77)) {magicItem =  "loun stone (absorption)";}
	else if(inRange(d100, 78, 78)) {magicItem =  "loun stone (agility)";}
	else if(inRange(d100, 79, 79)) {magicItem =  "loun stone (fortitude)";}
	else if(inRange(d100, 80, 80)) {magicItem =  "loun stone (insight)";}
	else if(inRange(d100, 81, 81)) {magicItem =  "loun stone (intellect)";}
	else if(inRange(d100, 82, 82)) {magicItem =  "loun stone (leadership)";}
	else if(inRange(d100, 83, 83)) {magicItem =  "loun stone (strength)";}
	else if(inRange(d100, 84, 84)) {magicItem =  "Armor, +2 leather";}
	else if(inRange(d100, 85, 85)) {magicItem =  "Manual of bodily health";}
	else if(inRange(d100, 86, 86)) {magicItem =  "Manual of gainful exercise";}
	else if(inRange(d100, 87, 87)) {magicItem =  "Manual of golems";}
	else if(inRange(d100, 88, 88)) {magicItem =  "Manual of quickness of action";}
	else if(inRange(d100, 89, 89)) {magicItem =  "Mirror of life trapping";}
	else if(inRange(d100, 90, 90)) {magicItem =  "Nine lives stealer";}
	else if(inRange(d100, 91, 91)) {magicItem =  "Oathbow";}
	else if(inRange(d100, 92, 92)) {magicItem =  "Armor, +2 scale mail";}
	else if(inRange(d100, 93, 93)) {magicItem =  "Spellguard shield";}
	else if(inRange(d100, 94, 94)) {magicItem =  "Armor, + 1 splint";}
	else if(inRange(d100, 95, 95)) {magicItem =  "Armor of resistance (splint)";}
	else if(inRange(d100, 96, 96)) {magicItem =  "Armor, + 1 studded leather";}
	else if(inRange(d100, 97, 97)) {magicItem =  "Armor of resistance (studded leather)";}
	else if(inRange(d100, 98, 98)) {magicItem =  "Tome of clear thought";}
	else if(inRange(d100, 99, 99)) {magicItem =  "Tome of leadership and influence";}
	else if(inRange(d100, 100, 100)) {magicItem =  "Tome of understanding";}
	return magicItem;
}
function MagicTableI(d100){

	var magicItem;

	if(inRange(d100, 1, 100)) {
		magicItem =  "NULL";
	} 
	return magicItem;
}

function inRange(x, min, max) {
    return min <= x && x <= max;
}

function rollAndCombineDice(dice){
    var diceResults = [];
    var dice;
    var diceFormula = dice.split("d").join(",").split("*").join(",").split(",");
    var numberOfDice = diceFormula[0];
    var diceSize = diceFormula[1];
    for (i = 0; i < numberOfDice; i++) {
        diceResults.push(getRandomArbitrary(diceSize));
    }
    var diceTotal = parseInt(diceResults.reduce((a, b) => a + b, 0));
    if (typeof diceFormula[2] === 'undefined') {
  		diceFormula[2] = 1
	}
    diceTotal = diceTotal * diceFormula[2];
    return diceTotal;
  }
function getRandomArbitrary(max) {
    return Math.floor((Math.random() * max) + 1);
}

