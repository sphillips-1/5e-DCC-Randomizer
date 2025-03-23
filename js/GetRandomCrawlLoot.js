function GetCrawlLoot(characterLevel, spellListCache, equipmentListCache) {
    const randomEquipment = GetRandomEquipment(equipmentListCache);
    const randomSpell = GetRandomSpell(characterLevel, spellListCache);

    return {
        equipment: randomEquipment,
        spell: randomSpell
    };
}

function GetRandomEquipment(equipments) {
    const randomIndex = Math.floor(Math.random() * equipments.length);
    return equipments[randomIndex];
}

function GetRandomSpell(characterLevel, spellListCache) {
    let maxSpellLevel;
    if (characterLevel >= 1 && characterLevel <= 2) {
        maxSpellLevel = 1;
    } else if (characterLevel >= 3 && characterLevel <= 4) {
        maxSpellLevel = 2;
    } else if (characterLevel >= 5 && characterLevel <= 6) {
        maxSpellLevel = 3;
    } else if (characterLevel >= 7 && characterLevel <= 8) {
        maxSpellLevel = 4;
    } else if (characterLevel >= 9 && characterLevel <= 10) {
        maxSpellLevel = 5;
    } else if (characterLevel >= 11 && characterLevel <= 12) {
        maxSpellLevel = 6;
    } else if (characterLevel >= 13 && characterLevel <= 14) {
        maxSpellLevel = 7;
    } else if (characterLevel >= 15 && characterLevel <= 16) {
        maxSpellLevel = 8;
    } else if (characterLevel >= 17) {
        maxSpellLevel = 9;
    }

    const filteredSpells = spellListCache.filter(spell => spell.level <= maxSpellLevel);

    if (filteredSpells.length === 0) {
        return null; // No spells found for the given character level or lower
    }

    const randomIndex = Math.floor(Math.random() * filteredSpells.length);
    const selectedSpell = filteredSpells[randomIndex];
    return new Spell(selectedSpell.name, selectedSpell.level, characterLevel);
}

function Spell(spellName, spellLevel, characterLevel) {
    this.spellName = spellName;
    this.spellLevel = spellLevel;
    this.characterLevel = characterLevel;
}

function Equipment(EquipmentName, damage, notes) {
    this.EquipmentName = EquipmentName;
    this.damage = damage;
    this.notes = notes; // notes is now a list of tags
}