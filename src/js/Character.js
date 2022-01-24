const HEROES_VALUES = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;

    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя героя должно состоять от 2 до 10 символов.');
    } else if (!(HEROES_VALUES.includes(this.type))) {
      throw new Error('Выбранный тип не существует.');
    }
  }
}

export default Character;
