// https://www.youtube.com/watch?v=gp5H0Vw39yw

// $~ tsc -w  
// equivalent of node index.js, but with error checking in terminal

let hello: string = 'world';

const getFullName = (name: string, surname: string): string => {
    return name + ' ' + surname;
}

console.log(getFullName('Peter', 'Caufield'));



// name any interface NameInterface to avoid clashing with Class names
interface UserInterface {
    // properties defined within interface are mandatory by default
    // propertyname followed by ? allows ommission
    name: string;
    
    age?: number;

    getMessage(): string;

}

const user: UserInterface = {
    name: 'Peter',
    age: 29,
    getMessage() {
        return 'Hello ' + name;
    }
};

const user2: UserInterface = {
    name: 'Casey',
    getMessage() {
        return 'Hello ' + name;
    }
}


// DATATYPES IN TYPESCRIPT

// =============================
//  void
// =============================

// void is a set of undefined and null

const doSomething = (): void => {
    console.log('do something')
}

// =============================
//  any
// =============================

// wont throw any errors, turns off typescript checks
// NOT A SOLUTION, JUST THE START TO BE A BIGGER PROBLEM


// =============================
//  never, unknown
// =============================

// =============================
//  type assertion - converting to diff type
// =============================

let pageNumber: string = '1';
let numericPageNumber: number = (pageNumber as unknown) as number;

// element is the highest DOM element in hierarchy
const someElement = document.querySelector('.foo') as HTMLInputElement;

console.log(`someElement`, someElement.value)


// =============================
//  CLASSES
// =============================

// everything is public by default

class User {
    firstName: string
    private lastName: string
    readonly unchangableName: string


    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }

    getFullName(): string {
        return this.firstName + ' ' + this.lastName
    }
}

const player = new User('Peter', 'Caufield');

console.log(player.firstName)
// cannot get lastname because it is private
console.log(player.getFullName)

// =============================
//  Inheritance
// =============================

// child of User class

class Admin extends User {

}

const admin = new Admin('Casey', 'Lavoice');
// admin. will list all avail properties and methods



// object will have type ANY by default
// typescript needs to understand the datatype... all generic data types are written inside "<>"
const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16);
    return {
        // merges object with randomly generated id
        ...obj,
        id,
    };
};

interface PlayerInterface{
    name: string
}

const playerOne: PlayerInterface = {
    name: "Jack"
};

const result = addId<PlayerInterface>(playerOne);
console.log('result', result)
