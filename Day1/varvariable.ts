console.log(ab)//function scope using var
if(true){
    var ab =10
    console.log(ab)
    var ab =30 // redeclare when using var 
    console.log(ab)
    ab=40//reassign
    console.log(ab)
}
console.log(ab)// function scope using var