// function student(name,rollno,age){
//     this.name=name
//     this.Rollno=rollno
//     this.Age=age
//     this.display=function(){
//     console.log(`Name :${this.name}`)
//     console.log(`Rollno :${this.Rollno}`)
//     console.log(`Age :${this.Age}`)

//     }
// }
// let obj=new student("anna",3,13)
// console.log(obj)
// let obj1=new student("rahul",1,14)
// console.log(obj1)

function employe(eid,name,salary){
    this.EID=eid
    this.Name=name
    this.Salary=salary
    this.display=function(){
        console.log(`EID= :${this.EID}`)
        console.log(`Name :${this.Name}`)
        console.log(`Salary :${this.Salary}`)
    }
    this.insalary=function(amount){
        this.Salary+=amount
    }
}
let obj1=new employe(123,"sajana",1000)
obj1.insalary(100)
console.log(obj1)
obj1.display()
let obj2=new employe(102,"amy",1000)
obj2.display()