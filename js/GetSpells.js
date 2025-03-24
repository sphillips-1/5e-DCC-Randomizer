async function GetRandomSpell(characterLevel, spellListCache) {
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

    // Fetch the details of the selected spell
    const spellDetails = await getSpellDetails(selectedSpell.url);

    return new Spell(selectedSpell.name, selectedSpell.level, characterLevel, spellDetails);
}

function Spell(spellName, spellLevel, characterLevel, details) {
    this.spellName = spellName;
    this.spellLevel = spellLevel;
    this.characterLevel = characterLevel;
    this.details = details;
}

function SpellDetails(name, level, description, range, components, duration, castingTime) {
    this.name = name;
    this.level = level;
    this.description = description;
    this.range = range;
    this.components = components;
    this.duration = duration;
    this.castingTime = castingTime;
}

async function getSpellDetails(spellUrl) {
    const response = await fetch(`https://www.dnd5eapi.co${spellUrl}`);
    if (!response.ok) {
        return new SpellDetails("Details not available.", "", "", "", "", "", "");
    }
    const spellData = await response.json();
    return new SpellDetails(
        spellData.name,
        spellData.level,
        spellData.desc.join(" "),
        spellData.range,
        spellData.components.join(", "),
        spellData.duration,
        spellData.casting_time
    );
}

async function getSpellList() {
    if (spellListCache) {
        return spellListCache;
    }
    const response = await fetch('https://www.dnd5eapi.co/api/spells');
    if (!response.ok) {
        return [];
    }
    const spellList = await response.json();
    spellListCache = spellList.results;
    return spellListCache;
}