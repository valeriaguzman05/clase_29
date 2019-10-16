function Person(name){
    //
    this.name=name;
    this.greeting = () => {
        console.log('Hi! I am ' + this.name)
    }
}

let maria = new Person("Maria"); 
console.log(maria.name)
maria.greeting();

let mario = new Person("Mario");
console.log(mario.greeting(mario.name);


