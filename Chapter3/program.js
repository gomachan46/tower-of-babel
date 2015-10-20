// Characterクラス
class Character {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health_ = 100;
    }
    attack(character) {
        if (!(character instanceof Character)) throw new Error('');
        character.health_ -= 10;
    }
}

// CharacterをMonsterクラスに継承
class Monster extends Character {
    constructor(x, y, name) {
        super(x, y);
        this.name = name;
    }
    attack(character) {
        // super で親クラスのattackをそのまま呼ぶ
        super.attack(character);
        character.health_ -= 5;
    }
}
