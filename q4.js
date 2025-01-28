function Student(name,branch,grade){
    this.name=name;
    this.branch=branch;
    this.grade=grade;
    this.study= function(){
        return this.name+" is studying in "+this.branch;
    };
    this.getGrade=()=>{
        return `${this.name} got ${this.grade} in the exam`;
    };
}
let student1=new Student("Rahul","CSE","A");
console.log(student1.study());
console.log(student1.getGrade());

let student2=new Student("Radha","CSE","B");
console.log(student2.study());
console.log(student2.getGrade());