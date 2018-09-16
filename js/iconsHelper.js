function getIconImg(name) {
    return "img/icons/" + name + ".png";
}

const NONE = "none";
// const TABS = [["icon_name"],["RegEx"]];

const STANCE = "stance";
const STRIKE = "strike";
const BOOST = "boost";
const COUNTER = "counter";
const TYPES = [[STANCE, STRIKE, BOOST, COUNTER], [STANCE, STRIKE, BOOST, COUNTER]];

const IMMEDIATE = "immediate";
const SWIFT = "swift";
const MOVE = "move";
const STANDARD = "standard";
const FULL = "fullRound";
const FULL_REG = "full[- ]round";
const ACTIONS = [[IMMEDIATE, SWIFT, MOVE, STANDARD, FULL], [IMMEDIATE, SWIFT, MOVE, STANDARD, FULL_REG]];

const MELEE = "melee";
const RANGE = "ranged";
const RANGE_ALT_REG = "([0-9]+)'?";
const MELEE_RANGE = "meleeRange";
const MELEE_RANGE_REG = "(melee.*range|range.*melee)";
const PERSONAL = "personal";
const PERSONAL_REG = "(personal|you|self)";
const RANGES = [[MELEE_RANGE, MELEE, RANGE, PERSONAL, RANGE], [MELEE_RANGE_REG, MELEE, RANGE, PERSONAL_REG, RANGE_ALT_REG]];

const CREATURE = "creature";
const CREATURE_REG = "(creature|enemy|opponents)";
const CURSED_CREATURE = "creatureCursed";
const CURSED_CREATURE_REG = "cursed.*" + CREATURE_REG;
const CREATURE_PERSONAL = "creaturePersonal";
const CREATURE_PERSONAL_REG = CREATURE_REG + ".*" + PERSONAL_REG;
const ALLY = "ally";
const ALLY_REG = "(ally|allies)";
const ALLY_PERSONAL = "allyPersonal";
const ALLY_PERSONAL_REG = "(" + ALLY_REG + ".*" + PERSONAL_REG + "|" + PERSONAL_REG + ".*" + ALLY_REG + ")";
const CREATURE_ALLY = "creatureAlly";
const CREATURE_ALLY_REG = CREATURE_REG + ".*" + ALLY_REG;
const TARGETS = [[CREATURE_PERSONAL, CREATURE_ALLY, CURSED_CREATURE, CREATURE, ALLY_PERSONAL, ALLY, PERSONAL],
    [CREATURE_PERSONAL_REG, CREATURE_ALLY_REG, CURSED_CREATURE_REG, CREATURE_REG, ALLY_PERSONAL_REG, ALLY_REG, PERSONAL_REG]];

const NO_DURATION_REG = "(stance|instant)";

function getIcon(val, tab) {
    if (typeof val === "undefined" || val === null || val === '') {
        return;
    }
    let text = val.toLowerCase();
    let regEx;
    for (let i = 0; i < tab[0].length; i++) {
        regEx = RegExp('.*' + tab[1][i] + '.*');
        if (regEx.test(text)) {
            return getIconImg(tab[0][i]);
        }
    }
    return getIconImg(NONE);
}