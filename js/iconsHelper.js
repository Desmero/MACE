function getIconImg(name) {
    return "img/icons/" + name + ".png";
}

const NONE = "none";
// const TABS = [["icon_name"],["RegEx"]];

const STANCE = "stance";
const STRIKE = "strike";
const BOOST = "boost";
const COUNTER = "counter";
const TYPES= [[STANCE, STRIKE, BOOST, COUNTER],[STANCE, STRIKE, BOOST, COUNTER]];

const IMMEDIATE = "immediate";
const SWIFT = "swift";
const MOUVEMENT = "move";
const STANDARD = "standard";
const FULL = "fullRound";
const FULL_REG = "full-round";
const ACTIONS= [[IMMEDIATE, SWIFT, MOUVEMENT, STANDARD, FULL],[IMMEDIATE, SWIFT, MOUVEMENT, STANDARD, FULL_REG]];

function getIcon(val, tab) {
    if (val === null || val === '') {
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