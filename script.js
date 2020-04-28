//model
const npc = {
    name: 'NPC',
    life: 200,
    attack: 0,
    shield: 0,
};
const hero = {
    name: 'HERO',
    life: 100,
    attack: 0,
    shield: 0,
};
const battleInfo = document.getElementById('battleInfo');

//view
function updateScore(warior1, warior2) {
    const warior1life = document.getElementById('warior1life');
    const warior2life = document.getElementById('warior2life');
    warior1life.value = warior1.life;
    warior2life.value = warior2.life;
}
function updateInfo(info) {
    battleInfo.innerHTML = info;
}
function endBattle() {
    document.getElementById('attackFox').removeAttribute('onclick');
}

//controler
function attackFunc() {
    let info = '';
    calculateWarior(npc);
    calculateWarior(hero);
    //shield divide attack and make attack lighter
    npc.life = npc.life - Math.floor(hero.attack / npc.shield);
    hero.life = hero.life - Math.floor(npc.attack / hero.shield);
    if (npc.life <= 0 && hero.life <= 0) {
        npc.life = 0;
        hero.life = 0;
        updateScore(npc, hero);
        info = `
        <span style="font-size: 50px; margin: 45px 0 0 95px; display: block">You both died</br>
        ---</br></span>
        <span style="margin-left: 99px">NPC life: ${npc.life}, HERO life: ${hero.life}</span>
        `;
        updateInfo(info);
        endBattle();
        return 0;
    } else if (npc.life <= 0) {
        npc.life = 0;
        updateScore(npc, hero);
        info = `
        <span style="font-size: 50px; margin: 45px 0 0 140px; display: block">HERO win</br>
        ---</br></span>
        <span style="margin-left: 143px">NPC life: ${npc.life}, HERO life: ${hero.life}</span>
        `;
        updateInfo(info);
        endBattle();
        return 0;
    } else if (hero.life <= 0) {
        hero.life = 0;
        updateScore(npc, hero);
        info = `
        <span style="font-size: 50px; margin: 45px 0 0 160px; display: block">NPC win</br>
        ---</br></span>
        <span style="margin-left: 163px">NPC life: ${npc.life}, HERO life: ${hero.life}</span>
        `;
        updateInfo(info);
        endBattle();
        return 0;
    }
    updateScore(npc, hero);
    info = `
    ----------------------</br>
    NPC attack: ${npc.attack}, NPC shield: ${npc.shield}</br>
    HERO attack: ${hero.attack}, HERO shield: ${hero.shield}</br>
    ---</br>
    NPC life: ${npc.life}, HERO life: ${hero.life}</br>
    `;
    updateInfo(info);
}
function calculateWarior(warrior) {
    if (warrior.name === 'NPC') {
        warrior.attack = calculateAttack();
        warrior.shield = calculateShield();
        return warrior;
    }
    if (warrior.name === 'HERO') {
        let attack = calculateAttack();
        let attackNumber = Math.floor(Math.random() * 3) + 1;
        //three kind of attack
        let attackValue = {
            1: () => attack * 1.5,
            2: () => attack * 2,
            3: () => attack * 3,
        };
        warrior.attack = Math.floor(attackValue[attackNumber]());
        warrior.shield = calculateShield();
        return warrior;
    }
}
function calculateAttack() {
    return Math.floor(Math.random() * 51) + 10;
}
function calculateShield() {
    return Math.floor(Math.random() * 5) + 2;
}

//
//
function playMusic() {
    var aAudio = new Audio('music.mp3');
    aAudio.play();
}
