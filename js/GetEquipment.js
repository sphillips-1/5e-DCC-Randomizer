async function getEquipmentList() {
    if (equipmentListCache) {
        return equipmentListCache;
    }
    const weaponResponse = await fetch('https://www.dnd5eapi.co/api/equipment-categories/weapon');
    const armorResponse = await fetch('https://www.dnd5eapi.co/api/equipment-categories/armor');

    if (!weaponResponse.ok || !armorResponse.ok) {
        console.error('Failed to fetch equipment data');
        return [];
    }

    const weaponData = (await weaponResponse.json()).equipment.map(item => ({ ...item, type: 'weapon' }));
    const armorData = (await armorResponse.json()).equipment.map(item => ({ ...item, type: 'armor' }));

    const combinedData = [...weaponData, ...armorData];

    // Fetch details for each item and map to the specified object format
    const detailedData = await Promise.all(
        combinedData.map(async item => {
            const details = await fetch(`https://www.dnd5eapi.co${item.url}`).then(res => res.json());
            if (item.name == 'Trident of Fish Command' || item.name == 'Adamantine Armor' || item.name == 'Javelin of Lightning') {
                console.log(details);
            }
            return {
                name: item.name,
                type: item.type,
                rarity: details.rarity?.name || 'Uncommon',
                category: details.equipment_category?.name || 'Unknown',
                damage: details.damage?.damage_dice || null,
                damageType: details.damage?.damage_type?.name || null,
                armorType: details.armor_category || null,
                acBonus: details.armor_class?.base || null,
                stealthDisadvantage: details.stealth_disadvantage || false,
                description: details.desc?.slice(1).join(' ') || 'No description available.',
            };
        })
    );

    equipmentListCache = detailedData; // Cache the detailed data for future use
    return detailedData; // Return the detailed data
}

async function getEquipment(characterLevel, equipmentListCache) {
    const rarityLevels = {
        1: ['Uncommon'],
        5: ['Uncommon', 'Rare'],
        11: ['Uncommon', 'Rare', 'Very rare'],
        17: ['Uncommon', 'Rare', 'Very rare', 'Legendary']
    };

    // Determine allowed rarities based on character level
    const allowedRarities = characterLevel >= 17
        ? rarityLevels[17]
        : characterLevel >= 11
        ? rarityLevels[11]
        : characterLevel >= 5
        ? rarityLevels[5]
        : rarityLevels[1];

    // Filter items by rarity
    const filteredItems = equipmentListCache.filter(item => {
        const itemRarity = item.rarity || 'Uncommon'; // Default to 'Uncommon' if rarity is missing
        return allowedRarities.includes(itemRarity);
    });

    // Select a random item from the filtered list
    const randomItem = filteredItems[Math.floor(Math.random() * filteredItems.length)];

    return randomItem;
}




