for(let i=0;i<3;i++){
const prompt=require('prompt-sync')()
const name=prompt("enter student name:")
const mark1=parseInt(prompt('Enter your first mark:'))
const mark2=parseInt(prompt('Enter your second mark:'))
const mark3=parseInt(prompt('Enter your third mark: '))
const sum=mark1+mark2+mark3;
const average=sum/3;
var status;

if(average<50){
status="you have failed";

}else if(average>=50 && average <=50){
    status= `you have passed ${average}`;
}else if(average>=50 && average<=75){
   status=`you have passed with disctinction${average}`;
}else if(average>100){
    status="check your input";
}

console.log(name+"\n"+average+"\n"+status)
}