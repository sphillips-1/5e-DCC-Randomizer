function GetCrawlLoot(characterLevel, spellListCache) {
    const randomEquipment = GetRandomEquipment();
    const randomSpell = GetRandomSpell(characterLevel, spellListCache);

    return {
        equipment: randomEquipment,
        spell: randomSpell
    };
}

function GetRandomEquipment() {
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
    this.notes = notes;
}

const equipments = [
    new Equipment("Club", "1d4 bludgeoning", "Light"),
    new Equipment("Dagger", "1d4 piercing", "Finesse, light, thrown (range 20/60)"),
    new Equipment("Greatclub", "1d8 bludgeoning", "Two-handed"),
    new Equipment("Handaxe", "1d6 slashing", "Light, thrown (range 20/60)"),
    new Equipment("Javelin", "1d6 piercing", "Thrown (range 30/120)"),
    new Equipment("Light hammer", "1d4 bludgeoning", "Light, thrown (range 20/60)"),
    new Equipment("Mace", "1d6 bludgeoning", "—"),
    new Equipment("Quarterstaff", "1d6 bludgeoning", "Versatile (1d8)"),
    new Equipment("Sickle", "1d4 slashing", "Light"),
    new Equipment("Spear", "1d6 piercing", "Thrown (range 20/60), versatile (1d8)"),
    new Equipment("Crossbow, light", "1d8 piercing", "Ammunition (range 80/320), loading, two-handed"),
    new Equipment("Dart", "1d4 piercing", "Finesse, thrown (range 20/60)"),
    new Equipment("Shortbow", "1d6 piercing", "Ammunition (range 80/320), two-handed"),
    new Equipment("Sling", "1d4 bludgeoning", "Ammunition (range 30/120)"),
    new Equipment("Battleaxe", "1d8 slashing", "Versatile (1d10)"),
    new Equipment("Flail", "1d8 bludgeoning", "—"),
    new Equipment("Glaive", "1d10 slashing", "Heavy, reach, two-handed"),
    new Equipment("Greataxe", "1d12 slashing", "Heavy, two-handed"),
    new Equipment("Greatsword", "2d6 slashing", "Heavy, two-handed"),
    new Equipment("Halberd", "1d10 slashing", "Heavy, reach, two-handed"),
    new Equipment("Lance", "1d12 piercing", "Reach, special"),
    new Equipment("Longsword", "1d8 slashing", "Versatile (1d10)"),
    new Equipment("Maul", "2d6 bludgeoning", "Heavy, two-handed"),
    new Equipment("Morningstar", "1d8 piercing", "—"),
    new Equipment("Pike", "1d10 piercing", "Heavy, reach, two-handed"),
    new Equipment("Rapier", "1d8 piercing", "Finesse"),
    new Equipment("Scimitar", "1d6 slashing", "Finesse, light"),
    new Equipment("Shortsword", "1d6 piercing", "Finesse, light"),
    new Equipment("Trident", "1d6 piercing", "Thrown (range 20/60), versatile (1d8)"),
    new Equipment("War pick", "1d8 piercing", "—"),
    new Equipment("Warhammer", "1d8 bludgeoning", "Versatile (1d10)"),
    new Equipment("Whip", "1d4 slashing", "Finesse, reach"),
    new Equipment("Blowgun", "1 piercing", "Ammunition (range 25/100), loading"),
    new Equipment("Crossbow, hand", "1d6 piercing", "Ammunition (range 30/120), light, loading"),
    new Equipment("Crossbow, heavy", "1d10 piercing", "Ammunition (range 100/400), heavy, loading, two-handed"),
    new Equipment("Longbow", "1d8 piercing", "Ammunition (range 150/600), heavy, two-handed"),
    new Equipment("Net", "0", "Special, thrown (range 5/15)"),
    new Equipment("Padded Armor", "0", "Light,AC = 11 + Dex modifier,Stealth Disadvantage"),
    new Equipment("Leather Armor", "0", "Light,AC = 11 + Dex modifier"),
    new Equipment("Studded leather Armor", "0", "Light,AC = 12 + Dex modifier"),
    new Equipment("Hide Armor", "0", "Medium,AC = 12 + Dex modifier (max 2)"),
    new Equipment("Chain shirt Armor", "0", "Medium,AC = 13 + Dex modifier (max 2)"),
    new Equipment("Scale mail Armor", "0", "Medium,AC = 14 + Dex modifier (max 2),Stealth Disadvantage"),
    new Equipment("Breastplate", "0", "Medium,AC = 14 + Dex modifier (max 2)"),
    new Equipment("Half plate Armor", "0", "Medium,AC = 15 + Dex modifier (max 2),Stealth Disadvantage"),
    new Equipment("Ring mail Armor", "0", "Heavy,AC = 14,Stealth Disadvantage"),
    new Equipment("Chain mail Armor", "0", "Heavy,AC = 16,Str 13,Stealth Disadvantage"),
    new Equipment("Splint Armor", "0", "Heavy,AC = 17,Str 15,Stealth Disadvantage"),
    new Equipment("Plate Armor", "0", "Heavy,AC = 18,Str 15,Stealth Disadvantage"),
    new Equipment("Shield", "0", "Shield,+2 AC"),
];