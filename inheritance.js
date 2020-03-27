class Parent{
    constructor(){
        this.fatherName="Nayan";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
    getFullName(){
        return this.name + " "+this.fatherName;
    }

}

const baby = new Child("Nayme");
const baby1 =new Child("Anisha");
console.log(baby.getFullName());
console.log(baby1);