// примітивні
const name: string = 'John'
const age:  number = 15;
const isOnline: boolean=true;
const userProgress: null=null;
const level: undefined = undefined;
console.log(name)

// композиція
type ID = string | number
const userId: ID = 1
const playerId: ID = "ihiugh23jbi"



type UserObj = {
  name: string,
  lastName: string,
  isOnline: boolean
}

const user: UserObj = {
  name: 'Veronika',
  lastName: 'Niema',
  isOnline: false
}

const numbers:  number[] = [1,2,3,4,5]
// якщо перед number поставити readonly то не можна буде робити зміни в масиві лише копію і уже там
numbers.push(10)

const users: UserObj[] = [
  {
    name: 'Veronika',
    lastName: 'Niema',
    isOnline: false
  },
  {
    name: 'Veronika',
    lastName: 'Niema',
    isOnline: false
  },
  {
    name: 'Veronika',
    lastName: 'Niema',
    isOnline: false
  }
]

// Tuple тип задається в ручну якщо ми впевнені в тому скільки саме там буде датих
// наприклад в координатах завжди буде лише 2 числа

const coord: [number, number] = [31.9472948, 56.84096]
const entries: [string, boolean] = ['isOnline', false]
const rgb: [number, number, number] = [255, 0, 255]

type Alert ='request' | 'succes' | 'error'
const alert: Alert='request'

function notification(text: Alert){
  alert(text)

}
notification('error')


// тип функції
function calcNumb(numbers:number[]):number {
  return numbers.reduce((acc, number)=>{
    acc+number
    return acc
  }, 0)
}

// :number після дужок це ми вказали який тип поверне саме результат функції

calcNumb(numbers)

type PlayerObj ={
  name: string,
  game: string,
  level: number
}

const objPlayer: PlayerObj  = {
  name: 'Nick',
  game: 'Minecraft',
  level: 1
}

function greetPlayer(player: PlayerObj){
  console.log(`Welcome ${player.name} in ${player.game}. Your level is ${player.level}`)
}

greetPlayer(objPlayer)


