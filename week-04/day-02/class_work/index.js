//alert("hello");
const myElement=document.body.querySelector('h1')
//class based approach
class Animal {
    constructor (name,age){
        this.name=name;
        this.age=age;
    }
    prettyprint(){
        return 'The name of this animals is:'+this.name
    }
    speak(){
        return 'Generic Animal Sounds';
    }
}
const myAnimal=new Animal('Dog',5);
myElement.innerHTML=myAnimal.name;
// function factory way 
function creatAnimal(name,age){
    return {
        name,
        age,
   
    prettyPrint: function (){
        return 'The name of this animals is:'+name;
    }
};
}
const myAnimalTwo=creatAnimal("luke's Dog",0);
myElement.innerHTML=myAnimalTwo.prettyPrint();

class Dog extends Aniamls {
    constructor(name,age,hairColor){
        super(name,age);
        this.hairColor=hairColor;
    }
    bark(){
        return 'bark bark'+this.name+'Age:'+this.age
    }
}
const dog= new Dog('selene',0);
const dog2= new Dog('George',10)
const oldDog= new Dog('George',10)
console.log(dog2===oldDog);
console.log(dog2.name===oldDog.name);

myElement.innerHTML=dog.bark();
myElement.innerHTML=dog.bark();