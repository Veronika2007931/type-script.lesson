"use strict";
const profile = {
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
    getName() {
        return this.name;
    },
    showAvatar() {
        console.log(this.avatar);
    },
    changeLocation(newlocation) {
        this.location = newlocation;
    }
};
const students = {
    poly: 9,
    kiwi: 10,
    ajax: 5
};
var PizzaSize;
(function (PizzaSize) {
    PizzaSize["small"] = "small";
    PizzaSize["medium"] = "medium";
    PizzaSize["large"] = "large";
})(PizzaSize || (PizzaSize = {}));
const pizza = {
    size: PizzaSize.large,
    toppings: ['souse', 'mushrooms'],
    logSize() {
        console.log(this.size);
    },
    getSize() {
        return this.size;
    },
    addtopping(topping) {
        this.toppings.push(topping);
    }
};
var Filters;
(function (Filters) {
    Filters["all"] = "all";
    Filters["active"] = "active";
    Filters["completed"] = "completed";
})(Filters || (Filters = {}));
const statusFilters = {
    all: Filters.all,
    active: Filters.active,
    completed: Filters.completed,
};
function identity(arg) {
    // буква в дужках може бути будь яка 
    // це значить що тип буде присвоюватись тоді коли 
    // ми уже викличемо функцію
    return arg;
}
let output1 = identity('myString');
let output2 = identity(100);
function reverse(arr) {
    return arr.reverse();
}
let numbers = reverse([1, 2, 3, 4, 5]);
console.log(numbers); // [5, 4, 3, 2, 1]
let strings = reverse(["a", "b", "c", "d"]);
console.log(strings); // ["d", "c", "b", "a"]
function lenghtOfObject(param) {
    return param.length;
}
lenghtOfObject({ name: 'Poly', length: 10 });
// Створіть загальну функцію getProperty, яка приймає об'єкт та ключ як рядок.
// Функція повинна повертати значення цього ключа з об'єкта.
const student = {
    name: "John",
    age: 25,
    groupNumber: 12,
};
const getProperty;
(obj, key) => {
    // T-type of object
    // K keyof T зазначає що к буде частиною об'єкту який ми записати в т
    return obj[key];
};
let studentName = getProperty(student, "name");
console.log(studentName); // "John"
let studentAddress = getProperty(student, "address");
console.log(studentAddress); // undefined
