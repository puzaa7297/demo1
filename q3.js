let Person={
    name:"John",
    age:"19",
    greet(){
        return "Good Morning "+this.name+" !!";
    },
    isAdult(){
        if(this.age>=18)
            return "Adult";
        else
        return "Minor";
    }
}
console.log(Person.greet());
console.log(Person.isAdult());