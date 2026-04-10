export function raritiesMapper(rarities: any){
    let result = []
    if(rarities.common === true){
        result.push('common')
    }
    if(rarities.uncommon === true){
        result.push("uncommon")
    }
    if(rarities.rare === true){
        result.push("rare")
    }
    if(rarities.mythic === true){
        result.push("mythic")
    }
    return result;
}