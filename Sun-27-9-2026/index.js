// console.log(name); 
// var name = "Jone"; 
// function test() { 
// var x = 10; 
// if (true) { 
// var y = 20; 
// } 
// console.log(y); 
// } 
// test(); 
// // console.log(x);
console.log("================Question2===============");

function Person(name,age){
    this.name = name
    this.age  = age
}
Person.prototype.greet = function () {
    console.log(`Hi my name is ${this.name} and i am  ${this.age} years old`);
    
}
function Employee(name,age,employeeId,position){
    Person.call(this,name,age)
    this.employeeId=employeeId
    this.position=position
}
Employee.prototype = Object.create(Person.prototype)

Employee.prototype.constructor = Employee
Employee.prototype.greet = function () {
    console.log("Hello, I am " +this.name +
        " my position is " +this.position +
        " and my employee ID is " +this.employeeId
    )
}
var employee1 = new Employee("Besan",22,101,"Frontend Developer");
var employee2 = new Employee("Shatha",22,102,"Backend Developer");
var employee3 = new Employee("Rema",24,103,"Database Developer");
employee1.greet();
employee2.greet();
employee3.greet();
console.log(employee1.name);
console.log(employee1.age);
console.log("================Question3===============");
var students1 = ["Ahmad","Ali","Omar","Sara","Lina","Noor","Rana", "Dana","Yazan","Khaled","Hala","Maya",
    "Sami","Lama","Tala","Adam","Zaid","Rami","Jana","Leen","Fadi","Malak","Huda","Bayan","Tareq"]
    var students2 = ["Alaa","Basel", "Dina","Eman","Farah","Ghada","Hussein","Ibrahim","Jamal","Karam","Khalil","Mai",
        "Nour","Osama","Qais","Razan","Samer","Sawsan","Waleed","Yara","Zain","Razan","Mohammad","Salma","Reem"]
const concatArray = students1.concat(students2)
console.log("the concat array : " , concatArray);
console.log("the array sorted in alphabetically order : " ,concatArray.sort());
console.log("yhe array in reverse : " , concatArray.reverse());
console.log("check if zain exist in array or not : " ,concatArray.includes("Zain"));
concatArray.forEach((element,index) => {
    console.log( `the student with number ${index+1} is ${element}`
    );
});

console.log("================Question4===============");
let students = [
    { id: 1, name: "Ali", grade: 85 },
    { id: 2, name: "Sara", grade: 92 },
    { id: 3, name: "Omar", grade: 78 }
]
console.log("Students : " ,students);
console.log("add new student : " , students.splice(2,0,{id:4,name:"tamara",grade:87}),students);
console.log("remove student : ",students.splice(1,1),students);
console.log("replace student :  ",students.splice(1,1,{id:5,name:"Alaa",grade:77}),students);
console.log("copy of student array using slice : " ,students.slice(1,3));
console.log(students.sort(function(a, b) {return a.grade - b.grade;
}))







