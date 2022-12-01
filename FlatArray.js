 function findLeafNode(obj){
 for(let key in obj){
 if(typeof obj[key]=="object")
 return findLeafNode(obj[key])
 else
 return `key is ${key} and Value is ${obj[key]}`
 }
 
 }
const test={a:{b:20}}
console.log(findLeafNode(test))