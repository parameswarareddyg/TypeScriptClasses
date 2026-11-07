let student1 = 'Rajesh';
let student2 = "Anil";
let student3 = "Revanth";

// Syntax----> variable variblename : datatype [];
let student : string[]=[];
student.push("raj");
student[0]='rajesh';
student[1]='kiran';
console.log('**********************************************************************')
student.push('tharun','BOA',"APPLE",'ADD');//push() will add elements at the end of array
console.log(student);
student[2]='arun';
console.log(student);
console.log('**********************************************************************')
student.pop();//pop() will remove the element at the end of array
console.log(student);
console.log('**********************************************************************')
student.unshift('Imran');//unshift() will add the elements at the end beginning of array
console.log(student);
console.log(student.length);
console.log(student[0]);
console.log('**********************************************************************')
student.shift();//shift() remove the first element itself and move the index by -1 position
console.log(student);
console.log(student.length);
console.log(student[0]);
console.log('**********************************************************************')
student.splice(3,1);//remove the element mentioned parameter one as starting index and 
                    //next parameter as  number of elements to remove from the mentioned index as parameter1.
console.log('**********************************************************************')                    
console.log(student);
let copyArray :string[] =student.toSpliced(1,1);//it remove the element from the copied array and it return the copied array not the orginal one and orginal won't modified
console.log(student);
console.log(copyArray);
let anotherCopy = student.toSpliced(1,2);
console.log(anotherCopy);
console.log('**********************************************************************')
student.splice(2,0,'Sub','Mul');
console.log(student);
console.log('**********************************************************************')
student.reverse();
console.log(student);
console.log('**********************************************************************')
console.log(student.includes('rajesh'));// it will search whole array from 0 to end
console.log(student.includes('raJesh',2));//it will search from starting index at mentioned 2 to end of the array
console.log(student.includes('APPLE',2));//it will search from starting index at mentioned 2 to end of the array
console.log('**********************************************************************')
console.log(student.indexOf('kiran'));
console.log(student.indexOf('kiran',2));
console.log('**********************************************************************')
let concatinatedArray = student.concat(['stud1','stud2']);//concat()will add the array at the end of new copied array of existing student
                                                        //  and return the copy
console.log(concatinatedArray)
console.log('**********************************************************************')
console.log(student.join());
let values: string = student.join('|');//join() will return as single value element with mentioned type '|' or by default sepearatedwith comma(,)
console.log(values);
console.log('**********************************************************************')
student.unshift('@','^')
console.log(student.sort());//sort an array based on UTF-16 code unit order Value
console.log('**********************************************************************')
console.log(student.slice(1,3));//slice the element of the array from start as 1 to end -1  as 3-1=2metioned parametersand return
console.log(student);

