// "use strict"
// var name="vamsi";
// var age=20;

// if(age>18){
//     let name="VAmsi A";
//     console.log(name);

// }
// console.log(name);



// var age="fd";
// console.log(typeof(age));


// hoisting
// console.log(age);
// var age=23;



//objects
// let employee={
//     name:"Divya",
//     designation:"Junior Software Developer",
//     salary:"10LPA",
//     mobile:8179430305

// }

// console.log(employee)



//Array
// let employee=["syam","Raja","Divya"]
// console.log(employee[1])



// Alerts

// alert("Registration is completed successfully")
//prompt
// let number1=prompt("Enter Number1")
// console.log(number1)
// confirm("Are you sure to exit?")


// console statements

// console.log("To display information");
// console.info("For information");
// console.warn("Check the code once");
// console.error("you got some error")


//spread operator

// let external_marks=[23,33,34,55,45,56]
// let internal_marks=[12,13,15,14,12,15]



// let results=[23,34,external_marks]
// let final=[23,445,564,...external_marks,...internal_marks]

// console.log(results)
// console.log(final)

//Rest Parameter

// function addition(x,y,...remainData){
     
//     console.log(x);
//     console.log(y);
//     console.log(remainData)
//     console.log(typeof(remainData))
// }
// console.log(addition(2,3,43,847,7838,"divya"))


//Destructuring of array

// let employees=["Manoj","Swetha","Divya"]
// let name1=employees[0];
// let name2=employees[1];

// let[manoj,swetha_21,...data]=employees
// console.log(data);
// console.log(name2);

//Destructuring of objects

// let employee={
//     name4:"Divya",
//     designation:"Junior Software Developer",
//     salary:"12LPA",
//     mobile:734798724
// }
// let{name4,designation,...remainList}=employee;
// console.log(name4);
// console.log(designation);
// console.log(remainList);



//Function
 
// let demo=function demo(x,y){
//     return x+y
// }
// console.log(demo(3,4))

// (function(x=6,y=4){
//     return console.log(x+y)
// })()

//Arrow function
// let demo=(x,y)=> {
//     return x*y
//   }
//   console.log(demo(3,4))

//Settime


// setTimeout(function(){
//     console.log("welcome")
// },3000)


let employees=["Divya","Yashwanth","Akshitha","Yatheesh"]

// for(let i=0;i<employees.length;i++){
//     console.log(employees[i])
// }

//forin
// for(let i in employees){
//     console.log(i)
// }

//for-of
// for(i of employees){
//     console.log(i)
// }

//forEach()
// let result=employees.forEach(function(element){
//     return element
// })
// console.log(result)

employees.forEach(function(element,index){
       console.log(element+" ok")  
    })
    

//map
// let result=employees.map(function(element){
//       return element
//      })
//      console.log(result)


// let result=employees.map(function(element,index){
//     return element+"k"+index
//  })
//  console.log(employees)
//  console.log(result)

// let result=employees.map((element,index)=>{
//         return element+"k"+index
//      })
//      console.log(employees)
//      console.log(result)