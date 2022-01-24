import Character from '../character';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('smallNameLength', () => {
  const received = () => new Character('O', 'Zombie', 100);
  expect(received).toThrowError('Имя героя должно состоять от 2 до 10 символов.');
});

test('bigNameLength', () => {
  const received = () => new Character('aaaaaaaaaaaaaa', 'Bowman', 100);
  expect(received).toThrowError('Имя героя должно состоять от 2 до 10 символов.');
});

test('typeError', () => {
  const received = () => new Character('Lala', 'Dambledore');
  expect(received).toThrowError('Выбранный тип не существует.');
});

test('Zombie parameters', () => {
  const zombie = new Zombie('Lala');
  expect([zombie.type, zombie.health, zombie.attack, zombie.defence]).toEqual(['Zombie', 100, 40, 10]);
});

test('Bowman parameters', () => {
  const bowman = new Bowman('nnnnn');
  expect([bowman.type, bowman.health, bowman.attack, bowman.defence]).toEqual(['Bowman', 100, 25, 25]);
});

test('Undead parameters', () => {
  const undead = new Undead('blabla');
  expect([undead.level, undead.attack, undead.defence, undead.type]).toEqual([1, 25, 25, 'Undead']);
});

test('Magician parameters', () => {
  const magician = new Magician('gggggg');
  expect([magician.level, magician.attack, magician.defence, magician.type]).toEqual([1, 10, 40, 'Magician']);
});

test('Daemon parameters', () => {
  const daemon = new Daemon('pppppp');
  expect([daemon.type, daemon.health, daemon.attack, daemon.defence]).toEqual(['Daemon', 100, 10, 40]);
});

test('Swordsman parameters', () => {
  const swordsman = new Swordsman('ff');
  expect([swordsman.type, swordsman.health, swordsman.attack, swordsman.defence]).toEqual(['Swordsman', 100, 40, 10]);
});
