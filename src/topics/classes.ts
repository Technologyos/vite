export class Person {
    constructor( 
        public firstName: string, 
        public lastName: string, 
        private address: string = 'No Address'
    ) {}
}

//Usando herencia
/*export class Hero extends Person {

     constructor(
         public alterEgo: string,
         public age: number, 
         public realName: string,
    ) {
         super( realName, 'New York' );
    }
}*/

export class Hero {
    constructor(
        public alterEgo: string,
        public age: number, 
        public realName: string,
        public person: Person,
    ) {}
}

const myself = new Person('Armando', 'Salazar', 'Celaya');

const blodiest = new Hero('Blodiest', 28, 'Jose', myself);

console.log(blodiest)