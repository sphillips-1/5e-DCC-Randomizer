function GetLootFormula(challengeRating, d100) {

	var lootFormula;
	switch (challengeRating) {
		case "Challenge 0-4":
			lootFormula = CR4LootTable(d100);
			break;
		case "Challenge 5-10":
			lootFormula = CR10LootTable(d100);
			break;
		case "Challenge 11-16":
			lootFormula = CR16LootTable(d100);
			break;
		case "Challenge 17+":
			lootFormula = CR17LootTable(d100);
			break;
	}

	return lootFormula;
}

function createFormulaObject(varArtAndGemsGP, varMagicItemDice, varMagicItemTable, varMagicItemDice2, varMagicItemTable2) {

	var object = {
		ArtAndGemsGP: varArtAndGemsGP,
		MagicItemDice: varMagicItemDice,
		MagicItemTable: varMagicItemTable,
		MagicItemDice2: varMagicItemDice2,
		MagicItemTable2: varMagicItemTable2
	};
	return object;
}

function inRange(x, min, max) {
	return min <= x && x <= max;
}

function CR4LootTable(d100) {

	var lootFormula;

	if (inRange(d100, 1, 6)) {
		lootFormula = createFormulaObject("", "", "", "", "");
	} else if (inRange(d100, 7, 16)) {
		lootFormula = createFormulaObject("2d6*10", "", "", "", "");
	} else if (inRange(d100, 17, 26)) {
		lootFormula = createFormulaObject("2d4*25", "", "", "", "");
	} else if (inRange(d100, 27, 36)) {
		lootFormula = createFormulaObject("2d6*50", "", "", "", "");
	} else if (inRange(d100, 37, 44)) {
		lootFormula = createFormulaObject("2d6*10", "1d6", "Magic Item Table A", "", "");
	} else if (inRange(d100, 45, 52)) {
		lootFormula = createFormulaObject("2d4*25", "1d6", "Magic Item Table A", "", "");
	} else if (inRange(d100, 53, 60)) {
		lootFormula = createFormulaObject("2d6*50", "1d6", "Magic Item Table A", "", "");
	} else if (inRange(d100, 61, 65)) {
		lootFormula = createFormulaObject("2d6*10", "1d4", "Magic Item Table B", "", "");
	} else if (inRange(d100, 66, 70)) {
		lootFormula = createFormulaObject("2d4*25", "1d4", "Magic Item Table B", "", "");
	} else if (inRange(d100, 71, 75)) {
		lootFormula = createFormulaObject("2d6*50", "1d4", "Magic Item Table B", "", "");
	} else if (inRange(d100, 76, 78)) {
		lootFormula = createFormulaObject("2d4*10", "1d4", "Magic Item Table C", "", "");
	} else if (inRange(d100, 79, 80)) {
		lootFormula = createFormulaObject("2d4*25", "1d4", "Magic Item Table C", "", "");
	} else if (inRange(d100, 81, 85)) {
		lootFormula = createFormulaObject("2d6*50", "1d4", "Magic Item Table C", "", "");
	} else if (inRange(d100, 86, 92)) {
		lootFormula = createFormulaObject("2d4*25", "1d4", "Magic Item Table F", "", "");
	} else if (inRange(d100, 93, 97)) {
		lootFormula = createFormulaObject("2d6*50", "1d4", "Magic Item Table F", "", "");
	} else if (inRange(d100, 98, 99)) {
		lootFormula = createFormulaObject("2d4*25", "1d1", "Magic Item Table G", "", "");
	} else if (inRange(d100, 100, 100)) {
		lootFormula = createFormulaObject("2d6*50", "1d1", "Magic Item Table G", "", "");
	}

	return lootFormula;
}

function CR10LootTable(d100) {
	var lootFormula;

	if (inRange(d100, 1, 4)) {
		lootFormula = createFormulaObject("", "", "", ",");
	} else if (inRange(d100, 5, 10)) {
		lootFormula = createFormulaObject("2d4*25", "", "", ",");
	} else if (inRange(d100, 11, 16)) {
		lootFormula = createFormulaObject("3d6*50", "", "", ",");
	} else if (inRange(d100, 17, 22)) {
		lootFormula = createFormulaObject("3d6*100", "", "", ",");
	} else if (inRange(d100, 23, 28)) {
		lootFormula = createFormulaObject("2d4*25", "", "", ",");
	} else if (inRange(d100, 29, 32)) {
		lootFormula = createFormulaObject("2d4*25", "1d6", "Magic Item Table A", "", "");
	} else if (inRange(d100, 33, 36)) {
		lootFormula = createFormulaObject("3d6*50", "1d6", "Magic Item Table A", "", "");
	} else if (inRange(d100, 37, 40)) {
		lootFormula = createFormulaObject("3d6*100", "1d6", "Magic Item Table A", "", "");
	} else if (inRange(d100, 41, 44)) {
		lootFormula = createFormulaObject("2d4*250", "1d6", "Magic Item Table A", "", "");
	} else if (inRange(d100, 45, 49)) {
		lootFormula = createFormulaObject("2d4*25", "1d4", "Magic Item Table B", "", "");
	} else if (inRange(d100, 50, 54)) {
		lootFormula = createFormulaObject("3d6*50", "1d4", "Magic Item Table B", "", "");
	} else if (inRange(d100, 55, 59)) {
		lootFormula = createFormulaObject("3d6*100", "1d4", "Magic Item Table B", "", "");
	} else if (inRange(d100, 60, 63)) {
		lootFormula = createFormulaObject("2d4*250", "1d4", "Magic Item Table B", "", "");
	} else if (inRange(d100, 64, 66)) {
		lootFormula = createFormulaObject("2d4*25", "1d4", "Magic Item Table C", "", "");
	} else if (inRange(d100, 67, 69)) {
		lootFormula = createFormulaObject("3d6*50", "1d4", "Magic Item Table C", "", "");
	} else if (inRange(d100, 70, 72)) {
		lootFormula = createFormulaObject("3d6*100", "1d4", "Magic Item Table C", "", "");
	} else if (inRange(d100, 73, 74)) {
		lootFormula = createFormulaObject("2d4*250", "1d4", "Magic Item Table C", "", "");
	} else if (inRange(d100, 75, 76)) {
		lootFormula = createFormulaObject("2d4*25", "1d1", "Magic Item Table D", "", "");
	} else if (inRange(d100, 77, 78)) {
		lootFormula = createFormulaObject("3d6*50", "1d1", "Magic Item Table D", "", "");
	} else if (inRange(d100, 79, 79)) {
		lootFormula = createFormulaObject("3d6*100", "1d1", "Magic Item Table D", "", "");
	} else if (inRange(d100, 80, 80)) {
		lootFormula = createFormulaObject("2d4*250", "1d1", "Magic Item Table D", "", "");
	} else if (inRange(d100, 81, 84)) {
		lootFormula = createFormulaObject("2d4*25", "1d4", "Magic Item Table F", "", "");
	} else if (inRange(d100, 85, 88)) {
		lootFormula = createFormulaObject("3d6*50", "1d4", "Magic Item Table F", "", "");
	} else if (inRange(d100, 89, 91)) {
		lootFormula = createFormulaObject("3d6*100", "1d4", "Magic Item Table F", "", "");
	} else if (inRange(d100, 92, 94)) {
		lootFormula = createFormulaObject("2d4*250", "1d4", "Magic Item Table F", "", "");
	} else if (inRange(d100, 95, 96)) {
		lootFormula = createFormulaObject("3d6*100", "1d4", "Magic Item Table G", "", "");
	} else if (inRange(d100, 97, 98)) {
		lootFormula = createFormulaObject("2d4*250", "1d6", "Magic Item Table G", "", "");
	} else if (inRange(d100, 99, 99)) {
		lootFormula = createFormulaObject("3d6*100", "1d1", "Magic Item Table H", "", "");
	} else if (inRange(d100, 100, 100)) {
		lootFormula = createFormulaObject("2d4*250", "1d1", "Magic Item Table H", "", "");
	}


	return lootFormula;
}

function CR16LootTable(d100) {
	var lootFormula;

	if (inRange(d100, 1, 3)) {
		lootFormula = createFormulaObject("", "", "", "", "");
	} else if (inRange(d100, 4, 6)) {
		lootFormula = createFormulaObject("2d4*250", "", "", "", "");
	} else if (inRange(d100, 7, 10)) {
		lootFormula = createFormulaObject("2d4*750", "", "", "", "");
	} else if (inRange(d100, 11, 12)) {
		lootFormula = createFormulaObject("3d6*500", "", "", "", "");
	} else if (inRange(d100, 13, 15)) {
		lootFormula = createFormulaObject("3d6*1000", "", "", "", "");
	} else if (inRange(d100, 16, 19)) {
		lootFormula = createFormulaObject("2d4*250", "1d4", "Magic Item Table A", "1d6", "Magic Item Table B");
	} else if (inRange(d100, 20, 23)) {
		lootFormula = createFormulaObject("2d4*750", "1d4", "Magic Item Table A", "1d6", "Magic Item Table B");
	} else if (inRange(d100, 24, 26)) {
		lootFormula = createFormulaObject("3d6*500", "1d4", "Magic Item Table A", "1d6", "Magic Item Table B");
	} else if (inRange(d100, 27, 29)) {
		lootFormula = createFormulaObject("3d6*1000", "1d4", "Magic Item Table A", "1d6", "Magic Item Table B");
	} else if (inRange(d100, 30, 35)) {
		lootFormula = createFormulaObject("2d4*250", "1d6", "Magic Item Table C", "", "");
	} else if (inRange(d100, 36, 40)) {
		lootFormula = createFormulaObject("2d4*750", "1d6", "Magic Item Table C", "", "");
	} else if (inRange(d100, 41, 45)) {
		lootFormula = createFormulaObject("3d6*500", "1d6", "Magic Item Table C", "", "");
	} else if (inRange(d100, 46, 50)) {
		lootFormula = createFormulaObject("3d6*1000", "1d6", "Magic Item Table C", "", "");
	} else if (inRange(d100, 51, 54)) {
		lootFormula = createFormulaObject("2d4*250", "1d4", "Magic Item Table D", "", "");
	} else if (inRange(d100, 55, 58)) {
		lootFormula = createFormulaObject("2d4*750", "1d4", "Magic Item Table D", "", "");
	} else if (inRange(d100, 59, 62)) {
		lootFormula = createFormulaObject("3d6*500", "1d4", "Magic Item Table D", "", "");
	} else if (inRange(d100, 63, 66)) {
		lootFormula = createFormulaObject("3d6*1000", "1d4", "Magic Item Table D", "", "");
	} else if (inRange(d100, 67, 68)) {
		lootFormula = createFormulaObject("2d4*250", "1d1", "Magic Item Table E", "", "");
	} else if (inRange(d100, 69, 70)) {
		lootFormula = createFormulaObject("2d4*750", "1d1", "Magic Item Table E", "", "");
	} else if (inRange(d100, 71, 72)) {
		lootFormula = createFormulaObject("3d6*500", "1d1", "Magic Item Table E", "", "");
	} else if (inRange(d100, 73, 74)) {
		lootFormula = createFormulaObject("3d6*1000", "1d1", "Magic Item Table E", "", "");
	} else if (inRange(d100, 75, 76)) {
		lootFormula = createFormulaObject("2d4*250", "1d1", "Magic Item Table F", "1d4", "Magic Item Table G");
	} else if (inRange(d100, 77, 78)) {
		lootFormula = createFormulaObject("2d4*750", "1d1", "Magic Item Table F", "1d4", "Magic Item Table G");
	} else if (inRange(d100, 79, 80)) {
		lootFormula = createFormulaObject("3d6*500", "1d1", "Magic Item Table F", "1d4", "Magic Item Table G");
	} else if (inRange(d100, 81, 82)) {
		lootFormula = createFormulaObject("3d6*1000", "1d1", "Magic Item Table F", "1d4", "Magic Item Table G");
	} else if (inRange(d100, 83, 85)) {
		lootFormula = createFormulaObject("2d4*250", "1d4", "Magic Item Table H", "", "");
	} else if (inRange(d100, 86, 88)) {
		lootFormula = createFormulaObject("2d4*750", "1d4", "Magic Item Table H", "", "");
	} else if (inRange(d100, 89, 90)) {
		lootFormula = createFormulaObject("3d6*500", "1d4", "Magic Item Table H", "", "");
	} else if (inRange(d100, 91, 92)) {
		lootFormula = createFormulaObject("3d6*1000", "1d4", "Magic Item Table H", "", "");
	} else if (inRange(d100, 93, 94)) {
		lootFormula = createFormulaObject("2d4*250", "1d1", "Magic Item Table I", "", "");
	} else if (inRange(d100, 95, 96)) {
		lootFormula = createFormulaObject("3d6*500", "1d1", "Magic Item Table I", "", "");
	} else if (inRange(d100, 97, 98)) {
		lootFormula = createFormulaObject("3d6*1000", "1d1", "Magic Item Table I", "", "");
	} else if (inRange(d100, 99, 100)) {
		lootFormula = createFormulaObject("3d6*1000", "1d1", "Magic Item Table I", "", "");
	}


	return lootFormula;
}

function CR17LootTable(d100) {
	var lootFormula;

	if (inRange(d100, 1, 2)) {
		lootFormula = createFormulaObject("", "", "", "", "");
	} else if (inRange(d100, 3, 5)) {
		lootFormula = createFormulaObject("3d6*1000", "1d8", "Magic Item Table C", "", "");
	} else if (inRange(d100, 6, 8)) {
		lootFormula = createFormulaObject("1d10*2500", "1d8", "Magic Item Table C", "", "");
	} else if (inRange(d100, 9, 11)) {
		lootFormula = createFormulaObject("1d4*7500", "1d8", "Magic Item Table C", "", "");
	} else if (inRange(d100, 12, 14)) {
		lootFormula = createFormulaObject("1d8*5000", "1d8", "Magic Item Table C", "", "");
	} else if (inRange(d100, 15, 22)) {
		lootFormula = createFormulaObject("3d6*1000", "1d6", "Magic Item Table D", "", "");
	} else if (inRange(d100, 23, 30)) {
		lootFormula = createFormulaObject("1d10*2500", "1d6", "Magic Item Table D", "", "");
	} else if (inRange(d100, 31, 38)) {
		lootFormula = createFormulaObject("1d4*7500", "1d6", "Magic Item Table D", "", "");
	} else if (inRange(d100, 39, 46)) {
		lootFormula = createFormulaObject("1d8*5000", "1d6", "Magic Item Table D", "", "");
	} else if (inRange(d100, 47, 52)) {
		lootFormula = createFormulaObject("3d6*1000", "1d6", "Magic Item Table E", "", "");
	} else if (inRange(d100, 53, 58)) {
		lootFormula = createFormulaObject("1d10*2500", "1d6", "Magic Item Table E", "", "");
	} else if (inRange(d100, 59, 63)) {
		lootFormula = createFormulaObject("1d4*7500", "1d6", "Magic Item Table E", "", "");
	} else if (inRange(d100, 64, 68)) {
		lootFormula = createFormulaObject("1d8*5000", "1d6", "Magic Item Table E", "", "");
	} else if (inRange(d100, 69, 69)) {
		lootFormula = createFormulaObject("3d6*1000", "1d4", "Magic Item Table G", "", "");
	} else if (inRange(d100, 70, 70)) {
		lootFormula = createFormulaObject("1d10*2500", "1d4", "Magic Item Table G", "", "");
	} else if (inRange(d100, 71, 71)) {
		lootFormula = createFormulaObject("1d4*7500", "1d4", "Magic Item Table G", "", "");
	} else if (inRange(d100, 72, 72)) {
		lootFormula = createFormulaObject("1d8*5000", "1d4", "Magic Item Table G", "", "");
	} else if (inRange(d100, 73, 74)) {
		lootFormula = createFormulaObject("3d6*1000", "1d4", "Magic Item Table H", "", "");
	} else if (inRange(d100, 75, 76)) {
		lootFormula = createFormulaObject("ld10*2500", "1d4", "Magic Item Table H", "", "");
	} else if (inRange(d100, 77, 78)) {
		lootFormula = createFormulaObject("1d4*7500", "1d4", "Magic Item Table H", "", "");
	} else if (inRange(d100, 79, 80)) {
		lootFormula = createFormulaObject("1d8*5000", "1d4", "Magic Item Table H", "", "");
	} else if (inRange(d100, 81, 85)) {
		lootFormula = createFormulaObject("3d6*1000", "1d4", "Magic Item Table I", "", "");
	} else if (inRange(d100, 86, 90)) {
		lootFormula = createFormulaObject("1d10*2500", "1d4", "Magic Item Table I", "", "");
	} else if (inRange(d100, 91, 95)) {
		lootFormula = createFormulaObject("1d4*7500", "1d1", "Magic Item Table F", "1d4", "Magic Item Table G");
	} else if (inRange(d100, 96, 100)) {
		lootFormula = createFormulaObject("1d8*5000", "1d4", "Magic Item Table I", "", "");
	}

	return lootFormula;
}