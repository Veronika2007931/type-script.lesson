

interface ProfileConfig{
   readonly  name: string,
    tag: string,
    dnd: boolean,
    location: string,
    avatar: string,
    stats: {
        followers: number,
        views: number,
        likes: number
    }
    getName: ()=> string,
    // showavAvar()=>void можна так 
    showAvatar():void
    changeLocation: (newlocation: string)=> void
}

const profile: ProfileConfig = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    dnd: false,
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
 

getName(){
    return this.name
},

showAvatar(){
    console.log(this.avatar)
},
changeLocation(newlocation){
    this.location = newlocation
}

};



  interface Students {
    [name:string]: number 
    // говорить про те що це буде об'єкт
    //  з властивістю стрінг а значення намбер
    // і буде зазначено будь яку кількість елементів
  }

  const students: Students = {
    poly: 9,
    kiwi: 10,
    ajax: 5
  }

  enum PizzaSize{
    small="small",
    medium="medium",
    large='large'
  }
  
  interface IPizza{
    size: PizzaSize,
    toppings: string[],
    logSize: ( )=> void,
    getSize: ()=> string,
    addtopping: (topping: string)=> void
     }
  
  
  const pizza: IPizza = {
    size: PizzaSize.large,
    toppings: ['souse', 'mushrooms'],
    logSize() {
        console.log(this.size);
    },
    getSize() {
        return this.size
    },
    addtopping(topping) {
        this.toppings.push(topping)
    }
}

enum Filters{
    all= "all",
    active= "active",
    completed= "completed", 
}

interface StatusFilter{
    all: Filters,
    active:Filters,
    completed: Filters
}

const statusFilters: StatusFilter = {
    all: Filters.all,
    active: Filters.active,
    completed: Filters.completed,
   };


   function identity<T>(arg: T){
     // буква в дужках може бути будь яка 
    // це значить що тип буде присвоюватись тоді коли 
    // ми уже викличемо функцію
    return arg;
   }

   let output1 = identity<string>('myString')
   let output2 = identity<number>(100)

function reverse<T>(arr:T[]): T[]{
    return arr.reverse()
}
   let numbers = reverse<number>([1, 2, 3, 4, 5]);
console.log(numbers); // [5, 4, 3, 2, 1]

let strings = reverse<string>(["a", "b", "c", "d"]);
console.log(strings); // ["d", "c", "b", "a"]


function lenghtOfObject<T>(param: T): number{
    return param.length;

}

interface Obj{
name: string,
length: number
}

lenghtOfObject<Obj>({name: 'Poly', length: 10})

// Створіть загальну функцію getProperty, яка приймає об'єкт та ключ як рядок.
// Функція повинна повертати значення цього ключа з об'єкта.
const student = {
    name: "John",
    age: 25,
    groupNumber: 12,
  };

  interface PropertyObj{
    name: string,
    age: number,
    groupNumber: number 
  }
  
  const getProperty <T, K extends keyof T>(obj: T, key: K) {
    // T-type of object
    // K keyof T зазначає що к буде частиною об'єкту який ми записати в т
     return obj[key]
  }

 
let studentName = getProperty(student, "name");
console.log(studentName); // "John"

let studentAddress = getProperty(student, "address");
console.log(studentAddress); // undefined