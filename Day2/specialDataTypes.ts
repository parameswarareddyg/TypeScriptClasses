//when we are using any --> datatype we can assign any type of values
let data : any ;
data = 10
console.log(data)
data = 'a'
console.log(data)
data ='AtoZ'
console.log(data)
console.log(data.toUpperCase())
data =1
console.log(data)
// console.log(data.toUpperCase())//-- while using any Datatype will get run time error its not safe to use
data=10.8948322322222222
console.log(data)
data='@#$%'
console.log(data)
console.log('**********************************************')
let a= 10

//Unknown DataType -->safest

let value : unknown;
value = 10
console.log(value)
value = 'a'
console.log(value)
value ='AtoZ'
console.log(value)
// console.log(value.toUpperCase()) --> compile time error will get safest way while using unknown
if(typeof value === "string")
{
    console.log(value.toUpperCase())
}

value =1
console.log(value)
//console.log(value.toUpperCase())//compiletime error
value=10.8948322322222222
console.log(value)
value='@#$%'
console.log(value)