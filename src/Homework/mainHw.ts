let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number) => { return 100 + a };

// 2
// let anything: any or unknown = -20;
// anything = 'Text';
// anything = {};

// 3
let some: string;
some = 'Text';

let str: string;

str = some;

// 5
let person: [string, number] = ['Max', 21];

// 7
type PlayerId = number | string
const id: PlayerId = 54
const userid: PlayerId = 'unerfined'

// 8
type Ability = 'enable'|'disable'
const condition: Ability="disable"

// 9
function showMessage(message: string) {
    console.log(message);
   }
   
   function calc(num1: number, num2: number) {
    return num1 + num2;
   }
   
   function customError() {
    throw new Error('Error');
   }
//    що це за запис

// 10

type Page = {
    title : string;
    likes: number;
    // accounts : string[]; ?????
    status: string;
    details: object;

}

const page1 : Page = {
    title: 'The awesome page',
    likes: 100,
    // accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    }
   }
   
   const page2: Page = {
    title: 'Python or Js',
    likes: 5,
    // accounts: ['Alex'],
    status: 'close',
   }