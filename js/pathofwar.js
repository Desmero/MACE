$(function () {
    $(".card").draggable();
});

$(function () {
    $(document).tooltip();
});

function readJSON(file) {
    var request = new XMLHttpRequest();
    request.open('GET', file, false);
    request.send(null);
    if (request.status == 200)
        return request.responseText;
};

function getTarget(name) {
    if (n = name.toLowerCase().startsWith("area")) {
        return "area";
    }
    return name;
}

function getImg(name) {
    var result = name.replace(/\s/g, '').toLowerCase();
    result = "img/icons/" + result + ".png";
    return result;
}

function getBgImg(name) {
    var result = name.replace(/\s/g, '').toLowerCase();
    result = 'url("img/background/' + result + '.jpg")';

    return result;
}

var data;
var size;

function load() {
    var text = $("#menu").val();
    data = JSON.parse(text);
    loadData();

}

function nettoyer() {
    for (i = 0; i < size; i++) {
        $("#" + i).remove();
    }
}


function exporter() {
    $("#menu").val(JSON.stringify(data));
}

function tryParse() {
    var line = "Dimensional Strike@Discipline: Veiled Moon (Strike); Level: 1@Initiation Action: 1 standard action@Range: Melee or ranged attack@Target: One creature@Duration: Instant@DESCRIPTION@By shifting slightly between two worlds, the disciple confuses the senses of his foe so he may land his attack more easily. The initiator initiating this strike causes his foe to be flat-footed to this attack.@Back to Top@Disturbing Blow@Discipline: Veiled Moon (Strike) [mind-affecting]; Level: 1@Initiation Action: 1 standard action@Range: Melee attack@Target: One creature@Duration: Special@DESCRIPTION@By establishing counter-resonance within the spirit of an enemy with a well-placed blow, the disciple may disrupt and disturb its next action. The initiator must make a melee attack against a target creature, and if successful, cause the target to suffer a -4 penalty to the next d20 roll that he makes.@Back to Top@Ghost Hunting Blow@Discipline: Veiled Moon (Boost); Level: 1@Initiation Action: 1 swift action@Range: Personal@Target: You@Duration: One round@DESCRIPTION@By reaching across the barrier between worlds, the disciple may strike at disembodied spirits as easily he would strike a normal mortal. Any and all of the initiator’s attacks made this round, including attacks of opportunity, are made as if the initiator’s weapon possessed the ghost touch property. This is an Ethereal plane using maneuver.@Back to Top@Inner Sense@Discipline: Veiled Moon (Counter); Level: 1@Initiation Action: 1 immediate action@Range: Personal@Target: You@Duration: Instant@DESCRIPTION@By sensing ripples in the spiritual world around him, the Veiled Moon disciple is capable of better avoiding dangerous effects and situations. This counter grants the disciple a +2 insight bonus to a single saving throw.@Spirit Sensing Stance@Discipline: Veiled Moon (Stance); Level: 1@Initiation Action: 1 swift action@Range: Personal@Target: You@Duration: Stance@DESCRIPTION@By sensing the different patterns all beings that exist have, the senses of the Veiled Moon disciple exceed that of natural beings and move into the realm of supernatural awareness. While in this stance, the initiators gains the scent special ability and he may detect creatures on the Ethereal plane that are near the Material plane within 30-ft. of his position.@Back to Top@Cursed Fate@Discipline: Veiled Moon (Strike) [mind-affecting]; Level: 2@Initiation Action: 1 standard action@Range: Melee or ranged attack@Target: One creature@Duration: Instant@Saving Throw: Will negates@DESCRIPTION@The disciple can befuddle and bewilder his opponent with this strike, causing a grave imbalance in the psyche of the victim. The initiator must make a successful attack against the target, inflicting an additional 2d6 points of damage and the target must attempt a Will save (DC 12 + initiation modifier) or suffer a -4 to all d20 rolls until the disciple’s next turn.@Back to Top@Leaping Spirit Dance@Discipline: Veiled Moon (Stance); Level: 1@Initiation Action: 1 swift action@Range: Personal@Target: You@Duration: Stance@DESCRIPTION@Light as a feather, the Veiled Moon disciple moves gracefully in combat, with the smooth and practiced grace of an incorporeal being. The disciple gains a +2 dodge bonus to AC and a +2 competence bonus to Reflex saves while in this stance so long as he moves at least 10 feet on his turn each round. This bonus increases by +2 at initiator level 9, and by an additional +2 at initiator level 17.@Back to Top@Fading Strike@Discipline: Veiled Moon (Strike) (teleportation); Level: 2@Initiation Action: 1 standard action@Range: Personal@Target: Up to the disciple’s movement speed@Duration: Instant@DESCRIPTION@The disciple learns the basic technique at this level for walking between worlds to reach locations that previously could be inaccessible on the mortal world and potentially attack foes at those locales. As a standard action, the initiator may either teleport to a location no farther away than his maximum movement speed, and make an attack action against an opponent as part of the same standard action, or attack an adjacent target and then teleport to a location no farther away than his maximum movement speed. The teleportation destination must be clearly seen by the disciple to teleport to that location, and it must be unoccupied.@Back to Top@Half-Gone@Discipline: Veiled Moon (Counter) (teleportation); Level: 2@Initiation Action: 1 immediate action@Range: Personal@Target: You@Duration: Instant@DESCRIPTION@By momentarily slipping through the barrier between the Material and the Astral planes, the Veiled Moon disciple may attempt to avoid an attack by being incorporeal. The initiator makes an opposed Stealth check against the attacker’s Perception check; if successful the initiator is incorporeal for that attack (resolve the attack against the initiator as normal for striking an incorporeal target). This counter may be attempted to defend against targeted and area of effect spells, making a Stealth check in place of a Reflex save.@Back to Top@Resonance Strike@Discipline: Veiled Moon (Strike) [Force]; Level: 2@Initiation Action: 1 standard action@Range: Melee or ranged attack@Target: One creature@Duration: Instant@DESCRIPTION@By funneling his spiritual power into his attack, the Veiled Moon practitioner may strike an opponent with glowing silvery light on the Material or the Ethereal plane. This strike is resolved as a melee or ranged touch attack, and it inflicts 3d6 + initiator level points of force damage in lieu of normal damage, and this attack may strike incorporeal creatures without suffering reduced damage. This is an Ethereal plane using maneuver.@Back to Top@Altered Penumbra@Discipline: Veiled Moon (Counter) (Teleportation, Figment); Level: 3@Prerequisite(s): One Veiled Moon maneuver@Initiation Action: 1 immediate action@Range: Personal@Target: You@Duration: Instant@DESCRIPTION@Position is relative to the Veiled Moon disciple’s thinking, and his position in the universe is mutable. Using these principles, the disciple may circumvent reality to remove himself from harms way when necessary. The initiator makes a Stealth check opposing the attacker’s Perception check. If successful then the initiator may teleport to any spot within 10- ft. away from his current position and leave a minor image duplicate of himself behind to take the attack of his foe in his place. Minor images created by this counter last for 1d4 rounds or until dispersed. This ability may be used to defend against spells and effects that directly target the initiator with an attack roll (such as ranged touch effects) or for those that allow for a Reflex save. If the attack would still encompass an area to where the initiator is teleporting (such as with the fireball spell he has not vacated), the initiator would still be struck by the attack.@Back to Top@Brilliant Moon@Discipline: Veiled Moon (Strike); Level: 3@Prerequisite(s): One Veiled Moon maneuver@Initiation Action: 1 standard action@Range: Melee or ranged attack@Target: One creature@Duration: Instant@DESCRIPTION@By partially phasing a portion of his attack out of this reality, the disciple may ignore certain obstacles, such as armor, when striking at an opponent. The initiator makes an attack roll and ignores the target’s armor bonus to AC (unless this armor bonus comes from a force effect, such as mage armor). A successful hit inflicts an additional 4d4 points of force damage from the spiritual power the disciple infuses into the attack.@Back to Top@Formless Dance@Discipline: Veiled Moon (Stance) [Glamer]; Level: 3@Prerequisite(s): One Veiled Moon maneuver@Initiation Action: 1 swift action@Range: Personal@Target: You@Duration: Stance@DESCRIPTION@The Veiled Moon disciple immerses himself in a sort of dimensional flux, causing him to be able to see what cannot be perceived and seemingly be in many places at once. While in this stance, the initiator gains the benefits of a see invisibility spell and the blur spell.@Back to Top@Ghostwalk@Discipline: Veiled Moon (Boost) (teleportation); Level: 3@Prerequisite(s): One Veiled Moon maneuver@Initiation Action: 1 swift action@Range: Personal@Target: You@Duration: One round@DESCRIPTION@The initiator steps through to the borderland between the Material and the Ethereal planes, becoming an incorporeal figure in both realities for a few moments. Until the beginning of his next turn, the initiator gains the incorporeal subtype. This is an Ethereal plane using maneuver.";

    var parsed = line.split("@");
    var data = new Array();
    var current = new Object();
    for (i = 0; i < parsed.length; i++) {

        current.name = parsed[i];
        i++;
        var discipline = parsed[i];
        var type1 = discipline.split("(");

        var type2 = type1[1].split(")");
        var type = type2[0];
        current.type = type;


        data.push(current);
        current = new Object();
    }
}

function init() {

    // var temp = readJSON('json/all.json');
    var temp = readJSON('js/malekith.json');

    data = JSON.parse(temp);
    loadData();
}

function loadData() {

    size = data.cards.length;

    for (i = 0; i < size; i++) {
        var card = data.cards[i];
        var node = $("#mother").clone();
        $(node).find(".name").text(card.name);
        $(node).find(".lvl").text(card.lvl);
        $(node).find(".type img").attr("src", getIcon(card.type, TYPES));
        $(node).find(".type img").attr("title", card.type);
        $(node).find(".action img").attr("src", getIcon(card.action, ACTIONS));
        $(node).find(".action img").attr("title", card.action);
        if (card.range.toLowerCase() === 'personal') {
            $(node).find(".range").remove();
        } else {
            $(node).find(".range img").attr("src", getIcon(card.range, RANGES));
            $(node).find(".range img").attr("title", card.range);
        }

        $(node).find(".target img").attr("src", getIcon(getTarget(card.target), TARGETS));
        $(node).find(".target img").attr("title", card.target);
        regEx = RegExp('.*' + NO_DURATION_REG + '.*');
        if (card.duration == null || regEx.test(card.duration.toLowerCase())) {
            $(node).find(".duration").remove();
        } else {
            $(node).find(".duration img").attr("src", getImg(getTarget("duration")));
            $(node).find(".duration div").text(card.duration);
        }
        $(node).find(".short").text(card.short);
        $(node).find(".short").attr("title", card.description);
        $(node).attr("id", i);
        $(node).find(".reduce").click(function () {
            $(this).closest(".card").toggleClass('smallCard');
        });

        $(node).dblclick(function () {
            $(this).closest(".card").toggleClass('white black');
        });


        node.appendTo("#content");
        $(node).css("background-image", getBgImg(card.discipline));
        $(node).show();

    }

    $("#content .card").draggable({stack: "#content .card", snap: true});
    $("#mother").hide();
    $(".area")
        .draggable({snap: true})
        .resizable();
    $("#menu").resizable();

    var x = 20;
    var y = 80;
    for (i = 0; i < size; i++) {
        $("#" + i)
            .css("left", x)
            .css("top", y);
        x = x + 200;
        if (x > window.innerWidth - 200) {
            x = 20 + i;
            y = y + 35;
        }

    }
}