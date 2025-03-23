function GetCrawlLoot(characterLevel, spellListCache, equipmentListCache) {
    const randomEquipment = GetRandomEquipment(equipmentListCache);
    const randomSpell = GetRandomSpell(characterLevel, spellListCache);

    return {
        equipment: randomEquipment,
        spell: randomSpell
    };
}





