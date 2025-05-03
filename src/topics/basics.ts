const name = 'Armando';
let age: number | string = 28;
const isAlive: boolean = true;

age = 'veintiocho'

console.log({
  name,
  age,
  isAlive
})

//array, objects and interfaces
const skills: string[] = ['Bash', 'Counter', 'Healing'];

console.log(skills);

interface Character {
  name: string;
  hp: number;
  skills: string[],
  hometown?: string;
}

const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['Bash', 'Counter'],
}

strider.hometown = 'Rivendell';

console.table(strider);

export {};
