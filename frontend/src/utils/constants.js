const NFTGAME_CONTRACT_ADDRESS = "0x9536221A49e768D1b9E93A33090FB6a28e4B2033";
const DYNAMIC_GAME_FACET_ADDRESS = "0x9536221A49e768D1b9E93A33090FB6a28e4B2033";
const STAKE_FACET_ADDRESS = "0x9536221A49e768D1b9E93A33090FB6a28e4B2033";

const transformCharacterData = (characterData) => {
    return {
        name: characterData.name,
        imageURI: characterData.imageURI,
        hp: characterData.hp.toNumber(),
        maxHp: characterData.maxHp.toNumber(),
        attackDamage: characterData.attackDamage.toNumber(),
        levels: characterData.levels
    }
}

export { NFTGAME_CONTRACT_ADDRESS, transformCharacterData, DYNAMIC_GAME_FACET_ADDRESS, STAKE_FACET_ADDRESS};
